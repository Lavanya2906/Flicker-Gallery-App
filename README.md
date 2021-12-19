# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

Description:
Flicker Gallery app allows user to see recent photos and search pictures.
on each image click, a modal will display with enlarged image and dimensions (width and height).

React: using react to create single page application, it uses virtual DOM ensures fast performance, perfoms better than any other js library/framework to build user interfaces.

Typescript: it is better than javascript because typescript is more reliable and explicit, helps developer to fix run time errors

Redux: it's state management library used to store the data in centralized place eliminating the need to pass down the props from one component to another component
used redux to store the data from flickr.photos.getRecent endpoint and  
useSelector() Allows to extract pictures data from the Redux store state.
redux performs better than other state management libraries.

Redux Thunk: It's a middleware used to handle asynchronous actions such as send a GET request flickr.photos.search, redux thunk is widely used in applications with basic data fetching whereas Sagas are a great power tool for complex "background thread"-like behavior, but most apps don't need that.

Axios: Using axios to communicate with backend, this library makes it easy to send asynchronous HTTP requests to REST endpoints and perform CRUD operations.
Compared to Fetch, Axios works better for more backwards compatibility.

TODO:
Infinite scroll, optimizing components, better typing, adding tests to the components and redux files
