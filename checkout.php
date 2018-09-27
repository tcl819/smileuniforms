<?php
// start session
session_start();

// connect to database
include 'config/database.php';

// include objects
include_once "objects/product.php";

// get database connection
$database = new Database();
$db = $database->getConnection();

// initialize objects
$product = new Product($db);

// set page title
$page_title="Checkout";

// include page header html
include 'layout_header.php';

if(count($_SESSION['cart'])>0){

  // get the product ids
  $ids = array();
  foreach($_SESSION['cart'] as $id=>$value){
    array_push($ids, $id);
  }

  $stmt=$product->readByIds($ids);

  $total=0;
  $item_count=0;

  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    extract($row);

    $quantity=$_SESSION['cart'][$id]['quantity'];
    $price=$_SESSION['cart'][$id]['unitPrice'];
    $school=$_SESSION['cart'][$id]['schoolName'];
    $idSchool=$_SESSION['cart'][$id]['schoolID'];
    $sub_total=$price*$quantity;

    // =================
    echo "<div class='row'>";
      echo "<div class='col-md-9 mb-3'>";

        echo "<div class='product-name m-b-10px'><h4>{$title}</h4></div>";
        echo "<div class=''><h6>Quantity: {$quantity}</h6></div>";
        echo "<div class=''><h6>School Name: <span class='school-name'>{$school}</span></h6></div>";
        echo "<div class='school-id' style='display:none;'>{$idSchool}</div>";
        echo "<div class='get-price' style='display:none;'>{$price}</div>";

      echo "</div>";

      echo "<div class='col-md-3'>";
        echo "<h4>&#36;" . number_format($price, 2, '.', ',') . "</h4>";
      echo "</div>";
    echo "</div>";

    echo "<div class='dropdown-divider'></div><br>";
    // =================

    $item_count += $quantity;
    $total+=$sub_total;
  }
  echo "<form class='contact-information-form' method='post' action='send_email.php'>";
    echo "<div class='row'>";
      echo "<div class='col-md-7'>";
        echo "<div class='form-group'>";
          echo "<label for='inputName'>Full Name</label>";
          echo "<input type='text' required class='form-control' id='inputName' name='input-name' aria-describedby='text' placeholder='Enter full name'>";
        echo "</div>";
        echo "<div class='form-group'>";
          echo "<label for='inputEmail'>Email address</label>";
          echo "<input type='email' required class='form-control' id='inputEmail' name='input-email' aria-describedby='emailHelp' placeholder='Enter email'>";
          echo "<small id='emailHelp' class='form-text text-muted'>We'll never share your email with anyone else.</small>";
        echo "</div>";
        echo "<div class='form-group'>";
          echo "<label for='inputPhone'>Phone Number</label>";
          echo "<input type='text' required class='form-control' id='inputPhone' name='input-phone' aria-describedby='text' placeholder='Enter phone number' maxlength='10'>";
          echo "<small id='phoneHelp' class='form-text text-muted'>We'll never share your phone number with anyone else.</small>";
        echo "</div>";
      echo "</div>";

      echo "<div class='col-md-1'>";
        echo "<div class='form-group d-none'>";
        echo "</div>";
      echo "</div>";

      echo "<div class='col-md-4'>";
        echo "<div class='cart-row'>";
          if($item_count>1) {
            echo "<h4 class='m-b-10px'>Total ({$item_count} items)</h4>";
          }
          else {
            echo "<h4 class='m-b-10px'>Total ({$item_count} item)</h4>";
          }
          echo "<h4>&#36;" . number_format($total, 2, '.', ',') . "</h4>";
          echo "<span class='input-group-btn'>";
            echo "<button class='btn btn-success m-b-10px contact-information' type='submit'>";
              echo "<span class='glyphicon glyphicon-shopping-cart'></span>Place Order";
            echo "</button>";
          echo "</span>";
        echo "</div>";
      echo "</div>";
    echo "</div>";
  echo "</form>";
}

// no products were added to cart
else{
  echo "<div class='col-md-12'>";
    echo "<div class='alert alert-danger'>";
      echo "No products found in your cart!";
    echo "</div>";
  echo "</div>";
}

// contents will be here

// layout footer
include 'layout_footer.php';
?>
