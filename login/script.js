function savebtn(event) {
    event.preventDefault();
    const title = document.getElementById('title').value;
    const assign = document.getElementById('assign').value;
    const description = document.getElementById('textarea').value;

    if (title && assign && description) {
        const task = { title, assign, description };
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        tasks.push(task);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        alert("Task saved successfully!");
        document.getElementById('title').value = '';
        document.getElementById('assign').value = '';
        document.getElementById('textarea').value = '';
    } else {
        alert("Please fill in all fields!");
    }
}

// Load tasks in 'index.html'
document.addEventListener('DOMContentLoaded', function () {
    const taskList = document.getElementById('todoul');
    const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

    tasks.forEach((task, index) => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <p><strong>Title:</strong> ${task.title}</p>
            <p><strong>Assigned To:</strong> ${task.assign}</p>
            <p><strong>Description:</strong> ${task.description}</p>
            <button class="edit-btn" data-index="${index}">Edit</button>
            <button class="delete-btn" data-index="${index}">Delete</button>
        `;
        taskList.appendChild(listItem);
    });

    // Edit button functionality
    document.querySelectorAll('.edit-btn').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.dataset.index;
            openEditPopup(index);
        });
    });

    // Delete button functionality
    document.querySelectorAll('.delete-btn').forEach(button => {
        button.addEventListener('click', function () {
            const index = this.dataset.index;
            deleteTask(index);
        });
    });
});

// Open the edit popup
function openEditPopup(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    const task = tasks[index];
    document.getElementById('edit-title').value = task.title;
    document.getElementById('edit-assign').value = task.assign;
    document.getElementById('edit-description').value = task.description;

    const popup = document.getElementById('edit-popup');
    popup.style.display = 'block';

    document.getElementById('edit-form').onsubmit = function (event) {
        event.preventDefault();
        saveEdit(index);
    };

    document.getElementById('cancel-edit').onclick = function () {
        popup.style.display = 'none';
    };
}

// Save edits to task
function saveEdit(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks[index].title = document.getElementById('edit-title').value;
    tasks[index].assign = document.getElementById('edit-assign').value;
    tasks[index].description = document.getElementById('edit-description').value;

    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert("Task updated successfully!");
    location.reload();
}

// Delete task
function deleteTask(index) {
    const tasks = JSON.parse(localStorage.getItem('tasks'));
    tasks.splice(index, 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    alert("Task deleted successfully!");
    location.reload();
}





