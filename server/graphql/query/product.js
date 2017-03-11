import {
  GraphQLList,
  GraphQLObjectType,
  GraphQLString,
  GraphQLNonNull
} from 'graphql';


import Product from '../model/product';

var db = require('../../common/database');


module.exports = {

    products: {
      type: new GraphQLList(Product),
      resolve: function(rootValue, args, info) 
      {
          return new Promise((resolve, reject) => {
            db.get().collection('products').find().toArray((err, data) => {
              resolve(data);
            });
          });
      }
    },


    product: {
      type: Product, 
      args: { 
        title: { type: new GraphQLNonNull(GraphQLString)},
      },
      resolve: function(rootValue, args)
      {
          return new Promise((resolve, reject) => 
          {
              db.get().collection('products').findOne({title : args.title}, (err, data) => {
                resolve(data);
              });
          });
      }
    }

    
};