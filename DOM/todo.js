let taskInput = document.getElementById("taskInput");
let addBtn = document.getElementById("addBtn");
let taskList = document.getElementById("taskList");

let tasks = [];
let taskCount = 1;


function render() {
    taskList.innerHTML = "";

    tasks.forEach((task) => {
        let li = document.createElement("li");
        li.classList.add("task-item");

        let span = document.createElement("span");
        span.classList.add("task-text");
        span.textContent = `task:${task.text}  completed:${task.completed}`;

        let btnWrapper = document.createElement("div");
        btnWrapper.classList.add("task-buttons");

        let completeBtn = document.createElement("button");
        completeBtn.textContent = "✅";

        
    })
}