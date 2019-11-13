////businesslogic
var myArray = [];
// Pizza(names)
function PizzaPrice(size, crust, toppings, number, name) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
    this.name = name;
}
PizzaPrice.prototype.details = function () {
    return this.name + "" + this.size + "" + this.crust + "" + this.toppings
}
PizzaPrice.prototype.price = function () {
    return this.size + this.toppings + this.crust
}
PizzaPrice.prototype.summary = function () {
    let cartPrice = 0;

    for (let index = 0; index < myArray.length; index++) {
        cartPrice += myArray[index];
    }
    return cartPrice
}


//UI 
//jQuery
//meatLovers
$(document).ready(function () {
    $("form#meat").submit(function (event) {
        event.preventDefault()
        let size = parseInt($("#size option:selected").val());
        let crust = parseInt($("#crust option:selected").val());
        let toppings = parseInt($("#toppings option:selected").val());
        let number = parseInt($("#number").val());
        let name = $("#name").text();
        let mysize = $("#size option:selected").text();
        let mycrust = $("#crust option:selected").text();
        let mytoppings = $("#toppings option:selected").text();

        let pizzaPrice = new PizzaPrice(size, crust, toppings)
        let meatDetails = new PizzaPrice(name, mysize, mycrust, mytoppings)

        let calcPrice = pizzaPrice.price();


        myArray.push(calcPrice * number);
        $("#checkers").append("<li><span class='checkers'>" + meatDetails.details() + "" + calcPrice + "</span></li>");
        $("#check").text(pizzaPrice.summary());
    });
});
//meditarrenean
$(document).ready(function () {
    $("form#ml").submit(function (event) {
        event.preventDefault()
        let size = parseInt($("#size3 option:selected").val());
        let crust = parseInt($("#crust3 option:selected").val());
        let toppings = parseInt($("#toppings3 option:selected").val());
        let number = parseInt($("#number3").val());
        let name = $("#name").text();
        let mysize = $("#size option:selected").text();
        let mycrust = $("#crust option:selected").text();
        let mytoppings = $("#toppings option:selected").text();

        let mediPrice = new PizzaPrice(mysize, mycrust, mytoppings)

        let mediCost = mediPrice.price()


        myArray.push(mediCost)
        $("#check").text(mediPrice.summary())
    })
});
//hawaii
$(document).ready(function () {
    $("form#hawaii").submit(function (event) {
        event.preventDefault()
        let size = parseInt($("#size2 option:selected").val());
        let crust = parseInt($("#crust2 option:selected").val());
        let toppings = parseInt($("#toppings2 option:selected").val());
        let number = parseInt($("#number2").val());

        let hawaiPrice = new PizzaPrice(size, crust, toppings, number)

        let hawiCost = hawaiPrice.price()
        
        myArray.push(hawiCost)
        $("#check").text(hawaiPrice.summary())
    })
});
//vegan
$(document).ready(function () {
    $("form#vegan").submit(function (event) {
        event.preventDefault()
        let size = parseInt($("#size1 option:selected").val());
        let crust = parseInt($("#crust1 option:selected").val());
        let toppings = parseInt($("#toppings1 option:selected").val());
        let number = parseInt($("#number1").val());

        let veganPrice = new PizzaPrice(size, crust, toppings, number)

        let veganCost = veganPrice.price()

        myArray.push(veganCost)
        $("#check").text(veganPrice.summary())
    })
});