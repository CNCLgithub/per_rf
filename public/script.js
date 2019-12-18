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
    }),
    // Simple debug tria to probe for user response
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
                this.options.parameters.trialIdx = TRIAL_COUNT + 1;
                TRIAL_COUNT += 1;
            },
            'after:end': function() {
                this.options.exp_data.push(
                    [
                        // response
                        this.options.datastore.get('response'),
                        // rt
                        this.options.datastore.get('duration'),
                    ])
                this.state.finalData = this.options.exp_data
            }
        }

    })
]
experiment.options.content = content
experiment.options.exp_data = DATA_RECORD
// Collect data in a central data store
experiment.options.datastore = new lab.data.Store()
// Go!
// console.log(new lab.plugins.PostMessage())
experiment.run()
