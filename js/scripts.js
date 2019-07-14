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

    var orderSize = pizzaSize
    var pizzaSize = $("input:radio[name=pizza-size]:checked").val();
    if (pizzaSize === "Small") {
      var orderSize = 6;
    } else if (pizzaSize === "Medium") {
      var orderSize = 8;
    } else if (pizzaSize === "Large") {
      var orderSize = 10;
    }

    $("#order-size").text(pizzaSize);


    var orderSauce = []
    $("input:checkbox[name=pizza-sauce]:checked").each(function(){
      var pizzaSauce = $(this).val();
      orderSauce.push(pizzaSauce);
      $("#order-sauce").text(orderSauce);
    });
    var priceSauce = orderSauce.length;

    var orderCheese = []
    $("input:checkbox[name=cheese]:checked").each(function(){
      var pizzaCheese = $(this).val();
      orderCheese.push(pizzaCheese);
      $("#order-cheese").text(orderCheese);
    });
    var priceCheese = orderCheese.length;


    var orderMeat = []
    $("input:checkbox[name=meat]:checked").each(function(){
      var pizzaMeat = $(this).val();
      orderMeat.push(pizzaMeat);
      $("#order-meat").text(orderMeat);
    });
    var priceMeat = (orderMeat.length * 2.50)

    var orderVeggies = []
    $("input:checkbox[name=veggies]:checked").each(function(){
      var pizzaVeggies = $(this).val();
      orderVeggies.push(pizzaVeggies);
      $("#order-veggies").text(orderVeggies);
    });
    var priceVeggies = (orderVeggies.length * 1.50)

    var totalPrice = orderSize + priceSauce + priceCheese + priceMeat + priceVeggies
    $("#order-total").text(totalPrice);

    $("#pizza-options").hide();

  })
})
