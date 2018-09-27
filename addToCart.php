<?php
// start session
session_start();

// get the product id
$varQuantity = $_REQUEST["submitQuantity"];
$id = $_REQUEST["orderID"];
$price = $_REQUEST["submitSingleCost"];
$idSchool = $_REQUEST["schoolID"];
$school = $_REQUEST["submitSchool"];

// add new item on array
$cart_item=array(
    'quantity'=>$varQuantity,
    'unitPrice'=>$price,
    'schoolID'=>$idSchool,
    'schoolName'=>$school
);

/*
 * check if the 'cart' session array was created
 * if it is NOT, create the 'cart' session array
 */
if(!isset($_SESSION['cart'])){
    $_SESSION['cart'] = array();
}

$_SESSION['cart'][$id]=$cart_item;

// redirect to product list and tell the user it was added to cart
header('Location: cart-add-success.html?$id=' . $id . '?$quantity=' . $varQuantity);
?>
