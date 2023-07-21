// ejercicios de if/else


// 1. 
/* let respuesta= prompt("¿Eres bellisimo/a?");
respuestaMinusculas = respuesta.toLowerCase();
if (respuestaMinusculas == "si"){alert("ciertamente")}
else if (respuestaMinusculas == "no"){alert("no te creo")} 
else {alert("No te entiendo")} */


//2-3 


// let numero= prompt("Pon un numero");
// numero = Math.round(numero);
// if (numero % 2 == 0){alert(`el numero ${numero} es par`)}
// else {alert(`el numero ${numero} es impar`)} 

 //4 


// let numeroCliente= prompt("Introduzca un número");
// numeroCliente = Math.round(numeroCliente);
// if (numeroCliente === 1000){alert("Felicidades ganaste 🥳")}
// else {alert(` ${numeroCliente} Lo sientimos sigue intentando 😪`)} 

// 5 y 6

// let numero1= prompt("Introduzca un número");
// let numero2 = prompt("Introduzca otro número");

// if (numero1 > numero2){ alert(numero2)}
// else if(numero1 < numero2) {alert(numero1)}
// else { numero2 = prompt("Ingrese nuevamente el segundo numero") 

// if (numero1 > numero2){ alert(numero2)}
// else {alert(numero1)}
// }

// 7 
//  let diaSemana = prompt("Escriba un día de la semana");
//  let diaSemanaMinuscula = diaSemana.toLowerCase();
//  switch(diaSemanaMinuscula){
//     case "lunes": alert("Es lunes 😫 ");
//     break;
//     case "viernes": alert("Es viernes 🥳 ");
//     break;
//     case "sábado": alert("Es sábado 😈");
//     break;
//     case "domingo": alert("Es domingo 😒");
//     break;
//     default: alert("Qué importa el día");
//     break;
//  }


// 8 

// let calificacion = prompt("Introduzca una calificación")
// calificacion = Math.round(calificacion)
//  if (calificacion< 1 || calificacion >10){
//     calificacion = prompt("numero incorrecto introduzca nuevamente")
//     calificacion = Math.round(calificacion)
//  switch(true){
//     case calificacion<6: alert("reporbado");
//     break;
//     case calificacion >=6 && calificacion <= 8: alert("regular");
//     break;
//     case calificacion == 9: alert("bien");
//     break;
//     default: alert("excelente");
//     break;
//  }

//  }
//  else{
//     switch(true){
//         case calificacion<6: alert("reporbado");
//         break;
//         case calificacion >=6 && calificacion <= 8 : alert("regular");
//         break;
//         case calificacion == 9: alert("bien");
//         break;
//         default: alert("excelente");
//         break;
//     }

//  }


// 8 version 2

/* let calificacion = prompt("Introduzca una calificación")
calificacion = Math.round(calificacion)

while (calificacion< 1 || calificacion >10){
    calificacion = prompt("numero incorrecto introduzca nuevamente")
    calificacion = Math.round(calificacion)
}

switch(true){
             case calificacion<6: alert("reporbado");
             break;
             case calificacion >=6 && calificacion <= 8 : alert("regular");
             break;
             case calificacion == 9: alert("bien");
             break;
             default: alert("excelente");
             break;
         }
       */



// 9 
/* let topping = prompt("eliga el topping:");
let toppingMinuscula = topping.toLowerCase();
switch(toppingMinuscula){
    case "oreo": alert(`con ${toppingMinuscula} el helado cuesta 10 MXN`);
    break;
    case "kitkat": alert(`con ${toppingMinuscula} el helado cuesta 15 MXN`);
    break;
    case "brownie": alert(`con ${toppingMinuscula} el helado cuesta 20 MXN`);
    break;
    default: alert(`lo siento no tenemos ${toppingMinuscula} y el helado cuesta 5 MXN`);
    break;
} */



