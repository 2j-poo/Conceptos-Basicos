import Auto from "./Auto.js";

let auto1 = new Auto("Ford", 2000, "rojo", 100);
let auto2 = new Auto("Nissan", 2018, "blanco");
let auto3 = new Auto("VW", 2010);

console.log(`Color ${auto1.color}`); // lectura
console.log(`Color ${auto2.color}`); // lectura
auto1.color = "Amarillo"; // escritura
auto2.color = "Azul"; // escritura

auto2.enceder();
auto3.encender();

auto1.encender();
auto1.avanzar(50, 2);
auto1.apagar();
auto1.avanzar(20, 1);