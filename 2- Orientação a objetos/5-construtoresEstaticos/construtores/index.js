import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'

// Criando um novo cliente
const cliente1 = new Cliente('Douglas', 11122233309) // Criando uma instancia

// Criando um novo cliente
const cliente2 = new Cliente('Alice', 88822233309) // Criando uma instancia

const contaCorrenteDouglas = new ContaCorrente(cliente1, 1001) // Criando uma instancia
contaCorrenteDouglas.depositar(500)

const contaCorrenteAlice = new ContaCorrente(cliente2, 102)

let valor = 200
contaCorrenteDouglas.transferir(valor, contaCorrenteAlice)