//10
/* let curso = prompt("eliga el la modalidad de enseñanza");
let cursoMinuscula = curso.toLowerCase();
let beca = prompt("cuenta con una beca");
let becaMinuscula = beca.toLowerCase();
let becaFacebook = 0.2;
let becaGoogle = 0.15;
let becaJesua = 0.5;
let costoCourse = 4999;
let costoCarrera= 3999;
let costoMaster = 2999;
let duracionCourse=2;
let duracionCarrera=6;
let duracionMaster=12;

if(cursoMinuscula === "course"){
     if (becaMinuscula === "ninguna"){
        let costoMes = costoCourse;
        let costoTotal = costoMes * duracionCourse;
        alert( `El costo por el curso ${curso} es de ${costoTotal} `)
     }
     else if(becaMinuscula === "facebook"){
        let costoMes = costoCourse*(1-becaFacebook);
        let costoTotal = costoMes * duracionCourse;
        alert( `El costo por el curso ${curso} es de ${costoTotal} `)
    }

    else if(becaMinuscula === "google"){
         let costoMes = costoCourse*(1-becaGoogle);
        let costoTotal = costoMes * duracionCourse;
        alert( `El costo por el curso ${curso} es de ${costoTotal} `)
     }

     else if(becaMinuscula === "jesua"){
        let costoMes = costoCourse*(1-becaJesua);
       let costoTotal = costoMes * duracionCourse;
       alert( `El costo por el curso ${curso} es de ${costoTotal} `)
    }
    else{
        alert("opciones ingresadas no validas")
    }
}
else if(cursoMinuscula === "carrera"){
    if (becaMinuscula === "ninguna"){
       let costoMes = costoCarrera;
       let costoTotal = costoMes * duracionCarrera;
       alert( `El costo por el curso ${curso} es de ${costoTotal} `)
    }
    else if(becaMinuscula === "facebook"){
       let costoMes = costoCarrera*(1-becaFacebook);
       let costoTotal = costoMes * duracionCarrera;
       alert( `El costo por el curso ${curso} es de ${costoTotal} `)
   }

   else if(becaMinuscula === "google"){
        let costoMes = costoCarrera*(1-becaGoogle);
       let costoTotal = costoMes * duracionCarrera;
       alert( `El costo por el curso ${curso} es de ${costoTotal} `)
    }

    else if (becaMinuscula === "jesua"){
       let costoMes = costoCarrera*(1-becaJesua);
      let costoTotal = costoMes * duracionCarrera;
      alert( `El costo por el curso ${curso} es de ${costoTotal} `)
   }
   else{
    alert("opciones ingresadas no validas")
    }
}
else if(cursoMinuscula === "master"){
    if (becaMinuscula === "ninguna"){
       let costoMes = costoMaster;
       let costoTotal = costoMes * duracionMaster;
       alert( `El costo por el curso ${curso} es de ${costoTotal} `)
    }
    else if(becaMinuscula === "facebook"){
       let costoMes = costoMaster*(1-becaFacebook);
       let costoTotal = costoMes * duracionMaster;
       alert( `El costo por el curso ${curso} es de ${costoTotal} `)
   }

   else if(becaMinuscula === "google"){
        let costoMes = costoMaster*(1-becaGoogle);
       let costoTotal = costoMes * duracionMaster;
       alert( `El costo por el curso ${curso} es de ${costoTotal} `)
    }

    else if (becaMinuscula === "jesua"){
       let costoMes = costoMaster*(1-becaJesua);
      let costoTotal = costoMes * duracionMaster;
      alert( `El costo por el curso ${curso} es de ${costoTotal} `)
   }
   else{
    alert("opciones ingresadas no validas")
    }
}

else{
    alert("opciones ingresadas no validas")
    }
 */


    //11

 /*    let tipoAuto = prompt("escriba el tipo de vehiculo");
    let tipoAutoMin = tipoAuto.toLowerCase();
    let kilometros= prompt("escriba los km recorridos");
    let precioCoche = 0.2;
    let precioMoto = 0.1;
    let precioBus = 0.5;
    let menos100 = 5;
    let mas100= 10;

    while (tipoAutoMin !== "coche" && tipoAutoMin !== "moto" && tipoAutoMin !== "bus" ) {
        tipoAuto = prompt("Escriba nuevamente el tipo de vehiculo")
         tipoAutoMin = tipoAuto.toLowerCase();
    }
 
  while(kilometros<0){
        kilometros = prompt("los kilometros deben ser mayores a 0, escribalo nuevamente")
  }
    switch(tipoAutoMin){

        case "coche": 
            if (kilometros< 100){
            let costo = (precioCoche*kilometros) + menos100
            alert(`Debe pagar ${costo}`)
            }
            else {
                let costo = (precioCoche*kilometros) + mas100
            alert(`Debe pagar ${costo}`)
            }
        break;

        case "moto": 
        if (kilometros< 100){
        let costo = (precioMoto*kilometros) + menos100
        alert(`Debe pagar ${costo}`)
        }
        else {
            let costo = (precioMoto*kilometros) + mas100
        alert(`Debe pagar ${costo}`)
        }
        break;

        default: 
        if (kilometros< 100){
        let costo = (precioBus*kilometros) + menos100
        alert(`Debe pagar ${costo}`)
        }
        else {
            let costo = (precioBus*kilometros) + mas100
        alert(`Debe pagar ${costo}`)
        }
        break;



    }

 */


    //EJERCICIOS PLATZI
        let nombre = "Isleny";
        let apellido ="Carranza";
        let nombreUsuario = "icarraam";
        let edad = 27;
        let correo = "ijcarranzaa@unal.edu.co";
     let mayorEdad;
        if(edad>=18){
         mayorEdad= true;
     }
    else{  mayorEdad= false;
    }

    let dineroAhorrad = 5000;
    let deudas = 1000;

    let nombreCompleto = nombre + apellido;
    let dineroReal = dineroAhorrad - deudas;

    function frase(completeName, nickname){
        console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
    }

    frase(nombreCompleto, nombreUsuario);
    
    const tipoDeSuscripcion = "Free";


    if (tipoDeSuscripcion=== "Free"){
        console.log("Solo puedes tomar los cursos gratis");
    }
    else if (tipoDeSuscripcion=== "Basic"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    } 
    else if (tipoDeSuscripcion=== "Expert"){
        console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
    } 
    else {
        console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    }


    let listaSuscripcion = [
      { tipo: "Free", 
        beneficios:"Solo puedes tomar los cursos gratis" },
        { tipo: "Basic", 
        beneficios:"Puedes tomar casi todos los cursos de Platzi durante un mes" },  
        { tipo: "Expert", 
        beneficios:"Puedes tomar casi todos los cursos de Platzi durante un año" },
        { tipo: "ExpertPlus", 
        beneficios:"Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año" }

    ]

    let listaSuscripcionfiltrado = listaSuscripcion.filter(function(lista){

       if (lista.tipo == tipoDeSuscripcion) 
       console.log( lista.beneficios)

    });



    // otra forma

    const tiposdeSuscripciones = {
        Free: "Solo puedes tomar los cursos gratis",
        basic:"Puedes tomar casi todos los cursos de Platzi durante un mes",
        Expert: "Puedes tomar casi todos los cursos de Platzi durante un año" ,
        ExpertPlus: "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"
    }

    function conseguirSuscripcion(suscripcion){
      if(tiposdeSuscripciones(suscripcion)){
        console.log(tiposdeSuscripciones(suscripcion));
        return;
      }

      console.warn("esa suscripcion no existe")

    }
 let i = 0;


    while(i<5){
        console.log("el valor de i es " + i);
        i ++;
    }

    let j=10;
    while(j>=2){
        console.log("el valor de j es " + j);
      j--;
    }

