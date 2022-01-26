const inputBox = document.querySelector(".input-field input")
const addButton = document.querySelector(".input-field button")
const todoList = document.querySelector(".todo-list")
const clearButton = document.querySelector("footer button")


inputBox.onkeyup = () => {
    let userData = inputBox.value;

    if (userData.trim() != 0) {
        addButton.classList.add("active")
    }
    else {
        addButton.classList.remove("active")
    }

}


showTasks()


addButton.onclick = () => {
    let userData = inputBox.value;
    let getLocalStorage = localStorage.getItem("add your new task")

    if (getLocalStorage == null) {
        listArr = []

    }
    else {
        listArr = JSON.parse(getLocalStorage)
    }
    listArr.push(userData)
    localStorage.setItem("add your new task", JSON.stringify(listArr))
    showTasks()
    addButton.classList.remove("active")
}





function showTasks() {
    let getLocalStorage = localStorage.getItem("add your new task")

    if (getLocalStorage == null) {
        listArr = []
    }
    else {
        listArr = JSON.parse(getLocalStorage)
    }

    if (listArr.length > 0) {
        clearButton.classList.add("active")
    }
    else {
        clearButton.classList.remove("active")
    }

    let newList = ''
    listArr.forEach((element, index) => {
        newList += `<li>${element}<span onclick="deleteTask(${index})"><i class="fas fa-trash-alt"></i></span></li>`
    });
    todoList.innerHTML = newList
    inputBox.value = ""
}


function deleteTask(index) {
    let getLocalStorage = localStorage.getItem("add your new task")
    listArr = JSON.parse(getLocalStorage)
    listArr.splice(index, 1)
    localStorage.setItem("add your new task", JSON.stringify(listArr))
    showTasks()
}


clearButton.onclick = () => {
    listArr = []
    localStorage.setItem("add your new task", JSON.stringify(listArr))
    showTasks()
}