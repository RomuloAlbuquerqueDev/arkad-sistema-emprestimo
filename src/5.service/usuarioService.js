//import Repository from "..//4.dao/repository.js";
import UsuarioRepository from "../4.dao/usuarioRepository.js";
import CarteiraRepository from "../4.dao/carteiraRepository.js"; 
import UsuarioDTO from "../3.dto/usuarioDTO.js";
import Usuario from "../2.entity/usuario.js";
import UsuarioSimplesDTO from "../3.dto/usuarioSimplesDTO.js";

const usuarioRepository = new UsuarioRepository();

class UsuarioService{
    
    async salvar(nome, cpf, endereco){
        try{
            const usuarioEncontrado = await usuarioRepository.seJaExisteCPF(cpf);
            if(usuarioEncontrado.length !== 0){
                return "CPF já existe";
            }else{
                const usuario = new Usuario(nome, cpf, endereco);
                const [[{usuario_nome, usuario_cpf, usuario_endereco}]] = await usuarioRepository.salvar(nome, cpf, endereco);
                const usuarioDTO = new UsuarioDTO(usuario_nome, usuario_cpf, usuario_endereco, usuario.carteira.saldo);
                return usuarioDTO;
            }
        }catch(error){
            console.log(error);
            return { error };
            // return { deuErro: true, error };
        }
    }

    async buscarPorCPF(cpf){
        try{
            const [{usuario_nome, usuario_cpf, usuario_endereco}] = await usuarioRepository.buscarPorCPF(cpf);
             return new UsuarioDTO(usuario_nome, usuario_cpf, usuario_endereco); 
        }catch(error){
            console.log(error);
            return { error };
        }
    }

    async buscarTodos(){
        try{
            let list = [];
            list = await usuarioRepository.buscarTodos();
            const listDTO = [];
            for (let i = 0; list.length > i; i++){
                listDTO[i] = new UsuarioSimplesDTO(list[i].usuario_nome, list[i].usuario_cpf, list[i].usuario_endereco);
            }
             return listDTO;
        }catch(error){
            console.log(error);
            return { error };
        }
    }
}

export default UsuarioService;