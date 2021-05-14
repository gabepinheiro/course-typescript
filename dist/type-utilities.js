"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// Readonly -> vai transformar as props do obj em readonly
var todo = {
    title: "Assistir Dark de novo",
    description: "Relembrar os detalhes",
    completed: false
};
console.log(todo);
// todo.completed = true
// console.log(todo)
// O ideal é ter uma function que devolve um novo objeto aparitr do obj passado
// trabalhando com o principio da imutabilidade, onde a gente não muda o obj original
//Partial -> deixa todas a props do 'fieldsToUpdate' optional
//permitindo passar somente props que a gente quer atualizar
function updateTodo(todo, fieldsToUpdate) {
    return __assign(__assign({}, todo), fieldsToUpdate);
}
var todo2 = updateTodo(todo, { completed: true });
var todo3 = {
    title: 'Fechar Ghost of Tsushima',
    completed: false
};
var todo4 = {
    title: 'Fechar Ghost of Tsushima',
    completed: false
};
// Pick vs Omit
// - Pick -> quando tiver muita coisa e quiser anular
// - Omit -> quando eu quiser pegar mais coisas
