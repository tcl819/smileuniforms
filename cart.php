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
$page_title="Shopping Cart";

// include page header html
include 'layout_header.php';

$action = isset($_GET['action']) ? $_GET['action'] : "";

echo "<div class='col-md-12'>";
  if($action=='removed'){
    echo "<div class='alert alert-info'>";
      echo "Product was removed from your cart!";
    echo "</div>";
  }

  else if($action=='quantity_updated'){
    echo "<div class='alert alert-info'>";
      echo "Product quantity was updated!";
    echo "</div>";
  }
echo "</div>";

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

        // update quantity
        /*echo "<form class='update-quantity-form'>";
          echo "<div class='product-id' style='display:none;'>{$id}</div>";
          echo "<div class='input-group'>";
            echo "<input type='number' name='quantity' value='{$quantity}' class='form-control cart-quantity' min='1' max='10'/>";
              echo "<span class='input-group-btn'>";
                echo "<button class='btn btn-default update-quantity' type='submit'>Update</button>";
              echo "</span>";
          echo "</div>";
        echo "</form>";*/

        // delete from cart
        echo "<a href='remove_from_cart.php?id={$id}' class='btn btn-default'>";
          echo "Delete";
        echo "</a>";

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
  echo "<div class='row'>";
    echo "<div class='col-md-8'></div>";
    echo "<div class='col-md-4'>";
      echo "<div class='cart-row'>";
        if($item_count>1) {
          echo "<h4 class='m-b-10px'>Total ({$item_count} items)</h4>";
        }
        else {
          echo "<h4 class='m-b-10px'>Total ({$item_count} item)</h4>";
        }
        echo "<h4>&#36;" . number_format($total, 2, '.', ',') . "</h4>";
        echo "<a href='checkout.php' class='btn btn-success m-b-10px'>";
          echo "<span class='glyphicon glyphicon-shopping-cart'></span> Proceed to Checkout";
        echo "</a>";
      echo "</div>";
    echo "</div>";
  echo "</div>";

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
