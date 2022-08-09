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

    // async emprestar(req, res){
    //     try{
    //         const valor = req.body.valor;
    //         const quantParcelas = req.body.quantParcelas;
    //         const cpf = req.body.cpf;
    //         const demonstrativo = await carteiraService.emprestar(valor, quantParcelas, cpf);
    //         res.status(200).json({"Demonstrativo": demonstrativo});
    //     }catch(error){
    //         console.log(error)
    //         return res.status(500).json({"mensagem": "Erro interno do servidor", error});
    //     }
    // }

    // async listarEmprestimos(req, res){ 
    //     try{
    //         const cpf = req.params.cpf;
    //         const listaEmprestimos = await carteiraService.listarEmprestimos(cpf);
    //         res.status(200).json({"Extratos": listaEmprestimos});
    //     }catch(error){
    //         console.log(error);
    //         return res.status(500).json({"mensagem": "Erro Interno do Servidor", error})
    //     }
    // }
}

export default CarteiraController;