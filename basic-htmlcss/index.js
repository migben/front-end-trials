let myBtn = document.getElementById("btn")
let myTitle = document.getElementById("title")
let counter = 5

myBtn.addEventListener("click", () =>{
    counter = counter + 5
    myBtn.textContent = counter
    
})

let myHeader = document.getElementById("myHeader")

myBtn.style.background = "skyblue"
myBtn.style.width = "100px"
myBtn.style.padding ="5px"
myBtn.style.fontWeight = "bold"

myHeader.style.background = '#000';

myHeader.style.color = 'skyblue';


