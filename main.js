import './style.css'

function addTask() {

    let li = document.createElement("li");
    let inputValue = document.getElementById("inputNameTask").value;
    let nameTask = document.createTextNode(inputValue);

    li.appendChild(nameTask);

    if (inputValue === "") {
        alert("Нужно что-то ввести!");
    } else {
        document.getElementById("mainSpace").appendChild(li);
    }

    document.getElementById("inputNameTask").value = "";

    let span = document.createElement("SPAN");
    let symbolOfDelete = document.createTextNode("\u00D7");
    span.className = "delete";
    span.appendChild(symbolOfDelete);
    li.appendChild(span);

}
