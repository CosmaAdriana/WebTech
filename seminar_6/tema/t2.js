let rows = document.querySelectorAll("tbody tr");

if (rows.length > 0) {
  rows[0].style.backgroundColor = "blue";
  rows[0].style.color = "white";

  rows[rows.length - 1].style.backgroundColor = "green";
  rows[rows.length - 1].style.color = "white";

  for (let i = 1; i < rows.length - 1; i++) {
    if (i % 2 === 0) { 
      rows[i].style.backgroundColor = "violet";
    }
  }
}
