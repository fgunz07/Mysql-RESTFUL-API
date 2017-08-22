module.exports = (app, express, mysql)=>{
	const routeAPI = express.Router(),
		controls = require('../controller/controller')(mysql);
	
	routeAPI.use((req, res, next)=>{
		if(req)
			console.log(req.method, req.url ,Date());

		next();
	});
	routeAPI.get('/', (req, res)=>{
		res.send('Welcome to my API');
	});

	routeAPI.route('/movies')
		.get(controls.getAll)
		.post(controls.postData);
	routeAPI.route('/movies/:_id')
		.get(controls.getOne)
		.put(controls.updateOne)
		.delete(controls.deleteOne);

	return routeAPI;
}