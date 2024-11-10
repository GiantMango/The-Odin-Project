const addButton = document.querySelector("div>button");
addButton.addEventListener("click", addItem);
const itemInput = document.querySelector("input#item");
const itemList = document.querySelector("ul");

function addItem(){
    const newLi = document.createElement("li");
    const newItem = document.createElement("span");
    newItem.textContent = itemInput.value;
    newItem.setAttribute("id", newItem.textContent)

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("id", "delete");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function (e) {
        e.target.parentNode.remove();
    })


    newLi.appendChild(newItem);
    newLi.appendChild(deleteButton);
    
    itemList.appendChild(newLi);
    itemInput.value = "";
}