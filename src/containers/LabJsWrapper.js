import React, {Component} from 'react';
import {aws_saveTaskData, aws_fetchLink} from "../lib/aws_lambda";
import {isLocalhost} from "../lib/utils";

import '../lib/external/lab.css';
import './LabJsWrapper.css';

const config = require('../config');
var _ = require('lodash');
var qs = require('query-string');
require('jquery');


class LabJsWrapper extends Component {
  constructor(props) {
    super(props);

    // Parse get params for encrypted metadata
    const params = qs.parse(
      this.props.location.search,
      {ignoreQueryPrefix: true}
    );

    // Set init state
    this.state = {
      encryptedMetadata: params.id,
      sendingData: false,
      link: undefined,
    };

      this.surveyUrl = params.survey_url;

      console.log(process.env.PUBLIC_URL);
      if (!_.isUndefined(this.state.encryptedMetadata)) {
        this.addScript("module", process.env.PUBLIC_URL + '/lib/lab.js', () => {
          this.addScript("application/javascript", process.env.PUBLIC_URL + '/trials.js', () => {
            this.addScript("module", process.env.PUBLIC_URL + '/script.js');
          });
        });
      }
  }

  // labJsData should be parsed
  packageDataForExport(labJsData) {
    const exportData = {};

    exportData.encrypted_metadata = this.state.encryptedMetadata;
    exportData.taskName = config.taskName;
    exportData.taskVersion = config.taskVersion;
    exportData.data = this.processLabJsData(labJsData);

    return JSON.stringify(exportData);
  }

  processLabJsData(labJsData) {
    const processedData = [];

    // Always keep entry 0 of labjs data since it contains useful metadata
    processedData.push(labJsData[0]);

    // The last frame contains all collected data
    const data = labJsData[labJsData.length - 1].finalData;
    console.log(data);
    processedData.push(data);

    return processedData;
  }

  componentDidMount() {
    var that = this;
    window.addEventListener('message', function(event) {
      if (event.data.type === 'labjs.data') {
        const parsedData = JSON.parse(event.data.json);

        // Print out debugging info if flag is set or we're on localhost
        if (config.debug || isLocalhost) {
          console.log(parsedData);
          console.log(that.packageDataForExport(parsedData));
        }

        if (isLocalhost) {
          if (that.surveyUrl) {
            that.setState({link: that.surveyUrl});
          }
          return;
        }

        that.setState({sendingData: true});
        aws_saveTaskData(that.state.encryptedMetadata, that.packageDataForExport(parsedData)).then(
          () => {
            if (that.surveyUrl) {
              that.setState({link: that.surveyUrl});
            } else {
              aws_fetchLink(that.state.encryptedMetadata).then(
                (link) => that.setState({link: link})
              );
            }
          }
        );
      }
    });

  }

    addScript(type, src, callback) {
    const script = document.createElement("script");
    script.src = src;
    script.type = type;
    script.onreadystatechange = callback;
    script.onload = callback;

    document.head.appendChild(script);
  }

  render() {
    if (_.isUndefined(this.state.encryptedMetadata)) {
      return (
        <div>
          <h2>Something went wrong. Please try again.</h2>
        </div>
      );
    } else if (!_.isUndefined(this.state.link)) {
      window.location.assign(this.state.link);
    }

      return (
              <div>
              <div id="experiment" className="container fullscreen" data-labjs-section="main" style={{visibility: this.state.sendingData ? 'hidden' : 'visible'}}>
                  <main className="content-vertical-center content-horizontal-center">
                      <div>
                          <h2>Loading Experiment</h2>
                          <p>The experiment is loading and should start in a few seconds</p>
                      </div>
                  </main>
              </div>
              <div className="center" style={{visibility: this.state.sendingData ? 'visible' : 'hidden'}}>
              <h2>Saving data... do not exit window</h2>
              </div>
              <footer className="content-vertical-center content-horizontal-center">
              </footer>
              </div>
              // </div>
    );
  } // end render
} // end class

export default LabJsWrapper;
