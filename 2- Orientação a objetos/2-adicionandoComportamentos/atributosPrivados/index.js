// Criando a classe Cliente
class Cliente {
    // Criando os atributos/propriedades
    nome;
    cpf;

}

// Criando a classe ContaCorrente
class ContaCorrente {
    agencia;
    #saldo = 0; // Atributo provado

    // Criando um metodo/comportamento de saque
    sacar(valor) {
        if (this.#saldo >= valor) {
            this.#saldo -= valor // Sacando
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor
            console.log(this.#saldo)
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
contaCorrenteDouglas.agencia = 1001

contaCorrenteDouglas.depositar(100) // Depositando

contaCorrenteDouglas.sacar(50)

console.log(contaCorrenteDouglas)