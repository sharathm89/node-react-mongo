# CRUD Operations (Products)

<i>Back End:<i>
   * Data storage : MongoDB  Azure
   * Server Side  : NodeJS   Azure
    
<i>Client and Server communication </i>
   * GraphQL

<i>Client Side:</i>
   * View        : React
   * Routing     : React-Router
   * Data Flow   : Redux
    

<i>Java Script Standard:<i>
   * ES6


<i>GraphQL Queries</i>

* `query{  products { _id title price quantity imgUri }}`
* `query{  product(_id : "58beb7f7093aa75fce6ee845"),  { _id quantity price title imgUri}`
* `mutation{ deleteProduct(_id : "58c26ff666b0ee0bf1c1ac9d"), { _id status } }`
* `mutation{  editProduct(_id : "58beb7f7093aa75fce6ee845",  title : "beans vegetable", quantity : 450, price : 100.50),  { _id quantity price title imgUri }}`
* `mutation{  createProduct(title : "beans vegetable", quantity : 450, price : 100.50),  {_id quantity price title imgUri}}`



## Server
* http://reactapp.cloudapp.net/



## Steps to Runing locally
    1) npm start
        http://localhost:4000/
    2) Graphql Link
        http://localhost:5000/graphql