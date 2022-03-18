# About the project

This project gives as idea of how repository needs to be structured for a better readabiity and some of the code practices one should follow while designing a product.

Following are the key points covered I wanted to present as part of this project,

FUNCTION BASED COMPONENTS
Prefer function based components when choosing between class vs function based components, as it would be clean, maintainable and lot easier to write up the unit testing code.

SCSS
With SCSS, we can add many additional functionalities to CSS such as variables, nesting and more. All these additional functionalities can make writing CSS much easier and faster as compared to writing the traditional CSS.

REDUX
Problem Statement: Though the current project runs on hard coded data, but if we want to have dynamic data updates from backend based on user interactions and keep the corresponding UI updated, there will be a lot of local state management.
Also assume that if in future we need to provide a functionality where some set of users(admin) can login and perform CRUD operations.

Solution - Based on the above problem statement where the application grows big, its good to have the redux store configured at the beginning of the project, as it would be easy to maintain code and handle the state changes and there will be a clear separation of State and UI templates.

SELECTORS
Selectors are functions which are used to select a sub-set of data from a larger data. By doing this, the data retrieval process will be at a single place, and any modification (or maintenance) will be done easily. Also we can memoize the selectors.

LAZY-LOADING
To optimise performance of the application the concept of code splitting by lazy loading bundles on demand is being implemented.
Error boundaries are added to recover when there is a network error while loading the module.

ACCESSIBILITY
Accessibility is the new web standard.
Accessible content is content everyone can use. We don’t know all the aspects of how the users are accessing our content, so we need to design with accessibility in mind ahead of time, we can use ARIA (Accessible Rich Internet Applications) attributes. This UI has accessibilty score of 100 and also has 97 in performance.

RESPONSIVE UI
This project has been designed in such a way that it can work on desktop, mobile and tablet devices.

PROJECT STURUCTURE
It is very critical that each and every project should have a clean and descriptive folder names. I have created the codebases so that it can reflect like a library.

REUSABILITY
Any piece of common code or reusable code, should be placed under a common folder within a project. So that for a fellow engineer it would be easy to watch-out for a list of components available to reuse.

WEBPACK
 While importing make sure that we are importing specific modules/components instead of whole library, especially for huge third party library as Bundle size matters a lot and can lead to slower startup. For Example,

import Grid from '@mui/material/Grid'; // Fast and contributes much lesser bytes than below
import { Grid } from '@mui/material';

UNIT TESTING
A very important part of a development cycle is to have your feature unit tested to ensure the functionalities are intact even when you are adding changes on top of it. The current test coverage stands at 73%.

# Things that need some work

1. While integrating api calls, we need to have two separate apis to getAllBlogsList and then getBlogDetails when a users clicks on a Blog card so that we don’t consume huge data on the initial load. Currently everything is inside a single object.
2. Image files can be handled in a better way to optimise the performance even more especially in case of mobile. But when dealing with apis image files can be sent in base64 format which then will be consumed by the UI, and hence this won’t be an issue.


# Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

### `npm test`

Launches the test runner in the interactive watch mode.\

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

