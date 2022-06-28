const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    cell.innerText = (c + 1);
    container.appendChild(cell).className = "grid-item";
  };
  let griditem = document.getElementsByClassName('grid-item');
  griditem.onmousehover = getIDs();
};

function getIDs()
{ 
    console.log('getIDs instantiated');
}


makeRows(16, 16);