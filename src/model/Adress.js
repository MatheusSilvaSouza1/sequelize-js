const { Model, DataTypes } = require('sequelize')

class Adresses extends Model {
    static init(sequelize) {
        super.init({
            //! Campos que representa a tabela
            zipcode: DataTypes.STRING,
            street: DataTypes.STRING,
            number: DataTypes.INTEGER
        }, {
            //! Conexao com o db
            sequelize
        })
    }

    static associate(models){
        //! um Adresses pertence a um User
        this.belongsTo(models.User, {foreignKey: 'user_id', as: 'user'})
    }
}

module.exports = Adresses