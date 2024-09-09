// Get elements from the DOM
const addTaskBtn = document.getElementById("submit")
const resetBtn = document.getElementById("reset")
const taskList = document.getElementById("unordered-list")
const newTaskInput = document.getElementById("new-task")


function addTask() {
    const taskText = newTaskInput.value;

    if (taskText === "") {
        alert("Please enter a task!")
        return
    }

    const li = document.createElement("li")
    li.classList.add("list-item")

    const checkbox = document.createElement("input")
    checkbox.type = "checkbox"
    checkbox.classList.add("checkbox")

    const task = document.createElement("span")
    task.textContent = taskText

    checkbox.addEventListener("change", () => {
        if (checkbox.checked) {
            li.remove()
        }
    })

    li.appendChild(checkbox)
    li.appendChild(task)

    taskList.appendChild(li)

    newTaskInput.value = ""
}

addTaskBtn.addEventListener("click", addTask)

newTaskInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addTask()
    }
})

resetBtn.addEventListener("click", function () {
    taskList.innerHTML = ""
})
