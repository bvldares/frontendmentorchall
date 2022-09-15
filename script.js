const dropdown = document.getElementsByClassName("nav-list-btn")
const dropContent = document.getElementsByClassName("links")
const navBar = document.querySelector("nav")


for(let i=0; i<dropdown.length; i++){
    dropdown[i].addEventListener("click", function(){
        if(dropContent[i].style.display === "block"){
            dropContent[i].style.display = "none";
        } else{
            dropContent[i].style.display = "block"
        }
    })
}



document.querySelector(".nav-open").addEventListener("click", function(){
    if(navBar.style.transform === "translateX(100%)"){
        navBar.style.transform = "translateX(0%)"
    }else{
        navBar.style.transform = "translateX(100%)"
    }
})