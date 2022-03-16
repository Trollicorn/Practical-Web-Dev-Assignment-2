let numRows = 0;
let numCols = 0;

//Add a row
function addR() {
    let grid = document.getElementById("grid");
    //if no rows/cols
    if (numRows === 0){
        //make one row with one col
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.style.backgroundColor = "White";
        col.onclick = function(){
            this.style.backgroundColor = getColor();
        }
        row.appendChild(col);
        grid.appendChild(row);
        numRows++;
        numCols++;
    //else
    }else{
        //make a row with the same number of cols as existing rows
        let row = document.createElement("tr");
        for (let i = 0; i < numCols; ++i){
            col = document.createElement("td");
            col.style.backgroundColor = "White";
            col.onclick = function(){
                this.style.backgroundColor = getColor();
            }
            row.appendChild(col);
        }
        grid.appendChild(row);
        numRows++;
    }
//    console.log("Clicked Add Row");
}
//Add a column
function addC() {
    //if no cols (no rows), handle in addR
    if (numCols === 0) {
        addR();
    }else{
        //else add a col to all rows
        let rows = document.getElementsByTagName("tr");
        numCols++;
        for (let row of rows){
            col = document.createElement("td");
            col.style.backgroundColor = "White";
            col.onclick = function(){
                this.style.backgroundColor = getColor();
            }
            row.appendChild(col);
        }
    }
//    console.log("Clicked Add Col");
}

//Remove a row
function removeR() {
    //remove row element and decrement number of rows
    if (numRows !== 0){
        let grid = document.getElementById("grid");
        grid.removeChild(grid.lastChild);
        numRows--;
        if (numRows === 0){
            //no more rows/cols
            numCols = 0;
        }
//        console.log("Clicked Remove Row");
    }
}
//Remove a column
function removeC() {
    //remove col element and decrement number of cols
    if (numCols !== 0){
        let rows = document.getElementsByTagName("tr");
        for (let row of rows){
            row.removeChild(row.lastChild);
        }
        numCols--;
        if (numCols === 0){
            //no rows/cols left
            let grid = document.getElementById("grid");
                grid.innerHTML = "";
            numRows = 0;
        }
    }
//    console.log("Clicked Remove Col");
}

function getColor(){
    //gets color from selector
    return document.getElementById("selectedID").value;
}

function fill(){
    //changes background color of all cols
    let cols = document.getElementsByTagName("td");
    for (let col of cols){
        col.style.backgroundColor = getColor();
    }
  //  console.log("Clicked Fill All");
}

function clearAll(){
    //makes color of every col white
    let cols = document.getElementsByTagName("td");
    for (let col of cols){
        col.style.backgroundColor = "White";
    }
}

function fillU(){
    //changes color of every white col
    let cols = document.getElementsByTagName("td");
    for (let col of cols){
        if (col.style.backgroundColor === "white"){
            col.style.backgroundColor = getColor();
        }
    }
//    console.log("Clicked Fill Uncolored");
}
