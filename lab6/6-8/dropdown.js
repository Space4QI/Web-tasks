function addItem() {
    var newItemText = document.getElementById("newItemText").value;
    var newItemValue = document.getElementById("newItemValue").value;
    var burgerMenu = document.getElementById("menu");

    if (newItemText === "" || newItemValue === "") return;
    
    var newOption = document.createElement("option");
    newOption.textContent = newItemText + ": " + newItemValue;
    newOption.value = newItemValue;
    burgerMenu.appendChild(newOption);
    document.getElementById("newItemText").value = "";
    document.getElementById("newItemValue").value = "";
}
