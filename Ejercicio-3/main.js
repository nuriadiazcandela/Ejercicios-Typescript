"use strict";
exports.__esModule = true;
//Ejercicio 3 Clases
var Rombo = /** @class */ (function () {
    function Rombo(diagonalVertical, diagonalHorizontal) {
        this.diagonalVertical = diagonalVertical;
        this.diagonalHorizontal = diagonalHorizontal;
    }
    Rombo.prototype.calcularArea = function () {
        return this.diagonalHorizontal * this.diagonalVertical;
    };
    return Rombo;
}());
