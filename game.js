const container = document.getElementById("container");


var gridbutton = document.getElementById("grid-button");
var clearbutton = document.getElementById("clear-button");
gridbutton.onclick = function() {
  let gridsize = prompt("insert grid size");
  var parentId = "container";
  var childName = "grid-item";

  var childNodesToRemove = document.getElementById(parentId).getElementsByClassName('grid-item');
  for(var i=childNodesToRemove.length-1;i >= 0;i--){
      var childNode = childNodesToRemove[i];
      childNode.parentNode.removeChild(childNode);
  }
  makeRows(gridsize, gridsize);
}

clearbutton.onclick = function() {
  console.log("clearing started");
}



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    cell.addEventListener("mouseover", function() {
      console.log(cell.innerText);
      cell.style.backgroundColor = "red";
      cell.style.borderColor = "red";
    })
    container.appendChild(cell).className = "grid-item";
  };
};


makeRows(16, 16);