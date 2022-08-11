function calcular(valor, quantParcelas){
    let valorEmprestado = valor;
    const taxa = 10;
    const parcelas = quantParcelas;
    const baseParcelaSemTaxa = valorEmprestado/parcelas;

    const array = new Array(parcelas);
    for(let i=0; i<parcelas; i++){
        let taxaDoValorEmprestado = valorEmprestado*taxa/100;
        let parcelaAPagarComTaxa = taxaDoValorEmprestado+baseParcelaSemTaxa;
        valorEmprestado -= baseParcelaSemTaxa;
        array[i] = parcelaAPagarComTaxa;
    }
}
calcular();