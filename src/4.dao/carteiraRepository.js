import Emprestimo from "../2.entity/emprestimo.js";
import ConfigBanco from "../1.config/configBanco.js";
import { QueryTypes } from "sequelize";

const configBanco = new ConfigBanco();

class CarteiraRepository{

    buscarPorCPF = async (cpf) =>
        await configBanco.banco.query(`
            select * from carteira where carteira_cpf = $1`,
        {bind: [cpf], type: QueryTypes.SELECT});

    depositar = async (valor, cpf) => {
        const [{carteira_saldo}] = await configBanco.banco.query(
            `select carteira_saldo from carteira where carteira_cpf = $1`,
            {bind: [cpf], type: QueryTypes.SELECT}
        );
        valor += Number(carteira_saldo);
        const deposito = await configBanco.banco.query(
            `update carteira set carteira_saldo = $1 where carteira_cpf = $2 returning *`,
        {bind: [valor, cpf], type: QueryTypes.UPDATE}
        );
        return deposito;
    }

    pagarParcela = async (usuarioCPF, valorPago, parcelaId) =>
        await configBanco.banco.query(`insert into public.pagamento(usuario_cpf, valor_pago, parcela_id) values($1, $2, $3) returning *`,
        {bind: [usuarioCPF, valorPago, parcelaId], type: QueryTypes.INSERT})

    buscarPagamento = async (usuarioCPF, valorPago, parcelaId) => 
        await configBanco.banco.query(`select * from public.pagamento where usuario_cpf = $1 and valor_pago = $2 and parcela_id = $3`,
        {bind: [usuarioCPF, valorPago, parcelaId], type: QueryTypes.SELECT})
}

export default CarteiraRepository;