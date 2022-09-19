# Template React App

This project was designed as a simple starting point for React web Applications. This has been set up with an MIT license, so feel free to use it to avoid all the starting setup with React Apps.

## Development

The application has many of the traditionally expected scripts for a node.js based application. Before starting development you need to execute the install command, to install all the required NPM packages. Either of the following commands will work:

```
npm i
npm install
```

With the packages installed, you can commence, development, to start the web server, use the start command as follows:

```
npm start
```

### Linting

The template was built with ESLint and Prettier in place, these have been configured with fairly strict rules, but they are recommended. VS Code will auto-check and scan files for issues and make you aware of these. You can check yourself for ESLint issues using the following command:

```
npm run lint
```

### Development guidance

The following should be taken into account when making changes to this repo:

- Major features such as mass conversion are stored in the features directory
- Smaller components such as the Header are stored within the components directory.
- Test scripts are located in the same directory as the functions and components they test
- Styling is done within the same directory as where it is used, using css modules. Any major project styling is done from a central CSS file stored in the theme directory
- The utils directory is for common functions and elements that might be needed in multiple areas in the future. This makes them easier to find and use for other projects in the future.

### Testing

Setup with Jest unit tests from the outset, each component was built using Test Driven Development (TDD). To execute these tests, I recommend to install the Jest extension in VS Code. However, you can also use the command:

```
npm test
```

As this is a template repository, it has been designed for initial unit testing only, you may want to write your own test scripts to provide integration testing of you application. E.g. test for the header loading the applications actual name, not just whatever is passed in.

### Docker Deployment

This web-application has been configured to enable Docker based deployment. An image of this app can be created using the docker build command as seen below. (insert-name marks where you can set the Docker image name, the -t flag allows this name tag to be allocated)

```
docker build . -t insert-name
```

To load this Docker image into a container, the docker run command is used as follows with the name selected for the image in the previous step in place for insert-name.

```
docker run -p 3000:3000 -d insert-name
```

NOTE: The Dockerfile has been configured to run on port 3000. The app can be run on another port by replacing the first 3000 in the command above with your own choice of port.

## Installed Packages

This template comes with a few key React libraries and tools installed out of the gate. A full list of these packages can be found in the package.json file. Here is a list of a few of the major ones.

- React
- React-Router
- Material UI
