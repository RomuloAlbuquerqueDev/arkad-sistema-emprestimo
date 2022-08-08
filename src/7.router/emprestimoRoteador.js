import {Router} from "express";
import EmprestimoController from "../6.controller/emprestimoController.js";

class EmprestimoRoteador{
    constructor(){
        this.rota = new Router();
        this.emprestimoController = new EmprestimoController();
        this.rota.post('/emprestar', this.emprestimoController.emprestar);
        this.rota.get('/listar/:cpf', this.emprestimoController.listarEmprestimos);
    }
}

export default EmprestimoRoteador;