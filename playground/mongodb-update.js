//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}

	const db = client.db('TodoApp');

//	db.collection('Todos').findOneAndUpdate({
//		_id: new ObjectID('5b83032ef0ab967c9158aa0d')
//	}, {
//		$set: {
//			completed: true,
//		}
//	}, {
//		returnOriginal: false
//	}).then((result) => {
//		console.log(result);
//	});

	db.collection('Users').findOneAndUpdate({
		_id: new ObjectID('5b7e27ebbe760b075ba069bc')
	}, {
		$set: {
			name: 'Leandro'
		},
		$inc: {
			age: 1
		}
	}, {
		returnOriginal: false
	}).then((result) => {
		console.log(result);
	});
	client.close();
});
