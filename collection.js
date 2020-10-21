var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://RAMAN:12345@cluster0-shard-00-00.rpmkp.mongodb.net:27017,cluster0-shard-00-01.rpmkp.mongodb.net:27017,cluster0-shard-00-02.rpmkp.mongodb.net:27017/wnsti?ssl=true&replicaSet=atlas-1473a0-shard-0&authSource=admin&retryWrites=true&w=majority"
MongoClient.connect(url,{ useNewUrlParser: true, useUnifiedTopology: true }, function(err, db) {
  if (err) throw err;
  var dbo = db.db("wnsti");
  dbo.collection("students").find({}).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    db.close();
  });
});