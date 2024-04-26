const inputBox = document.getElementById("input-box")
const listContainer = document.getElementById("lists-container")


function addTask(){
    if(inputBox.value == " "){
        alert("please add text")
    }else{

        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML ='&#9932;';
        li.appendChild(span)
        localStorage.setItem("data" , listContainer.innerHTML)
        inputBox.value =" ";
    }

}


listContainer.addEventListener("click", function(e){
    if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
    }
localStorage.setItem("data" , listContainer.innerHTML)
})

listContainer.innerHTML = localStorage.getItem("data")