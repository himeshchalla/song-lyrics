const config = require('../config');
const express = require('express');
const models = require('./models');
const expressGraphQL = require('express-graphql');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const schema = require('./schema/schema');

const app = express();

const MONGO_URI = config.server.mongodb_connection;
if (!MONGO_URI) {
  throw new Error('You must provide a MongoLab URI');
}

mongoose.Promise = global.Promise;
mongoose.connect( MONGO_URI, { useMongoClient: true } );
mongoose.connection
    .once('open', () => console.log('Database connected successfully...'))
    // .once('openUri', () => console.log('Database connected successfully...'))
    .on('error', error => console.log('Error connecting to Database:', error));

app.use(bodyParser.json());
app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

const webpackMiddleware = require('webpack-dev-middleware');
const webpack = require('webpack');
const webpackConfig = require('../webpack.config.js');
app.use(webpackMiddleware(webpack(webpackConfig)));

module.exports = app;
