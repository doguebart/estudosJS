console.log(`Trabalhando com condicionais`)

// Criando uma lista
const listaDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Bahia`,
)

const idadeComprador = 16
console.log('Destinos possiveis')
console.log(listaDestinos)

if (idadeComprador >= 18) {
    console.log('Comprador maior de idade')
    listaDestinos.splice(0, 1) // Removendo item
} else {
    console.log('Comprador menor de idade, não posso vender')
}

console.log(listaDestinos)

// Operadores lógicos
console.log(idadeComprador > 18)
console.log(idadeComprador < 18)
console.log(idadeComprador >= 18)
console.log(idadeComprador <= 18)
console.log(idadeComprador == 18)