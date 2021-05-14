"use strict";
// accountInfo
//charInfo
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
var account = {
    id: 123,
    name: 'Gabe',
    email: 'gabe@dev.com'
};
var char = {
    nickname: 'Gabeboy',
    level: 99
};
var player = __assign(__assign({}, account), char);
