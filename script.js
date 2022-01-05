const btn = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

function changeColor() {
  this.classList.add('selected');
}

function createTask() {
  const task = document.getElementById('texto-tarefa');
  const temp = document.createElement('li');
  temp.innerHTML = task.value;
  list.appendChild(temp);
  task.value = '';
  temp.addEventListener('click', changeColor);
}

btn.addEventListener('click', createTask);
