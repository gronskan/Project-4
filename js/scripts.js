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

    var orderSize = []
    $("input:checkbox[name=pizza-size]:checked").each(function(){
      var pizzaSize = $(this).val()
      orderSize.push(pizzaSize);
      $("#order-size").text(orderSize);
    });

    var orderSauce = []
    $("input:checkbox[name=pizza-sauce]:checked").each(function(){
      var pizzaSauce = $(this).val();
      orderSauce.push(pizzaSauce);
      $("#order-sauce").text(orderSauce);
    });

    var orderCheese = []
    $("input:checkbox[name=cheese]:checked").each(function(){
      var pizzaCheese = $(this).val();
      orderCheese.push(pizzaCheese);
      $("#order-cheese").text(orderCheese);
    });

    var orderMeat = []
    $("input:checkbox[name=meat]:checked").each(function(){
      var pizzaMeat = $(this).val();
      orderMeat.push(pizzaMeat);
      $("#order-meat").text(orderMeat);
    });

    var orderVeggies = []
    $("input:checkbox[name=veggies]:checked").each(function(){
      var pizzaVeggies = $(this).val();
      orderVeggies.push(pizzaVeggies);
      $("#order-veggies").text(orderVeggies);
    });


    $("#pizza-options").hide();

  })
})
