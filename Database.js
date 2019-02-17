import { throws } from "assert";

class DataBase {

    constructor() {

    }

    infoMag = [
        {
            MagId: 10323,
            Nommag: "Ainc"
        }
    ]




    clients = [
        {
            clientId: 123,
            prenom: "Léo",
            nom: "Rolland",
            magasins: {
                10232: {
                    points: 0,
                    achats: 2,
                    date: "12/12/2018"
                },


                10233: {
                    points: 0,
                    achats: 0,
                    date: "12/12/2018"
                }
            }
        },
        {
            clientId: 124,
            prenom: "Eloy",
            nom: "Martinez",
            magasins: {
                10232: {
                    points: 0,
                    achats: 2,
                    date: "12/12/2018",
                    transactions: [

                    ]
                },
                12033: {
                    points: 100,
                    achats: 2,
                    date: "12/12/2018"
                },

            }
        }
    ]

    /**
     * Génère un entier entre 0 et 1000000 possiblement déjà utilisé
     */
    generateId() {
        return Math.floor(Math.random() * 999999)
    }

    /**
     * Retourne true si l'id passé en parametre est déjà utilisé par un client
     * @param {number} id L'id du client
     */
    isIdClientTaken(id) {
        used = false
        this.clients.forEach(client => {
            if (client.clientId == id) used = true
        })
        return used
    }

    isIdMagTaken(id) {
        used = false
        this.infoMag.forEach(mag => {
            if (mag.MagId == id) used = true
        })
        return used
    }

    creerClient(prenom, nom) {
        // On génère un id
        let newClientId = generateId();
        // S'il est déjà pris on en regénère un
        while (isIdClientTaken(newClientId)) {
            newClientId = generateId();
        }
        // On créee un client
        client = {
            clientId: newClientId,
            prenom: prenom,
            nom: nom,
            magasins: []


        }
        // On l'ajoute à la base de données
        this.clients.push(client)
        // On retourne le client
        return client
    }

    /**
     * Crée un nouveau magasin
     * @param {string} Nomi Nom du magasin
     */
    ajouterMagasin(Nomi) {
        let Id = generateId();
        while (isIdMagTaken(newClientId)) {
            Id = generateId();

        }
        //  On cree la magasin
        mag = {
            MagId=Id,
            Nommag=Nomi
        }
        // On ajoute la magasin a la liste des magasins
        this.infoMag.push(mag)
        return mag
    }

    MagDejaAffecte(clientId, magasinId){
        const client = this.clients.find(client=>client.clientId==clientId)
    if (!client.magasins.keys().includes(magasinId)) {
        return false
    }else{
       return  true
    }
    }

    CreerMagasinClient(clientId, magasinId) {
        const client = this.clients.find(client=>client.clientId==clientId)
        if (!client.magasins.keys().includes(magasinId)) {
            const magasinData = {
                magasinId: {
                    points: 0,
                    transactions: []
                }
            }
            client.magasins.push(magasinData)
            console.log("Affectation du magasin " + magasinId + " au client " + client );
        }
        console.log("magasin déjà affectée")
    }

    AffecterMagasinClient(clientId, magasinId,p) {
        const client = this.clients.find(client=>client.clientId==clientId)
        if (!client.magasins.keys().includes(magasinId)) {
            const magasinData = {
                magasinId: {
                    points: points+ p,
                    transactions: []
                }
            }
            client.magasins.push(magasinData)
            console.log("Affectation du magasin " + magasinId + " au client " + client );
        }
        console.log("magasin déjà affectée")
    }

}