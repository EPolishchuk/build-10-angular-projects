/**
 * User.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
  	name: {
  		type: 'string',
  		required: true
  	},
  	email: {
  		type: 'email',
  		required: true,
  		unique: true
  	},
  	password: {
  		type: 'string',
  		required: true
  	},
  	lastLoggedIn: {
  		type: 'date',
  		required: true,
  		defaultsTo: new Date(0)
  	},
  	gravatarUrl: {
  		type: 'string'
  	}
  }
};

