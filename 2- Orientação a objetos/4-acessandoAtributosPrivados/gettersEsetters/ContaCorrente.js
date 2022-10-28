import { Cliente } from "./Cliente.js";

// Criando a classe ContaCorrente
export class ContaCorrente {
    agencia;
    _cliente;

    // Atribuindo valor com o acessor SET
    set cliente(novoValor) {
        if (novoValor instanceof Cliente) {
            this._cliente = novoValor
        }
    }

    // Pegando valor com o acessor GET
    get cliente() {
        return this._cliente
    }

    _saldo = 0; // Atributo privado

    get saldo() {
        return this._saldo
    }

    // Criando um metodo/comportamento de saque
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor // Sacando
            return valor // Sem o return a função chamada não retorna nada
        }
    }

    depositar(valor) {
        if (valor < 0) {
            return // Técnica early return, faz as verificações antes
        }

        this._saldo += valor
    }

    // Criando um metodo/comportamento de transferência
    transferir(valor, conta) { // Realizando transferencia de um VALOR para uma CONTA
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado) // Depositando o VALOR nessa CONTA
    }
}