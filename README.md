# boilerplate-web-app
This project is a minimal boilerplate meant as a starting point for developing new web applications. 
It was created through `create-react-app` and contains nothing else than the bare minimum to get started.

### Features
* User registration and login, using **AWS Amplify**
* **Typescript** because static typing is awesome
* **ESLint** and **Prettier** configured
* **MUI** for UI components
---
## Pre-requisites
* AWS CLI installed and configured
  * https://docs.aws.amazon.com/cli/latest/userguide/getting-started-prereqs.html
  
* Amplify configured
  * Run command `amplify configure` and follow the instructions to create an IAM user with programmatic access and admin privileges

---
## Getting Started

You will need to initiate a new Amplify project through the AWS CLI for the authentication to work. Then you'll need to add the authentication resource to the project, and finally push your changes. Run the following commands in your terminal and follow the instructions:
* `amplify init`
* `amplify add auth`
* `amplify push`

Here are some useful additions that are not currently included. If you open this file in your IDE, you can run these commands by clicking on them.
* `yarn add lodash` 
* `yarn add @types/lodash -D`
* `yarn add react-router-dom`
* `yarn add react-redux`
* `yarn add @reduxjs/toolkit`
* `yarn add react-hook-form`
* `yarn add react-use`
* 

Miscellaneous:
* `yarn add victory @types/victory` - library for creating charts
* `yarn add video.js` - video player library
* `yarn add @types/video.js -D`
* `npx storybook init`

---
## Available Scripts

### Standard create-react-app scripts
* You can run `yarn start` to start the development server, `yarn test` to run the tests, and `yarn build` to build the app for production.

### Custom scripts
* `yarn lint` will run ESLint and Prettier on the codebase and give you an error report.
* `yarn lint:fix` will run ESLint and Prettier on the codebase and fix any errors that can be fixed automatically.
* `yarn format` will run Prettier on the codebase and fix any errors that can be fixed automatically.