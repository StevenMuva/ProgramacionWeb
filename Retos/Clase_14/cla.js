document.getElementById("cal1").addEventListener("click", ejer1);
document.getElementById("cal2").addEventListener("click", ejer2);
document.getElementById("cal3").addEventListener("click", ejer3);
document.getElementById("cal4").addEventListener("click", ejer4);
document.getElementById("cal5").addEventListener("click", ejer5);
document.getElementById("cal6").addEventListener("click", ejer6);
document.getElementById("cal7").addEventListener("click", ejer7);
document.getElementById("cal8").addEventListener("click", ejer8);
document.getElementById("cal9").addEventListener("click", ejer9);
document.getElementById("cal10").addEventListener("click", ejer10);
/* 
1 - Solicita un nombre, la edad y muestra por consola el mensaje "Hola ____, tienes ____ años y el año que viene tendrás ____ años"
Realiza el ejercicio con prompt(mensaje) y haz uso de los template strings
*/
function ejer1() {
    var name = (document.getElementById("name").value);
    var age = parseFloat(document.getElementById("age").value);
    let re1 = `Hola ${name} tu edad  es ${age} años y el proximo año tendras ${re = age + 1}`
    let ej1 = re1;

    document.getElementById("resultado1").innerHTML = ej1;

}
/* 
2 - Escribe un programa que pueda calcular el área de 3 figuras geométricas, triángulo, rectángulo y círculo. En primer lugar pregunta de qué figura se quiere calcular el área, después solicita los datos que necesites para calcularlo.
    triángulo = b * h/2
    rectángulo = b * h
    círculo = π * r2 (pi * radio al cuadrado)
*/
function ejer2() {
    var base;
    var height;
    var radius;
    var re2;
    var ej2;
    var figura = (document.getElementById("figura").value);

    ///////////////////////////////////////

    switch (figura) {

        case 'triangulo':
            base = (document.getElementById("basetri").value);
            height = (document.getElementById("alturatri").value);
            re2 = `El área del triángulo es ${(base * height) / 2}`
            ej2 = re2
            document.getElementById("resultado2").innerHTML = ej2;
            break
        case 'rectangulo':
            base = (document.getElementById("baserec").value);
            height = (document.getElementById("alturarec").value);
            re2 = `El área del rectángulo es ${base * height}`
            ej2 = re2
            document.getElementById("resultado2").innerHTML = ej2;
            break
        case 'circulo':
            radius = (document.getElementById("radio").value);
            re2 = `El área del círculo es ${Math.PI * Math.pow(radius, 2)}`
            ej2 = re2
            document.getElementById("resultado2").innerHTML = ej2;
            break
        default: console.log('La figura geométrica no es válida');
    }
}

/* 
3 - Solicita un número e imprime todos los números pares e impares desde 1 hasta ese número con el mensaje "es par" o "es impar"
    si el número es 5 el resultado será:
        1 - es impar
        2 - es par
        3 - es impar
        4 - es par
        5 - es impar
*/
function ejer3() {
    var num = parseInt(document.getElementById("num").value);
    let r3;
    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            re3 = `${i} - es par`
        } else {
            re3 = `${i} - es impar`
        }
    }
    var ej3 = re3;
    document.getElementById("resultado3").innerHTML = ej3;

}
/* 
4 - Escribe un programa que pida un número entero mayor que 1 y que escriba si el número primo o no.
    Un número primo es aquel que solo es divisible por sí mismo y la unidad
*/
function ejer4() {
    let num1 = parseInt(document.getElementById("num1").value)
    let divisores = 0

    if (num1 === 1) re4 = 'El número no es válido'
    else {

        for (let i = 2; i < num1; i++) {
            if (num1 % i == 0) {
                re4 = `${num1} / ${i} = ${num1 / i} No es primo`
                divisores++
                break
            }
        }
    }

    if (divisores == 0) re4 = `${num1} es primo`

    let ej4 = re4;
    document.getElementById("resultado4").innerHTML = ej4;
}

