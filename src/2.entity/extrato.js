import Parcela from "./parcela.js";

class Extrato{
    constructor(valor, quantParcelas, cpf){
        this.cpf = cpf;
        this.totalPagar = 0;
        this.quantParcelas = parseInt(quantParcelas);
        this.valorParcela = 0;
        this.valorEmprestado = parseFloat(valor);
        this.totalJuros = 0;
        this.taxaJurosMensal = 10;
        this.calcular(parseFloat(valor), parseInt(quantParcelas));
        this.parcelas = this.gerarParcela(this.cpf, this.valorParcela, 1, this.quantParcelas);
    }

    calcular(valor, quantParcelas){
        let valorInicial = valor;
        let valorEmprestado = valor;
        const taxa = 10;
        const parcelas = quantParcelas;
        const baseParcelaSemTaxa = valorEmprestado/parcelas;
        let parcelaAPagarComTaxa = 0;
        let taxaDoValorEmprestado = 0;
        let valorFinalParcelaFixa = 0;
        let valorTotalFinalPagar = 0;
        let valorFinalTotalJuros = 0;
    
        for(let i=0; i<parcelas; i++){
            taxaDoValorEmprestado = valorEmprestado*taxa/100;
            valorFinalTotalJuros += taxaDoValorEmprestado;
            parcelaAPagarComTaxa = taxaDoValorEmprestado+baseParcelaSemTaxa;
            valorEmprestado -= baseParcelaSemTaxa;
            valorTotalFinalPagar = valorInicial + valorFinalTotalJuros;
            valorFinalParcelaFixa = valorTotalFinalPagar/parcelas;
        }

        this.totalPagar = valorTotalFinalPagar;
        this.valorParcela = valorFinalParcelaFixa;
        this.totalJuros = valorFinalTotalJuros;
    }

    gerarParcela(cpf, valorParcela, dataEmprestimo, quantParcelas){
        const parcelas = [parseInt(quantParcelas)];
        let dataVencimento = parseInt(dataEmprestimo);
        for(let i=0; i<parseInt(quantParcelas); i++){
            dataVencimento += 30;
            const numeroParcela=i+1;
            parcelas[i] = new Parcela(cpf, parseInt(valorParcela), dataEmprestimo, dataVencimento, numeroParcela, quantParcelas);
        }
        return parcelas;
    }
}

export default Extrato;