import Usuario from "../2.entity/usuario.js";
import ConfigBanco from "../1.config/configBanco.js";
import { QueryTypes } from "sequelize";

const configBanco = new ConfigBanco();

class Repository{

    async salvar(nome, cpf, endereco){
        const usuario = new Usuario(nome, cpf, endereco);
        const newUsuario = await configBanco.banco.query(`insert into usuario(usuario_nome, usuario_cpf, usuario_endereco) values($1, $2, $3) returning *`,
        {bind: [usuario.nome, usuario.cpf, usuario.endereco], type: QueryTypes.INSERT});
        await configBanco.banco.query(`insert into carteira(carteira_cpf, carteira_saldo) values($1, $2)`,
        {bind: [usuario.cpf, usuario.carteira.saldo], type: QueryTypes.INSERT})
        return newUsuario; 
    }

    async buscar(cpf){
        const usuario = await configBanco.banco.query(`select * from usuario where usuario_cpf = $1`,
        {bind: [cpf], type: QueryTypes.SELECT});
        return usuario;
    }
}

export default Repository;