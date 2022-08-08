class Carteira{
    saldo;
    cpf;

    constructor(cpf){
        this.saldo = 0;
        this.cpf = cpf;

    }

    depositar(valor){
        this.saldo += valor;
    }
}

export default Carteira;