/* 
5 - Escriba un programa que pida un número entero mayor que cero y calcule su factorial.
    El factorial es el resultado de multiplicar ese número por sus anteriores hasta la unidad.
    !5 = 5*4*3*2*1 = 120
*/
function ejer5() {
    let num2 = parseInt(document.getElementById("num2").value)
    let result = 1

    for (let i = num2; i > 1; i--) {
        result *= i
    }

    let re5 = `El factorial de ${num2} es ${result}`

    let ej5 = re5;
    document.getElementById("resultado5").innerHTML = ej5;
}
/* 
6 - Escribe un programa que permita ir introduciendo una serie indeterminada de números mientras su suma no supere 50. Cuando esto ocurra, se debe mostrar el total acumulado y el contador de cuantos números se han introducido
*/
function ejer6() {
    let suma = 0
    let cont = 0

    

    while (suma < 50){
        suma += parseInt(document.getElementById("suma").value);;
        cont++;
    }

    ////////////////////

    let res6 = `La suma total es de: ${suma} El total de números introducidos es: ${cont}`

    let ejr6 = res6;
    document.getElementById("resultado6").innerHTML = ejr6;


}
/* 
7 - Crea 3 arrays. El primero tendrá 5 números y el segundo se llamará pares y el tercero impares, ambos estarán vacíos. Después multiplica cada uno de los números del primer array por un número aleatorio entre 1 y 10, si el resultado es par guarda ese número en el array de pares y si es impar en el array de impares. Muestra por consola:
    -la multiplicación que se produce junto con su resultado con el formato 2 x 3 = 6
    -el array de pares e impares
*/
function ejer7() {
    const numbers = [3, 43, 21, 20, 56]
    let pares = []
    let impares = []

    for (const number of numbers) {
        let random = Math.round(Math.random() * 10 + 1)
        const result = number * random

        console.log(`${number} x ${random} = ${result}`);
        if (result % 2 == 0) {
            pares.push(result)
        } else {
            impares.push(result)
        }
    }
    /////
    let res7 = pares;
    let rest71 = impares;


    let ejr7 = res7;
    document.getElementById("resultado7").innerHTML = ejr7;
    ejr7 = rest71;
    document.getElementById("resultado71").innerHTML = ejr7;

}
/* 
8 - Dado un array de letras, solicita un número de DNI y calcula que letra le corresponde. El número no puede ser negativo ni tener más de 8 dígitos. La posición de la letra es el resultado del módulo del número introducido entre 23
*/
function ejer8() {
    const letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H', 'L', 'C', 'K', 'E', 'T']

    const dni = (document.getElementById("dni").value);

    if (dni.length == 8 && parseInt(dni) > 0) {
        let letra = dni % 23
        rest8 = `Tu DNI completo es ${dni}${letras[letra]}`

    }

    let ejrr8 = rest8;
    document.getElementById("resultado8").innerHTML = ejrr8;

}
/* 
9 - Solicitar al usuario una palabra y mostrar por consola el número de consonantes, vocales y longitud de la palabra.
*/
function ejer9() {
    const palabra = (document.getElementById("palabra").value).toLowerCase();

    let consonantes = 0
    let vocales = 0

    for (const letra of palabra) {
        if (letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u') vocales++
        else consonantes++
    }

    rest9 = `Tu palabra tiene ${vocales} vocales, ${consonantes} consonantes y tiene un total de ${palabra.length} letras.`;
    let ejrc9 = rest9;
    document.getElementById("resultado9").innerHTML = ejrc9;
}
/* 
10 - Dado un array que contiene ["azul", "amarillo", "rojo", "verde", "rosa"] determinar si un color introducido por el usuario a través de un prompt se encuentra dentro del array o no.
*/
function ejer10() {
    const colors = ["azul", "amarillo", "rojo", "verde", "rosa"]

    const color = (document.getElementById("color").value).toLowerCase()

    if (colors.indexOf(color) !== -1) {
        rest10 = 'Tu color se encuentra en el array'
    } else {
        rest10 = 'Tu color no está definido'
    }

    let ejer10 = rest10;
    document.getElementById("resultado10").innerHTML = ejer10;

}