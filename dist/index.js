"use strict";
var input1 = document.querySelector('.num1');
var input2 = document.querySelector('.num2');
var btn = document.querySelector('.somar');
//Não foi necessário tipar o retorno, pois o TypeScript já entende que será
//retornado um número
function sum(a, b) {
    return a + b;
}
btn.addEventListener('click', function () {
    console.log(sum(Number(input1.value), Number(input2.value)));
});
