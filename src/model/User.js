const { Model, DataTypes } = require('sequelize')

class User extends Model {
    static init(sequelize){
        super.init({
            //! Campos que representa a tabela
            name: DataTypes.STRING,
            email: DataTypes.STRING
        }, {
            //! Conexao com o db
            sequelize
        })
    }
    static associate(models) {
        //! um User tem muitos Adresses
        this.hasMany(models.Adresses, { foreignKey: 'user_id', as: 'adresses' })
    }
}

module.exports = User