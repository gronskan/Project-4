function Pizza(size, sauce, cheese, meat, veggies) {
  this.size = size;
  this.sauce = sauce;
  this.cheese = cheese;
  this.meat = meat;
  this.veggies = veggies;
}

$(document).ready(function() {
  $("#pizza-options").submit(function(event) {
    event.preventDefault();
    $("#reciept").show();

    $("input:checked[name=pizza-size]:checked").each(function(){
      var orderSize = $(this).val();
    });
    $("input:checked[name=pizza-sauce]:checked").each(function(){
      var orderSauce = $(this).val();
    });
    $("input:checked[name=cheese]:checked").each(function(){
      var orderCheese = $(this).val();
    });
    $("input:checked[name=meat]:checked").each(function(){
      var orderMeat = $(this).val();
    });
    $("input:checked[name=veggies]:checked").each(function(){
      var orderVeggies = $(this).val();
    });



    // $("#order-size"").append(orderSize + "<br>");
    // $("#order-sauce").append(orderSauce + "<br>");
    // $("#order-cheese").append(orderCheese + "<br>");
    // $("#order-meat").append(orderMeat + "<br>");
    // $("#order-veggies").append(orderVeggies + "<br>");

    $("#pizza-options").hide();

  })
})
