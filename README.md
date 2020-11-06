# About project
This project was created for educational purposes. It contains information on the Star Wars universe. 

Written using **React** and **React Router**.

To get info about Star Wars universe in JSON format was used [Star Wars API](https://swapi.dev/) 

Application has the following features: 
- Ability to view a random planet which changes every 10 seconds.
- Ability to see a list of planets with brief information.
- Ability to get data about the planet with the list of residents.
- Ability to switch to a resident and read information about him.

#### Future Improvements

* Add typing to the project using a typescript.
* Add unit tests
* Improve responsiveness of pages and styles
* Add clearer handling of server errors

This project was bootstrapped with [Create React AppView](https://github.com/facebook/create-react-app).

### Prerequisites

First of all, you will need [Node.js](https://nodejs.org) of version `12.18.3` or compatible with it, [npm](https://www.npmjs.com/) version `6.14.6` or compatible, and [git](https://git-scm.com/downloads) `2.25.1` or compatible.

Check if everything is OK by running `node -v`, `npm -v` and `git --version` in the CLI

## Available Scripts

In the project directory, you can run:

### `npm i`
This command helps to install all the necessary dependencies from the `package.json` before starting another actions with the project

### `npm run start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `npm run build(predeploy)`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

### `npm run deploy`

The `predeploy` script will run automatically before `deploy` is run.
This command allows you to deploy the project via **GitHub Pages** from the url with key `"homepage"` in `package.json`.

### `npm run eslint`

The `eslint` script will run [ESLint](https://eslint.org/docs/user-guide/getting-started) on `src/` directory.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).
