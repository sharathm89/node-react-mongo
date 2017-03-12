require('babel-core/register');
require('babel-polyfill');
var express = require('express');
var MongoClient = require('mongodb').MongoClient;
var expressGraphql = require('express-graphql');
var Schema = require('./server/schema').default;
var cors = require('cors');
var packageFile = require('./package.json');

var db = require('./server/common/database');
var app = express();
var corsOptions = { origin: 'http://localhost:' + packageFile.config.CLIENT_PORT };


db.connect(packageFile.config.MONGO_LOCAL_URL, function(err)
{
    if (err) 
    {
      console.log('Unable to connect to Mongo')
      process.exit(1);
    } 
    else 
    {
        console.log("Connected to MongoDB Server : " + packageFile.config.MONGO_LOCAL_URL);
        app.listen(packageFile.config.SERVER_PORT, function() 
        {
            console.log('Listening on port : ' + packageFile.config.SERVER_PORT);

            app.use(cors(corsOptions));
            app.use('/graphql', expressGraphql(
            {
                schema: Schema,
                graphiql: true
            }));

        });
    }
});