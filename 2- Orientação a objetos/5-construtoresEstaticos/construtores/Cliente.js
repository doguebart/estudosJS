// Criando a classe Cliente
export class Cliente {
    // Criando os atributos/propriedades
    nome;
    _cpf;

    // Consultando o cpf privado a qualquer momento
    get cpf() {
       return this._cpf
    }

    // Criando construtor para atribuir cpf APENAS quando criar o cliente
    constructor (nome, cpf) {
        this.nome = nome
        this._cpf = cpf
    }
}