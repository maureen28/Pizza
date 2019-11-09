function Pizza(name) {
    this.name = name;
    this.size = [];
    this.crust = [];
    this.toppings = [];
}
// crust
var glutenFree={
    name:"glutenFree",price:120,
}
var stuffed={
    name:"stuffed",price:80,}
var crispy={
    name:"crispy", price:100,
}
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

var hawaiannPizza={name:"Hawaiian Pizza", properties: [size,crust,toppings]}
var meatLovers={name:"meatLovers", properties: [size,crust,toppings]}
var vegan={name:"vegan", properties: [size,crust,toppings]}
var magharitta={name:"magharitta", properties: [size,crust,toppings]}

//jQuery
$(document).ready(function(event){
    event.preventDefault()
    $("#o").click(function(){

    $("#xx").val()
    $("#xx option:selected").text()
    });
});


