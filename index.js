var express = require('express')
var app = express()

//import { Controler } from "./Controler"
var Controler = require('./Controler')

var controler = new Controler() 

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.use(express.json());

app.post('/ajoutePoints', function(request, response){
  const a = JSON.parse(request.body);      // your JSON
   //response.send(request.body);    // echo the result back
 controler.ajoutePoints(a.idc, a.idm, a.points)

});




app.listen(3000)
