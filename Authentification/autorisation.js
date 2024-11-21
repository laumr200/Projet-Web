//Importer le modele employe
import { Employe } from '../Models/relations.js'

const autoriser = roles => async (req, res, next) => {
    //roles peut etre plusieurs
    //roles=['admin','programmer']

    //Recuperer l'id a partir de la req
    const id = req.employeId

    //Chercher la personne dans la base de donnees

    try {
        const employe = await Employe.findByPk(id)
        if (!employe) return res.status(404).json({ message: "Cet employe n'existe pas!" })

        //Recuperer le role de la personne 
        const employeRoles = await Employe.getRoles()

        const hasRole = false
        const employeRoleTitles = employeRoles.map(role => role.titre.toLowerCase())

        if (!employeRoles.length) return res.status(403).json({ message: "Pas autorise a voir cette route !!" })

        roles?.forEach(role => {
            if (employeRoleTitles.includes(role.toLowerCase()))
                hasRole = true
        });

        if (hasRole) {
            next()
            return
        } else {
            return res.status(403).json({ message: "Vous n'etes pas autorises..." })
        }


    } catch (error) {
        res.status(403).json({ message: error.message })
    }

}

export default autoriser