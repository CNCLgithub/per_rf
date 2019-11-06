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

// Get the client's screen size and scale the images to preserve
// eccentricity

var IMAGE_WIDTH = 500;
var TRIAL_COUNT = 0;
var DATA_RECORD = new Array();

var presentFixation = function (timeout) {
    var s = new lab.html.Screen({
        title: 'fixation',
        tardy: true,
        contentUrl: 'pages/trial.html',
        parameters: {
            image: 'media/mask.png',
        },
        // Don't log data from this screen
        datacommit: false,
        messageHandlers: {
            'before:prepare': function() {
                this.options.parameters.image_width = IMAGE_WIDTH
                this.options.parameters.trialIdx = TRIAL_COUNT + 1
            }
        },
        timeout: timeout,
    });
    return s;
}

var trialTemplate = new lab.flow.Sequence({
  datacommit: false,
  content: [
      // Fixation cross
      presentFixation(1000),
      // First Image
      new lab.html.Screen({
        // This screen is assigned a title,
          // so that we can recognize it more easily
          // in the dataset.
          title: 'stimA',
          tardy: true,
          contentUrl: 'pages/trial.html',
          messageHandlers: {
              'before:prepare': function() {
                  this.options.parameters = {
                      image: this.aggregateParameters.first,
                      image_width: IMAGE_WIDTH,
                      trialIdx: TRIAL_COUNT + 1
                  }
              }
          },
          timeout: 200,
      }),

      // Fixation
      presentFixation(1000),

      // Second Image
      new lab.html.Screen({
          // This screen is assigned a title,
          // so that we can recognize it more easily
          // in the dataset.
          title: 'stimB',
          tardy: true,
          contentUrl: 'pages/trial.html',
          messageHandlers: {
              'before:prepare': function() {
                  this.options.parameters = {
                      image: this.aggregateParameters.second,
                      image_width: IMAGE_WIDTH,
                      trialIdx: TRIAL_COUNT + 1
                  }
              }
          },
          timeout: 200,
      }),
      // Fixation
      presentFixation(1000),
      // Third Image
      new lab.html.Screen({
          // This screen is assigned a title,
          // so that we can recognize it more easily
          // in the dataset.
          title: 'stimC',
          tardy: true,
          contentUrl: 'pages/trial.html',
          timeout: 200,
          messageHandlers: {
              'before:prepare': function() {
                  // Set the correct response
                  // before the component is prepared
                  if (this.aggregateParameters.third == 'first'){
                      this.options.parameters = {
                          image_width: IMAGE_WIDTH,
                          image: this. aggregateParameters.first
                      }
                  } else {
                      this.options.parameters = {
                          image_width: IMAGE_WIDTH,
                          image: this. aggregateParameters.second,
                          trialIdx: TRIAL_COUNT +1
                      }
                  }
              }
          },
      }),
    // Record response
    new lab.html.Screen({
        tardy: true,
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
                this.options.correctResponse = this.aggregateParameters.third;
                this.options.parameters.trialIdx = TRIAL_COUNT + 1;
                TRIAL_COUNT += 1;
            },
            'after:end': function() {
                DATA_RECORD.push(
                    [
                        // trial idx
                        this.options.datastore.get('trialIdx'),
                        // first
                        this.options.datastore.get('first'),
                        // second
                        this.options.datastore.get('second'),
                        // third
                        this.options.datastore.get('third'),
                        // response
                        this.options.datastore.get('response'),
                        this.options.datastore.get('correctResponse'),
                        // rt
                        this.options.datastore.get('duration'),
                    ]
                )
            }
        },
        // no timeout
        // timout: 500
    }),
  ]
})


var scaleScreen = function (delta) {
    var s = new lab.html.Screen({
        tardy: true,
        title: 'presentation',
        parameters: {size : 500 + delta},
        contentUrl: 'pages/verify.html',
        responses: {
            'keypress(f)': 'grow',
            'keypress(j)': 'shrink',
            'keypress(Space)': 'done'
        },
    });
    return s
}
var scaleLogic = new lab.flow.Sequence({
    tardy: true,
    content: [
        new lab.flow.Sequence({
            title: 'process-Scale',
            // adjust based off user input
                    messageHandlers: {
                        'before:prepare': function() {
                            if (this.options.datastore.state['response'] == 'grow') {
                                this.parameters.delta.push(this.parameters.delta[this.parameters.delta.length-1] + 10);
                                this.options.content = [
                                    scaleScreen(this.parameters.delta[this.parameters.delta.length-1])
                                ];
                            } else if (this.options.datastore.state['response'] == 'shrink') {
                                this.parameters.delta.push(this.parameters.delta[this.parameters.delta.length-1] - 10);
                                this.options.content = [
                                    scaleScreen(this.parameters.delta[this.parameters.delta.length-1])
                                ];
                            } else if (this.options.datastore.state['response'] == 'done'){
                                IMAGE_WIDTH = 1.9 * (500 + this.parameters.delta[this.parameters.delta.length-1])
                            }
                        }
                    },

        }),
    ]
})

