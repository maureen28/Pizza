////businesslogic


// Pizza(names)
function MeatLoversPizza(name, size, crust, toppings, number, ) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
    this.deliveryPrice = delivery
}
MeatLoversPizza.prototype.details = function () {
    return "Name" + "" + "Size" + "" + "Crust" + "" + "Toppings"
}
MeatLoversPizza.prototype.details = function () {
    return (this.name + this.size + this.toppings + this.crust) * this.number
}
function MediterraneanPizza(name, size, crust, toppings, number) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
}
MediterraneanPizza.prototype.details = function () {
    return "Name" + "" + "Size" + "" + "Crust" + "" + "Toppings"
}
MediterraneanPizza.prototype.details = function () {
    return (this.name + this.size + this.toppings + this.crust) * this.number
}
function HawaiianPizza(name, size, crust, toppings, number) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
}
HawaiianPizza.prototype.details = function () {
    return "Name" + "" + "Size" + "" + "Crust" + "" + "Toppings"
}
HawaiianPizza.prototype.details = function () {
    return (this.name + this.size + this.toppings + this.crust) * this.number
}
function VeganPizza(name, size, crust, toppings, number) {
    this.name = name;
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number = number;
}
VeganPizza.prototype.details = function () {
    return "Name" + "" + "Size" + "" + "Crust" + "" + "Toppings"
}
VeganPizza.prototype.details = function () {
    return (this.name + this.size + this.toppings + this.crust) * this.number
}

// crust
function crust() {
var crustPrice
    if (selectedCrust === "glutenFree") {
        crustPrice = 120
    } else if (selectedCrust === "stuffed") {
        crustPrice = 100
    } else if (selectedCrust === "crispy") {
        crustPrice = 80
    }
    return crustPrice;
}

// size
function size() {
var sizePrice
    if (selectedSize === "small") {
        sizePrice = 500
    } else if (selectedSize === "medium") {
        sizePrice  = 750
    } else if (selectedSize === "large") {
        sizePrice  = 1000
    }
    return sizePrice ;
}
// toppings
function toppings() {
var toppingsPrice
    if (selectedToppings === "bacon") {
        toppingsPrice = 50
    } else if (selectedToppings === "extra-cheese") {
        toppingsprice = 60
    } else if (selectedToppings === "pepper") {
        toppingsPrice = 40
    } return toppingsPrice;
}
//Hawaiann total price
function totalPizzaPriceHawaiian() {
    return pizzaHawaiian() + crust() + toppings();
}
//mediterranean total
function totalPizzaPriceMeditarrenean() {
    return pizzaNameMeditarrenean() + crust() + toppings()
}
//meatLovers
function totalPizzaPriceMeatLovers() {
    return pizzaNameMeatLovers() + crust() + toppings()
}
// vegan
function totalPizzaPriceVegan() {
    return pizzaNameVegan() + crust() + toppings()
}
//UI 
//jQuery
//meatLovers
$(document).ready(function () {
    $("form#meat").submit(function () {
        this.size = $(".size option:selected").val();
        this.crust = $(".crust option:selected").val();
        this.toppings = $(".toppings option:selected").val();
        $("#check").text(pizzaPrice)
    })
});
//meditarrenean
$("form#ml").click(function () {
    $(".size").change(function () {
        size = $(".size option:selected").val();
        $("#check").text(size)
    })
});
$("form#ml").click(function () {
        size = $(".crust option:selected").val();
        $("#check").text(crust)
    })

$("form#ml").click(function () {
    $(".toppings").change(function () {
        size = $(".toppings option:selected").val();
        $("#check").text(toppings)
    })
});
$("form#ml").click(function () {
    $(".input").change(function () {
        size = $(".input option:selected").val();
        $("#check").text(input)
    })
});
// hawaiian
$("#btn-addtocart-hawaii").click(function () {
    $(".size").change(function () {
        size = $(".size option:selected").val();
        $("#check").text(size)
    })
});
$("#btn-addtocart-hawaii").click(function () {
    $(".crust").change(function () {
        crust= $(".crust option:selected").val();
        $("#check").text(crust)
    })
});
$("#btn-addtocart-hawaii").click(function () {
    $(".toppings").change(function () {
        toppings = $(".toppings option:selected").val();
        $("#check").text(toppings)
    })
});
$("#btn-addtocart-hawaii").click(function () {
    $(".input").change(function () {
        number = $(".input option:selected").val();
        $("#check").text(input)
    })
});
//vegan
$("#btn-addtocart-vegan").click(function () {
    $(".size").change(function () {
        size = $(".size option:selected").val();
        $("#checkout").text(size)
    })
});
$("#btn-addtocart-vegan").click(function () {
    $(".crust").change(function () {
        size = $(".crust option:selected").val();
        $("#checkout").text(crust)
    })
});
$("#btn-addtocart-vegan").click(function () {
    $(".toppings").change(function () {
        size = $(".toppings option:selected").val();
        $("#checkout").text(toppings)
    })
});
$("#btn-addtocart-vegan").click(function () {
    $(".input").change(function () {
        size = $(".input option:selected").val();
        $("#checkout").text(input)
    })
});