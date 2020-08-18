# Getting Started With ReactJS

## Application's features:

- [ ] Storing locally
  - [ ] Using LifeCycle methods
  - [ ] Tackling empty options array
- [ ] Erasing placeholder on `!error`
- [ ] Randomly choosing options
- [ ] validating for entered values
  - [ ] `!same` Item (already exists)
  - [ ] `!empty` items not allowed to enter
- [ ] Handling props propagation through child and grand-child
- [ ] `defaultProps` values
- [ ] `Stateless functional components`
- [ ] Mapping which components to have `state`
- [ ] Props with functions
- [ ] Props with items
- [ ] Binding `this` in constructor
- [ ] Using `&&` , `||` operations
- [ ] One way Binding
- [ ] Two way Binding

# How to set up React⚛️, webpack💠 and Babel〽️

- [x] how to install and configure webpack

  - [x] Source-map Tool and 
- [x] Webpack-dev-server.
- [x] how to install and configure Babel
- [ ] 
- [x] how to install and configure Scss to css
- [x] how to install React
- [x] how to include the resulting bundle into an HTML page
- [x] how to install and configure webpack dev server

## Setting up the project

To start off create a directory for the project:

```bash
mkdir webpack-react-tutorial && cd $_
```

Create a minimal directory structure for holding the code:

```bash
mkdir -p src
```

Initialize the project by running:

```bash
npm init -y
```

and you’re good to go.

## Setting up webpack 💠

Webpack 💠 it's an incredibly powerful (and complex) tool. You can get by without touching a single line of configuration, but there will be a time for some custom setup of sort. Sooner or later you may want to learn webpack. Why not starting now?

Learning webpack is valuable not only for working with React, but for configuring every frontend project as well.
Here webpack will ingest raw React components for producing JavaScript code that (almost) every browser can understand.

### Configuring Webpack features in React project:

- [x] Avoid Global Modules

- [x] ES6 import/export

- [x] Default Exports

- [x] Importing npm Modules (dependencies)

  > **:warning:Warning:** Always go through documents for Dependecies installation for bash Commands as they get updated with dependency update.

- [x] Configuring `webpack.config.js` (for developement and Production)

- [x] Setting up Babel with Webpack

- [x] One Component per File (Ease up the complex Structure of app)

- [x] Source Maps with Webpack (Helps in Detecting Errors in complex component structure)

- [x] Webpack Dev Server

- [x] ES6 class properties (Transforming Binding`this`inside constructor )

Let's install webpack and webpack-cli by running:

```bash
npm i webpack webpack-cli --save-dev
```

Now add the webpack command inside `package.json`:

```json
"scripts": {
  "build": "webpack --mode production"
}
```

At this point there is no need to define a configuration file for webpack. Older webpack versions would automatically look for a configuration file. Since version 4 that is no longer the case.

In the next section we'll install and configure Babel for transpiling our code.

