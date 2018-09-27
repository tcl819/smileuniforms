document.getElementById("polo").onclick = function(){polo()};
document.getElementById("sweater").onclick = function(){sweater()};
document.getElementById("blazer").onclick = function(){blazer()};
document.getElementById("short").onclick = function(){short()};
document.getElementById("long").onclick = function(){long()};
document.getElementById("colorPolo").onclick = function(){color()};
document.getElementById("colorSweater").onclick = function(){color()};
document.getElementById("colorBlazer").onclick = function(){color()};
document.getElementById("size").onclick = function(){size()};
document.getElementById("schoolPolo").onclick = function(){school()};
document.getElementById("schoolSweater").onclick = function(){school()};
document.getElementById("schoolBlazer").onclick = function(){school()};
document.getElementById("embUpdate").onclick = function(){update()};
document.getElementById("quantity").oninput = function(){quantity()};

var shirt;
var sleeveLength;
var varShirt;
var varSleeve;
var varColor;
var varSize;
var varSchool;
var varQuantity;

var singleCost;
var totalCost;

var id;
var idSchool;

function polo() {
  if(shirt != "polo") {
    togglePolo();
  }

  if(shirt == "sweater") {
    toggleSweater();
  }
  else if(shirt == "blazer") {
    toggleBlazer();
  }

  shirt = "polo";
}

function sweater() {
  if(shirt != "sweater") {
    toggleSweater();
  }

  if(shirt == "polo") {
    togglePolo();
  }
  else if(shirt == "blazer") {
    toggleBlazer();
  }

  shirt = "sweater";
}

function blazer() {
  if(shirt != "blazer") {
    toggleBlazer();
  }

  if(shirt == "sweater") {
    toggleSweater();
  }
  else if(shirt == "polo") {
    togglePolo();
  }

  shirt = "blazer";
}

function togglePolo() {
  document.getElementById("polo").classList.toggle("btn-primary");
  document.getElementById("polo").classList.toggle("btn-light");
  document.getElementById("embCardOne-Polo").classList.toggle("d-none");
  hideCardsPolo();
}

function toggleSweater() {
  document.getElementById("sweater").classList.toggle("btn-primary");
  document.getElementById("sweater").classList.toggle("btn-light");
  document.getElementById("embCardTwo-Sweater").classList.toggle("d-none");
  hideCards();
}

function toggleBlazer() {
  document.getElementById("blazer").classList.toggle("btn-primary");
  document.getElementById("blazer").classList.toggle("btn-light");
  document.getElementById("embCardTwo-Blazer").classList.toggle("d-none");
  hideCards();
}

function short() {
  if (sleeveLength != "short") {
    document.getElementById("short").classList.toggle("btn-primary");
    document.getElementById("short").classList.toggle("btn-light");
  }

  if (sleeveLength == "long") {
    document.getElementById("long").classList.toggle("btn-primary");
    document.getElementById("long").classList.toggle("btn-light");
  }
  sleeveLength = "short";
  document.getElementById("embCardTwo-Polo").classList.toggle("d-none", false);
  document.getElementById("review").classList.toggle("d-none", true);
}

function long() {
  if (sleeveLength != "long") {
    document.getElementById("long").classList.toggle("btn-primary");
    document.getElementById("long").classList.toggle("btn-light");
  }

  if (sleeveLength == "short") {
    document.getElementById("short").classList.toggle("btn-primary");
    document.getElementById("short").classList.toggle("btn-light");
  }
  sleeveLength = "long";
  document.getElementById("embCardTwo-Polo").classList.toggle("d-none", false);
  document.getElementById("review").classList.toggle("d-none", true);
}

function school() {
  if (shirt == "polo") {
    document.getElementById("embCardThree").classList.toggle("d-none",false);
  }
  else {
    document.getElementById("embCardThree-Two").classList.toggle("d-none", false);
  }
  document.getElementById("review").classList.toggle("d-none", true);
}

