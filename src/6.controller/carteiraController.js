import CarteiraService from "../5.service/carteiraService.js";

const carteiraService = new CarteiraService();

class CarteiraController{

    async depositar(req, res){
        try{
            const valor = req.body.valor;
            const cpf = req.body.cpf;
            const extrato = await carteiraService.depositar(parseFloat(valor), cpf);
            res.status(200).json({"Extrato": extrato});
        }catch(error){
            console.log(error);
            return res.status(500).json({"mensagem": "Erro Interno do Servidor", error});
        }
    }

    pagarParcela = async (req, res) => {
        try{
            const cpf = req.body.usuario_cpf; 
            const valor = req.body.valor_pago;
            const parcelaId = req.body.parcela_id;
            res.status(200).json(await carteiraService.pagarParcela(cpf, valor, parcelaId));
        }catch(error){
            console.log(error);
            return res.status(500).json({"mensagem": "Erro Interno do Servidor", error});
        }
    }
}

export default CarteiraController;