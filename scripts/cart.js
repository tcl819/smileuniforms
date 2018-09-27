document.getElementById("testButton").onclick = function(){test()};

function test() {
  var table = document.getElementById("cartTable");

  var row = table.insertRow();
  row.scope = "row";
  var cLogo = row.insertCell(0);

  var cProduct = row.insertCell(1);
  var cUnit = row.insertCell(2);
  var cQty = row.insertCell(3);
  var cTotal = row.insertCell(4);
  cLogo.innerHTML = "<img src=\"pictures/uniform-masteryfrancis.jpg\" class=\"img-responsive\" style=\"width:90%;\"/>";
  // Color (sleeve) type, size, school
  cProduct.innerHTML = "White LS Polo, Size Adult XL, Mastery Charter - Francis D. Pastorius";
  cUnit.innerHTML = "$1.00"
  cQty.innerHTML = "5"
  cTotal.innerHTML = "$5.00"
}
