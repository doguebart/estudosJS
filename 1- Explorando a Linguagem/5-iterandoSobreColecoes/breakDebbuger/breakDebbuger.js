console.log(`Trabalhando com condicionais`)

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
let destinoExiste = false

while (contador < 3) {

    if (listaDestinos[contador] == destino) {
        destinoExiste = true
        break // Laço não precisa mais ser executado
    }

    contador += 1
}

console.log('Destino existe: ' + destinoExiste)