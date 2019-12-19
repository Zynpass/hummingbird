var express = require('express');
require('dotenv').config()
var router = express.Router();

// pusher 
var Pusher = require('pusher');

// start pusher 
var pusher = new Pusher({
  appId: process.env.PUSHER_APP_ID,
  key: process.env.PUSHER_APP_KEY,
  secret: process.env.PUSHER_APP_SECRET,
  cluster: process.env.PUSHER_CLUSTER,
  encrypted: true
});


/* GET something and send it to pusher */
router.get('/', function(req, res, next) {
	// take it 
	message = req.query.message; 
	// log it 
	console.log("Sending up " + message)
	// push it 
	pusher.trigger('my-channel', 'my-event', {
  		"message": message
	});
	// done
    res.send('Spoke: ' + message);
});

module.exports = router;