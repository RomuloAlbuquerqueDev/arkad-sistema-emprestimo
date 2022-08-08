class ExtratoEmprestimoDTO{
    constructor(nome, cpf, valor, quantParcelas, valorParcela, totalPagar, totalJuros, porcentagemMensal, saldoAtualCarteira){
        this.nome = nome
        this.cpf = cpf;
        this.valor = valor;
        this.quantParcelas = quantParcelas;
        this.valorParcela = valorParcela; 
        this.totalPagar = totalPagar;
        this.totalJuros = totalJuros;
        this.porcentagemMensal = porcentagemMensal;
        this.saldoAtualCarteira = saldoAtualCarteira;
    }
}

export default ExtratoEmprestimoDTO;