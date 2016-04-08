/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {
	// Sign User Up
	signup: function(req, res){
		console.log('Backend Signup');		
		var Passwords = require('machinepack-passwords');

		//Encrypt Password
		Passwords.encryptPassword({
			password: req.param('password'),
			difficulty: 10,
		}).exec({
			error: function(err){
				return res.negotiate(err);
			},
			success: function(encryptedPassword){
				console.log(req.params);
				require('machinepack-gravatar').getImageUrl({
					emailAddress: req.param('email')
				}).exec({
					error: function(err){
						return res.negotiate(err);
					},
					success: function(gravatarUrl){
						// Create User
						User.create({
							name: req.param('name'),
							email: req.param('email'),
							password: encryptedPassword,
							lastLoggedIn: new Date(),
							gravatarUrl: gravatarUrl
						}, function userCreated(err, newUser){
							if (err) {
								console.log('Error: ' + err);
								return res.negotiate(err);
							}

							// Session Var
							console.log('User Added');
							return res.json({
								id: newUser.id
							});
						})
					}
				})
			}
		})
	}
};

