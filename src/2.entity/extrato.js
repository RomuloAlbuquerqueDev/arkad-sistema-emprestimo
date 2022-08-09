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
        const array = [parseInt(quantParcelas)];
        let valorxparcela = parseFloat(valor)/quantParcelas;
        let totaljuros = 0;
        let totalpagar = 0;
        let valorparcela = 0;

        for(let i = 0;  i < parseInt(quantParcelas); i++){
            while(parseFloat(valor) >= valorxparcela){
                totaljuros += (parseFloat(valor)*0.10); 
                totalpagar = parseFloat(valor) + totaljuros;
                valorparcela = totalpagar/parseInt(quantParcelas);
                array[i] = totalpagar;
                valor -= (parseFloat(valor)/parseInt(quantParcelas));
            }
            console.log(valor)
        }
        this.totalPagar = totalpagar;
        this.valorParcela = valorparcela;
        this.totalJuros = totaljuros;
    }

    gerarParcela(cpf, valorParcela, dataEmprestimo, quantParcelas){
        const parcelas = [parseInt(quantParcelas)];
        let dataVencimento = parseInt(dataEmprestimo);
        for(let i=1; i<parseInt(quantParcelas); i++){
            dataVencimento += 30;
            const numeroParcela=i;
            parcelas[i] = new Parcela(cpf, parseInt(valorParcela), dataEmprestimo, dataVencimento, numeroParcela, quantParcelas);
        }
        return parcelas;
    }
}

export default Extrato;