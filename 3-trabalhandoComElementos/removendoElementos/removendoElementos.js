console.log(`Trabalhando com listas`)

// Criando uma lista
const listaDestinos = new Array(
    `São Paulo`,
    `Rio de Janeiro`,
    `Bahia`,
)

// Usamos push para adicionar um item na lista
// Alterando um elemento da lista, e não a lista
listaDestinos.push(`Rio Grande do Sul`)
console.log(listaDestinos)

// (0 - Posição do elemento na lista | 1 - quantidade de elementos para deletar)
listaDestinos.splice(0, 1)

console.log(listaDestinos)

// Exibindo apenas um item da lista com indice
console.log(listaDestinos[0], listaDestinos[2])