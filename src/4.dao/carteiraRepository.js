import Emprestimo from "../2.entity/emprestimo.js";
import ConfigBanco from "../1.config/configBanco.js";
import { QueryTypes } from "sequelize";

const configBanco = new ConfigBanco();

class CarteiraRepository{

    async buscarCarteira(cpf){
        return await configBanco.banco.query(`
            select * from carteira where carteira_cpf = $1
        `,
        {bind: [cpf], type: QueryTypes.SELECT})
    }

    // async emprestar(valor, quantParcelas, cpf){
    //     const emprestimo = new Emprestimo(valor, quantParcelas, cpf);
    //     await configBanco.banco.query(`
    //     insert into emprestimo(emprestimo_cpf, emprestimo_valor, emprestimo_quant_parcelas) values($1, $2, $3) returning *`,
    //     {bind: [valor, quantParcelas, cpf], type: QueryTypes.INSERT});
    //     await configBanco.banco.query(`
    //     insert into extrato(extrato_cpf, extrato_total_pagar, extrato_quant_parcelas, extrato_valor_parcela, extrato_valor_emprestado, extrato_total_juros, extrato_taxa_juros_mensal) values($1, $2, $3, $4, $5, $6, $7)`,
    //     {bind: [emprestimo.extrato.cpf, emprestimo.extrato.totalPagar, emprestimo.extrato.quantParcelas, emprestimo.extrato.valorParcela, emprestimo.extrato.valorEmprestado, emprestimo.extrato.totalJuros, emprestimo.extrato.taxaJurosMensal], 
    //     type: QueryTypes.INSERT})
    //     await this.depositar(valor, cpf);
    //     return emprestimo.extrato; 
    // }

    async depositar(valor, cpf){
        const deposito = await configBanco.banco.query(
            `update carteira set carteira_saldo = $1 where carteira_cpf = $2 returning *`,
        {bind: [valor, cpf], type: QueryTypes.UPDATE});
        return deposito;
    }

    // async listarEmprestimos(cpf){
    //     const extratos = await configBanco.banco.query(`select * from extrato where extrato_cpf = $1`,
    //     {bind: [cpf], type: QueryTypes.SELECT});
    //     return extratos;
    // }
}

export default CarteiraRepository;