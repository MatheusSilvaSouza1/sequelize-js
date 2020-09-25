const { store } = require("./UserController");

const Adresses = require('../model/Adress');
const User = require("../model/User");

module.exports = {
    async index(req, res) {
        const { user_id } = req.params
        const adresses = await User.findByPk(user_id, {
            //! esta trazendo os enderecos que se relaciona com um usuario
            include: {association: 'adresses'}
        })
        return res.json(adresses)
    },

    async store(req, res) {
        const { user_id } = req.params
        console.log(user_id);
        const { zipcode, street, number } = req.body

        const user = await User.findByPk(user_id)

        if (!user) {
            return res.status(400).json({ error: 'User not found' })
        }

        const adresses = await Adresses.create({
            zipcode,
            street,
            number,
            user_id
        })

        return res.json(adresses)
    }
}