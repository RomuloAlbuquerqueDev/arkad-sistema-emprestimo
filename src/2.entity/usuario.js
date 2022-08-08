import Carteira from "./carteira.js";

class Usuario{
    nome;
    cpf;
    endereco;
    carteira;

    constructor(nome, cpf, endereco){
        this.nome = nome;
        this.cpf = cpf;
        this.endereco = endereco;
        this.carteira = new Carteira(this.cpf);
    }
}

export default Usuario;