var boton1 = document.getElementById("boton1");

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