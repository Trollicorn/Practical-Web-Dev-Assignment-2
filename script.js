let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    console.log("Clicked Add Row")
}
//Add a column
function addC() {
    console.log("Clicked Add Col")
}

//Remove a row
function removeR() {
    console.log("Clicked Remove Row")
}
//Remove a column
function removeC() {
    console.log("Clicked Remove Col")
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    console.log("Clicked Fill All")
}

function clearAll(){
    console.log("Clicked Clear All")
}

function fillU(){
    console.log("Clicked Fill Uncolored")
}
