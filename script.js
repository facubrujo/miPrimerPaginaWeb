var boton1 = document.getElementById("boton1");
let boton2 = document.getElementById("boton2");
let boton3 = document.getElementById("boton3");

boton1.addEventListener("click", function(boton1){

    var persona1 = {nombre:"Juan",edad:30,ciudad:"Cba"};
    var persona2 = {nombre:"Pablo",edad:24,ciudad:"BsAs"};
    var persona3 = {nombre:"Pedro",edad:45,ciudad:"StaFe"};

    var personas = [persona1,persona2,persona3];

    function crearMensajesDePresentacion(personas){
        var mensajes = [];
       for (let i = 0; i < personas.length; i++) {
         var mensaje = `Mi nombre es ${personas[i].nombre}, tengo ${personas[i].edad} años y vivo en ${personas[i].ciudad}.`;
            mensajes.push(mensaje);
       }
       return mensajes;
    }
    
    var mesPresent = crearMensajesDePresentacion(personas);
    mesPresent.forEach(function (men) {
        console.log(men);
    });

});

boton2.addEventListener("click",function(){
    let num1 = parseInt(prompt("Ingrese un numero")); 
    let num2 = parseInt(prompt("Ingrese un segundo numero")); 
    let suma = (num1 + num2);
    let resta = (num1 - num2);
    let div = (num1 / num2);
    let multi = (num1 * num2);

    var objeto = {suma,resta,div,multi};

    console.log("la suma de "+ num1 +" + "+ num2 +" = "+objeto.suma);
    console.log("la resta de "+ num1 +" - "+ num2 +" = "+objeto.resta);
    console.log("la division de " +num1 +" / "+ num2 +" = "+objeto.div);
    console.log("el producto de "+ num1 +" * "+ num2 +" = "+objeto.multi);
});

boton3.addEventListener("click",function(){
    let invertir = prompt("Ingrese una palabra o frase para invertirla");
    function invertirFrase ( invertir){
    let palabraInvertida = invertir.split("").reverse().join("");
    return document.write(palabraInvertida);
}
//invertirFrase(invertir);
});
