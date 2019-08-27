const fs = require('fs');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.get('/data', (req,res)=>{
	fs.readFile('./data.json', (err,data)=>{
		let obj = JSON.parse(data);
		res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
		res.header('Access-Control-Allow-Method', 'GET, POST, DEL, PUT, OPTION');
		res.header('Access-Control-Allow-Header', 'Access-Control-Allow-Origin, Content-Type, Accept-Language, Origin, User-Agent');
		res.send(obj);
	})
})
app.listen(9192);
