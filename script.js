
let body = document.querySelector('body')
let outer = document.createElement("div")
let button = document.createElement('button')


body.style.backgroundColor = "black"
outer.style.backgroundColor = "black"
outer.style.display = "flex"; //sets display for the outer container to flex, arranging the containers side by side
outer.style.width = "960px" //fixes the width of the outer container
outer.style.height = "960px" //fixes the height of the outer container
outer.classList.add("outerContainer") 
body.append(button) //attatches button to the body
body.append(outer) //attatches outer to the body
button.style.width = "200px";
button.style.height = "200px"
button.addEventListener('click', function(){

    createGrid(Number(prompt()))
})



function createGrid(x){
    for (let j=0; j < x; j++){
        let container = document.createElement('div')
            container.classList.add("container")
            outer.append(container) //appends div container to the body, since display for body is flex, the containers are lined up horizontally as block elements
            container.style.flexGrow = "1"
            container.style.display = "flex"
            container.style.flexDirection = "column"
            //creates i number of rows
        for (let i = 0; i < x; i++ ) {
            let box = document.createElement("div"); //creates 1 box
            //box.style.width = "50px"; //hardcoding this would not allow the box to expand to fill
            box.style.height = "50px";
            box.style.backgroundColor = "red"
            box.style.border = "1px solid green"
            box.classList.add("box")
            box.style.flexGrow = "1"
            //changes color of the box when mouse hovers
            box.addEventListener("mouseover", () => {box.style.backgroundColor = "green"});
            container.appendChild(box) //appends box to container
        }
    }
}


