# 1.) react-fullstack-boilerplate
This is a boilerplate to build a full stack web application using React, Node.js, Express and Webpack. It is also configured with webpack-dev-server, eslint, prettier and babel. It is also connected to MongoDB, and a few test API's are written. Postman can be used to send data as POST calls.

# 2.) Introduction
create-react-app is a quick way to get started with React development and it requires no build configuration. But it completely hides the build config which makes it difficult to extend. It also requires some additional work to integrate it with an existing Node.js/Express backend application.
This is a simple full stack ReactJS application with a NodeJS server and Express templating at the backend. Client side code is written in ReactJS and the backend API's are written using ExpressJS. This application is configured with Airbnb's Eslint rules. and formatted through Prettier.

# 3.) Development mode
In the development mode, we will have 2 servers running. We are using concurrently to make both the servers run simultaneously with the same build script. The front end code will be served by the webpack dev server which helps with hot and live reloading. The server side Express code will be served by a node server and we will be using nodemon which helps in automatically restarting the server whenever server side code changes.

# 4.) Quick Start

1.) Clone the repo git clone https://github.com/arvind-girish12/react-fullstack-boilerplate.git

2.) Go inside the folder cd react-full-stack

3.) Install dependencies npm install

4.) Start the server npm run dev

5.) Folder Structure The "src" file contains all the code. There are two folders inside. "client" is for all the client/frontend side code. And "server" server/backend side code. 
Inside "client" "Index.js" marks the start of the program code wise. It contains the provider where store is configured. The actions, components and reducers are also put in separate folders for convenience. 
Inside "server" "Index.js" is where the connection to the Mongodb is made. Also the routes are defined here too. 
The database is configured in the "config" folder. 
"controllers" is where all the functions for each API can be written. 
"models" contains the schema. "routes" contains all the routes. 
"views" can contain all the views incase any templating is required which will be handled with ExpressJS.

6.) Babel
Babel helps us to write code according to the latest version of Javascript. If a certain environment does not support certain features natively, Babel will help us to compile those features down to a supported version. It also helps us to convert JSX to Javascript.
".babelrc file" is the file being used to describe the configurations required for Babel.

7.) ESLint
ESLint is a configurable linter tool for identifying and reporting certain patterns/mismatches in javascript.
".eslintrc.json" is the file being used to configure the linting rules being used. We are using the native rules handled by Airbnb ESLint.
The environment is set to both browser and node since we have both client and server side code.

8.) Webpack
Webpack is a module bundler. Its main purpose is to bundle JavaScript files for usage in a browser.
"webpack.config.js" is the file being used to configure anything related to the bundling process.
1. entry -> Here is where the application starts executing and webpack starts bundling the files.
2. output path -> and filename:** the target directory for the bundled output.
3. module loaders -> Module loaders are transformations that are applied on the source code of a module. We pass all the js files through babel-loader to transform JSX to Javascript. CSS files are passed through css-loaders and style-loaders to load and bundle CSS files. Fonts and images are loaded through url-loader.
4. Dev Server -> Configurations for the webpack-dev-server which will be described in coming section.
5. plugins -> clean-webpack-plugin is a webpack plugin to remove the build folders before building. html-webpack-plugin simplifies creation of HTML files to serve your webpack bundles. It loads the template "public/index.html" and injects the required output bundle.

9.) Webpack dev server
Webpack dev served is used along with webpack. It is providing the development server that provides live/hot reloading for the client side code.
port-> specifies the Webpack dev server to listen on this particular port. In this case, it is 3000. When open-> is set to true, it will automatically open the home page on startup. proxy-> proxy URLs can be useful when we have a separate API backend development server and we want to send or access API requests on this domain.In this case, we have a Node.js/Express backend where we want to send the API requests to.

10.) Nodemon
Nodemon is a utility that will help us for live reloading of server side code. It will watch for any changes being made in server side code and will refresh the server right away.

11.) Express
Express is a web application framework for Node.js. It is used to build our backend APIs.
src/server/index.js is the entry point to the server application.
In this we are starting a server that listens on port 8080 for connections.

12.) Concurrently
Concurrently is used to run multiple commands concurrently. I am using it to run the webpack dev server and the backend node server simultaneosly in the development environment.

13.) VSCode + ESLint + Prettier
VSCode is a lightweight but powerful source code editor. ESLint takes care of the code-quality. Prettier takes care of all the formatting.

Installation guide
1. Install VSCode 
2. Install ESLint extension 
3. Install Prettier extension 
4. Modify the VSCode user settings to add below configuration "eslint.alwaysShowStatus": true, "eslint.autoFixOnSave": true, "editor.formatOnSave": true, "prettier.eslintIntegration": true 
