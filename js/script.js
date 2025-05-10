"use strict";
/* console.log("Hello World"); */

/* FUNCIONES */
/*
function printHello() {
	console.log("Hello");
}

printHello();

function printGreeting(greeting) {
	console.log(greeting);
}

printGreeting("holi");
*/
/* Crear 4 funciones que lean do números y cada función deberá realizar una operación aritmética básica + - / *
imprimir en consola el resultado así: 10 + 5 = 15 
*/
const num1 = 10;
const num2 = 5;
let res;

function suma() {
	res = num1 + num2;
	console.log(`${num1} + ${num2} = ${res}  `);
}

function resta() {
	res = num1 - num2;
	console.log(`${num1} - ${num2} = ${res}  `);
}

function multi() {
	res = num1 * num2;
	console.log(`${num1} x ${num2} = ${res}  `);
}

function divi() {
	res = num1 / num2;
	console.log(`${num1} / ${num2} = ${res}  `);
}

suma();
resta();
multi();
divi();
