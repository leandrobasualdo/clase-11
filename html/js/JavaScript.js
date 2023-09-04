//Ejercicio If
var topping = "oreo";
var topping = "KitKat";
var topping = "Kinder";
var precio
var precioFinal
var helado = 5;

if(topping == "oreo"){

    console.log = (precio + "El precio es de:" + 10);

} else if(topping == "KitKat"){

    console.log = (precio + "El precio es de: " + 15);

} else if(topping == "Kinder"){

    console.log(precio + "El precio es de:" + 25);
} else{

    console.log("No tenemos este topping");
}

console.log(precioFinal = topping + helado);


//Ejercicio Case
let menuComida = "Pendiente"
switch(menuComida){

    case "Carne":
        console.log ("Bebida: Vino Tinto");
        break;


    case "Pescado":
        console.log("Bebida: Vino Blanco")
        break;

    case "Verdura":
        console.log("Bebida: Agua")
        break;

    default:
        console.log("No seleccionó nada, elija CARNE, PESCADO o Verdura")
        break;

}


//Ejercicio Array
let arrayEjemplo = ["Leandro","Basualdo", 26];
let i

for (i= 0; i < arrayEjemplo.length; i++) {
    console.log(arrayEjemplo[i]);
    
}



//Ejercicio While
let numero = 0;

let numeros = [];

while(numero < 11){
    numeros.push(prompt("Ingresa el numero"));
    numero++;
}


console.log("El numero es mas chico que 11");
console.log(numeros)
