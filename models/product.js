const getDb = require('../util/database').getDb;

class Product {
  constructor(title, price, description, imageUrl) {
    this.title = title;
    this.price = price;
    this.description = description;
    this.imageUrl = imageUrl;
  }

  save() {
    const db = getDb();
    // tell Mongo in which collection we want to work
    // if it doesn't exist, will be inserted first time data is inserted
    // more CRUD operations: https://docs.mongodb.com/manual/crud/
    db.collection('products').insertOne(this)
        .then(result => console.log(result))
        .catch(console.warn)
  }
}


module.exports = Product;
