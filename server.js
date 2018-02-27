var express    = require("express");
var httpProxy = require('http-proxy');
var apiProxy = httpProxy.createProxyServer();
var serverOne = 'http://localhost:4209';
//var login = require('./routes/loginroutes');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});
var router = express.Router();
// test route
//router.get('/', function(req, res) {
//    res.json({ message: 'welcome to our upload module apis' });
//});
//route to handle user registration
//router.post('/login',login.login)
//app.use('/api', router);
//app.listen(5000);
app.post("/", (req, res) => {
	let username = req.body.username;
	let pass = req.body.pass;
	if (username == 'jon') {
		res.redirect(serverOne);
	} else {
		res.json("GOODBYE");
	}
});

app.listen(4789);