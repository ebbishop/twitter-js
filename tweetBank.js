var _ = require('lodash');

var data = [];

function add(id, name, text) {
	data.push({ id: id, name: name, text: text});
}

function list() {
	return _.cloneDeep(data);
}

function find(properties) {
	return _.cloneDeep(_.filter(data, properties));
}

module.exports = {
	add: add,
	list: list,
	find: find
};

module.exports.add('@hermioneg', 'Hermione Granger', 'Go read a book @Harry Potter');
module.exports.add('@theharry', 'Harry Potter', 'I will get you, Voldemort #chosenone');
module.exports.add('@theharry', 'Harry Potter','Draco is a weenie #chosenone');
module.exports.add('@malfoy', 'Draco Malfoy', 'Slytherine rocks!!! #chosenone');