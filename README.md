# Full Stack React App Example

You will learn how to create a full stack web app with
> * ReactJS
> * EJS
> * NodeJS
> * Express
> * MongoDB

## To Run
```
npm run dev
npm start
```

<a href='http://ko-fi.com/rexlow' target='_blank'><img height='36' style='border:0px;height:36px;' src='https://az743702.vo.msecnd.net/cdn/kofi1.png?v=f' border='0' alt='Buy Me a Coffee at ko-fi.com' /></a> 

First, let's setup with the old way (you can of course go with create-react-app)


## Install dependencies
```
npm i -S express
npm i -S mongodb
npm i -S react react-dom
npm i --save-dev webpack
npm i -D babel-cli babel-loader babel-preset-es2015 babel-preset-stage-2 babel-preset-react
npm i -D nodemon
npm i -D eslint eslint-plugin-react babel-eslint
```

## Modify the script object in package.json
```
"scripts": {
    "start": "nodemon --exec babel-node server.js --ignore public/",
    "dev": "webpack -wd "
  },
```

## Add webpack.config.js
```
module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/public',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.json$/,
        loader: 'json-loader'
      },
      {
        test: /\.js$/,
        loader: 'babel-loader'
      }
    ]
  }
};
```

## Add .babelrc
```
{
  "presets": ["react", "es2015", "stage-2"]
}
```

## Add .eslintrc
```
module.exports = {
  "parser": 'babel-eslint',
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "node": true
  },
  "extends": ["eslint:recommended", "plugin:react/recommended"],
  "parserOptions": {
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true
    },
    "sourceType": "module"
  },
  "plugins": [ "react" ],
  "rules": {
    "indent": ["error", 2],
    "linebreak-style": ["error","unix"],
    "quotes": ["error","single"],
    "semi": ["error","always"],
    "no-console": ["warn", { "allow": ["info", "error"] }]
  }
};
```