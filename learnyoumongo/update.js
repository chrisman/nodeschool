var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/'+process.argv[2];

mongo.connect(url, function(err, db){
	if (err) throw err;

	var cursor = db.collection('users');
	cursor.update({
		"username": "tinatime"
	}, {
		$set: {
			"age": 40
		}
	}, function(err, data){
		if (err) throw err;
		db.close();
	})
})
