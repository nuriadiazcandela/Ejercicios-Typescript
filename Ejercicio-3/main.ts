export {};

//Ejercicio 3 Clases
class Rombo {
  diagonalVertical: number;
  diagonalHorizontal: number;
  calcularArea(): number {
    return this.diagonalHorizontal * this.diagonalVertical;
  }
  constructor(diagonalVertical, diagonalHorizontal) {
    this.diagonalVertical = diagonalVertical;
    this.diagonalHorizontal = diagonalHorizontal;
  }
}
