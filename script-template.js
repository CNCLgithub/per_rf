// Define study
const study = lab.util.fromObject({
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
  "content": [
    {
      "type": "lab.canvas.Screen",
      "content": [],
      "files": {},
      "parameters": {},
      "responses": {},
      "messageHandlers": {},
      "viewport": [
        800,
        600
      ],
      "title": "Screen",
      "plugins": [
        {
          "type": "testingPlugin",
          "whatever": "My hovercraft is full of eels.",
          "path": "global.TestPlugin"
        }
      ]
    }
  ]
})

// Let's go!
study.run()