/* 
  let respuesta = prompt("cuánto es 2+2");
  while(respuesta !=4){
    respuesta = prompt("cuánto es 2+2");
  }
   
    alert("felicitaciones") */


    // otra forma de hacerlo
   /*  let respuesta;
    while (respuesta !=4){
        pregunta= prompt("cuànto es 2 + 2");
        respuesta=pregunta;

    } */

   let arreglo = [1,3,5,8,9];
   
   function traerValor(array){
    console.log(array[0]);

   }

   traerValor(arreglo);
    
   function traerValorunoporuno(array){
   for(i= 0; i<  array.length
    ; i++){
    console.log(array[i]);
   }

   }
   traerValorunoporuno(arreglo);

 let objeto = {
    nombre: "martha",
    edad : 50
 };

 function traerPropiedad(object){
    for (prop in object){
        console.log( `la propiedad ${prop} el valor es ${object.prop}`)
    }

     }

     traerPropiedad(objeto);


     // otra forma de hacerlo con la funcion Object.values

     function traeElementosObjeto (object){
        const arra= Object.values(object);
        for(i= 0; i<  arra.length
            ; i++){
            console.log(arra[i]);
           }
     }

     //variables y tipos de datos
     let nuevaEdad = 28;
     let caracter = 'mi edad es: '
     let edadCaracter = caracter + nuevaEdad;
     console.log('mi edad es: ' + nuevaEdad);
     console.log(edadCaracter);


     let numeroAleatorio=  Math.random()*10; // se usa para un numero aleatorio entre 0 y 10
     console.log(numeroAleatorio);

     let caracterMayuscula = caracter.toUpperCase();
     console.log(caracterMayuscula);

     let variableBoleana = 4===5 ? 'true': 'false'; //forma para especificar en una linea 
          console.log(variableBoleana);


    // estructuras de control

  /*   let numeroUsuario = prompt('Escriba un número: ');

    if (numeroUsuario <0){
        alert('numero negativo')
    }
    else if (numeroUsuario==0){
        alert('El valor es 0')
    }
    else if (numeroUsuario>0){
        alert('Numero positivo')
    }
    else{
        alert('Entrada no valida')
    }
 */

    for (i =0; i<=20;){
        console.log(`El numero es ${i}`);
        i= i +2;
    }

