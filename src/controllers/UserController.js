const User = require('../model/User')

module.exports = {
    //! select all
    async index(req, res) {
        const users = await User.findAll()
        return res.json(users)
    },
    async selectOne(req, res) {
        //! pegar o parametro da url
        const { id } = req.parms
        const user = await (await User.findOne()).where(id)
        return res.json(user)
    },
    //! create
    async store(req, res) {
        const { name, email } = req.body

        const user = await User.create({ name, email })

        return res.json(user)
    },
    async delete(req, res) {
        //! pegar o parametro da url
        const {id} = req.parms 

        return res.json(user)
    }
}