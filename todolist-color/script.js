// Define UI Vars
const formAdd = document.querySelector('.add');
const taskList = document.querySelector('.todos');
const searchInput = document.querySelector('#search');
const taskInput = document.querySelector('.task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {

    // Add task event 
    formAdd.addEventListener('submit', addTask);
    // Remove task event
    taskList.addEventListener('click', removeTask);
}


//Add Task
function addTask(e) {
    if(taskInput.value === '') {
        alert('Please enter a task name');
    }else {
    // Create li element
    const li = `
    <li class="list-group-item d-flex justify-content-between align-items-center check">
        <span>${taskInput.value}</span>
        <i class="far fa-trash-alt delete"></i>
    </li>
    `; 
    // Append li to ul
    taskList.innerHTML+=li;

    // Clear input
    taskInput.value = '';
    }

    
    e.preventDefault();
}


// Remove Task
function removeTask(e) {
    if(e.target.classList.contains('delete')) {
        e.target.parentElement.remove();
    }
}

const filterTodo = (searchTerm) => {
    //Hide items
    Array.from(taskList.children)
      .filter((item) => !item.textContent.toLowerCase().includes(searchTerm))
      .forEach((item) => {
        item.classList.add("filtered");
      });

     //Show items
    Array.from(taskList.children)
    .filter((item) => item.textContent.toLowerCase().includes(searchTerm))
    .forEach((item) => {
        item.classList.remove("filtered");
  });
}

searchInput.addEventListener("keyup", () => {
    const searchTerm = searchInput.value.trim().toLowerCase();
    filterTodo(searchTerm);
  });
  