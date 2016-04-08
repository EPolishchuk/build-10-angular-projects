/**
 * DashController
 *
 * @description :: Server-side logic for managing access to Dashboard
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	checkUser: function(req, res) {
		if (!req.session.me) {
			console.log('User not logged in');
			return res.view('login');
		}
		else {
			console.log('User logged in');
			return res.view('dashboard');
		}
	},

	getUser: function(req, res){
		console.log('Running user search');

		User.findOne({id: req.session.me}, function(err, user){
			if (err){
				res.negotiate(err);
			}
			return res.send(user);
		})
	}
};