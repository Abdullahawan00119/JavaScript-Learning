var todoArray = [];
var ToDoList = document.querySelector("#ToDoList");
var TodosInput = document.querySelector("#TodosInput");

function addToDo() {
    if (!TodosInput.value.trim()) {
        return alert("Please enter the Todos!")
    }
    todoArray.push(TodosInput.value.trim());
    TodoRender();
}
function TodoRender() {
    ToDoList.innerHTML = ""
    for (let i = 0; i < todoArray.length; i++) {
        ToDoList.innerHTML += `
          <li class="flex justify-between items-center bg-gray-100 px-4 py-2 rounded-xl shadow-sm">
            <span class="text-gray-800">${todoArray[i]}</span>
            <div class="flex gap-2">
              <button onclick="Edit(${i})"
                class="bg-yellow-400 hover:bg-yellow-500 text-white px-3 py-1 rounded-lg text-sm">Edit</button>
              <button onclick="Delete(${i})"
                class="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm">Delete</button>
            </div>
          </li>
        `;
    }
    TodosInput.value = "";
}
function DeleteAllToDo() {
    todoArray = []
    TodoRender();

}
function Edit(index) {
    var updatedValue = prompt("Enter the Updated ToDo!");
    if (!updatedValue.trim()) {
        return alert("Please enter the Updated Todo")
    }
    todoArray.splice(index, 1, updatedValue);
    TodoRender();
}
function Delete(index) {
    todoArray.splice(index, 1)
    TodoRender();
}