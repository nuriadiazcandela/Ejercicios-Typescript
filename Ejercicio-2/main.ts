export {};
//Ejercicio 2 Interface
const spiderman: superHero = {
  nombre: 'Peter parket',
  poderes: ['trepar', 'fuerza', 'agilidad', 'telas de araña'],
};
interface superHero {
  nombre: string;
  poderes: string[];
}
