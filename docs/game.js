const container = document.getElementById("container");
var gridbutton = document.getElementById("grid-button");
var clearbutton = document.getElementById("clear-button");

gridbutton.onclick = function () {
  let gridsize = prompt("insert grid size");
  while (gridsize > 100 || gridsize < 1) {
    gridsize = prompt("insert grid size");
  }

  var parentId = "container";
  var childName = "grid-item";

  var childNodesToRemove = document.getElementById(parentId).getElementsByClassName('grid-item');
  for (var i = childNodesToRemove.length - 1; i >= 0; i--) {
    var childNode = childNodesToRemove[i];
    childNode.parentNode.removeChild(childNode);
  }
  makeRows(gridsize, gridsize);
}

clearbutton.onclick = function () {
  const griditems = document.querySelectorAll('.grid-item');

  griditems.forEach(item => {
    item.style.backgroundColor = "white";
    item.style.borderColor = "white";
  });
}



function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let size = 600 / rows;
    let cell = document.createElement("div");
    console.log(`rows are of size ${size}`)
    cell.style.height = `${size}px`;
    cell.style.width = `${size}px`;
 
    cell.addEventListener("mouseover", function () {
      let color = getCurrentColor();
      console.log(`${color}`);
      cell.style.backgroundColor = `${color}`;
      cell.style.borderColor = `${color}`;
    })
    container.appendChild(cell).className = "grid-item";
  };
};


function getCurrentColor() {
  return document.getElementById("colorpicker").value; 
}

makeRows(16, 16);