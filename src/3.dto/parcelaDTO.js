class ParcelaDTO{
    constructor(id, cpf, valorParcela, dataEmprestimo, dataVencimento, numeroParcela, quantParcelas){
        this.parcela_id = id;
        this.cpf = cpf;
        this.valorParcela = valorParcela;
        this.dataEmprestimo = dataEmprestimo;
        this.dataVencimento = dataVencimento; 
        this.numeroParcela = numeroParcela;
        this.quantParcelas = quantParcelas;
    }
}

export default ParcelaDTO;