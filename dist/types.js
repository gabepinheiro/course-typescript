"use strict";
// boolean (true / false)
var isOpen;
isOpen = true;
// isOpen = 'false'
//string ('foo', "foo", `foo`)
var message;
message = "foo " + isOpen;
//number (int, float, decimal...)
var total;
total = 10;
total = 0xff0;
total = 62.5;
//array
var items;
items = ['foo', 'bar'];
var items2;
items2 = [1, 2, 3];
// type ArrayDinamic = string | number | [] | Object
var items3 = ['1', 2, [1, 2], { item1: function () { return console.log(); } }];
// tuple
var title;
title = [1, 'foo', 'bar'];
//Enumerator para criar um conjunto de chave e valor
//enum
var Colors;
(function (Colors) {
    Colors["white"] = "#fff";
    Colors["black"] = "#000";
})(Colors || (Colors = {}));
Colors.white;
//any -> qualquer coisa. NÃO É LEGAL!
var coisa;
coisa = 'qualquer';
coisa = [];
coisa = 10;
coisa = {};
//void (vazio) -> quando a gente não retorna nada
function logger() {
    console.log('foo');
}
//never - nunca vai retornar
function error() {
    throw new Error('error');
}
//object- qualquer coisa que não seja os tipos primitivos será um object
var cart;
// cart = true
// cart = 'string'
cart = {
    key: 'fi'
};
// Type Inference -> inferência de tipos
//  - Nem sempre é necessário definir o tipo.
//  - TS é inteligente e consegue entender qual foi o tipo passado
var message2 = 'Mensagem definida';
// message2 = 1 //Type 'number' is not assignable to type 'string'
message2 = 'string nova';
window.addEventListener('click', function (e) {
    console.log(e.target);
    // e.foo // Property 'foo' does not exist on type 'MouseEvent'
});
