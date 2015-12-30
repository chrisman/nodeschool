var firstName = process.argv[2];
var lastName = process.argv[3];
var myObj = {
	firstName: firstName,
	lastName: lastName
};
var mongo = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017/learnyoumongo';


mongo.connect(url, function(err, db){
	if (err) throw err;

	var cursor = db.collection('docs');
	cursor.insert({
		"firstName": process.argv[2],
		"lastName": process.argv[3]
	}, function(err, data){
		if (err) throw err;

		console.log(JSON.stringify(myObj));
		db.close();
	})
})
