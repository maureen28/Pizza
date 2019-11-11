//UI
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
// toppings
function Toppings(){
    var toppings;
    if(toppings==="bacon"){
        toppings=50
    }else if(toppings==="extra-cheese"){
        size=60
    } else if(size==="pepper"){
        size=40

/*var hawaiannPizza={name:"Hawaiian Pizza", properties: [size,crust,toppings]}
var meatLovers={name:"meatLovers", properties: [size,crust,toppings]}
var vegan={name:"vegan", properties: [size,crust,toppings]}
var magharitta={name:"magharitta", properties: [size,crust,toppings]}*/

//jQuery
//meatLovers
$(document).ready(function(){
    $("#btn-addtocart-ml").click(function(){
        $(".size").change(function(){
            size=$(".size option:selected").val();
            $("#checkout").text(size)
    })
    });
    $("#btn-addtocart-ml").click(function(){
        $(".crust").change(function(){
            size=$(".crust option:selected").val();
            $("#checkout").text(crust)
    })
    });
    $("#btn-addtocart-ml").click(function(){
        $(".toppings").change(function(){
            size=$(".toppings option:selected").val();
            $("#checkout").text(toppings)
    })
    });
//meditarrenean
$(document).ready(function(){
    $("#btn-addtocart-ml").click(function(){
        $(".size").change(function(){
            size=$(".size option:selected").val();
            $("#checkout").text(size)
    })
    });
    $("#btn-addtocart-ml").click(function(){
        $(".crust").change(function(){
            size=$(".crust option:selected").val();
            $("#checkout").text(crust)
    })
    });
    $("#btn-addtocart-ml").click(function(){
        $(".toppings").change(function(){
            size=$(".toppings option:selected").val();
            $("#checkout").text(toppings)
    })
    });
    // hawaiian
    $(document).ready(function(){
        $("#btn-addtocart-ml").click(function(){
            $(".size").change(function(){
                size=$(".size option:selected").val();
                $("#checkout").text(size)
        })
        });
        $("#btn-addtocart-ml").click(function(){
            $(".crust").change(function(){
                size=$(".crust option:selected").val();
                $("#checkout").text(crust)
        })
        });
        $("#btn-addtocart-ml").click(function(){
            $(".toppings").change(function(){
                size=$(".toppings option:selected").val();
                $("#checkout").text(toppings)
        })
        });
        //vegan
        $(document).ready(function(){
            $("#btn-addtocart-vegan").click(function(){
                $(".size").change(function(){
                    size=$(".size option:selected").val();
                    $("#checkout").text(size)
            })
            });
            $("#btn-addtocart-vegan").click(function(){
                $(".crust").change(function(){
                    size=$(".crust option:selected").val();
                    $("#checkout").text(crust)
            })
            });
            $("#btn-addtocart-vegan").click(function(){
                $(".toppings").change(function(){
                    size=$(".toppings option:selected").val();
                    $("#checkout").text(toppings)
            })
            });
