// rest(juntar)/spread(espalhar)


// spread com objeto
const funcionario = { nome: 'Maria', salario: 10000}
const clone = { ativo: true, ...funcionario}

// spread com array
const grupoA = ['João', 'Pedro', 'Glória']
const grupoFinal = ['Felipe', ...grupoA, 'Melissa']

// tagged template
// executa uma função com as template string's como parâmetro

function real(partes, ...valores) {
    const resultado = []
    valores.forEach((valor, indice) => {
        valor = isNaN(valor) ? valor : `R$${valor.toFixed(2)}`
        resultado.push(partes[indice], valor)
    })
    return resultado.join('')
}
const preco = 29.9
const precoParcela = 11
console.log(real `1x de ${preco} ou 3x de ${precoParcela}.`)

// for of

// ao invés de iterar sobre índices, itera sobre os valores
const assuntosEcma = ['Map', 'Set', 'Promise']

for (let i in assuntosEcma) {
    console.log(i)
}

for (let assunto of assuntosEcma) {
    console.log(assunto)
}