import UsuarioService from "../5.service/usuarioService.js";

const usuarioService = new UsuarioService();

class UsuarioController{
    
    async salvar(req, res){ 
        try{
            const nome = req.body.nome;
            const cpf = req.body.cpf;
            const endereco = req.body.endereco;
            const usuario = await usuarioService.salvar(nome, cpf, endereco);
            // if(usuario.deuErro){
            //     res.status(400).json({erro: usuario.error});
            // }
            res.status(200).json(usuario);
        }catch(error){
            console.log(error);
            return res.status(500).json({"mensagem": "Erro Interno do Servidor", error});
        }
    }

    async buscar(req, res){
        try{
            const cpf = req.params.cpf;
            const usuario = await usuarioService.buscar(cpf);
            res.status(200).json(usuario);
        }
        catch(error){
            console.log(error);
            return res.status(500).json({"mensagem": "Erro Interno do Servidor", error});
        }
    }
}

export default UsuarioController;