/* let contenido = prompt('Escriba algo');
console.log(contenido.indexOf('JavaScript'))

if (contenido.indexOf('JavaScript')!=-1){
    alert('contiene palabra');
}
else {
    alert('no contiene palabra')
}
 */

/* let password = prompt('escriba contraseña');

function containsNumber(str) {
    return /\d/.test(str);
      }

  let requisito = containsNumber(password);


if (password.length>7 && requisito == true){
    alert('contraseña correcta')
}
else{
    alert('Mala')
} */

let acumulado= 0;
for(let i=0; i<101; i++){
    acumulado = acumulado + i;
    console.log(`El valor acumulado es ${acumulado}`);
}

//Ejercicios de funciones 
let a= 2;
let b=3;

function resta(num1, num2){
    let resultado = num1-num2;
    console.log(resultado);

}
resta(a,b);

let d= 7;

function divisible(num){
    if ( (num % 5 ==0)|| (num % 3 ==0)){
        console.log('el numero es divisle por 3 o 5')
        
    }
    else{console.warn('el número no es divisile')}
}

divisible(d);

let arregloNumeroGrande = [1,2,3,4,5,6,7,8,2,100,2,900,0];
let maximo=0;

function maxValue(arr) {
    let max = arr[0];
  
    for (let val of arr) {
      if (val > max) {
        max = val;
      }
    }
    return max;

  }



  let maximoValor = maxValue(arregloNumeroGrande);

  console.log(maximoValor);


  function EncuentreelValorMaximo (arreglo){
    let maxval = arreglo[0];
    for( let i=0; i< arreglo.length; i++){
        if(arreglo[i]>maxval){
            maxval=arreglo[i];
        }
    }   
    return maxval;
  }

  let maxValor2 = EncuentreelValorMaximo(arregloNumeroGrande);

console.log(maxValor2);


(z,y)=> z*y;

let z=2;

let y=7;

let cadenaTexto ='HolaMundo'

function revertirCadena(cadenatexto){
    let array= cadenatexto.split('');
    let nuevotexto= array.reverse().join('');
    return nuevotexto;
}

let cadenaTextoinvertida = revertirCadena(cadenaTexto);
console.log(cadenaTextoinvertida);


//ARRAYS
let diaSemana = ['lunes', 'martes', 'miercoles', 'jueves', 'viernes'];
function traerDiaSemana(arregloDia){
    for(let elemento of arregloDia){
        console.log(elemento);
    }
}
traerDiaSemana(diaSemana);

