MondgoDB
.find() allows to obtain the list of all products.

Let's practice:

According to the last exercise (Last demo) get all the products, add one, update one and delete one using mongoDB (https://mongoplayground.net/)
Some methods are not supported by https://mongoplayground.net/, so it is not possible to execute delete and post queries.

FIRST, READ DOCS!!!

GET: 
Query
db.collection.find()

POST: 
Query


PATCH:
Query
db.collection.update({
  name: "Correa"
},
{
  $set: {
    price: 2500
  }
})

DELETE:
Query

HOMEWORK: Install mongoDB and run all queries. Share a readme file to describe the queries and the result of each query.
