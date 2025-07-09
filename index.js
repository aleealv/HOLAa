const express = require( 'express' );  
const cors = require('cors');
const app = express(); 
const port = 3000 ; 
const mysql = require("mysql");

app.use(cors());

var objetos=[
	{nombre:"Pedro", edad:20, nivel:"admin"},
	{nombre:"Leopoldo", edad:25, nivel:"admin"},
	{nombre:"Octavio", edad:30, nivel:"admin"},
	{nombre:"Alejandra", edad:20, nivel:"admin"},
	{nombre:"Sandra", edad:40, nivel:"admin"},
	{nombre:"Jordan", edad:10, nivel:"admin"},
]
var datos;

let con = mysql.createConnection({
	host: "localhost",
	user: "root",
	password: "",
	 database: "animales_db"
});


con.connect(function(err){
	if (err) throw err;
	  con.query("SELECT * FROM animales ", 
	  function (err, result, fields) {
    if (err) throw err;
    datos = result;
  });
});

app.get( '/' , ( req, res ) => { 
  res.send(datos); 
}); 

app.get( '/leopoldo' , ( req, res ) => { 
  res.send( objetos[1] ); 
}); 

app.listen(port, () => { 
  console.log( `API escuchando en http://localhost:${port}`); 
});