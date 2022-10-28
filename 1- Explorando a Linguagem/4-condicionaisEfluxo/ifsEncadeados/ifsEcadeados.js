console.log(`Trabalhando com condicionais`)

// Criando uma lista
const listaDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Bahia`,
)

const idadeComprador = 16
const estaAcompanhado = true
console.log('Destinos possiveis')
console.log(listaDestinos)

if (idadeComprador >= 18) {
    console.log('Comprador maior de idade')
    listaDestinos.splice(0, 1) // Removendo item
} else {
    // A pessoa é menor de idade

    if (estaAcompanhado) {
        console.log('Comprador está acompanhado')
        listaDestinos.splice(0, 1) // Removendo item
    } else {
        console.log('É menor de idade e está desacompanhado')
    }

}

console.log(listaDestinos)