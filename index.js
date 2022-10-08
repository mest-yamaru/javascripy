const form = document.getElementById("form");
const input = document.getElementById("input");
const ul = document.getElementById("ul");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    add();
})

function add() {
    let todoText = input.value;
    if (todoText) {
        const li = document.createElement("li");
        li.innerText = input.value;
        li.classList.add("list-group-item");
        ul.appendChild(li);
        input.value = "";
        saveData();
    } else {
        noTextError();
    }
}

function saveData() {
    const lists = document.querySelectorAll("li");
    console.log(lists);
}

function noTextError() {
    const li = document.createElement("li");
    li.innerText = "文字を入力してください";
    li.classList.add("text-danger");
    ul.appendChild(li);
    input.value = "";
}