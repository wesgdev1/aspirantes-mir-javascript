const input=document.querySelector('.task');
const addSubmit=document.querySelector('.botonAdd');
const ul=document.querySelector('ul');
const deleteTara=document.querySelector('.botonDelete');
const completas=document.querySelector('.completas');
const incompletas=document.querySelector('.incompletas');
const all=document.querySelector('.all');



let tareas=[];

if (localStorage.getItem('tareas')) {
    tareas = JSON.parse(localStorage.getItem('tareas'));
    pintarTareas();
  } //si esta lleno el localStorage pintamelo.


all.addEventListener("click", function(){
  //console.log("entro aqui");

  
  pintarTareas();
  console.log("entro aqui");
  

});

completas.addEventListener("click", function(){
    //console.log("entro aqui");

    
    pintarTareasCom(true);
    console.log("entro aqui");

});


incompletas.addEventListener("click", function(){
  //console.log("entro aqui");

  
  pintarTareasCom(false);


});



  deleteTara.addEventListener("click", eliminartareas);

  function eliminartareas() {
    tareas = tareas.filter(function(task) {
      return !task.completed;
    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
    pintarTareas();
  }





addSubmit.addEventListener('click', function(e) {
    e.preventDefault(); //para evitar que se me recargue la pagina por el formulario    
    const texto = input.value;
    tareas.push({
        id:Date.now, //Identificador unico
        name:texto, //contenido
        completed:false //no completada por defecto

    });
    localStorage.setItem("tareas", JSON.stringify(tareas));
    pintarTareas();
    input.value=''; //vacia la casilla

});





function pintarTareas(){

    ul.innerHTML=''; //Borra la lista anterior.
    //console.log(tareas);

    for (let i = 0; i < tareas.length; i++) {
        const todo = tareas[i];
        const li = document.createElement('li');
        const a = document.createElement('a');
        const checkbox=document.createElement('input');
        checkbox.className="prueba";
        checkbox.type="checkbox";
        checkbox.checked = todo.completed;

        checkbox.addEventListener("change",function(){
           tareas[i].completed = !tareas[i].completed;

           
            localStorage.setItem("tareas", JSON.stringify(tareas)); //actualizo en el localStorage el estado actual
            
            rayado(tareas[i],a); //voy rayando las tareas que voy seleccionando
          

        });

        rayado(tareas[i],a); //me raya las tareas que estan completas cuando recargo el DOM
        




        a.textContent=todo.name;
        li.appendChild(checkbox);
        li.appendChild(a);
        ul.appendChild(li);
    }      
}


function rayado(elemento1,elemento2){
  if(elemento1.completed){
    elemento2.className="is-completed";
}else
    elemento2.className="normal";
}




function pintarTareasCom(element){

    ul.innerHTML=''; //Borra la lista anterior.
    

    for (let i = 0; i < tareas.length; i++) {
        if(tareas[i].completed===element){
            pintarSinModicarLocal(tareas[i]);
          }  
        
        }
}


function pintarSinModicarLocal(elemento){
        const todo = elemento;
        const li = document.createElement('li');
        const a = document.createElement('a');
        const checkbox=document.createElement('input');
        checkbox.className="prueba";
        checkbox.type="checkbox";

        checkbox.checked = todo.completed;
        checkbox.addEventListener("change",function(){
           elemento.completed = !elemento.completed;
           rayado(elemento,a); 

        });
        rayado(elemento,a);

        a.textContent=todo.name;
        li.appendChild(checkbox);
        li.appendChild(a);
        ul.appendChild(li);





}
