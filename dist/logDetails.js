"use strict";
// type aliases
// Vai ser um tipo que pode ser reutilizado
// Facilita o codigo para não ficar escrevendo a mesma coisa em varios lugares
function logDetails(uid, item) {
    console.log("A product with " + uid + " has a title as " + item + ".");
}
function logInfo(uid, user) {
    console.log("A product with " + uid + " has a name as " + user + ".");
}
function renderPlatform(platform) {
    return platform;
}
// renderPlatform('ios') //Argument of type '"ios"' is not assignable to parameter of type 'Platform'
logDetails(123, 'sapato');
// logDetails("123", 'sapato') //Argument of type 'string' is not assignable to parameter of type 'number'
logInfo(123, 'Gabe');
logInfo("123", 'Gabe');
