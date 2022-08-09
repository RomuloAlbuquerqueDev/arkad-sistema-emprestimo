import Extrato from "./extrato.js"

class Emprestimo{

    constructor(valor, quantParcelas, cpf){
        this.valor = Number(valor);
        this.quantParcelas = Number(quantParcelas);
        this.cpf = cpf;
        this.extrato = new Extrato(Number(valor), Number(quantParcelas), cpf);
    }


}

export default Emprestimo;