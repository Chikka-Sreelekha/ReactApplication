## Enterprise Resource Planning

This is an Enterprise Resource Planning (ERP) React Application built with React and React Router. It demonstrates CRUD (Create, Read, Update, Delete) operations for managing products and orders. Below you will find some information on how to perform the tasks.

## Table of Contents
- [Enterprise Resource Planning](#enterprise-resource-planning)
- [Table of Contents](#table-of-contents)
- [Features](#features)
  - [`Dashboard`](#dashboard)
  - [`Products Management`](#products-management)
  - [`Orders Management`](#orders-management)
  - [`Calendar View`](#calendar-view)
- [Technologies Used](#technologies-used)
- [Run Locally](#run-locally)
- [Usage](#usage)
- [Folder Structure When You Clone This](#folder-structure-when-you-clone-this)
- [Dependencies](#dependencies)
- [Routing](#routing)
- [Simple Instructions to interact with this application](#simple-instructions-to-interact-with-this-application)
- [Creation of React Application](#creation-of-react-application)
  - [`npm install -g create-react-app`](#npm-install--g-create-react-app)
  - [`npx create-react-app my-react-app`](#npx-create-react-app-my-react-app)
  - [`cd my-react-app`](#cd-my-react-app)
  - [`npm start`](#npm-start)
- [Folder Structure](#folder-structure)
- [Available Scripts](#available-scripts)
  - [`npm start`](#npm-start-1)
  - [`npm test`](#npm-test)
  - [`npm run build`](#npm-run-build)
  - [`npm run eject`](#npm-run-eject)
- [Displaying Lint Output in the Editor](#displaying-lint-output-in-the-editor)
- [Installing a Dependency](#installing-a-dependency)
- [Importing a Component](#importing-a-component)
  - [`App.js`](#appjs)
  - [`Test.js`](#testjs)
- [Adding a Stylesheet](#adding-a-stylesheet)
  - [`Dashboard.module.css`](#dashboardmodulecss)
  - [`Dashboard.js`](#dashboardjs)
- [Post-Processing CSS](#post-processing-css)
- [Using the `public` Folder](#using-the-public-folder)
- [Adding Bootstrap](#adding-bootstrap)
- [Additional Notes](#additional-notes)
- [Screenshots](#screenshots)
  - [ERPReact App Output Pictures](#erpreact-app-output-pictures)
  - [ERPReact App Output Video:](#erpreact-app-output-video)
- [Something Missing?](#something-missing)
- [Feedback](#feedback)
- [🔗 Links](#-links)

## Features

### `Dashboard`

Displays about some basic details like total products, total orders etc.
Includes quick navigation links to Products, Orders, and Calendar.

### `Products Management`

Allows adding, editing, and deleting products.
Displays product name, category, price, and stock quantity.
Provides buttons for modifying product details and deleting products.

### `Orders Management`

Allows viewing order details, updating order status, and deleting orders.
Displays order ID, customer name, order date, status, and delivery date.
Provides buttons for viewing order details, modifying status, and deleting orders.

### `Calendar View`

Displays orders scheduled for specific dates.
Allows users to navigate through dates and view orders for each date.

## Technologies Used
* React.js
* CSS Modules
* Other libraries or frameworks used
  
## Run Locally

Clone the project :

```bash
git clone https://github.com/Sreelekha27-siri/example.git
```

Navigate to the project directory :

```bash
cd ERPReactApp
```

Install dependencies :

```bash
npm install
```

Start the server :

```bash
npm run start
```

## Usage
* Start the development server :
   
```bash
    npm run start
```
* Open your web browser and navigate to http://localhost:3000.

* You should see the Home page with links to Products, Orders, Calendar, Dashboard.

* Click on the links to navigate to the respective page content below and perform CRUD operations.

## Folder Structure When You Clone This 

* `src/:` Contains the application source code.
    * `App.js:` Main application component.
    * `index.js/:` Entry point of the application.
    * `Dashboard.js:` Dashboard component.
    * `ProductsManagement.js:` Component for managing products.
    * `OrdersManagement.js:` Component for managing orders.
    * `CalendarView.js:` Component for viewing a calendar with order details.
    * Other files: Additional configuration files and assets.
  
## Dependencies

* `react`: JavaScript library for building user interfaces.
* `react-dom`: React package for DOM rendering.
* `react-router-dom`: React Router package for declarative routing.
* `react-calendar`: React component for displaying calendars.

## Routing

The application utilizes React Router for client-side routing. React Router is a declarative routing library for React applications, enabling navigation and rendering of components based on the URL path.<br>
`<Router>:` The top-level component that provides routing functionality to the application. It wraps the entire application and manages the URL history.<br>
`<Routes>:` Container component that defines the routes within the application. It contains individual <Route> components.<br>
`<Route>:` Defines a route within the application. Each <Route> component specifies a URL path and the component to render when that path matches.

## Simple Instructions to interact with this application

* When you open the browser `http://localhost:3000` , after setting up the project there appears a Home page which contains details about the Enterprise Resource Planning System i.e, total products, total orders, links for other sections etc.
* There will be links provided that allows you to view the respective page content on the same page itself without reloading the page or navigating you to the other page as I incorporated routing in this application.
* Links are,
    * Dashboard
    * Products
    * Orders
    * Calendar
  
## Creation of React Application

### `npm install -g create-react-app`
* Command to install Create React App globally.
  
### `npx create-react-app my-react-app`
* Command to create a new React Application.
* Replace my-react-app with the desired name of your project.

### `cd my-react-app`
* Command to navigate to the newly created project directory.
  
### `npm start`
* Command to start the development server.

## Folder Structure

After creation, your project should look like this:

```bash
my-react-app/
  node_modules
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
    reportWebVitals.js
    setupTests.js
```
For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, or Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>
Read instructions below for using assets from JavaScript and HTML.

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Available Scripts

In the project directory, you can run:

### `npm start`
Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.
### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


## Displaying Lint Output in the Editor

>Note: this feature is available with `react-scripts@0.2.0` and higher.

Some editors, including Sublime Text, Atom, and Visual Studio Code, provide plugins for ESLint.

They are not required for linting. You should see the linter output right in your terminal as well as the browser console. However, if you prefer the lint results to appear right in your editor, there are some extra steps you can do.

You would need to install an ESLint plugin for your editor first.

>**A note for Atom `linter-eslint` users**

>If you are using the Atom `linter-eslint` plugin, make sure that **Use global ESLint installation** option is checked:

Then add this block to the `package.json` file of your project:

```js
{
  // ...
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  }
}
```

## Installing a Dependency

The generated project includes React, ReactDOM as dependencies. It also includes a set of scripts used by Create React App as a development dependency. You may install other dependencies (for example, React Router) with `npm`:

```
npm install --save <library-name>
```
In this application other installed dependencies are ReactCalendar, ReactRouterDOM, ReactScripts, WebVitals.

## Importing a Component

Use [`import` and `export`](http://exploringjs.com/es6/ch_modules.html).

For example:

### `App.js`

```js
import React, { Component } from 'react';

class App extends Component {
  render() {
    // ...
  }
}

export default App; // Don’t forget to use export default!
```

### `Test.js`


```js
import React, { Component } from 'react';
import App from './App'; // Import a component from another file

class Test extends Component {
  render() {
    return <button color="red" />;
  }
}

export default Test;
```

We suggest you to use default imports and exports when a module only exports a single thing (for example, a component). That’s what you get when you use `export default Test` and `import App from './App'`.

## Adding a Stylesheet

### `Dashboard.module.css`

```css
.test {
  padding: 20px;
}
```

### `Dashboard.js`

```js
import React, { Component } from 'react';
import styles from './Dashboard.module.css'; 

class Dashboard extends Component {
  render() {
    // You can use them as regular CSS styles
    return <div className={styles.container} />;
  }
}
```

## Post-Processing CSS

This project setup minifies your CSS and adds vendor prefixes to it automatically through [Autoprefixer](https://github.com/postcss/autoprefixer) so you don’t need to worry about it.

For example, this:

```css
.App {
  display: flex;
  flex-direction: row;
  align-items: center;
}
```

becomes this:

```css
.App {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-box-align: center;
      -ms-flex-align: center;
          align-items: center;
}
```

There is currently no support for preprocessors such as Less, or for sharing variables across CSS files.

## Using the `public` Folder

>Note: this feature is available with `react-scripts@0.5.0` and higher.

Normally we encourage you to `import` assets in JavaScript files as described above. This mechanism provides a number of benefits:

* Scripts and stylesheets get minified and bundled together to avoid extra network requests.
* Missing files cause compilation errors instead of 404 errors for your users.
* Result filenames include content hashes so you don’t need to worry about browsers caching their old versions.

However there is an **escape hatch** that you can use to add an asset outside of the module system.

If you put a file into the `public` folder, it will **not** be processed by Webpack. Instead it will be copied into the build folder untouched.   To reference assets in the `public` folder, you need to use a special variable called `PUBLIC_URL`.

Inside `index.html`, you can use it like this:

```html
<link rel="shortcut icon" href="%PUBLIC_URL%/favicon.ico">
```

Only files inside the `public` folder will be accessible by `%PUBLIC_URL%` prefix. If you need to use a file from `src` or `node_modules`, you’ll have to copy it there to explicitly specify your intention to make this file a part of the build.

When you run `npm run build`, Create React App will substitute `%PUBLIC_URL%` with a correct absolute path so your project works even if you use client-side routing or host it at a non-root URL.

Keep in mind the downsides of this approach:

* None of the files in `public` folder get post-processed or minified.
* Missing files will not be called at compilation time, and will cause 404 errors for your users.
* Result filenames won’t include content hashes so you’ll need to add query arguments or rename them every time they change.

## Adding Bootstrap
In this project I had not used Bootstrap, but if you want to add bootstrap to your react application this is the way:

Install React Bootstrap and Bootstrap from NPM. React Bootstrap does not include Bootstrap CSS so this needs to be installed as well:

```
npm install react-bootstrap --save
npm install bootstrap@3 --save
```

Import Bootstrap CSS in the ```src/index.js``` file:

```js
import 'bootstrap/dist/css/bootstrap.css';
```

Now you are ready to use the imported React Bootstrap components within your component hierarchy defined in the render method.

## Additional Notes
* Ensure that you have Node.js and npm installed on your machine before running the application.
* This application is for demonstration purposes only so it does not have full functionality i.e, back-end part.
* For any issues or feedback, please open an issue on the GitHub repository.


## Screenshots

### ERPReact App Output Pictures

* Dashboard: ![alt text](<Screenshot 2024-03-10 124151.png>)
* Products Management: ![alt text](<Screenshot 2024-03-09 215024.png>)
* Orders Management: ![alt text](<Screenshot 2024-03-09 215044.png>)
* Orders Calendar View: ![alt text](<Screenshot 2024-03-09 215106.png>)
* Add Product: ![alt text](<Screenshot 2024-03-10 124322.png>)
* Edit Product: ![alt text](<Screenshot 2024-03-10 124339-1.png>)
* Delete Product: ![alt text](<Screenshot 2024-03-10 124429.png>)
* View Order: ![alt text](<Screenshot 2024-03-10 124445.png>)
* Update Order Status: ![alt text](<Screenshot 2024-03-10 124453.png>)
* Delete Order: ![alt text](<Screenshot 2024-03-10 124504.png>)

### ERPReact App Output Video:

<video controls src="ERPReactapp-Output.mp4" title="Title"></video>


## Something Missing?

If you have ideas for more “How To” recipes that should be on this page, let me know!

## Feedback

If you have any feedback, please reach out to me at chikkasreelekha@gmail.com

## 🔗 Links
[![github](https://img.shields.io/badge/my_github-000?style=for-the-badge&logo=ko-fi&logoColor=white)](http://surl.li/rfppw)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](http://surl.li/qwhzb)