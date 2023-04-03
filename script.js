
let body = document.querySelector('body');
let button = document.createElement('button');
let outer;

body.append(button) //attatches button to the body

//styling the button
button.style.width = "450px";
button.textContent = "Create New Grid";
button.style.fontSize = "40px";
button.style.fontStyle = "italic";
button.style.height = "200px";
button.style.transition = "0.8s" //styles the hover transition time


//styles the hover effect on the button
button.addEventListener("mouseenter", function(){
    button.style.backgroundColor = "blue"
    button.style.boxShadow = "0px 0px 20px blue";
    button.style.border = "1px solid white";
    button.style.color = "white";
})
button.addEventListener("mouseleave", function(){
    button.style.backgroundColor= "white";
    button.style.boxShadow = "none";
    button.style.border = "1px solid black";
    button.style.color = "black";
})

//sets up the body
body.style.height = "2000px";
body.style.display = "Flex";
body.style.flexDirection = "Column";
body.style.alignItems = "center";
body.style.justifyContent = "space-evenly";
body.style.backgroundColor = "#ffe6a7";

//creates the first outerContainer and the grid it contains
outer = document.createElement('div'); //creates first outerContainer
outer.style.backgroundColor = "black";
outer.style.display = "flex"; //sets display for the outer container to flex, arranging the containers side by side
outer.style.width = "960px"; //fixes the width of the outer container
outer.style.height = "960px"; //fixes the height of the outer container
outer.classList.add("outerContainer"); //adds a class to the outercontainer div
createGrid(25); //creates the first grid of 25 by 25

body.append(outer); //attatches the outerContainer to the body

button.addEventListener('click', function(){
    outer.remove() //removes the previous outer container and thus the grid it contains
    outer = document.createElement('div') //creates new outer container
    outer.style.backgroundColor = "black"; 
    outer.style.display = "flex"; //sets display for the outer container to flex, arranging the containers side by side
    outer.style.width = "960px"; //fixes the width of the outer container
    outer.style.height = "960px"; //fixes the height of the outer container
    outer.classList.add("outerContainer"); //adds a class to the outercontainer div

    body.append(outer);//attatches the outerContainer to the body
    createGrid(Number(prompt()));
    
})


//creates the grid x by x
function createGrid(x){
    for (let j=0; j < x; j++){
        let container = document.createElement('div');
            container.classList.add("container");
            outer.append(container) //appends div container to the body, since display for body is flex, the containers are lined up horizontally as block elements
            container.style.flexGrow = "1";
            container.style.display = "flex";
            container.style.flexDirection = "column";
            //creates i number of rows
        for (let i = 0; i < x; i++ ) {
            let box = document.createElement("div"); //creates 1 box
            //box.style.width = "50px"; //hardcoding this would not allow the box to expand to fill
            box.style.height = "50px";
            box.style.backgroundColor = "white";
            box.style.border = "1px solid black";
            box.classList.add("box");
            box.style.flexGrow = "1";
            //changes color of the box when mouse hovers
            box.addEventListener("mouseover", () => {box.style.backgroundColor = "black"});
            container.appendChild(box); //appends box to container
        }
    }
}


