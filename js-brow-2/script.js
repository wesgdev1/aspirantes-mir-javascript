const input=document.querySelector('.task');
const addSubmit=document.querySelector('.botonAdd');
const ul=document.querySelector('ul');





addSubmit.addEventListener('click', function(e) {
    e.preventDefault(); //para evitar que se me recargue la pagina por el formulario    
    const texto = input.value;
    const checkbox=document.createElement('input');
    checkbox.type="checkbox";
    const li=document.createElement('li');
    const a=document.createElement('a');
    a.textContent=texto;
    li.appendChild(checkbox);
    li.appendChild(a);
    ul.appendChild(li);
    console.log(1);
// Código para convertir el texto a mayúsculas y mostrarlo en el párrafo
});