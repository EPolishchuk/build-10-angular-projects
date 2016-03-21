var mongoose = require('mongoose');

var categorySchema = mongoose.Schema({
	name: {
		type: String,
		index: true,
		required: true
	},
	descriptuion: {		
		type: String
	}
});

var Category = module.exports = mongoose.model('Category', categorySchema);

module.exports.getCategories = function(callback) {
	Category.find(callback);
}

module.exports.getCategoryById = function(id, callback) {
	Category.findById(id, callback);
}

module.exports.createCaregory = function(newCategory, callback) {
	newCategory.save(callback);
}