function GoInFullscreen(element) {
    if(element.requestFullscreen)
        element.requestFullscreen();
    else if(element.mozRequestFullScreen)
        element.mozRequestFullScreen();
    else if(element.webkitRequestFullscreen)
        element.webkitRequestFullscreen();
    else if(element.msRequestFullscreen)
        element.msRequestFullscreen();
}


var trial_epoch = new lab.flow.Sequence({
    content: [
        new lab.flow.Loop({
            template: trialTemplate,
            templateParameters: EXPERIMENT_TRIALS.slice(1, 3),
            shuffle: true,
            parameters: {
                feedback: false,
            }}),
        new lab.html.Screen({
            contentUrl: 'pages/fixation.html',
            parameters: {
                word: 'Good job! If you are not done yet, please feel free to take a break now' +
                    '\n Press space to continue',
            },
            responses: {
                'keypress(Space)': 'continue'
            },
            datacommit: false,
        }),
    ]
})

// With the individual components in place,
// now put together the entire experiment
const experiment = lab.util.fromObject({
    "title": "root",
    "type": "lab.flow.Sequence",
    "parameters": {},
    "plugins": [
        {
            "type": "lab.plugins.Metadata"
        },
        {
            "type": "lab.plugins.PostMessage"
        }
    ],
    "metadata": {
        "title": "",
        "description": "",
        "repository": "",
        "contributors": ""
    },
    "files": {},
    "responses": {},
})

var content = [
    // Initial instructions
    new lab.html.Screen({
        tardy: true,
        contentUrl: 'pages/1-welcome.html',
        responses: {
            'keypress(Space)': 'continue'
        },
        messageHandlers: {
            'end': function() {
                GoInFullscreen(document.getElementById("experiment"));
            },
            },
    }),
        // Prompt to see if the screen is large enough
        new lab.flow.Sequence({
            content: [
                scaleScreen(0),
                new lab.flow.Loop({
                    parameters: {
                        delta: [0]
                    },
                    template: scaleLogic,
                    templateParameters: new Array(100),
                }),
            ]
        }),
        // Instruction summary
        new lab.html.Screen({
            contentUrl: 'pages/2-describe-task.html',
            responses: {
                'keypress(Space)': 'continue'
            },
        }),
        // Instruction summary
        new lab.html.Screen({
            contentUrl: 'pages/3-summary.html',
            responses: {
                'keypress(Space)': 'continue'
            },
        }),
        new lab.html.Screen({
            contentUrl: 'pages/before-practice.html',
            responses: {
                'keypress(Space)': 'continue'
            },
        }),
        // practice trials
        // new lab.flow.Loop({
        //     template: trialTemplate,
        //     templateParameters: PRACTICE_TRIALS,
        //     shuffle: true,
        //     parameters: {
        //         feedback: false,
        //     }
        // }),
        new lab.html.Screen({
            contentUrl: 'pages/4-interlude.html',
            responses: {
                'keypress(Space)': 'continue'
            },
        }),

        // run the experiment
        new lab.flow.Loop({
            template: trial_epoch,
            // 2 epochs
            templateParameters: new Array(1),
            messageHanlders : {
                "after:end": function anonymous() {
                    this.state.finalData = DATA_RECORD;
                }
            }
        }),
        // Thank-you page
        new lab.html.Screen({
            contentUrl: 'pages/5-thanks.html',
            responses: {
                'keypress(Space)': 'end'
            },
            timeout: 1000,
        }),
]
experiment.options.content = content
// Collect data in a central data store
experiment.options.datastore = new lab.data.Store()
// Go!
// console.log(new lab.plugins.PostMessage())
experiment.run()
experiment.end()
