const btn = document.getElementById('criar-tarefa');
const list = document.getElementById('lista-tarefas');

// funçao criada com a ajuda do meu amigo Elton
function changeColor() {
  const listaClasses = document.querySelector('.selected');
  if (listaClasses !== null) {
    listaClasses.classList.remove('selected');
  }

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
