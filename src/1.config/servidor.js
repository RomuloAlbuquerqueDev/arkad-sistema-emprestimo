import express from "express";
import RoteadorGeral from "../7.router/roteadorGeral.js";
import cors from 'cors';
import ConfigBanco from "./configBanco.js";

class Server{
    constructor(){
        this.server = express();
        this.roteador = new RoteadorGeral();
        this.configServer();
        this.setPort();
        this.configRotas();
        this.configBanco();
    }

    configServer() {
        this.server.use(express.urlencoded({ extended: true }));
        this.server.use(express.json({ limit: '1mb' }));
        this.server.use(cors());
      }

    setPort(){
        this.server.set("port", 3000).listen(this.server.get("port"), ()=> console.log("Rodando na porta ", this.server.get("port")));
    }

    configRotas(){
        this.server.use(this.roteador.rota);
    }

    configBanco() {
        return new ConfigBanco;
    }
}

export default Server;