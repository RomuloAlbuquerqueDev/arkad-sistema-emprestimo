import ExtratoCarteiraDTO from "../3.dto/extratoCarteiraDTO.js";
import CarteiraRepository from "../4.dao/carteiraRepository.js";
import UsuarioRepository from "../4.dao/usuarioRepository.js"

const carteiraRepository = new CarteiraRepository();
const usuarioRepository = new UsuarioRepository();

class CarteiraService{
    
    async depositar(valor, cpf){
        try{
            const [[{carteira_cpf, carteira_saldo}]] = await carteiraRepository.depositar(Number(valor), cpf);
            const saldo = parseFloat(carteira_saldo)
            const [{usuario_cpf, usuario_nome}] = await usuarioRepository.buscarPorCPF(carteira_cpf);
            const extratoCarteiraDTO = new ExtratoCarteiraDTO(usuario_nome, usuario_cpf, valor, saldo);
            return extratoCarteiraDTO;
        }catch(e){
            return null;
        }
    }

    pagarParcela = async (cpf, valor, parcelaId) =>{
        const result = await carteiraRepository.buscarPagamento(cpf, valor, parcelaId)    
        if(result.length === 0){
            console.log("::::::::::::::::::",result)
        }else{
            return await carteiraRepository.pagarParcela(cpf, valor, parcelaId);
        }
    }   
}

export default CarteiraService;