- 📌[Click here](https://www.valentinog.com/blog/babel/) for dependencies installation for React ⚛️

Giving `Entry` point and `output` folder path to save `bundle.js`

```js
const path = require('path');
module.exports = {
  // app entry point
  entry: './src/app.js',
  // output point
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  }
}
```



### Setting up a development environment and devTool

To make our lives a little easier. It quickly becomes a hassle to manually run npm run build every time you want to compile your code.

There are a couple of different options available in webpack that help you automatically compile your code whenever it changes:

1. **Webpack's Watch Mode**
2. **Webpack-dev-server**

#### **1. Webpack's Watch Mode**:

#### **2 Source-map Tool and Webpack-dev-server**:

It's a little development server similar to Live server. `webpack-dev-server` comes with some **nice to have features** specific to web:

1. For example is going to speed up the process between changing our application files and actually seeing those changes reflected in the browser.

Steps to configure dev-server on React

1. Adding `devServer`- provides you with a simple web server and the ability to use live reloading. Let's set it up:

Let's set it up:

```bash
	npm install --save-dev webpack-dev-server
```

Change your configuration file `webpack.config.js` to tell the dev server where to look for files:

```js
  devServer: {
      contentBase: path.resolve(__dirname, 'public'),
    };
```

final Version of `webpack.config.js` files

```js
// app.js -> First up we have to let it know where the entry point is where does our application kick off for us
// We also have to tell it where to output the final bundle file. So we're creating that one big javascript file that contains everything our app needs to run.

const path = require('path');
module.exports = {
  // app entry point
  entry: './src/app.js',
  // output point
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: 'bundle.js',
  },
  // module rules with loader
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },

  // Webpack Developer Tool - for pointing out errors/console.log.out's in a complex components 			structure using browser console
  devtool: 'cheap-module-eval-source-map',
  // webpack development server
  devServer: {
    contentBase: path.resolve(__dirname, 'public'),
  },
};

// A loader :
// - lets you customize the behavior of web pack when it loads a given file.
// - So for example anytime web package sees a .js file we will run it through BABEL
```

and update in `package.json` file:

````JSON
    "scripts": {
      "dev-server": "webpack-dev-server --open"
    }
```

#### Setting Source-map DevTool Using source maps

```js
	devtool: 'inline-source-map',
```

or even use   `devtool: 'cheap-module-eval-source-map'`  *for pointing out errors/console.log.out's in a complex components structure using browser console*

```js
  devtool: 'cheap-module-eval-source-map',
```

## configuring up 〽️ Babel

React components are mostly written in modern JavaScript syntax. Take the class keyword for example. Stateful React components can be declared as classes, or as arrow (or regular functions).
But older browsers don't understand ECMAScript 2015, thus we need some kind of transformation.
That transformation is called `transpiling`.

Webpack per-se doesn’t know how to transform JavaScript. Instead it relies on loaders: think of them as of transformers
A webpack loader takes something as the input and produces an output, called `bundle`.

- `babel-loader` is the webpack loader responsible for talking to Babel. This allows us to run babbel under certain conditions in our case we specify a rule we said whenever.
  Babel on the other hand must be configured to use presets.

  We need two of them:

- `babel preset` env for compiling modern Javascript ES6 down to ES5

- `babel preset-react` for compiling JSX and other stuff down to Javascript.

Let's pull in the dependencies with:

```bash
npm i @babel/core babel-loader @babel/preset-env @babel/preset-react --save-dev
````

Next up **configure Babel**. Create a new file named `.babelrc` inside the project folder with the following code:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

At this point we're ready to define a **minimal webpack configuration.** Create a file named `webpack.config.js` and fill it like so:

```js
module.exports = {
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```

The configuration is quite minimal. For **every file with a js or jsx extension Webpack pipes the code through babel-loader**. With this in place we're ready to write a React.

### configuring Babel Plugin transform class property

- **Babel’s Transform Class Properties Plugin:**

#### Babel

Babel is a powerful tool for writing next generation JavaScript. It’s widely used to compile code written with newer and experimental JavaScript features (as well as JSX in React apps) into syntax browsers can understand.

Developers no longer need to wait for recently added features to get adopted by browsers or for promising new features to go through the lengthy TC39 process, where each proposal must get approved to move through various stages before finally getting added to the next ECMAScript spec. Thanks to a whole host of Babel presets and plugins, we can now write the JavaScript of tomorrow, today.

In this post, we’ll go over a particularly useful Babel plugin for your React apps and how you can use it to write cleaner, more concise code.


#### Class Properties Transform

If you’ve ever written a React app, you may have seen something along the lines of:

```react
constructor(props) {
  super(props);
  this.state = { ...some initial state... }

  this.someHandler = this.someHandler.bind(this);
  this.someHandler = this.someHandler.bind(this);
  this.someHandler = this.someHandler.bind(this);
  this.someHandler = this.someHandler.bind(this);
  this.someHandler = this.someHandler.bind(this);
  this.someHandler = this.someHandler.bind(this);
  this.someHandler = this.someHandler.bind(this);
  this.someHandler = this.someHandler.bind(this);
}
```

Whoa! That’s a lot of handlers.\*

And what a drag it is to have to individually bind the `this` context to each of them just so they can be passed down as props and invoked somewhere further down the component tree. How many times have you forgotten to do this tedious task and gotten an error message saying “this.setState is not a function”? How many times have you looked at a piece of code like the one above and thought to yourself, “There’s gotta be a better way…”

Well, guess what? There is, thanks to Babel’s [Class Properties Transform](https://babeljs.io/docs/plugins/transform-class-properties/) plugin…

According to the documentation, this plugin will transform class properties in such a way that you can define class properties using property initializer syntax (ie. by using the `=` assignment operator).

In JavaScript, current class syntax only allows for you to define _methods_ inside of a class, nothing else.

```js
class Cat {
  constructor(name, breed) {
    this.name = name;
    this.breed = breed;
  }
  getBreed() {
    return this.name + ' is a ' + this.breed;
  }
}
```

Any properties you want on an instance of an object created with a class need to be defined inside of the special constructor method, whereas any other methods defined in the class — like the getBreed() method in the example above — will live on that instance’s prototype.

But with Babel’s Class Properties Transform plugin, you no longer have to follow these rules, and instead can do something like this:

```js
class Cat {
  name = 'Chairman Meow';
  breed = 'Sphynx';

  getBreed = function () {
    return this.name + ' is a ' + this.breed;
  };
}
```

In this version, the ‘name’ and ‘breed’ properties _as well as_ the getBreed() method will live on the instance, whereas before getBreed() was on the prototype.

So how does this tie into React and not having to bind the `this` context to every handler I want to pass down as a prop?

refer this articlle on [How it Works and What it Means for your React Apps](https://medium.com/@jacobworrel/babels-transform-class-properties-plugin-how-it-works-and-what-it-means-for-your-react-apps-6983539ffc22).

## Writing React components:

We'll build a super simple React form with a single text input. Before touching any code let's pull in React:

```bash
npm i react react-dom
```

A question I get a lot is "should I install react and react-dom as dev dependencies or not?". It doesn’t matter for the final result. webpack will still produce your bundle.

Now create a minimal directory structure for holding the component:

```bash
mkdir -p src/js/components/
```

Next up let's create a React component that:

has its own state
renders an HTML form
Create the component in `src/js/components/Form.js`:

```JSX
import React, { Component } from "react";
import ReactDOM from "react-dom";

class Form extends Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { value } = event.target;
    this.setState(() => {
      return {
        value
      };
    });
  }

  render() {
    return (
      <form>
        <input
          type="text"
          value={this.state.value}
          onChange={this.handleChange}
        />
      </form>
    );
  }
}

export default Form;

const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<Form />, wrapper) : false;
```

And now it's time to wire things up. **webpack expects the entry point** in `src/index.js`. Create the file and place an import directive into it for requiring your React component:

```JSX
import Form from "./js/components/Form";
```

With this in place we're ready to create our bundle by running:

```bash
npm run build
```

Give webpack a second and see the bundle come to life in `dist/main.js`. Now let's bring our experiment to life by including the bundle into an HTML page.


## The HTML webpack plugin
