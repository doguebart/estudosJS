import { Conta } from "./Conta.js";

export class ContaPoupanca extends Conta {

    // Criando construtor após criar a classe
    constructor(saldoInicial, cliente, agencia) {
        super(saldoInicial, cliente, agencia) // Chamando o construtor do pai porque ele está dentro de um construtor nesta classe
    }

}