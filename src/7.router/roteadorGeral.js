import {Router} from "express";
import UsuarioRoteador from "./usuarioRoteador.js"
import CarteiraRoteador from "./carteiraRoteador.js"
import EmprestimoRoteador from "./emprestimoRoteador.js"

class RoteadorGeral{
    constructor(){
        this.rota = new Router();
        this.usuarioRoteador = new UsuarioRoteador();
        this.carteiraRoteador = new CarteiraRoteador();
        this.emprestimoRoteador = new EmprestimoRoteador()
        this.rota.use('/usuario', this.usuarioRoteador.rota);
        this.rota.use('/carteira', this.carteiraRoteador.rota);
        this.rota.use('/emprestimo', this.emprestimoRoteador.rota);
    }
}

export default RoteadorGeral;