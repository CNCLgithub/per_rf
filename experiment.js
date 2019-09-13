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
                      image_width: IMAGE_WIDTH
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
                      image_width: IMAGE_WIDTH
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
          // content: '<main class="content-vertical-center content-horizontal-center">' +
          //     '<div><img src=${ parameters.third }></div></main>',
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
                          image: this. aggregateParameters.second
                      }
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
        new lab.flow.Loop({
            template: trialTemplate,
            templateParameters: PRACTICE_TRIALS,
            shuffle: true,
            parameters: {
                feedback: false,
            }
        }),
        new lab.html.Screen({
            contentUrl: 'pages/4-interlude.html',
            responses: {
                'keypress(Space)': 'continue'
            },
        }),

        // run the experiment
        new lab.flow.Loop({
            template: new lab.flow.Loop({
                template: trialTemplate,
                templateParameters: EXPERIMENT_TRIALS,
                shuffle: true,
                parameters: {
                    feedback: false,
                }}),
            templateParameters: new Array(5),
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
