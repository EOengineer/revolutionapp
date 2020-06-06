var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
	let users = [
		{
			id: 1,
			name: "Bob",
			email: "bob@email.com"
		},
		{
			id: 2,
			name: "Jim",
			email: "jim@email.com"
		},
		{
			id: 3,
			name: "Chris",
			email: "chris@email.com"
		},
		{
			id: 4,
			name: "Jenny",
			email: "jenny@email.com"
		},
		{
			id: 5,
			name: 'Jeff',
			email: "jeff@email.com"
		}
	]
  res.json(users);
});

module.exports = router;
