# react-redux
1. npm install -g create-react-app
1. create-react-app my-app
1. cd my-app
1. npm start
1. npm install --save react-router
1. npm install --save redux
1. npm install --save react-redux
1. npm install --save redux-thunk
1. npm run eject
1. mkdir server && cd server && yarn init
1. yarn add express body-parser nodemon babel-cli babel-preset-es2015
1. 修改package.json，增加npm scripts
```
    {
        "scripts": {
            "start": "nodemon --exec babel-node -- ./server.js",
            "build": "babel ./server.js --out-file server-compiled.js",
            "serve": "node server-compiled.js"
        }
    }
```
1. yarn add concurrently
```
 "scripts": {
    "react-start": "react-scripts start",
    "start": "concurrently 'yarn react-start' 'cd server && yarn start'",
    "react-build": "react-scripts build",
    "build": "concurrently 'yarn react-build' 'cd server && yarn build'",
  }
```
1. "proxy": "http://127.0.0.1:5000"



