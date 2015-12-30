var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo'
var age = process.argv[2];
var mycollection = 'parrots';

mongo.connect(url, function(err, db){
	if (err) throw err;
	var cursor = db.collection(mycollection);
	cursor.count({
		"age": { $gt: +age }
	}, function(err, count){
		if (err) throw err;
		console.log(count);
		db.close();
	})
})
