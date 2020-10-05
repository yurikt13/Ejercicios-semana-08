'use strict'; //indispensable poner
document.querySelector('h1').innerHTML = '¡Hola Mundo!';

//VARIABLES
//declarar y asignar un valor
/*let officeAddress; //1. declare la variable
officeAddress ='Calle Leganitos, 24';*/ //2. asigne un valor
//const age = 26; (num. número)
//let haveChildren = null; (num1. definir booleano)
/*let haveChildren = {
    hijo1: "jose",
    hijo2: "tae",
};*/ //(num2. definir objetos)
//let haveChildren = [nombres, etc]; (num3. definir arreglos)

//let officeAddress = 'Calle Leganitos, 24'; //string ''
//console.log('la direción de la oficina es: '+officeAddress);
//console.log(`la direción de la oficina es: ${officeAddress}`);

//Tipos 
let totalHours = 10 + 20 + 30;
console.log(`Este es mi total de horas: ${totalHours}`);

//Reasignación de variables
let officeAddress;
officeAddress = 'Calle Leganitos, 24';
officeAddress = 'Calle Mayor, 7';
officeAddress = 'Calle Embajador, 7'; //solo me muestra este valor porque es el más actualizado
console.log(officeAddress);

//Usar variables
let earnings = 12020;
let expenses= 5342;
let benefits = earnings - expenses;
console.log(`El resultado de la variable benefits es: ${benefits}`);

//constantes no cambian, valor unico
const addres = 'Calle Leganitos, 24';
console.log(addres);
/*var era la forma de declarar variables y constantes en ES5, ahora con
ES6 se declaran con let, para variables y const, para constantes. 
Si se puede serguir usando var pero diferenciandola, solo como variable.*/

//Importancia de la declaración y de la asignación
const sectionSize2 = ( 620 - 70 - 24 ) / 4; 
console.log(sectionSize2); //se puede operar de esta forma, form1.x
const headerHeight = 72; //Camel case
const subHeaderHeight = 24;
const sreenHeight = 620;
const remainingSpace = sreenHeight - headerHeight - subHeaderHeight;
const section = 4;
const sectionSize = remainingSpace / section;
console.log(sectionSize); //o de esta forma, declarando y asignando a cada variable un valor, form1.



/* //PROGRAMACIÓN EN LA WEB
//Obtener un elemento o etiqueta HTML
// 1. por medio del selector de la etiqueta
const title =document.querySelector('h2'); //el nombre de la constante no tiene nada que ver con la clase con el id que defini para h2, simplemente es un nombre que me ayuda a identificar que me voy a traer del html ese h2.
//2. selector de la clase de ese mismo h2
const mainTitle = document.querySelector('.mainTitle'); 
//3. selector del id
const main = document.querySelector('#mainTitle'); //form1 para traer el id
const main = document.getElementById('mainTitle') //form2, traer el elemento por su id */

//Modificar una etiqueta
//voy atener en mi h3 un bivenida
/*const title= document.querySelector('.title');
title.innerHTML = 'Bienvenida';*/ //lo modifique
// voy a escribir correctamente en h3 Bienvenida
var titleElement = document.querySelector('.title');
titleElement.innerHTML = titleElement.innerHTML + ' Geek Girl'; //le añadí texto

//Obtener información sobre las clases (añadir o quitar clases)
//Para trabajar con clases debo tener presente la propiedad llamada classList
//Añadir
const sectionB = document.querySelector('.section-b');
sectionB.classList.add('hidden');
//podemos añadir multiples clases 
//sectionB.classList.add('hidden', 'otraClase', 'unaMas');

//Eliminar
const sectionA = document.querySelector('.section-a');
sectionA.classList.remove('hidden');
//podemos eliminar multiples clases 
sectionA.classList.remove('hidden', 'otraClase', 'unaMas');



















