console.log(`\n Trabalhando com condicionais`)

// Criando uma lista
const listaDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Bahia`,
)

const idadeComprador = 18
const estaAcompanhado = false
let temPassagemComprada = false
const destino = 'São Paulo'

console.log('Destinos possiveis')
console.log(listaDestinos)

const podeComprar = idadeComprador >= 18 || estaAcompanhado == true

let contador = 0

while (contador < 3) {
    if (listaDestinos[contador] == destino) {
        console.log('Destino existe')
    } else {
        console.log('Destino não existe')
    }

    contador += 1
}