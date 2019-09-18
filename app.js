const express = require("express");
const cors = require('cors');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const links = require("./controlers/links");
const db = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'server2db'
});

// Connect
db.connect((err) => {
    if(err){
        throw err;
    }
    console.log('MySql Connected...');
});
const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors());
app.use(bodyParser.json());



app.get('/links', (req,res) => {links.getLinks(req,res,db)});

// app.post('/login', (req,res) => {login.handleSignin(req,res,db)});/


app.listen(PORT, function(){
	console.log(`App is running on port ${PORT}`);
})