function hideCardsPolo() {
  document.getElementById("embCardTwo-Polo").classList.toggle("d-none", true);
  document.getElementById("embCardThree").classList.toggle("d-none", true);
  document.getElementById("embCardThree-Two").classList.toggle("d-none", true);
  document.getElementById("embCardFour-Polo").classList.toggle("d-none", true);
  document.getElementById("embCardFour-Sweater").classList.toggle("d-none", true);
  document.getElementById("embCardFour-Blazer").classList.toggle("d-none", true);
  document.getElementById("embCardFive").classList.toggle("d-none", true);
  document.getElementById("embUpdate").classList.toggle("d-none", true);
  document.getElementById("review").classList.toggle("d-none", true);

  // reset sleeve length card
  document.getElementById("short").classList.toggle("btn-primary", false);
  document.getElementById("short").classList.toggle("btn-light", true);
  document.getElementById("long").classList.toggle("btn-primary", false);
  document.getElementById("long").classList.toggle("btn-light", true);
  sleeveLength = undefined;
}

function hideCards() {
  document.getElementById("embCardThree").classList.toggle("d-none", true);
  document.getElementById("embCardThree-Two").classList.toggle("d-none", true);
  document.getElementById("embCardFour-Polo").classList.toggle("d-none", true);
  document.getElementById("embCardFour-Sweater").classList.toggle("d-none", true);
  document.getElementById("embCardFour-Blazer").classList.toggle("d-none", true);
  document.getElementById("embCardFive").classList.toggle("d-none", true);
  document.getElementById("embUpdate").classList.toggle("d-none", true);
  document.getElementById("review").classList.toggle("d-none", true);
}

function size() {
  switch (shirt) {
    case "polo":
      document.getElementById("embCardFour-Polo").classList.toggle("d-none", false);
      break;
    case "sweater":
      document.getElementById("embCardFour-Sweater").classList.toggle("d-none", false);
      break;
    case "blazer":
      document.getElementById("embCardFour-Blazer").classList.toggle("d-none", false);
      break;
    default:
      break;
  }
  document.getElementById("review").classList.toggle("d-none", true);
}

function color() {
  document.getElementById("embCardFive").classList.toggle("d-none", false);
  document.getElementById("embUpdate").classList.toggle("d-none", false);
  document.getElementById("review").classList.toggle("d-none", true);
}

function quantity() {
  document.getElementById("quantityLabel").innerHTML = document.getElementById("quantity").value;
  document.getElementById("review").classList.toggle("d-none", true);
}

