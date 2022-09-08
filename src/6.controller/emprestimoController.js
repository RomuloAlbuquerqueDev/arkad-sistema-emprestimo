import EmprestimoService from "../5.service/emprestimoService.js";

const emprestimoService = new EmprestimoService();

class EmprestimoController{

    async emprestar(req, res){
        try{
            const valor = parseFloat(req.body.valor);
            const quantParcelas = parseInt(req.body.quantParcelas);
            const cpf = req.body.cpf;
            const demonstrativo = await emprestimoService.emprestar(parseFloat(valor), parseInt(quantParcelas), cpf);
            res.status(200).json({"Demonstrativo": demonstrativo});
        }catch(error){
            console.log(error)
            return res.status(500).json({"mensagem": "Erro interno do servidor", error});
        }
    }

    async listarEmprestimos(req, res){ 
        try{
            const cpf = req.params.cpf;
            const listaEmprestimos = await emprestimoService.listarEmprestimos(cpf);
            res.status(200).json({"Extratos": listaEmprestimos});
        }catch(error){
            console.log(error);
            return res.status(500).json({"mensagem": "Erro Interno do Servidor", error})
        }
    }

    listarParcelas = async (req, res) =>{ 
        try{
            const emprestimoId = req.params.emprestimo_id;
            const listaParcelas = await emprestimoService.listarParcelas(emprestimoId);
            res.status(200).json({"Parcelas": listaParcelas});
        }catch(error){
            console.log(error);
            return res.status(500).json({"mensagem": "Erro Interno do Servidor", error})
        }
    }
}

export default EmprestimoController;