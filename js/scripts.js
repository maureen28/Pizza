function Pizza(name) {
    this.name = name;
    this.size = [];
    this.crust = [];
    this.toppings = [];
}
// Pizza(names)
function HawaiannPizza{
    this.name = "Hawaiann";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
hawaiannPizza.prototype=function(){
    return"Name"+""+"Size"+""+"Crust"+""+"Toppings"
}

function MediterraneanPizza{
    this.name = "Mediterranean";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
MediterraneanPizza.prototype=function(){
    return"Name"+""+"Size"+""+"Crust"+""+"Toppings"
}

function MeatLoversPizza{
    this.name = "MeatLovers";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
MeatLoversPizza.prototype=function(){
    return"Name"+""+"Size"+""+"Crust"+""+"Toppings"
}

function VeganPizza{
    this.name = "Vegan";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
}
VeganPizza.prototype=function(){
    return"Name"+""+"Size"+""+"Crust"+""+"Toppings"
}

// crust
function Crust(){
    var crust;
    if(crust==="glutenFree"){
        crust=120
    }else if(crust==="stuffed"){
        crust=100
    } else if(crust==="crispy"){
        crust=80
}
return crust

// size
function Size(){
    var size;
    if(size==="small"){
        size=500
    }else if(size==="medium"){
        size=750
    } else if(size==="large"){
        size=1000
}
return size

// toppings
function Toppings(){
    var toppings;
    if(toppings==="bacon"){
        toppings=50
    }else if(toppings==="extraCheese"){
        toppings=40
    } else if(toppings==="pepper"){
        size=30
    }
    return toppings


/*var hawaiannPizza={name:"Hawaiian Pizza", properties: [size,crust,toppings]}
var meatLovers={name:"meatLovers", properties: [size,crust,toppings]}
var vegan={name:"vegan", properties: [size,crust,toppings]}
var magharitta={name:"magharitta", properties: [size,crust,toppings]}*/

//jQuery
$(document).ready(function(event){
    event.preventDefault()
    $("#crust").change(function(){
        Pizza("#xx").val()
    $("#ul option:selected").text(Size)
    });
});