let arregloNumeros =[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

function Creararraypares(arr){
    let arregloPares=[];
    for (let numero of arr){
            if (numero % 2 ==0){
                 arregloPares.push(numero) //no necesario ponerlo como nueva variable
            }
    }

    return arregloPares;

}
let pares= Creararraypares(arregloNumeros);
console.log(pares);

let stringOrdenar = ['julian', 'alejandra', 'ramon', 'deicy', 'isleny', 'eliana'];
console.log(stringOrdenar.sort());

let array1=[1,2,3,4,5,6];
let array2=[4,5,6,7,8,9];
let nuevoarreglo=[];


for (i=0; i<array1.length;i++){
    for (j=0; j<array2.length;j++){
        if (array1[i]===array2[j]){
            nuevoarreglo.push(array1[i]);
        }
    }
}

function unioniguales(arr1,arr2){
    let nuevoarregloFuncion=[];
    for (i=0; i<arr1.length;i++){
        for (j=0; j<arr2.length;j++){
            if (arr1[i]===arr2[j]){
                nuevoarregloFuncion.push(arr1[i]);
            }
        }
    }
    return nuevoarregloFuncion;
}
console.log(unioniguales(array1,array2));


let arregloParaSumar = [1,2,3,4,5,6,7,8,9]

let sumadeArreglo = arregloParaSumar.reduce((acumulado,nuevo)=> acumulado + nuevo,0);
console.log(sumadeArreglo);



let nuevaSuma = arregloParaSumar.reduce(sumarImpares,0);


function sumarImpares(acumulado2,nuevo2){

    if(nuevo2 % 2 !=0){
        return acumulado2 + nuevo2;

    }
    else {
        return acumulado2;
    }
   
}

console.log(nuevaSuma);


// objetos

let carros ={ marca : 'mercedes',
año : 2020,
modelo : 'bz9'
}

for (let prop in carros){
console.log(`El valor de ${prop} es ${carros[prop]}`);
}

let libro = {
    titulo: 'La bella y la bestia',
    autor: 'gabrielle',
    año : 1740
}

let añoActual = 2023;
console.log(añoActual-libro.año);


let estudiantes =[{nombre: 'isleny', edad: 27, calificaciones:4.5},
{nombre: 'Maria', edad: 17, calificaciones:2.5},
{nombre: 'Joda', edad: 15, calificaciones:5}, 
{nombre: 'Maives', edad: 22, calificaciones:4}]

let calificaciones=[];
for (let i=0; i<estudiantes.length; i ++){
  calificaciones.push(estudiantes[i].calificaciones)
}
console.log(calificaciones);


//manipulacion dom

//llamar variables del htlm

let boton = document.querySelector('#boton');

boton.addEventListener('click', () => {
    boton.textContent ='Boton con cambio';
});

//En un form para que aparezca abajo

let email = document.querySelector('#exampleInputEmail1');
let nombreUsuaro = document.querySelector('#exampleInputPassword1');
let check = document.querySelector('#exampleCheck1');

let botonFormulario = document.querySelector('#botonFormulario');
let formulario = document.querySelector('#formulario')

let lugarParrafo = document.querySelector('#LugarParrafo');
let parrafoNuevo = document.createElement("p");
let parrafoBienvenida = document.querySelector('#MensajedeBienvenida');
let imagenPrueba = document.querySelector('#imagenPrueba');

console.log([parrafoBienvenida]);

lugarParrafo.append(parrafoNuevo);

formulario.addEventListener('submit',(event)=>{
    event.preventDefault();
    const message = `Señora ${nombreUsuaro.value} nos estaremos comunicando a través de ${email.value}`
    parrafoNuevo.textContent = message;
    nuevaPagina()
}
);

function nuevaPagina(){
formulario.innerHTML=" ";
parrafoBienvenida.textContent = `Bienvenido ${nombreUsuaro.value} `;
parrafoBienvenida.style.color='red';

};

imagenPrueba.addEventListener('onmouseenter',cambioImagen);
   
function cambioImagen(){
    imagenPrueba.setAttribute =('src', "https://www.metroecuador.com.ec/resizer/v5UD89vb7_2SnV7kyk3ZcQJgMTg=/800x0/filters:format(jpg):quality(70)/cloudfront-us-east-1.images.arcpublishing.com/metroworldnews/6YBDKAZQT5CATLTOMMAPN2JRNE.jpg");

}









//
