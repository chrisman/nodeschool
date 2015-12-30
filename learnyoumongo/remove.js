var database = process.argv[2];
var collection = process.argv[3];
var id = process.argv[4];
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/'+process.argv[2];

mongo.connect(url, function(err, db){
	if (err) throw err;

	var cursor = db.collection(collection);
	cursor.remove({
		"_id": id
	}, function(err, data){
		if (err) throw err;
		db.close();
	})
})
