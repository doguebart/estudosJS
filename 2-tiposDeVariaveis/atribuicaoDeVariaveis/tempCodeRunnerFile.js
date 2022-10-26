console.log('Trabalhando com variáveis')
// JS é case sensitive

const idade = 29 // SEMPRE COLOCAR DECLARAÇÃO DA VARIAVEL

// Agora com a const, o valor da variavel não pode ser mudado
const nome = 'Douglas'
const sobrenome = 'Welber'

// console.log(nome + ' ' + sobrenome)
console.log(nome, sobrenome)
console.log(`Meu nome é ${nome} ${sobrenome}`) // Exemplo de INTERPOLAÇÃO

// Não funciona pq a const não permite reescrever a variavel
nomeCompleto = nome + " " + sobrenome

console.log(nomeCompleto)