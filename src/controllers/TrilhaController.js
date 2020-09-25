module.exports = {
    async selectOne(req, res) {
        //! pegar o parametro da url
        const { id } = req.parms
        const user = await (await User.findOne()).where(id)
        return res.json(user)
    },
}