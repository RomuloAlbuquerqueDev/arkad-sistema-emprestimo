//import Repository from "..//4.dao/repository.js";
import UsuarioRepository from "../4.dao/usuarioRepository.js";
import CarteiraRepository from "../4.dao/carteiraRepository.js"; 
import UsuarioDTO from "../3.dto/usuarioDTO.js";
import Usuario from "../2.entity/usuario.js";

const usuarioRepository = new UsuarioRepository();
const carteiraRepository = new CarteiraRepository();

class UsuarioService{
    
    async salvar(nome, cpf, endereco){
        try{
            // const usuarioEncontrato = await usuarioRepository.buscarUsuario(cpf);
            // if(usuarioEncontrato){
            //     throw new Error('Usuário já existe.');
            // }  
            const usuario = new Usuario(nome, cpf, endereco);
            const [[{usuario_nome, usuario_cpf, usuario_endereco}]] = await usuarioRepository.salvar(nome, cpf, endereco);
            const usuarioDTO = new UsuarioDTO(usuario_nome, usuario_cpf, usuario_endereco, usuario.carteira.saldo);
            return usuarioDTO;
        }catch(error){
            console.log(error);
            return { error };
            // return { deuErro: true, error };
        }
    }

    async buscar(cpf){
        try{
            const [{usuario_nome, usuario_cpf, usuario_endereco}] = await usuarioRepository.buscar(cpf);
             return new UsuarioDTO(usuario_nome, usuario_cpf, usuario_endereco); 
        }catch(error){
            console.log(error);
            return { error };
        }
    }
}

export default UsuarioService;