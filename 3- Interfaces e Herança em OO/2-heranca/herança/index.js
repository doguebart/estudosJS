import {Cliente} from './Cliente.js'
import {ContaCorrente} from './ContaCorrente.js'
import { ContaPoupanca } from './ContaPoupanca.js'
import { Conta } from './Conta.js'

// Criando um novo cliente
const cliente1 = new Cliente('Douglas', 11122233309) // Criando uma instancia

const contaCorrenteDouglas = new ContaCorrente(cliente1, 1001) // Criando uma instancia

contaCorrenteDouglas.depositar(500)
contaCorrenteDouglas.sacar(100)

const contaPoupanca = new ContaPoupanca(50, cliente1, 1001)

console.log(contaPoupanca)
console.log(contaCorrenteDouglas)