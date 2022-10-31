import { Cliente } from "./Cliente.js";
import { Conta } from "./Conta.js";

// Criando a classe ContaCorrente e HERDANDO conteudo da classe conta pra ca
export class ContaCorrente extends Conta {
    static numeroDeContas = 0 // Atributo estático

    constructor(cliente, agencia) {
        super(0, cliente, agencia) // Chamando o construtor do pai porque ele está dentro de um construtor nesta classe
        ContaCorrente.numeroDeContas += 1 // Atributo estático da classe
    }
}