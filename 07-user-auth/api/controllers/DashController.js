/**
 * DashController
 *
 * @description :: Server-side logic for managing access to Dashboard
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

	checkUser: function(req, res) {
		if (!req.session.me) {
			return res.view('login');
		}
	}
};