function update() {
  // gathers review info
  varSize = document.getElementById("size").value;
  varQuantity = document.getElementById("quantity").value;
  switch(shirt) {
    case "polo":
      varShirt = "Polo Shirt";
      varColor = document.getElementById("colorPolo").value;
      varSchool = document.getElementById("schoolPolo").value;
      switch(sleeveLength) {
        case "short":
          varSleeve = "Short Sleeve"
          break;
        case "long":
          varSleeve = "Long Sleeve"
          break;
        default:
          break;
      }
      document.getElementById("showSleeve").classList.toggle("d-none",false);
      break;
    case "sweater":
      varShirt = "Sweater";
      varColor = document.getElementById("colorSweater").value;
      varSchool = document.getElementById("schoolSweater").value;
      varSleeve = null;
      document.getElementById("showSleeve").classList.toggle("d-none",true);
      break;
    case "blazer":
      varShirt = "Blazer";
      varColor = document.getElementById("colorBlazer").value;
      varSchool = document.getElementById("schoolBlazer").value;
      varSleeve = null;
      document.getElementById("showSleeve").classList.toggle("d-none",true);
      break;
    default:
      break;
  }

  // sets review info to display
  /*
  document.getElementById("displayShirt").innerHTML = varShirt;
  document.getElementById("displayColor").innerHTML = varColor;
  document.getElementById("displaySize").innerHTML = varSize;
  document.getElementById("displaySchool").innerHTML = varSchool;
  document.getElementById("displayQuantity").innerHTML = varQuantity;
  document.getElementById("displaySleeve").innerHTML = varSleeve;*/

  document.getElementById("displayShirt").value = varShirt;
  document.getElementById("displaySleeve").value = varSleeve;
  document.getElementById("displayColor").value = varColor;
  document.getElementById("displaySize").value = varSize;
  document.getElementById("displaySchool").value = varSchool;
  document.getElementById("displayQuantity").value = varQuantity;

  // hides all logo thumbnails
  var i;
  var imgs = document.getElementsByClassName("img-thumbnail");
  for(i = 0; i < imgs.length; i++) {
    imgs[i].classList.toggle("d-none",true);
  }

  // reveals logo thumbnail of chosen school
  switch (varSchool) {
    case "Acclaim Academy":
      document.getElementById("img-acclaim").classList.toggle("d-none", false);
      priceOne();
      break;
    case "Ad Prima School":
      document.getElementById("img-adprima").classList.toggle("d-none", false);
      priceTwo();
      break;
    case "AMY Northwest Middle School":
      document.getElementById("img-amy").classList.toggle("d-none",false);
      priceThree();
      break;
    case "Blair Christian Academy":
      document.getElementById("img-blair").classList.toggle("d-none",false);
      priceThree();
      break;
    case "Cedar Grove Christian Academy":
      document.getElementById("img-cgca").classList.toggle("d-none",false);
      priceOne();
      break;
    /*case "The DePaul Catholic School":
      document.getElementById("img-depaul").classList.toggle("d-none",false);

      break;*/
    case "Delaware Valley Charter High School":
      document.getElementById("img-dvc").classList.toggle("d-none",false);
      priceFive();
      break;
    case "Fitler Academics Plus School":
      document.getElementById("img-fitler").classList.toggle("d-none",false);
      priceOne();
      break;
    case "Gesu School":
      document.getElementById("img-gesu").classList.toggle("d-none",false);
      priceOne();
      break;
    case "Hill Freedman World Academy":
      document.getElementById("img-hf").classList.toggle("d-none",false);
      priceThree();
      break;
    case "Holy Cross School":
      document.getElementById("img-holycross").classList.toggle("d-none",false);
      priceOne();
      break;
    case "Hope Church School":
      document.getElementById("img-hopechurch").classList.toggle("d-none",false);
      priceFour();
      break;
    case "Huntingdon Valley Christian Academy":
      document.getElementById("img-huntingdon").classList.toggle("d-none",false);
      priceThree();
      break;
    case "Hunting Park Christian Academy":
      document.getElementById("img-hunting").classList.toggle("d-none",false);
      priceThree();
      break;
    case "Ida's Learning Center":
      document.getElementById("img-idas").classList.toggle("d-none",false);
      priceThree();
      break;
    case "Khepera Charter School":
      document.getElementById("img-khepera").classList.toggle("d-none",false);
      priceFour();
      break;
    case "The Lab School":
      document.getElementById("img-lab").classList.toggle("d-none",false);
      priceOne();
      break;
    case "Lankenau High School":
      document.getElementById("img-lankenau").classList.toggle("d-none",false);
      priceThree();
      break;
    case "Little People Little Stars":
      document.getElementById("img-little").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "MaST Community Charter School":
      document.getElementById("img-mast").classList.toggle("d-none",false);
      priceThree();
      break;
    case "Mastery Charter School":
      document.getElementById("img-mastery").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "Mastery Charter School - Clymer Elementary":
      document.getElementById("img-masteryclymer").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "Mastery Charter School - Francis D. Pastorius Elementary":
      document.getElementById("img-masteryfrancis").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "Mastery Charter School - Grover Cleveland Elementary":
      document.getElementById("img-masterygrover").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "Mastery Charter School - John Wister Elementary":
      document.getElementById("img-masteryjohnwister").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "Mastery Charter School - Lenfest Campus":
      document.getElementById("img-masterylenfest").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "Mastery Charter School - Pickett Campus":
      document.getElementById("img-masterypickett").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "Mastery Charter School - Gratz Prep Middle School":
      document.getElementById("img-masteryprep").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "Mathematics, Civics and Sciences Charter School":
      document.getElementById("img-mathematics").classList.toggle("d-none",false);
      break;
    case "Mercy Career & Technical High School":
      document.getElementById("img-mercy").classList.toggle("d-none",false);
      priceFour();
      break;
    case "Multicultural Academy Charter School":
      document.getElementById("img-multicultural").classList.toggle("d-none",false);
      priceFour();
      break;
    /*case "Ogontz Academy":
      document.getElementById("img-ogontz").classList.toggle("d-none",false);

      break;*/
    case "Our Mother of Consolation Parish School":
      document.getElementById("img-ourmother").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "Parkway Center City Middle College":
      document.getElementById("img-parkway").classList.toggle("d-none",false);
      priceThree();
      break;
    case "Russell Byers Charter School":
      document.getElementById("img-russell").classList.toggle("d-none",false);
      priceThree();
      break;
    case "St. Athanasius School":
      document.getElementById("img-stathanasius").classList.toggle("d-none",false);
      priceOne();
      break;
    case "St. Helena Incarnation School":
      document.getElementById("img-sthelena").classList.toggle("d-none",false);
      priceThree();
      break;
    case "St. Martin de Porres School":
      document.getElementById("img-stmartin").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "St. Raymond School":
      document.getElementById("img-straymond").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "String Theory Charter School - Arts & Sciences":
      document.getElementById("img-string").classList.toggle("d-none",false);
      priceTwo();
      break;
    case "West Oak Lane Charter School":
      document.getElementById("img-westoak").classList.toggle("d-none",false);
      priceThree();
      break;
    case "Wissahickon Charter School":
      document.getElementById("img-wissahickon").classList.toggle("d-none",false);
      priceThree();
      break;
    default:
      break;
  }

  totalCost = singleCost * varQuantity;
  totalCost = totalCost.toFixed(2);

  document.getElementById("displaySingleCost").value = "$" + singleCost;
  document.getElementById("submitSingle").value = singleCost;
  document.getElementById("displayTotalCost").value = "$" + totalCost;
  createID();
  document.getElementById("displayOrderID").value = id;
  document.getElementById("displaySchoolID").value = idSchool;

  // reveals review
  document.getElementById("review").classList.toggle("d-none", false);
}

