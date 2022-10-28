// Criando a classe Cliente
class Cliente {
    // Criando os atributos/propriedades
    nome;
    cpf;

}

// Criando a classe ContaCorrente
class ContaCorrente {
    agencia;
    saldo;

    // Criando um metodo/comportamento de saque
    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor // Sacando
        }
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
contaCorrenteDouglas.saldo = 0
contaCorrenteDouglas.agencia = 1001


console.log('Valor inicial: ' + contaCorrenteDouglas.saldo) // Valor inicial
contaCorrenteDouglas.saldo = 100 // Depositando
console.log('Saldo em conta: ' + contaCorrenteDouglas.saldo)
contaCorrenteDouglas.sacar(200)


console.log('Saldo em conta: ' + contaCorrenteDouglas.saldo)
console.log(cliente1)
console.log(cliente2)