function addingEventListener() {
    const input=document.getElementById("button");
    function clickalert(){
        alert("I was clicked!");
    }
    input.addEventListener("click", clickalert);

}

addingEventListener();