function createID() {
  // shirt, sleeve, color, size, school
  switch(varShirt) {
    case "Polo Shirt":
      switch(varSleeve) {
        case "Short Sleeve":
          id = "11";
          break;
        case "Long Sleeve":
          id = "12";
          break;
        default:
          id = "10";
          break;
      }
      break;
    case "Sweater":
      id = "20";
      break;
    case "Blazer":
      id = "30";
      break;
    default:
      break;
  }

  switch(varColor) {
    case "White":
      id = id + "0";
      break;
    case "Light Blue":
      id = id + "1";
      break;
    case "Yellow":
      id = id + "2";
      break;
    case "Navy":
      id = id + "3";
      break;
    case "Burgundy":
      id = id + "4";
      break;
    case "Red":
      id = id + "5";
      break;
    case "Black":
      id = id + "6";
      break;
    case "Royal Blue":
      id = id + "7";
      break;
    case "Gray":
      id = id + "8";
      break;
  }

  switch(varSize) {
    case "4":
      id = id + "00";
      break;
    case "5":
      id = id + "01";
      break;
    case "6":
      id = id + "02";
      break;
    case "7":
      id = id + "03";
      break;
    case "8":
      id = id + "04";
      break;
    case "10":
      id = id + "05";
      break;
    case "12":
      id = id + "06";
      break;
    case "14":
      id = id + "07";
      break;
    case "16":
      id = id + "08";
      break;
    case "18":
      id = id + "09";
      break;
    case "20":
      id = id + "10";
      break;
    case "Adult S":
      id = id + "11";
      break;
    case "Adult M":
      id = id + "12";
      break;
    case "Adult L":
      id = id + "13";
      break;
    case "Adult XL":
      id = id + "14";
      break;
  }

  switch(varSchool) {
    case "Acclaim Academy":
      idSchool = "00";
      break;
    case "Ad Prima School":
      idSchool = "01";
      break;
    case "AMY Northwest Middle School":
      idSchool = "02";
      break;
    case "Blair Christian Academy":
      idSchool = "03";
      break;
    case "The DePaul Catholic School":
      idSchool = "04";
      break;
    case "Cedar Grove Christian Academy":
      idSchool = "05";
      break;
    case "Delaware Valley Charter High School":
      idSchool = "06";
      break;
    case "Fitler Academics Plus School":
      idSchool = "07";
      break;
    case "Gesu School":
      idSchool = "08";
      break;
    case "Hill Freedman World Academy":
      idSchool = "09";
      break;
    case "Holy Cross School":
      idSchool = "10";
      break;
    case "Hope Church School":
      idSchool = "11";
      break;
    case "Huntingdon Valley Christian Academy":
      idSchool = "12";
      break;
    case "Hunting Park Christian Academy":
      idSchool = "13";
      break;
    case "Ida's Learning Center":
      idSchool = "14";
      break;
    case "Khepera Charter School":
      idSchool = "15";
      break;
    case "The Lab School":
      idSchool = "16";
      break;
    case "Lankenau High School":
      idSchool = "17";
      break;
    case "Little People Little Stars":
      idSchool = "18";
      break;
    case "MaST Community Charter School":
      idSchool = "19";
      break;
    case "Mastery Charter School":
      idSchool = "20";
      break;
    case "Mastery Charter School - Clymer Elementary":
      idSchool = "21";
      break;
    case "Mastery Charter School - Francis D. Pastorius Elementary":
      idSchool = "22";
      break;
    case "Mastery Charter School - Grover Cleveland Elementary":
      idSchool = "23";
      break;
    case "Mastery Charter School - John Wister Elementary":
      idSchool = "24";
      break;
    case "Mastery Charter School - Lenfest Campus":
      idSchool = "25";
      break;
    case "Mastery Charter School - Pickett Campus":
      idSchool = "26";
      break;
    case "Mastery Charter School - Gratz Prep Middle School":
      idSchool = "27";
      break;
    case "Mathematics, Civics and Sciences Charter School":
      idSchool = "28";
      break;
    case "Mercy Career & Technical High School":
      idSchool = "29";
      break;
    case "Multicultural Academy Charter School":
      idSchool = "30";
      break;
    case "Ogontz Academy":
      idSchool = "31";
      break;
    case "Our Mother of Consolation Parish School":
      idSchool = "32";
      break;
    case "Parkway Center City Middle College":
      idSchool = "33";
      break;
    case "Russell Byers Charter School":
      idSchool = "34";
      break;
    case "St. Athanasius School":
      idSchool = "35";
      break;
    case "St. Helena Incarnation School":
      idSchool = "36";
      break;
    case "St. Martin de Porres School":
      idSchool = "37";
      break;
    case "St. Raymond School":
      idSchool = "38";
      break;
    case "String Theory Charter School - Arts & Sciences":
      idSchool = "39";
      break;
    case "West Oak Lane Charter School":
      idSchool = "40";
      break;
    case "Wissahickon Charter School":
      idSchool = "41";
      break;
  }
}

