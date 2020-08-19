const mongodb = require('mongodb')
const MongoClient = mongodb.MongoClient;

// named like this because it is only used internally
let _db;

function mongoConnect(callback) {
    MongoClient.connect('mongodb+srv://cmyers:HbVW2tDchkt5RZ8@mycluster.a1pdi.mongodb.net/')
        .then(client => {
            // client object gives us access to the database
            console.log("Connected!")
            // argument is database name
            // no need to create DB ahead of time--it will be created on the fly
            // store connection to database in _db variable
            _db = client.db('shop');
            callback()
        })
        .catch(err => {
            console.error(err)
            throw err;
        })
}

const getDb = () => {
    if (_db) {
        // if _db is defined, return it
        return _db;
    }
    throw 'No database found'
}

module.exports.mongoConnect = mongoConnect;
module.exports.getDb = getDb;
