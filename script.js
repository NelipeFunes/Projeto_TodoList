const btn = document.getElementById("criar-tarefa");
const list = document.getElementById("lista-tarefas");

function createTask(){
let task = document.getElementById("texto-tarefa");
let temp = document.createElement('li');
temp.innerHTML = task.value;
list.appendChild(temp);
task.value = '';
}


btn.addEventListener('click',createTask);
