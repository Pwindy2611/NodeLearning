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