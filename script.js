let numRows = 0;
let numCols = 0;

//Add a row
function addR() {
    let grid = document.getElementById("grid");
    if (numRows === 0){
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function(){
            this.style.backgroundColor = getColor();
        }
        row.appendChild(col);
        grid.appendChild(row);
        numRows++;
        numCols++;
    }else{
        let row = document.createElement("tr");
        for (let i = 0; i < numCols; ++i){
            col = document.createElement("td");
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
    if (numCols === 0) {
        addR();
    }else{
        let rows = document.getElementsByTagName("tr");
        numCols++;
        for (let row of rows){
            col = document.createElement("td");
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
    if (numRows !== 0){
        let grid = document.getElementById("grid");
        grid.removeChild(grid.lastChild);
        numRows--;
        if (numRows === 0){
            numCols = 0;
        }
//        console.log("Clicked Remove Row");
    }
}
//Remove a column
function removeC() {
    if (numCols !== 0){
        let rows = document.getElementsByTagName("tr");
        for (let row of rows){
            row.removeChild(row.lastChild);
        }
        numCols--;
        if (numCols === 0){
            let grid = document.getElementById("grid");
                grid.innerHTML = "";
            numRows = 0;
        }
    }
//    console.log("Clicked Remove Col");
}
//sets global var for selected color

function getColor(){
    return document.getElementById("selectedID").value;
}

function fill(){
    let cols = document.getElementsByTagName("td");
    for (let col of cols){
        col.style.background = getColor();
    }
    console.log("Clicked Fill All");
}

function clearAll(){
    let cols = document.getElementsByTagName("td");
    for (let col of cols){
        col.style.background = "White";
    }
}

function fillU(){
    console.log("Clicked Fill Uncolored");
}
