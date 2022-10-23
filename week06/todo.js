toDoList = []
function addTodo() {
    let todoText = document.getElementById("todoItem");
    todoBox()
    const todoItem = new Object();
    todoItem.completed = false;
    todoItem.text = todoText;
    todoItem.done = false;
    addToList(todoItem)
}
function addToList(x) {
    todoList.push(x);
    document.getElementById("listTodo").value = "";
    let listBox = document.getElementById("listTodo");
    let value = 0;
    let listSpot = 0;
    toDoList.forEach(items => {
        let box = document.createElement("div");
        let todoButton = document.createElement("button");
        let textBox = document.createElement("div");
        let todoDone = document.createElement("button");
        box.id = "todoListItem" + listSpot;
        todoButton.onclick = "changeState()";
        textBox.textContent = items.text;
        todoDone.id = "";
        box.appendChild(todoButton);
        box.appendChild(textBox);
        box.appendChild(todoDone);
        listBox.appendChild(box);
        value = value + 1;
        listSpot = listSpot + 1;
    });
    value = value.toString();
    document.getElementById('number').textContent = value;
}
function todoBox() {
    document.getElementById("todoItem").value = "";
}

function changeState() {

}
function removeFromList() {
    document.addEventListener("click", removeFromList);
}
/*
Use old method to create a div with two buttons, text, and added css class


with filter have it also rego through the todo array to allow the given filter to another array without affecting original array. Without destorying orginal list. 

have a different js to handle all todo items. 

const person = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";



*/