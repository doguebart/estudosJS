export class Conta {
    // Criando construtor após criar a classe
    constructor(saldoInicial, cliente, agencia) {

        // Iniciando propriedades privadas, podemos acessar depois com os acessores GET SET
        this._saldo = saldoInicial
        this._cliente = cliente
        this._agencia = agencia
    }

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

    // Criando um metodo/comportamento de saque
    sacar(valor) {

        // Aplicando taxa | REGRA DO BYTEBANK
        let taxa = 1

        const valorSacado = taxa * valor

        if (this._saldo >= valorSacado) {
            this._saldo -= valorSacado // Sacando
            return valorSacado // Sem o return a função chamada não retorna nada
        }
    }

    depositar(valor) {

        this._saldo += valor
    }

    // Criando um metodo/comportamento de transferência
    transferir(valor, conta) { // Realizando transferencia de um VALOR para uma CONTA
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado) // Depositando o VALOR nessa CONTA
    }
}