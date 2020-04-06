// Configuração do banco de dados
module.exports = {
    dialect: "postgree",
    host: "localhost",
    username: "gobarber",
    password: "root",
    database: "gobarber",
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    },
};
