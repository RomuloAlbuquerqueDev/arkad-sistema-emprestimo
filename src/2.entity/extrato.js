class Extrato{
    constructor(valor, quantParcelas, cpf){
        this.cpf = cpf;
        this.totalPagar = 0;
        this.quantParcelas = quantParcelas;
        this.valorParcela = 0;
        this.valorEmprestado = valor;
        this.totalJuros = 0;
        this.taxaJurosMensal = 10;
        this.calcular(valor, quantParcelas);
    }

    calcular(valor, quantParcelas){
        const array = [quantParcelas];
        let valorxparcela = valor/quantParcelas;
        let totaljuros = 0;
        let totalpagar = 0;
        let valorparcela = 0;

        for(let i = 0;  i < quantParcelas; i++){
            while(valor >= valorxparcela){
                totaljuros += (valor*0.10); 
                totalpagar = valor + totaljuros;
                valorparcela = totalpagar/quantParcelas;
                array[i] = totalpagar;
                valor -= (valor/quantParcelas);
            }
        }
        this.totalPagar = totalpagar;
        this.valorParcela = valorparcela;
        this.totalJuros = totaljuros;
        console.log(this.totalPagar, this.totalJuros, this.valorParcela)
    }
}

export default Extrato;