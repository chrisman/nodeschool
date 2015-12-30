var age = process.argv[2];
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';

var findOldParrots = function(db, callback){
	var cursor = db.collection('parrots');
	cursor.find({'age': {$gt: +age}}).toArray(function(err, docs){
		if (err) throw err;
		console.log(docs);
		db.close();
	})
};

mongo.connect(url, function(err, db){
	if (err) throw err;

	findOldParrots(db);
});
