import {Router} from "express";
import CarteiraController from "../6.controller/carteiraController.js";

class CarteiraRoteador{
    constructor(){
        this.rota = new Router();
        this.carteiraController = new CarteiraController();
        this.rota.post('/depositar', this.carteiraController.depositar);
        // this.rota.post('/emprestar', this.carteiraController.emprestar);
        // this.rota.get('/listaremprestimos/:cpf', this.carteiraController.listarEmprestimos);
    }
}

export default CarteiraRoteador;