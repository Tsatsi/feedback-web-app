# Coded in Braam feedback app
## Step 1 - The setup

  #### Install React and React DOM
    1. npm install --save react
    2. npm install --save react-dom


  #### Install Webpack and Webpack server
    1. npm install --save-dev webpack
    2. npm install webpack-dev-server - g


  #### Install Babel
    npm install --save-dev babel-loader
    npm install --save-dev babel-core
    npm install --save-dev babel-preset-es2015
    npm install --save-dev babel-preset-react



  #### Test Setup: create component.
  #####  feedback.jsx
    import React from 'react';
    import ReactDOM from 'react-dom';


    class Feedback extends React.Component {
      render(){
          return <div> This is coded in braam feedback app</div>
      }
    }

    ReactDOM.render(<Feedback/>, document.getElementById('feedback'));

  #### Create javascript entry point  file to import dependencies
  ##### index.js
    import Feedback from './feedback.jsx';

  #### Add webpack configuration to load the jsx files
  ##### webpack.config.js
    var path = require('path');
    var webpack = require('webpack');

    module.exports = {
      entry: './index.js',
      output: { path: __dirname, filename: 'bundle.js' },
      module: {
        loaders: [
          {
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/
          }
        ]
      },
    };
