import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

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
contaCorrenteDouglas.cliente = cliente1 // Associando conta corrente a um cliente
contaCorrenteDouglas.depositar(500)

const contaCorrenteAlice = new ContaCorrente()
contaCorrenteAlice.cliente = cliente2 // Associando conta corrente a um cliente
contaCorrenteAlice.agencia = 102

contaCorrenteDouglas.transferir(200, contaCorrenteAlice)

console.log(contaCorrenteAlice)
console.log(contaCorrenteDouglas)