console.log('Trabalhando com variáveis')
// JS é case sensitive

const idade = 29 // SEMPRE COLOCAR DECLARAÇÃO DA VARIAVEL

// Agora com a const, o valor da variavel não pode ser mudado
const primeiroNome = 'Douglas'
const sobrenome = 'Welber'

// console.log(nome + ' ' + sobrenome)
console.log(primeiroNome, sobrenome)
console.log(`Meu nome é ${primeiroNome} ${sobrenome}`) // Exemplo de INTERPOLAÇÃO

// As vezes o let é necessario, podemos usaer let em loops
let contador = 0
contador = contador + 1

// Não funciona pq a const não permite reescrever a variavel
nomeCompleto = primeiroNome + " " + sobrenome

console.log(nomeCompleto)