import ExtratoCarteiraDTO from "../3.dto/extratoCarteiraDTO.js";
import CarteiraRepository from "../4.dao/carteiraRepository.js";
import UsuarioRepository from "../4.dao/usuarioRepository.js"

const carteiraRepository = new CarteiraRepository();
const usuarioRepository = new UsuarioRepository();

class CarteiraService{
    
    async depositar(valor, cpf){
        const [[{carteira_cpf, carteira_saldo}]] = await carteiraRepository.depositar(Number(valor), cpf);
        const [{usuario_cpf, usuario_nome}] = await usuarioRepository.buscarUsuario(carteira_cpf);
        const extratoCarteiraDTO = new ExtratoCarteiraDTO(usuario_nome, usuario_cpf, valor, carteira_saldo);
        return extratoCarteiraDTO;
        try{
            const [[{carteira_cpf, carteira_saldo}]] = await carteiraRepository.depositar(Number(valor), cpf);
            const [[{usuario_nome, usuario_cpf}]] = await usuarioRepository.buscarUsuario(carteira_cpf);
            const extratoCarteiraDTO = new ExtratoCarteiraDTO(usuario_nome, usuario_cpf, valor, carteira_saldo);
            console.log(extratoCarteiraDTO)
            return extratoCarteiraDTO;
        }catch(e){
            return null;
        }
    }

    // async emprestar(valor, quantParcelas, cpf){
    //     try{
    //         const emprestimo = await carteiraRepository.emprestar(Number(valor), Number(quantParcelas), cpf);
    //         const [{carteira_saldo}] = await carteiraRepository.buscarCarteira(cpf);
    //         const [{usuario_nome}] = await usuarioRepository.buscarUsuario(cpf);
    //         const emprestimoDTO = new ExtratoEmprestimoDTO(usuario_nome, emprestimo.cpf, emprestimo.valorEmprestado, emprestimo.quantParcelas, emprestimo.valorParcela, emprestimo.totalPagar, emprestimo.totalJuros, emprestimo.taxaJurosMensal, Number(carteira_saldo));
    //         return emprestimoDTO;
    //     }catch(e){
    //         return null;
    //     }
    // }

    // async listarEmprestimos(cpf){
    //     try{
    //         const usuario = await usuarioRepository.buscarUsuario(cpf);
    //         const extratos = await carteiraRepository.listarEmprestimos(cpf);
    //         return {"Usuario": usuario, "Emprestimos": extratos};
    //     }catch(e){
    //         return null;
    //     }
    // }
}

export default CarteiraService;