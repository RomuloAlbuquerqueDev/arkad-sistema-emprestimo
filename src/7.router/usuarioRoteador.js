import {Router} from "express";
import UsuarioController from "../6.controller/usuarioController.js"

class UsuarioRoteador{
    constructor(){
        this.rota = new Router();
        this.usuarioController = new UsuarioController();
        this.rota.post('/cadastrar', this.usuarioController.salvar);
        this.rota.get('/buscarPorCPF/:cpf', this.usuarioController.buscarPorCPF);   
        this.rota.get('/buscarTodos', this.usuarioController.buscarTodos); 
    }
}

export default UsuarioRoteador;