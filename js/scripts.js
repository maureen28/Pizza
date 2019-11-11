//UI
function Pizza(name) {
    this.name = name;
    this.size = [];
    this.crust = [];
    this.toppings = [];
    this.number=[];
}
// Pizza(names)
function HawaiannPizza(){
    this.name = "Hawaiann";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number=number;
}
hawaiannPizza.prototype = function () {
    return "Name" + "" + "Size" + "" + "Crust" + "" + "Toppings"
}
function MediterraneanPizza(){
    this.name = "Mediterranean";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number=number;
}
MediterraneanPizza.prototype = function () {
    return "Name" + "" + "Size" + "" + "Crust" + "" + "Toppings"
}
function MeatLoversPizza(){
    this.name = "MeatLovers";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number=number;
}
MeatLoversPizza.prototype = function () {
    return "Name" + "" + "Size" + "" + "Crust" + "" + "Toppings"
}
function VeganPizza(){
    this.name = "Vegan";
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.number=number;
}
VeganPizza.prototype = function () {
    return "Name" + "" + "Size" + "" + "Crust" + "" + "Toppings"
}
// crust
function Crust() {
    var crust;
    if (crust === "glutenFree") {
        crust = 120
    } else if (crust === "stuffed") {
        crust = 100
    } else if (crust === "crispy") {
        crust = 80
    }
    return crust;
}
    // size
    function Size() {
        var size;
        if (size === "small") {
            size = 500
        } else if (size === "medium") {
            size = 750
        } else if (size === "large") {
            size = 1000
        }
        return size;
    }
        // toppings
        function Toppings() {
            var toppings;
            if (toppings === "bacon") {
                toppings = 50
            } else if (toppings === "extra-cheese") {
                toppings = 60
            } else if (size === "pepper") {
                toppings = 40
            }   return toppings;
        }
//Business Logic
                //jQuery
                //meatLovers
                $(document).ready(function () {
                    $("#btn-addtocart-ml").click(function () {
                        $(".size").change(function () {
                            size = $(".size option:selected").val();
                            $("#checkout").text(size)
                        })
                    });
                    $("#btn-addtocart-ml").click(function () {
                        $(".crust").change(function () {
                            size = $(".crust option:selected").val();
                            $("#checkout").text(crust)
                        })
                    });
                    $("#btn-addtocart-ml").click(function () {
                        $(".toppings").change(function () {
                            size = $(".toppings option:selected").val();
                            $("#checkout").text(toppings)
                        })
                    });
                    $("#btn-addtocart-ml").click(function () {
                    $(".input").change(function () {
                        size = $(".input option:selected").val();
                        $("#checkout").text(input)
                    })
                });
                    //meditarrenean
                    $(document).ready(function () {
                        $("#btn-addtocart-md").click(function () {
                            $(".size").change(function () {
                                size = $(".size option:selected").val();
                                $("#checkout").text(size)
                            })
                        });
                        $("#btn-addtocart-md").click(function () {
                            $(".crust").change(function () {
                                size = $(".crust option:selected").val();
                                $("#checkout").text(crust)
                            })
                        });
                        $("#btn-addtocart-md").click(function () {
                            $(".toppings").change(function () {
                                size = $(".toppings option:selected").val();
                                $("#checkout").text(toppings)
                            })
                        });
                        $("#btn-addtocart-md").click(function () {
                            $(".input").change(function () {
                                size = $(".input option:selected").val();
                                $("#checkout").text(input)
                            })
                        });
                        // hawaiian
                        $(document).ready(function () {
                            $("#btn-addtocart-hawaii").click(function () {
                                $(".size").change(function () {
                                    size = $(".size option:selected").val();
                                    $("#checkout").text(size)
                                })
                            });
                            $("#btn-addtocart-hawaii").click(function () {
                                $(".crust").change(function () {
                                    size = $(".crust option:selected").val();
                                    $("#checkout").text(crust)
                                })
                            });
                            $("#btn-addtocart-hawaii").click(function () {
                                $(".toppings").change(function () {
                                    size = $(".toppings option:selected").val();
                                    $("#checkout").text(toppings)
                                })
                            });
                            $("#btn-addtocart-hawaii").click(function () {
                            $(".input").change(function () {
                                size = $(".input option:selected").val();
                                $("#checkout").text(input)
                            })
                        });
                            //vegan
                            $(document).ready(function () {
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