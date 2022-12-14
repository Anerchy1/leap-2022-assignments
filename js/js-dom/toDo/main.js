const todoTarget = document.querySelector("#todoTarget");
const testTarget = document.querySelector("#testTarget");
const inputTarget = document.querySelector("#inputTarget");

//change can be in 'input'

inputTarget.addEventListener("change", function(event){
    testTarget.innerHTML = event.target.value;
});


inputTarget.addEventListener("keypress", function(e){
    if(e.key === "Enter"){
        testTarget.innerHTML = e.target.value;
    }
})


function liCreater(e){
  
    if(e.key === "Enter"){
        const li = document.createElement("li");
        li.innerHTML = e.target.value;
        const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "x";
        const editBtn= document.createElement("button");
        editBtn.innerHTML = "&#xf044"
        todoTarget.appendChild(li);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        
        e.target.value = "";

        deleteBtn.addEventListener("click", function(){
            todoTarget.removeChild(li);
        });
        
        editBtn.addEventListener("click", function(){
            li.innerHTML = "edited list ";
            const deleteBtn = document.createElement("button");
        deleteBtn.innerHTML = "x";
        const editBtn= document.createElement("button");
        editBtn.innerHTML = "&#xf044"
        todoTarget.appendChild(li);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        })

    }

}

function liRemover(e){
    
    
}


inputTarget.addEventListener("keypress", liCreater);


