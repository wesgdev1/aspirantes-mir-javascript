

//1. Creo el objeto persona.
let persona = {
    nombre: "welinton suarez",
    edad:34,
    profesion:"ingeniero de sistemas",
    ciudad:"Cucuta",
    hobbies:["Leer","Aprender","ir al Gym"]
  }

//2. Imprimo en consola el objeto Completo.
for (let llave in persona) {
    if (persona.hasOwnProperty(llave)) {
  
      console.log(llave+": "+persona[llave])
    }
  }


  //3. creo funcion presentacion

  function presentacion(obj){

    return ("El nombre es "+ obj.nombre +" con edad de: "+ obj.edad+" años y vive en "+ obj.ciudad);

  }

  let mensaje=presentacion(persona); //4.Llama a la función "presentacion" y almacena el resultado en una variable llamada "mensaje".
  console.log(mensaje);//5. imprime en la consola el valor de la variable "mensaje".

  console.log(persona.hobbies); //7.Imprime en la consola la propiedad "hobbies" del objeto "persona".
  

  //8.Utiliza un ciclo for para imprimir en la consola cada uno de los elementos del arreglo de hobbies.
    for(let i=0;i<persona.hobbies.length;i++){

    console.log(persona.hobbies[i]);

  }


