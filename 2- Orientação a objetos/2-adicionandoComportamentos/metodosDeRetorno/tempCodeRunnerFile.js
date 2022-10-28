// Criando a classe Cliente
class Cliente {
    // Criando os atributos/propriedades
    nome;
    cpf;

}

// Criando a classe ContaCorrente
class ContaCorrente {
    agencia;
    _saldo = 0; // Atributo privado

    // Criando um metodo/comportamento de saque
    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor // Sacando
            return valor // Sem o return a função chamada não retorna nada
        }
    }

    depositar(valor) {
        if (valor < 0) {
            return // Técnica early return
        }

        this._saldo += valor
    }
}

// Criando um novo cliente
const cliente1 = new Cliente() // Criando uma instancia
// "cliente" se tornou a nossa variavel de acesso
cliente1.nome = 'Douglas'
cliente1.cpf = 11122233309

// Criando um novo cliente
const cliente2 = new Cliente() // Criando uma instancia
// "cliente" se tornou a nossa variavel de acesso
cliente2.nome = 'Alice'
cliente2.cpf = 88822233309

const contaCorrenteDouglas = new ContaCorrente() // Criando uma instancia
contaCorrenteDouglas.agencia = 1001

contaCorrenteDouglas.depositar(100) // Depositando
contaCorrenteDouglas.depositar(100) // Depositando
contaCorrenteDouglas.depositar(100) // Depositando

const valorSacado = contaCorrenteDouglas.sacar(50)
console.log(valorSacado)

console.log(contaCorrenteDouglas)