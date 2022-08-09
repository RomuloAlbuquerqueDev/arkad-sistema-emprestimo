class Carteira{
    saldo;
    cpf;

    constructor(cpf){
        this.saldo = 0;
        this.cpf = cpf;

    }

    depositar(valor){
        this.saldo += Number(valor);
    }
}

export default Carteira;