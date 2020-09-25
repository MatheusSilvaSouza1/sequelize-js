//! OBJETO DE CONFIGURACAO DO BANCO DE DADOS
module.exports = {
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: '12345678',
    database: 'manejo',
    define: {
        timestamps: true,
        underscored: true
    }
}