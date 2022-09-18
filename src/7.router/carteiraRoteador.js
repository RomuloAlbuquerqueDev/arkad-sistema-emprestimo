import {Router} from "express";
import CarteiraController from "../6.controller/carteiraController.js";

class CarteiraRoteador{
    constructor(){
        this.rota = new Router();
        this.carteiraController = new CarteiraController();
        this.rota.post('/depositar', this.carteiraController.depositar);
        this.rota.post('/pagarparcela', this.carteiraController.pagarParcela);
    }
}

export default CarteiraRoteador;