let bool = 1

console.log(bool)
console.log(!bool)
console.log(!!bool)


// functions

const imprimirSoma = function (a, b) {
    console.log(a + b)
}

const soma = (a, b) => {
    return a + b
}

// operador ternário

// expressão (retorna true ou false) ? (  true  ) : (  False  )
const resultado = nota => nota >= 7  ? 'Aprovado' : 'Reprovado'

// getter / setter

const sequencia = {
    _valor: 1,
    get valor() { return this.valor },
    set valor(valor) {
        if (valor > this._valor) {
            this._valor = valor
        }
    }

}

// Object (dict) functions

const pessoa = {
    nome: 'Rebeca',
    idade: 2,
    peso:13
}

Object.keys(pessoa)    // ['nome', 'idade', 'peso']
Object.values(pessoa)  // ['Rebeca', 2, 13]
Object.entries(pessoa) // ['nome', 'Rebeca'], ['idade', 2], ['peso', 13]

// definir propriedades 

Object.defineProperty(pessoa, 'dataNascimento', {
    enumerable: true,
    writable: false,
    value: '01/01/2019',
})

// assign
const destino = { a: 1 }
const obj1 = { b: 2 }
const obj2 = { c: 3 }
const obj = Object.assign(destino, obj1, obj2) // junta os objetos

// freeze
Object.freeze(obj) // inalterável

// herança (prototype)

Object.prototype.attr0 = '0'
const avo = { attr1: 'A' }
const pai = {__proto__: avo, attr2: 'B'}
const filho = {__proto__: pai, attr3: 'C'}

console.log(
    filho.attr0,
    filho.attr1,
    filho.attr2,
    filho.attr3
)

// heranças
Object.setPrototypeOf(pai, filho)
const filha = Object.create(pai)

// assim como podemos usar this. para relacionar ao objeto atual, podemos usar super. para relacionar à função pai

// seald

Object.seal(pessoa) // possível alterar atributos, mas nao criar ou excluir

// classes

class Avo {
    constructor(nome, sobrenome) { // __init__ mas em JS
        this.nome = nome    
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo { // Herança
    constructor(nome, sobrenome) {
        this.nome = nome
        this.sobrenome = sobrenome || super.sobrenome
    }
}

// metodos array

/*
.pop()          remove o último
.push()         adiciona no último
.shift()        remove o primeiro
.unshift()      adiciona o primeiro

.splice()       adiciona ou remove -> ** é pq pode colocar vários
.splice(indice, qtd_remove_no_índice, **adiciona_no_índice)

.slice(i)       cria novo array apartir do índice (i)

.forEach        retorna o valor do array e o índice
.map            executa uma função em cada índice do array
.filter         filtra os índices do array
.reduce         transforma o array em um valor só, com um acumulador passando em cada índice
.concat         concatena elementos em uma só lista
.flat           cria um novo array com todos os subarrays concatenados no array principal
.flatMap        junção de map e flat
*/