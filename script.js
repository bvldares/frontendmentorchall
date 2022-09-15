const dropdown = document.getElementsByClassName("nav-list-btn")
const dropContent = document.getElementsByClassName("links")
for(let i=0; i<dropdown.length; i++){
    dropdown[i].addEventListener("click", function(){
        if(dropContent[i].style.display === "block"){
            dropContent[i].style.display = "none";
        } else{
            dropContent[i].style.display = "block"
        }
    })
}



