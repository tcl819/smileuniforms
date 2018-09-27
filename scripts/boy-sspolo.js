$(document).ready(function() {
  $(".priceToddler").click(function() {
    $(".price-label").text("$7.99");
  })

  $(".priceXSS").click(function() {
    $(".price-label").text("$7.99");
  })

  $(".priceMLXL").click(function() {
    $(".price-label").text("$8.99");
  })

  $(".priceXXL").click(function() {
    $(".price-label").text("$9.99");
  })

  $(".priceHusky").click(function() {
    $(".price-label").text("$10.99");
  })

  $(".priceAdult").click(function() {
    $(".price-label").text("$11.99");
  })

  $(".price2XL").click(function() {
    $(".price-label").text("$12.99");
  })
});
