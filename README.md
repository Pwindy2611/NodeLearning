## Install package.json
* npm init (Command Line Interface Building)
- packageName
- Version
- description                                     
- entry point: (index.js) app.js -- File js đầu tiên chạy khi web được khởi tạo
- test command:
- git repository: https://github.com/Pwindy2611/NodeLearning.git
- keywords:  Node building
- author: Pwindy
- license: (ISC)
-> Package.json
(
    {
  "name": "nodelearning",
  "version": "1.0.0",
  "description": "1. npm init\r - packageName\r - Version\r - description\r - entry point: (index.js) app.js  \r - test command:\r - git repository:",
  "main": "App.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "repository": {
    "type": "git",
    "url": "git+https://github.com/Pwindy2611/NodeLearning.git"
  },
  "keywords": [
    "Node",
    "building"
  ],
  "author": "Pwindy",
  "license": "ISC",
  "bugs": {
    "url": "https://github.com/Pwindy2611/NodeLearning/issues"
  },
  "homepage": "https://github.com/Pwindy2611/NodeLearning#readme",
}
)

## Install Express
* npm install express
-> Package.json
(
      "dependencies": {
    "express": "^4.19.2"
  }
)

## Install Nodemon
* npm  i nodemon --save-dev
->("devDependencies": {
    "nodemon": "^3.1.0"
  })
- "start": "nodemon --inspect ./App.js"---use nodemon to start server and debug

## Install Morgan (middleware-- HTTP request logger middleware for node.js)
* npm i morgan --save-dev

## Template Engine(handlebars)-- Express handlebars (Directory Structure for render html)
* npm i express-handlebars
- This Directory Structure:
src
├── resources
    ├── views
     ├── layouts
        └── main.hbs
     └── partials
        ├── footer
        └── header
    └── home.hbs
└── app.js

## Nodemon.json- extension watch nodemon
