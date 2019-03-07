const express = require('express')
var app = express()

//import { Controler } from "./Controler"
var Controler = require('./Controler')

var controler = new Controler() 

app.get('/getclient/:tagId', function (req, res) {
  res.send(controler.getClient(req.params.tagId))
  console.log("requete GET / reçue")
})

app.use(express.json());

app.post('/ajoutePoints', function(request, response){
  console.log("requete POST /ajoutePoints reçue")
  const a = request.body;      // your JSON
   //response.send(request.body);    // echo the result back
  controler.ajoutePoints(a.idc, a.idm, a.points)
  response.send({success: true})
});

app.listen(3000)
console.log("Serveur lancé sur le port 3000 ... En attente de connexions")