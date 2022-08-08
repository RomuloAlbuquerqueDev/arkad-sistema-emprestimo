import { Sequelize } from "sequelize";
import "dotenv/config";

class ConfigBanco{
    constructor(){
        this.banco = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
            host: process.env.DB_HOST,
            port: Number(process.env.DB_PORT),
            dialect: 'postgres'
        })

        // this.banco.authenticate().then(() => {
        //   console.log("Conectado ao banco " + process.env.DB_NAME)
        // }).catch((error) => {
        //   console.log("Erro ao conectar com " + process.env.DB_NAME, error)
        // })
    }
}

export default ConfigBanco;