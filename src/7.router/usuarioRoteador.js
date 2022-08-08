import {Router} from "express";
import UsuarioController from "../6.controller/usuarioController.js"

class UsuarioRoteador{
    constructor(){
        this.rota = new Router();
        this.usuarioController = new UsuarioController();
        this.rota.post('/cadastrar', this.usuarioController.salvar);
        this.rota.get('/buscar/:cpf', this.usuarioController.buscar);    
    }
}

export default UsuarioRoteador;