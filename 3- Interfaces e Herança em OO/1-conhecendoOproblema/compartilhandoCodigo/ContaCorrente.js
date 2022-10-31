import { Cliente } from "./Cliente.js";

// Criando a classe ContaCorrente
export class ContaCorrente {
    static numeroDeContas = 0 // Atributo estático

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

    get saldo() {
        return this._saldo
    }

    constructor(cliente, agencia) {
        this.agencia = agencia
        this.cliente = cliente // Usando um acessor que está dentro de uma classe
        this._saldo = 0
        ContaCorrente.numeroDeContas += 1 // Atributo estático da classe
    }

    

    // Criando um metodo/comportamento de saque
    sacar(valor) {

        // Aplicando taxa | REGRA DO BYTEBANK
        taxa = 1.1 * valor

        if (this._saldo >= valor) {
            this._saldo -= valor // Sacando
            return valor // Sem o return a função chamada não retorna nada
        }
    }

    depositar(valor) {
        if (valor < 100) { // Agora eu n posso depositar valores abaixo de 100 reais
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