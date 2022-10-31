export class ContaPoupanca {

    // Criando construtor após criar a classe
    constructor(saldoInicial, cliente, agencia) {

        // Iniciando propriedades privadas, podemos acessar depois com os acessores GET SET
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
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