module.exports = (mysql)=>{
	const db = {};

	db.database = mysql.createConnection({
		host: 'localhost',
		user: 'root',
		password: '',
		database: 'movies_list'
	});
	db.connect = db.database.connect((err)=>{
		if(err)
			throw err;
		else
			console.log('Database Connected');
	});

	return db;
}