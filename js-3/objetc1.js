


//1. Crea Objeto
let pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"],
  saluda: function(){   //Agrega Funcion saluda a objeto.
    console.log("Hola, me llamo "+ pedro.nombre );
  }
}

console.log("Edad: "+pedro.edad); //imprime la variable edad

pedro.estatura=1.8; //agrega llave estatura a objeto.
console.log("Estatura: "+pedro.estatura); //imprime estatura.

delete pedro.activo; //4.elimina la propiedad activo;



//5. imprime las propiedades en consola:

for (let llave in pedro) {
  if (pedro.hasOwnProperty(llave)) {

    console.log(llave+": "+pedro[llave])
  }
}

pedro.saluda(); // 7. LLama a funcion saluda.