function priceOne() {
  switch (shirt) {
    case "polo":

      switch (sleeveLength) {
        case "short":

          switch (varSize) {
            case "4":
            case "5":
            case "6":
            case "7":
              singleCost = 11.99;
              break;
            case "8":
            case "10":
            case "12":
            case "14":
              singleCost = 12.99;
              break;
            case "16":
            case "18":
            case "20":
              singleCost = 13.99;
              break;
            case "Adult S":
            case "Adult M":
            case "Adult L":
            case "Adult XL":
              singleCost = 15.99;
              break;
            default:
              singleCost = 0;
              break;
          }

          break;
        case "long":

          switch (varSize) {
            case "4":
            case "5":
            case "6":
            case "7":
              singleCost = 12.99;
              break;
            case "8":
            case "10":
            case "12":
            case "14":
              singleCost = 13.99;
              break;
            case "16":
            case "18":
            case "20":
              singleCost = 14.99;
              break;
            case "Adult S":
            case "Adult M":
            case "Adult L":
            case "Adult XL":
              singleCost = 16.99;
              break;
            default:
              singleCost = 0;
              break;
          }

          break;
        default:
          break;
      }

      break;
    case "sweater":

      switch (varSize) {
        case "4":
        case "5":
        case "6":
          singleCost = 21.99;
          break;
        case "7":
        case "8":
        case "10":
        case "12":
        case "14":
          singleCost = 22.99;
          break;
        case "16":
        case "18":
        case "20":
          singleCost = 24.99;
          break;
        default:
          singleCost = 0;
          break;
      }

      break;
    case "blazer":
      priceFive();
      break;
    default:
      break;
  }
}

function priceTwo() {
  switch (shirt) {
    case "polo":
      switch (sleeveLength) {
        case "short":

          switch (varSize) {
            case "4":
            case "5":
            case "6":
            case "7":
              singleCost = 12.99;
              break;
            case "8":
            case "10":
            case "12":
            case "14":
              singleCost = 13.99;
              break;
            case "16":
            case "18":
            case "20":
              singleCost = 14.99;
              break;
            case "Adult S":
            case "Adult M":
            case "Adult L":
            case "Adult XL":
              singleCost = 16.99;
              break;
            default:
              singleCost = 0;
              break;
          }

          break;
        case "long":

          switch (varSize) {
            case "4":
            case "5":
            case "6":
            case "7":
              singleCost = 13.99;
              break;
            case "8":
            case "10":
            case "12":
            case "14":
              singleCost = 14.99;
              break;
            case "16":
            case "18":
            case "20":
              singleCost = 15.99;
              break;
            case "Adult S":
            case "Adult M":
            case "Adult L":
            case "Adult XL":
              singleCost = 17.99;
              break;
            default:
              singleCost = 0;
              break;
          }

          break;
        default:
          break;
      }
      break;
    case "sweater":
      switch (varSize) {
        case "4":
        case "5":
        case "6":
          singleCost = 23.99;
          break;
        case "7":
        case "8":
        case "10":
        case "12":
        case "14":
          singleCost = 24.99;
          break;
        case "16":
        case "18":
        case "20":
          singleCost = 26.99;
          break;
        default:
          singleCost = 0;
          break;
      }
      break;
    default:
      break;
  }
}

