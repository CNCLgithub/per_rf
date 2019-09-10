// Adapted from Stroop task example with lab.js
// Initial implementation by Felix Henninger
// Current implementation by Mario Belledonne


// Define a template for a trial
// Contains a few main components:
// 1) The initial fixation
// 2) Presentation of the first image
// 3) The interstitial fixation
// 4) Presentation of the second image
// 5) A response screen
// 6) Optionally, display response feedback

var trialTemplate = new lab.flow.Sequence({
  datacommit: false,
  content: [

    // Fixation cross
      new lab.html.Screen({
          title: 'fix1',
          contentUrl: 'pages/fixation.html',
          parameters: {
              color: 'gray',
              word: '+',
              weight: 'normal',
          },
          // Don't log data from this screen
        datacommit: false,
          timeout: 1000,
      }),

      // First Image
      new lab.html.Screen({
        // This screen is assigned a title,
          // so that we can recognize it more easily
          // in the dataset.
          title: 'stimA',
          contentUrl: 'pages/trial.html',
          messageHandlers: {
              'before:prepare': function() {
                  this.options.parameters = { image: this.aggregateParameters.first}
              }
          },
          timeout: 200,
      }),

      // Fixation
      new lab.html.Screen({
          contentUrl: 'pages/fixation.html',
          parameters: {
              color: 'gray',
              word: '+',
              weight: 'normal',
          },
          // Don't log data from this screen
          datacommit: false,
          // Display the fixation cross for 500ms
          timeout: 500,
      }),

      // Second Image
      new lab.html.Screen({
          // This screen is assigned a title,
          // so that we can recognize it more easily
          // in the dataset.
          title: 'stimB',
          contentUrl: 'pages/trial.html',
          messageHandlers: {
              'before:prepare': function() {
                  this.options.parameters = { image: this.aggregateParameters.second}
              }
          },
          timeout: 200,
      }),

      // Fixation
      new lab.html.Screen({
          title: 'fix2',
          contentUrl: 'pages/fixation.html',
          parameters: {
              color: 'gray',
              word: '+',
              weight: 'normal',
          },
          // Don't log data from this screen
          datacommit: false,
          // Display the fixation cross for 500ms
          timeout: 1000,
      }),

      // Third Image
      new lab.html.Screen({
          // This screen is assigned a title,
          // so that we can recognize it more easily
          // in the dataset.
          title: 'stimC',
          contentUrl: 'pages/trial.html',
          // content: '<main class="content-vertical-center content-horizontal-center">' +
          //     '<div><img src=${ parameters.third }></div></main>',
          timeout: 200,
          messageHandlers: {
              'before:prepare': function() {
                  // Set the correct response
                  // before the component is prepared
                  if (this.aggregateParameters.third == 'first'){
                      this.options.parameters = { image: this.aggregateParameters.first}
                  } else {
                      this.options.parameters = { image: this.aggregateParameters.second}
                  }
              }
          },
      }),
    // Record response
    new lab.html.Screen({
        title: 'response',
        contentUrl: 'pages/fixation.html',
        parameters: {
              word: 'Was the third image the same as first (f) or second (j)?',
        },
        // we need to set the correct response by hand
        responses: {
            'keypress(f)': 'first',
            'keypress(j)': 'second',
        },
        messageHandlers: {
            'before:prepare': function() {
                // Set the correct response
                // before the component is prepared
                this.options.correctResponse = this.aggregateParameters.third
            },
        },
        // no timeout
        // timout: 500
    }),
    new lab.html.Screen({
        contentUrl: 'pages/fixation.html',
        parameters: {
              word: '',
          },
        datacommit: false,
        // Because feedback can only be given after
        // the choice has been recorded, this component
        // is prepared at the last possible moment.
        tardy: true,
        // Generate feedback
        messageHandlers: {
            'before:prepare': function() {
                  if (this.aggregateParameters.feedback) {
                      // Generate feedback if requested
                      this.options.timeout = 1000
                      // First, check if the participant responded in time at all
                      if (this.options.datastore.state['ended_on'] === 'response') {
                          // If there is a response, check its veracity
                          if (this.options.datastore.state['correct'] === true) {
                              this.options.parameters.word = 'Well done!'
                          } else {
                              this.options.parameters.word = 'Please respond as quickly and accurately as you can!'
                          }
                      } else {
                          // If no response was given, poke participants to speed up
                          this.options.parameters.word = 'Can you go faster?'
                      }
                  } else {
                      // If no feedback is shown, shorten the inter-trial interval
                      this.options.timeout = 500
                  }
              }
        },
    }),
  ]
})

// Define the trials in terms of the central parameters:
var trials = [
    { first: 'media/test_image_1.png',
      second: 'media/test_image_2.jpg',
      third: 'first'},
    { first: 'media/test_image_1.png',
      second: 'media/test_image_2.jpg',
      third: 'second'},
]

// With the individual components in place,
// now put together the entire experiment
var experiment = new lab.flow.Sequence({
    content: [
        // Initial instructions
          new lab.html.Screen({
              contentUrl: 'pages/1-welcome.html',
              responses: {
                  'keypress(Space)': 'continue'
              },
          }),
        // Instruction summary
        new lab.html.Screen({
          contentUrl: 'pages/2-summary.html',
          responses: {
            'keypress(Space)': 'continue'
          },
        }),
        // Practice trials
        // new lab.html.Screen({
        //     // This screen is assigned a title,
        //     // so that we can recognize it more easily
        //     // in the dataset.
        //     title: 'stimA',
        //     // Again, we use the trial page template
        //     contentUrl: 'pages/trial.html',
        //     parameters: {
        //         media: '${ parameters.first }', // parameters substituted ...
        //         weight: 'bold',
        //     },
        //     timeout: 100,
        // }),
        // // Interlude
        // new lab.html.Screen({
        //     contentUrl: 'pages/4-interlude.html',
        //     responses: {
        //         'keypress(Space)': 'continue',
        //     },
        // }),
        // Actual trials
        new lab.flow.Loop({
            template: trialTemplate,
            templateParameters: trials,
            shuffle: true,
            parameters: {
                feedback: false,
            },
        }),
        // Thank-you page
        new lab.html.Screen({
            contentUrl: 'pages/5-thanks.html',
            // Respond to clicks on the download button
            events: {
                'click button#download': function() {
                    this.options.datastore.download()
                },
            },
        }),
    ],
})
// Collect data in a central data store
experiment.options.datastore = new lab.data.Store()
// Go!
experiment.run()
