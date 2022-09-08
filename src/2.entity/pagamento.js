class Pagamento{
    construtor(
        usuarioCPF,
        parcelaId,
        dataPagamento,
        valorPago
    ){
        this.usuarioCPF = usuarioCPF;
        this.parcelaId = parcelaId;
        this.dataPagamento = dataPagamento;
        this.valorPago = valorPago
    }
}

export default Pagamento;