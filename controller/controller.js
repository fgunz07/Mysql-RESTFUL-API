module.exports = (mysql)=>{
	const method = {};

	//==================*****======================================//
	//-----------------------------------------------------------------//
	method.getAll = (req, res)=>{
		mysql.database.query('select * from movies', (err, result)=>{
			if(err)
				res.json({ message: 'Something went wrong ', err}).status(500);
			else
				res.json({message: 'Homepage with Records of all movies' ,data: result }).status(200);
		});
	}

	//===============================================================//
	method.postData = (req, res)=>{
		const movies = 'insert into movies SET ?',
		reqObj = {
				title: req.body.title
				,categories: req.body.categories
				,actors: req.body.actors
				,description: req.body.description },
		sql = mysql.database.format(movies, reqObj);

		mysql.database.query(sql, (err)=>{
			if(err)
				res.json({ message: 'Something went wrong', err}).status(500);
			else
				res.json({ message: 'Created'}).status(200);
		});
	}

	//-------=========================================---------//
	method.getOne = (req, res)=>{
		const movies = 'select * from movies where id = ?',
			reqArray = [req.params._id],
			sql = mysql.database.format(movies, reqArray);
		mysql.database.query(sql , (err, result)=>{
			if(err)
				res.json({ message: 'Something went wrong', err}).status(500);
			else
				res.json({ data: result }).status(200);
		});
	}
	//==============
	method.updateOne = (req ,res)=>{
		const movies = 'update movies set title=?, categories=?, actors=?, description=? where  id=?',
			reqArray = [
				req.body.title
				,req.body.categories
				,req.body.actors
				,req.body.description
				,req.params._id],
			sql = mysql.database.format(movies, reqArray);
		mysql.database.query(sql, (err, result)=>{
			if(err)
				res.json({ message: 'Something went wrong ', err}).status(500);
			else
				res.json({ message: 'Updated', data: result}).status(200);
		});
	}
	//==============
	method.deleteOne = (req, res)=>{
		const movies = 'delete from movies where id=?',
			reqArray = [req.params._id],
			sql = mysql.database.format(movies, reqArray);
		mysql.database.query(sql,(err)=>{
			if(err)
				res.json({ message: 'Something went wrong', err}).status(500);
			else
				res.json({ message: 'Record Deleted'}).status(200);
		});
	}

	return method;
}