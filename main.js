//input:
let input = document.querySelector("#todo-task");

//buttons:

let addTodo = document.querySelector("#add-todo");
let removeCompleted = document.querySelector("#remove-completed");
let removeAll = document.querySelector("#remove-all");

//form:
let form = document.querySelector("form");

//todo list:
let list = document.querySelector("#list");

// form.addEventListener("submit", function(event){
//     event.preventDefault();
// })

let taskList = [];

form.addEventListener("submit", function(event){
    event.preventDefault();

    if (input.value === ""){
        alert("Please input a task")
    } else {
        //taskList.push(input.value);

        //create new li:
        let newList = document.createElement("li");

        //add event listener for crossing off later:
        newList.addEventListener("click", function(){
            newList.style.textDecoration = "line-through";
        })

        //create text:
        newList.innerText = input.value;

        //append li to list:
        list.appendChild(newList);

        input.value = ""; 


        //remove completed:
        removeCompleted.addEventListener("click", function(){
            if (newList.style.textDecoration === "line-through"){
                newList.remove();
            }
        })


        //remove all:
        removeAll.addEventListener("click", function(){
            newList.remove();
        })

    }

    
    // else{
    //     //create li:
    //     let newList = document.createElement("li");

    //     //create text:
    //     let createText = document.createTextNode(input.value);

    //     //append text to li:
    //     newList.appendChild(createText);

    //     //append li to list 
    //     //by getting element by ID (the list) and appendChild li to it:
    //     list.appendChild(newList);

    //     alert("you have successfully added " + input.value)

    //     input.value = "";
    // }

})


//======================================================================

//remove completed:

// removeCompleted.addEventListener("click", function(){
//     if (newList.style.textDecoration === "line-through"){
//         newList.remove();
//     }
// })