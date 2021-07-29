let enterButton = document.getElementById("enter")
let input = document.getElementById("userInput")
let ul = document.querySelector("ul")
let item = document.getElementsByTagName("li")

function inputLength(){
    return input.value.length
}

function listLength(){
    return item.length
}

function createListItem() {
    let li = document.createElement("li");//Create task inside of li tag
    li.appendChild(document.createTextNode(input.value))//Makes text from input to be text inside of li tag
    ul.appendChild(li)//Put li inside of ul
    input.value = ""//reset

    //Mark task as finished
    function crossOut(){
        li.classList.toggle("done")
    }

    li.addEventListener("click", crossOut)

    let deleteBtn = document.createElement("button")
    deleteBtn.appendChild(document.createTextNode("X"))
    li.appendChild(deleteBtn)
    deleteBtn.addEventListener("click", deleteListItem)

    //Delete item
    function deleteListItem(){
        li.classList.add("delete")
    }
}

function addListAfterClick(){
    if (inputLength() > 0) {
        //Make Sure not to create an item with no text
        createListElement()
    }
}

function addListAfterKeypress(event) {
    if(inputLength() > 0 && event.which === 13){
        //13 is keycode for Enter key on keyboard
        createListElement()
    }
}


enterButton.addEventListener("click", addListAfterClick)
input.addEventListener("keypress", addListAfterKeypress)
