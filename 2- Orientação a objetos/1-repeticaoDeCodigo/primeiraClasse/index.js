// Criando a classe Cliente
class Cliente {
    // Criando os atributos/propriedades
    nome;
    cpf;
    agencia;
    saldo;
    rg;
}

// Criando um novo cliente
const cliente1 = new Cliente() // Criando uma instancia

// "cliente" se tornou a nossa variavel de acesso
cliente1.nome = 'Douglas'
cliente1.cpf = 11122233309
cliente1.agencia = 1001
cliente1.saldo = 0
cliente1.rg = 123456789

console.log(cliente1)