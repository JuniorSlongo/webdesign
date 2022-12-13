const inputArea = document.querySelector(".to-do__input-area");
const inputText = document.getElementById("toDoInput");
const button = document.querySelector(".button-add");
const toDoWrapper = document.querySelector(".add-itens");

const selectAllArea = document.querySelector(".select-all__area");
const allDone = document.querySelector(".all-done")
const removeAll = document.querySelector(".remove-all")



function darkMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Modo Noturno está ligado";
  }
  function lightMode() {
    var element = document.body;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Modo Noturno está desligado";
  }
  function darkModeButton() {
    var element = document.button-gray;
    var content = document.getElementById("DarkModetext");
    element.className = "dark-mode";
    content.innerText = "Modo Noturno está ligado";
  }
  function lightModeButton() {
    var element = document.button-gray;
    var content = document.getElementById("DarkModetext");
    element.className = "light-mode";
    content.innerText = "Modo Noturno está desligado";
  }

















    //DRAG AND DROP
 
let dragged

button.addEventListener("click", function(event) {
    event.preventDefault();

    //VALIDAÇÃO DO CAMPO DE TEXTO

    if(inputText.value === "" || inputText.value === null || inputText.value === " " || inputText.value === undefined){
        inputText.focus();
        return false;
    }
    
    // TO DO LISTS ADICIONADAS 

    const toDoBox = document.createElement("div");
    toDoBox.classList.add("to-do__box-inside")
    toDoBox.style.backgroundColor = "#fff";
    toDoBox.style.display = "flex";
    toDoBox.style.justifyContent = "space-between";
    toDoBox.style.padding = "0px 10px";
    toDoBox.setAttribute("draggable", "true")

    let dragged

    toDoBox.addEventListener("dragstart", function(event){
        dragged = event.target
        console.log(dragged)

    })

    toDoBox.addEventListener("dragend", function(event1){
        console.log(event1.target)
        dropItem = event.target

        if ( event.target.className == "dropzone" ) {
            event.target.style.background = "";
            dropItem.parentNode.removeChild( dropItem );
            dropItem.target.appendChild( dragged );

    }

});
    
    

    

    const toDoItem = document.createElement("p");
    toDoItem.classList.add("to-do__box-text")
    toDoItem.innerHTML = inputText.value;

    const deleteButton = document.createElement("button")
    deleteButton.innerHTML = "x"
    deleteButton.classList.add("button")
    
    toDoBox.appendChild(toDoItem);
    toDoBox.appendChild(deleteButton);
    toDoWrapper.appendChild(toDoBox);

    
// DRAG AND DROP TO DO ITENS

    toDoBox.addEventListener("allowDrop", function(e){
        e.preventDefault()
    })

    toDoBox.addEventListener("dragstart", function(e){
        dragged = e.target.closest('.to-do__box-inside')
    })

    toDoBox.addEventListener("dragover", function(e){
        const reference = e.target.closest('.to-do__box-inside');
        toDoWrapper.insertBefore(dragged, reference)
    })


    toDoBox.addEventListener("drop", function(e){ 
        console.log('drop')
   });


//DELATAR ITEM 
    deleteButton.addEventListener("click", function(event2){
        event2.preventDefault()
        toDoBox.remove()
    
    })

    toDoBox.addEventListener("click", function(evento3){

        if (toDoItem.classList.contains("to-do__box-text")){
            toDoItem.classList.remove("to-do__box-text");
            toDoItem.classList.add("to-do__box-text_checked");
        }else if (toDoItem.classList.contains("to-do__box-text_checked")) {
            toDoItem.classList.remove("to-do__box-text_checked");
            toDoItem.classList.add("to-do__box-text");
        }
    
});




//CLICAR EM TODOS OS ITENS 
    allDone.addEventListener("click", function(e){
            if (toDoItem.classList.contains("to-do__box-text")){
                toDoItem.classList.remove("to-do__box-text");
                toDoItem.classList.add("to-do__box-text_checked");
            }else if (toDoItem.classList.contains("to-do__box-text_checked")) {
                toDoItem.classList.remove("to-do__box-text_checked");
                toDoItem.classList.add("to-do__box-text");
            }

    });

// DELETAR TODOS OS ITENS

    removeAll.addEventListener("click", function(event1){
        event1.preventDefault();
    
        toDoBox.remove()
    })

    inputText.value = ""
});
