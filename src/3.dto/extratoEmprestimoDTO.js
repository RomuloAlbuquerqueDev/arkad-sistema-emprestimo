class ExtratoEmprestimoDTO{
    constructor(nome, cpf, valor, quantParcelas, valorParcela, totalPagar, totalJuros, porcentagemMensal, saldoAtualCarteira, parcelas){
        this.nome = nome
        this.cpf = cpf;
        this.valor = valor;
        this.quantParcelas = quantParcelas;
        this.valorParcela = valorParcela; 
        this.totalPagar = totalPagar;
        this.totalJuros = totalJuros;
        this.porcentagemMensal = porcentagemMensal;
        this.saldoAtualCarteira = saldoAtualCarteira;
        this.parcelas = parcelas;
    }
}

export default ExtratoEmprestimoDTO;