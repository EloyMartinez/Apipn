const express = require('express')
var app = express()

//import { Controler } from "./Controler"
var Controler = require('./Controler')

var controler = new Controler() 

app.get('/', function (req, res) {
    console.log("requete GET / reçue")
    res.send('Hello World')
})

app.use(express.json());

app.post('/ajoutePoints', function(request, response){
  console.log("requete POST /ajoutePoints reçue")
  const a = JSON.parse(request.body);      // your JSON
   //response.send(request.body);    // echo the result back
 controler.ajoutePoints(a.idc, a.idm, a.points)

});

app.listen(3000)
console.log("Serveur lancé sur le port 3000 ... En attente de connexions")