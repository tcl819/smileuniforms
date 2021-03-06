<?php
$_SESSION['cart']=isset($_SESSION['cart']) ? $_SESSION['cart'] : array();
?>
<!DOCTYPE html>
<html lang="en">
  <head>

    <meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="Our online shopping cart, saving your progress in your online shopping cart.">
    <meta name="keywords" content="">
    <title>Smile Kiddie Shop</title>

    <link rel="stylesheet" href="styles/bootstrap.min.css" />
    <link rel="stylesheet" href="styles/main.css" />
    <link rel="stylesheet" href="styles/custom.css">

  </head>
  <body>

    <header class="navbar-light bg-light fixed-top bottom-border font-trebuchet" role="banner">
      <div class="container">
        <nav class="navbar navbar-expand-lg" role="navigation">
          <a href="index.html" class="navbar-brand">Smile Kiddie Shop</a>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Uniforms</a>
                <div class=" dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="uniforms-boys.html">Boys</a>
                  <a class="dropdown-item" href="uniforms-girls.html">Girls</a>
                  <a class="dropdown-item" href="uniforms-accessories.html">Accessories</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="suits-dresses.html">Suits & Dresses</a>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a> <!-- id="navbarDropdownMenuLink" -->
                <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="services-embroidery.html">Embroidery</a>
                  <a class="dropdown-item" href="services-garment.html">Garment Printing</a>
                  <a class="dropdown-item" href="services-alterations.html">Alterations</a>
                </div>
              </li>
              <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Board</a>
                <div class=" dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <a class="dropdown-item" href="board-sales.html">Sales</a>
                  <a class="dropdown-item" href="board-events.html">Events</a>
                </div>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="about.html">Contact Us</a>
              </li>
            </ul>

          </div>
          <div class="nav-item active">
            <a href="cart.php" class="nav-link">Cart</a>
          </div>
        </nav>
      </div>
    </header>

    <div class="container mt-4">
			<h2 class="mb-4"><?php echo $page_title ?></h2>
