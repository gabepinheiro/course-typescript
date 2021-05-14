// boolean (true / false)
let isOpen: boolean;
isOpen = true
// isOpen = 'false'

//string ('foo', "foo", `foo`)
let message: string
message = `foo ${isOpen}`

//number (int, float, decimal...)
let total: number
total = 10
total = 0xff0
total = 62.5

//array
let items: string[]
items = ['foo', 'bar']

let items2: Array<number>;
items2 = [1, 2, 3]
// type ArrayDinamic = string | number | [] | Object
let items3: any[] = ['1', 2, [1,2], { item1: () => console.log() }]

// tuple
let title: [number, string, string]
title = [1, 'foo', 'bar']

//Enumerator para criar um conjunto de chave e valor
//enum
enum Colors {
  white = '#fff',
  black = '#000'
}
Colors.white;
 
//any -> qualquer coisa. NÃO É LEGAL!
let coisa: any
coisa = 'qualquer'
coisa = []
coisa = 10
coisa = {}

//void (vazio) -> quando a gente não retorna nada
function logger(): void{
  console.log('foo')
}

// null / undefined
type Bla = string | undefined

//never - nunca vai retornar
function error(): never {
  throw new Error('error')
}

//object- qualquer coisa que não seja os tipos primitivos será um object
let cart: object
// cart = true
// cart = 'string'
cart = {
  key: 'fi'
}

// Type Inference -> inferência de tipos
//  - Nem sempre é necessário definir o tipo.
//  - TS é inteligente e consegue entender qual foi o tipo passado

let message2 = 'Mensagem definida'
// message2 = 1 //Type 'number' is not assignable to type 'string'
message2 = 'string nova'

window.addEventListener('click', (e) => {
  console.log(e.target)
  // e.foo // Property 'foo' does not exist on type 'MouseEvent'
})











