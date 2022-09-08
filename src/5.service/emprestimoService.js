import ExtratoEmprestimoDTO from "../3.dto/extratoEmprestimoDTO.js";
import CarteiraRepository from "../4.dao/carteiraRepository.js";
import UsuarioRepository from "../4.dao/usuarioRepository.js";
import EmprestimoRepository from "../4.dao/emprestimoRepository.js";
import Parcela from "../2.entity/parcela.js";

const emprestimoRepository = new EmprestimoRepository();
const usuarioRepository = new UsuarioRepository();
const carteiraRepository = new CarteiraRepository();

class EmprestimoService{

    async emprestar(valor, quantParcelas, cpf){
        const emprestimo = await emprestimoRepository.emprestar(parseFloat(valor), parseInt(quantParcelas), cpf);
        const [{carteira_saldo}] = await carteiraRepository.buscarPorCPF(cpf);
        const saldo = parseFloat(carteira_saldo)
        const [{usuario_nome}] = await usuarioRepository.buscarPorCPF(cpf);
        const emprestimoDTO = new ExtratoEmprestimoDTO(usuario_nome, emprestimo.cpf, emprestimo.valorEmprestado, emprestimo.quantParcelas, emprestimo.valorParcela, emprestimo.totalPagar, emprestimo.totalJuros, emprestimo.taxaJurosMensal, saldo, emprestimo.parcelas);
        return emprestimoDTO;
        try{

        }catch(e){
            return null;
        }
    }

    async listarEmprestimos(cpf){
        try{
            const usuario = await usuarioRepository.buscarPorCPF(cpf);
            const extratos = await emprestimoRepository.listarEmprestimos(cpf);
            return {"Usuario": usuario, "Emprestimos": extratos};
        }catch(e){
            return null;
        }
    }

    listarParcelas = async (emprestimoId) => {
        try{
            const result = await emprestimoRepository.listarParcelas(emprestimoId);
            const parcelas = [];
            for(let i = 0; result.length > i; i++){
                parcelas[i] = new Parcela(
                    result[i].parcela_id,
                    result[i].parcela_cpf,
                    result[i].valor_parcela,
                    result[i].data_emprestimo,
                    result[i].data_vencimento,
                    result[i].numero_parcela,
                    result[i].quant_parcelas,
                    )
            }
            return parcelas;
        }catch(e){
            return null;
        }
    }
}

export default EmprestimoService;