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
return Size
}
//Toppings
function Size(large,small,medium){
this.large=large
this.medium=medium
this.small=small
}
function Toppings(bacon,pepper,extra_cheese){
    this.bacon=bacon
    this.pepper=pepper
    this.extra_cheese=extra_cheese
}
function Crust(stuffed,crispy,glutenFree){
    this.stuffed=stuffed
    this.glutenFree=glutenFree
    this.crispy=crispy
    }

/*var hawaiannPizza={name:"Hawaiian Pizza", properties: [size,crust,toppings]}
var meatLovers={name:"meatLovers", properties: [size,crust,toppings]}
var vegan={name:"vegan", properties: [size,crust,toppings]}
var magharitta={name:"magharitta", properties: [size,crust,toppings]}*/

//jQuery
$(document).ready(function(event){
    event.preventDefault()
    $("#o").change(function(){
PizzaSelecteed("#xx").val()
    $("#ul option:selected").text(Size)
    });
});


