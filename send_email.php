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


if(count($_SESSION['cart'])>0){

  $name = $_REQUEST["input-name"];
  $email = $_REQUEST["input-email"];
  $phone = $_REQUEST["input-phone"];
  $order_txt = "";
  $receipt_txt = "";
  $headers = "From: donotreply@smileuniforms.com" . "\r\n";
  $date = getdate();
  $order_number = rand(1000000,9999999);


  // get the product ids
  $ids = array();
  foreach($_SESSION['cart'] as $id=>$value){
    array_push($ids, $id);
  }

  $stmt=$product->readByIds($ids);

  $total=0;
  $item_count=0;

  $order_txt .= "Customer Name: " . $name . "\n";
  $order_txt .= "Customer Email Address: " . $email . "\n";
  $order_txt .= "Customer Phone Number: " . $phone . "\n";
  $order_txt .= "\n" . "Order:" . "\n";

  while ($row = $stmt->fetch(PDO::FETCH_ASSOC)){
    extract($row);
    $quantity=$_SESSION['cart'][$id]['quantity'];
    $price=$_SESSION['cart'][$id]['unitPrice'];
    $school=$_SESSION['cart'][$id]['schoolName'];
    $idSchool=$_SESSION['cart'][$id]['schoolID'];
    $sub_total=$price*$quantity;

    $order_txt .= $title . "\n";
    $order_txt .= "Quantity: " . $quantity . "\n";
    $order_txt .= "School Name: " . $school . "\n";
    $order_txt .= "Subtotal: " . $sub_total . "\n\n";

    $item_count += $quantity;
    $total+=$sub_total;
  }

  $order_txt .= "================================\n\n";
  $order_txt .= "Order Total Cost: " . $total . "\n";
  $order_txt .= "Order Number: " . $order_number . "\n";
  $order_txt .= "Order placed on " . $date['weekday'] . ", " . $date['month'] . " " . $date['mday'] . ", " . $date['year'];
  $receipt_txt = "Thank you for your order! Please do not reply to this email.\n\n" . $order_txt;

  $receipt_txt .= "\n\n" . "Please wait while we process your order. We will be contacting you shortly with your order confirmation. If you do not receive any form of contact from us regarding your online order in a few business days, please call us at (215) 843-3424, or email us at sales@smileuniforms.com.";

  // mail(to,subject,message,headers);
  $order_send = mail("sales@smileuniforms.com","New Embroidery Order - Order #" . $order_number,$order_txt,$headers);

  $receipt_send = mail($email,"Order Receipt from Smile Kiddie Shop - Order #" . $order_number,$receipt_txt,$headers);

  header('Location: place_order.php');

}

// no products were added to cart
else{
  session_destroy();
  header('Location: order_error.html');
}

?>
