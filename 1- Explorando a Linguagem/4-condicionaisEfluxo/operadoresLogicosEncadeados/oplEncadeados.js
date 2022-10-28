console.log(`Trabalhando com condicionais`)

// Criando uma lista
const listaDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Bahia`,
)

const idadeComprador = 18
const estaAcompanhado = false
const temPassagemComprada = true

console.log('Destinos possiveis')
console.log(listaDestinos)

if (idadeComprador >= 18 || estaAcompanhado) {
    console.log('Compra realizada com sucesso')
    listaDestinos.splice(1, 1) // Remove o item
} else {
    console.log('Não é maior de idade e não posso vender')
}

console.log('Embarque \n \n')
if (idadeComprador >= 18 && temPassagemComprada) {
    console.log('Boa viagem')
} else {
    console.log('Você não pode embarcar')
}

console.log(listaDestinos)