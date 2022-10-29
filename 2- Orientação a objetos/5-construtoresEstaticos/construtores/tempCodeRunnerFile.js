import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

// Criando um novo cliente
const cliente1 = new Cliente('Douglas', 11122233309) // Criando uma instancia

// Criando um novo cliente
const cliente2 = new Cliente('Alice', 88822233309) // Criando uma instancia
console.log(cliente2.cpf)

const contaCorrenteDouglas = new ContaCorrente() // Criando uma instancia
contaCorrenteDouglas.agencia = 1001
contaCorrenteDouglas.cliente = cliente1 // Associando conta corrente a um cliente
contaCorrenteDouglas.depositar(500)

const contaCorrenteAlice = new ContaCorrente()

// Atribuição direta / Acessando niveis de profundidade pq o cliente é apenas uma referencia
contaCorrenteAlice.cliente = cliente1
contaCorrenteAlice.agencia = 102

let valor = 200
contaCorrenteDouglas.transferir(valor, contaCorrenteAlice)