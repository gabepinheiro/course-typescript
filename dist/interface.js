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
var tlou = {
    title: 'The Last of Us',
    description: 'The best game in the world',
    genre: 'Action',
    // platform: ['PS3', 'PS4'],
    getSimilars: function (title) {
        console.log("Similars games to " + title + ": Uncharted, A Plague Tale and Metro...");
    }
};
// tlou.genre = 'new' //Cannot assign to 'genre' because it is a read-only property.
console.log(tlou.genre);
// type guard
if (tlou.getSimilars)
    tlou.getSimilars(tlou.title);
var leftBehind = __assign(__assign({}, tlou), { originalGame: tlou, newContent: ['3 hours story', 'new characters'] });
var CreateGame = /** @class */ (function () {
    function CreateGame(t, d, g) {
        this.title = t;
        this.description = d;
        this.genre = g;
    }
    return CreateGame;
}());
