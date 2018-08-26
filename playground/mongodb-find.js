//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
	if(err) {
		return console.log('Unable to connect to MongoDB server');
	}

	const db = client.db('TodoApp');
	console.log('Connected to MongoDB server');

	//db.collection('Todos').find({
	//	_id: new ObjectID('5b7e2644ad9ad707464cbed9')
	//}).toArray().then((docs) => {
	//	console.log('Todos');
	//	console.log(JSON.stringify(docs, undefined, 2));
	//}, (err) => {
	//	console.log('Unable to fetch todos', err);
	//});
	
//	db.collection('Todos').find().count().then((count) => {
//		console.log(`Todos count: ${count}`);
//	}, (err) => {
//		console.log('Unable to fetch todos', err);
//	});
	
	db.collection('Users').find({name: 'Leandro'}).toArray().then((docs) => {
		console.log('Users');
		console.log(JSON.stringify(docs, undefined, 2));
	}, (err) => {
		console.log(err);
	});
//	client.close();
});
