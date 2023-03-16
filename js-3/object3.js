

//1.En un archivo llamado object3.js Crear una variable llamada receta e inicialízalo con un objeto literal vacío.

let receta={

}

//2.Agrégale una propiedad nombre con valor “Sandwich”.
receta.nombre="Sandwich";

//3.Agrégale una propiedad ingredientes con un arreglo vacío.
receta.ingredientes=[];

//4.Agrega un objeto al arreglo ingredientes con las siguientes propiedades:nombre: “Pan” cantidad: 2
receta.ingredientes=[{nombre:"pan",cantidad:2}];


//5.Agrega otro ingrediente al arreglo con las siguientes propiedades:nombre: “Queso”cantidad: 1

receta.ingredientes.push({nombre:"queso",cantidad:1});



//6. Debajo del objeto imprime en la consola el nombre del primer ingrediente, debería aparecer "Pan".

console.log("Primer ingrediente: "+ receta.ingredientes[0].nombre);




//7. Suma todos las cantidades de los ingredientes y muestra el resultado en consola.

function sumaIngredientes(obj){

    let resultadoSuma=0;
    for (let i=0; i < obj.ingredientes.length; i++) {

        let ingrediente = obj.ingredientes[i];
        resultadoSuma=resultadoSuma+ingrediente.cantidad;
  }

  return resultadoSuma;

}

console.log("El resultado de el total de los ingredientes es "+ sumaIngredientes(receta));

