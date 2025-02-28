function addTask() {
    let taskText = document.getElementById("taskInput").value;
    let taskDate = document.getElementById("taskDate").value;

    if (taskText === "") {
        alert("Please enter a task!");
        return;
    }

    let taskItem = document.createElement("li");
    taskItem.innerHTML = `${taskText} (Due: ${taskDate}) 
        <button onclick="completeTask(this)">✔</button> 
        <button onclick="editTask(this)">✏</button> 
        <button onclick="deleteTask(this)">❌</button>`;

    document.getElementById("pendingTasks").appendChild(taskItem);
    document.getElementById("taskInput").value = "";
    document.getElementById("taskDate").value = "";
}

function completeTask(button) {
    let taskItem = button.parentElement;
    taskItem.classList.add("completed");
    document.getElementById("completedTasks").appendChild(taskItem);
    button.remove();
}

function editTask(button) {
    let taskItem = button.parentElement;
    let newText = prompt("Edit Task:", taskItem.childNodes[0].nodeValue.split(" (Due:")[0]);
    
    if (newText !== null) {
        taskItem.childNodes[0].nodeValue = newText + " " + taskItem.childNodes[0].nodeValue.split(newText)[1];
    }
}

function deleteTask(button) {
    let taskItem = button.parentElement;
    taskItem.remove();
}