function priceThree() {
  switch (shirt) {
    case "polo":

      switch (sleeveLength) {
        case "short":

          switch (varSize) {
            case "4":
            case "5":
            case "6":
            case "7":
              singleCost = 13.99;
              break;
            case "8":
            case "10":
            case "12":
            case "14":
              singleCost = 14.99;
              break;
            case "16":
            case "18":
            case "20":
              singleCost = 15.99;
              break;
            case "Adult S":
            case "Adult M":
            case "Adult L":
            case "Adult XL":
              singleCost = 17.99;
              break;
            default:
              singleCost = 0;
              break;
          }

          break;
        case "long":

          switch (varSize) {
            case "4":
            case "5":
            case "6":
            case "7":
              singleCost = 14.99;
              break;
            case "8":
            case "10":
            case "12":
            case "14":
              singleCost = 15.99;
              break;
            case "16":
            case "18":
            case "20":
              singleCost = 16.99;
              break;
            case "Adult S":
            case "Adult M":
            case "Adult L":
            case "Adult XL":
              singleCost = 18.99;
              break;
            default:
              singleCost = 0;
              break;
          }

          break;
        default:
          break;
      }

      break;
    case "sweater":

      switch (varSize) {
        case "4":
        case "5":
        case "6":
          singleCost = 23.99;
          break;
        case "7":
        case "8":
        case "10":
        case "12":
        case "14":
          singleCost = 24.99;
          break;
        case "16":
        case "18":
        case "20":
          singleCost = 26.99;
          break;
        default:
          singleCost = 0;
          break;
      }

      break;
    case "blazer":
      priceFive();
      break;
    default:
      break;
  }
}

function priceFour() {
  switch (shirt) {
    case "polo":

      switch (sleeveLength) {
        case "short":

          switch (varSize) {
            case "4":
            case "5":
            case "6":
            case "7":
              singleCost = 14.99;
              break;
            case "8":
            case "10":
            case "12":
            case "14":
              singleCost = 15.99;
              break;
            case "16":
            case "18":
            case "20":
              singleCost = 16.99;
              break;
            case "Adult S":
            case "Adult M":
            case "Adult L":
            case "Adult XL":
              singleCost = 18.99;
              break;
            default:
              singleCost = 0;
              break;
          }

          break;
        case "long":

          switch (varSize) {
            case "4":
            case "5":
            case "6":
            case "7":
              singleCost = 15.99;
              break;
            case "8":
            case "10":
            case "12":
            case "14":
              singleCost = 16.99;
              break;
            case "16":
            case "18":
            case "20":
              singleCost = 17.99;
              break;
            case "Adult S":
            case "Adult M":
            case "Adult L":
            case "Adult XL":
              singleCost = 19.99;
              break;
            default:
              singleCost = 0;
              break;
          }

          break;
        default:
          break;
      }

      break;
    case "sweater":

      switch (varSize) {
        case "4":
        case "5":
        case "6":
          singleCost = 24.99;
          break;
        case "7":
        case "8":
        case "10":
        case "12":
        case "14":
          singleCost = 25.99;
          break;
        case "16":
        case "18":
        case "20":
          singleCost = 27.99;
          break;
        default:
          singleCost = 0;
          break;
      }

      break;
    default:
      break;
  }
}

function priceFive() {
  switch (varSize) {
    case "4":
    case "5":
    case "6":
    case "7":
      singleCost = 39.99;
      break;
    case "8":
    case "10":
    case "12":
    case "14":
      singleCost = 44.99;
      break;
    case "16":
    case "18":
    case "20":
      singleCost = 46.99;
      break;
    default:
      singleCost = 0;
      break;
  }
}
/*
Adding item to cart
1. Retrieve cart contents (unserialize) from cookie
  a) first item/no cookie?
  b) cookie exists
2. Add new item, serialize again
3. Update cookie

setCookie('cart', 'serialize(cartContents)', time() + 60*1000, '/')
*/

function retrieveCart() {

}
