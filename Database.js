class DataBase {
    
    /**
     * Carte 1 : 2485148486649535054495649300
     */

    constructor() {
        this.infoMag = [
            {
                MagId: 10232,
                Nommag: "Alinea"
            },
            {
                MagId: 10233,
                Nommag: "Mr.Bricolage"
            }
        ]
    
        this.clients = [
            {
                clientId: "123",
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
                clientId: "2485148486649535051536853300",
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
                clientId: "2485148486649535054495649300",
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
    }

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
        while (isIdMagTaken(Id)) {
            Id = generateId();

        }
        //  On cree la magasin
        let mag = {}
        mag.MagId = Id
        mag.Nomma = Nomi
        // On ajoute la magasin a la liste des magasins
        this.infoMag.push(mag)
        return mag
    }

    MagDejaAffecte(clientId, magasinId){
        const client = this.clients.find(client=>client.clientId==clientId)
       // console.log(client)

        if (!Object.keys(client.magasins).includes(magasinId)) {
            return false
        }else{
        return  true
        }
    }

    CreerMagasinClient(clientId, magasinId) {
        const client = this.clients.find(client=>client.clientId==clientId)
        if (!Object.keys(client.magasins).includes(magasinId)) {
            const magasinData = {
                 
                    points: 0,
                    achats: 1,
                    date: new Date()
                }
            
            //console.log(client.magasins);
            //console.log(magasinId);
            const mid= magasinId.toString();
           (client.magasins)[mid] = magasinData
           
            console.log("Creation du magasin " + magasinId + " au client " + client );
        }
        //console.log("magasin déjà affectée")
    }

    AffecterMagasinClient(clientId, magasinId,p) {
        const client = this.clients.find(client=>client.clientId==clientId)
       // console.log(client.magasins)
        //console.log(typeof client.magasins);
        const mag = (client.magasins)[magasinId.toString()]
        mag.points+=p
        console.log(client.magasins)

            console.log("Affectation du magasin " + magasinId + " au client " + client );
            }

    getClient(clientId){
        let clientData = this.clients.find((current)=>current.clientId==clientId)
        // Si le client n'est pas trouvé, on renvoie rien
        if (!clientData) {
            return ""
        }
        // On ajoute le champ "nom" sur chaque magasin du client
        // Pour chaque doublet "magEntry" (id du magasin, contenu d'objet)
        Object.entries(clientData.magasins).forEach(magEntry=>{
            // On cherche dans infoMag le nom du magasin correspondant
            const magasinRecherche = this.infoMag.find(magasin=>magasin.MagId==magEntry[0])
            // Si un magasin est trouvé
            if (magasinRecherche) {
                // On affecte le nom a la liste des magasins du client
                clientData.magasins[magEntry[0]]["nom"] = magasinRecherche.Nommag
            }
        })
        return clientData
    }

}

module.exports = DataBase