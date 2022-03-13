let numRows = 0;
let numCols = 0;
let colorSelected; 

//Add a row
function addR() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    console.log(rows.length);
    if (numRows === 0){
        let row = document.createElement("tr");
        let col = document.createElement("td");
        col.onclick = function(){
            this.style.backgroundColor = colorSelected;
        };
        row.appendChild(col);
        grid.appendChild(row);
        numRows++;
        numCols++;
    }else{
        let row = document.createElement("tr");
        for (let i = 0; i < numCols; ++i){
            row.appendChild(document.createElement("td"));
        }
        grid.appendChild(row);
    }
    
//    console.log("Clicked Add Row");
}
//Add a column
function addC() {
    let grid = document.getElementById("grid");
    let rows = document.getElementsByTagName("tr");
    if (numCols === 0) {
        addR();
    }else{
        numCols++;
        for (let row of rows){
            row.appendChild(document.createElement("td"));
        }
    }
    console.log("Clicked Add Col");
}

//Remove a row
function removeR() {
    console.log("Clicked Remove Row");
}
//Remove a column
function removeC() {
    console.log("Clicked Remove Col");
}
//sets global var for selected color
function selected(){
    colorSelected = document.getElementById("selectedID").value;
    console.log(colorSelected);
}

function fill(){
    console.log("Clicked Fill All");
}

function clearAll(){
    console.log("Clicked Clear All");
}

function fillU(){
    console.log("Clicked Fill Uncolored");
}
