 //import { DataBase } from "./Database"
 const DataBase = require('./Database') // Importation de la classe DataBase

 class Controler {

    // Constructeur de la classe Controler
    constructor() {
        // Lorsque l'on fera new Controler() la base de donnée sera liée au controlleur
        this.db = new DataBase()
    }

    getClient(idClient){
        return this.db.getClient(idClient)
    }

    ajoutePoints(idClient, idMagasin, amount) {
       if(this.db.MagDejaAffecte(idClient, idMagasin)){
        this.db.AffecterMagasinClient(idClient, idMagasin, amount)
       }else{
        this.db.CreerMagasinClient(idClient, idMagasin)
        this.db.AffecterMagasinClient(idClient, idMagasin, amount)

       }
    }

    suprimmePoints(idClient, idMagasin, amount) {
      if(this.db.MagDejaAffecte(idClient, idMagasin)){
       this.db.AffecterMagasinClient(idClient, idMagasin, -amount)
      }
   }


 }
 module.exports = Controler