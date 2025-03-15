// Select DOM elements
const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Array to store tasks (for learning purposes, no localStorage yet)
let tasks = [];

// Add event listener for form submission
form.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent page refresh
    const taskText = input.value.trim();

    if (taskText) {
        addTask(taskText);
        input.value = ''; // Clear input
    }
});

// Function to add a task
function addTask(text) {
    // Create task object
    const task = {
        id: Date.now(), // Unique ID based on timestamp
        text: text,
        completed: false
    };
    tasks.push(task);
    renderTask(task);
}

// Function to render a single task
function renderTask(task) {
    const li = document.createElement('li');
    li.className = 'todo-item';
    li.dataset.id = task.id;

    // Checkbox
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.completed;
    checkbox.addEventListener('change', () => toggleTask(task.id));

    // Task text
    const span = document.createElement('span');
    span.textContent = task.text;

    // Delete button
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete';
    deleteBtn.addEventListener('click', () => deleteTask(task.id));

    // Append elements to list item
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    // Update completed state
    if (task.completed) {
        li.classList.add('completed');
    }

    todoList.appendChild(li);
}

// Function to toggle task completion
function toggleTask(id) {
    const task = tasks.find(t => t.id === id);
    if (task) {
        task.completed = !task.completed;
        const li = todoList.querySelector(`[data-id="${id}"]`);
        li.classList.toggle('completed');
    }
}

// Function to delete a task
function deleteTask(id) {
    tasks = tasks.filter(t => t.id !== id);
    const li = todoList.querySelector(`[data-id="${id}"]`);
    li.remove();
}