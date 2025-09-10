
function pizzaOven(crustType, sauceType, cheeses, toppings) {
    return {
        crustType: crustType,
        sauceType: sauceType,
        cheeses: cheeses,
        toppings: toppings
    };
}



var pizza1 = pizzaOven("deep dish", "traditional", ["mozzarella"], ["pepperoni", "sausage"]);
var pizza2 = pizzaOven("hand tossed", "marinara", ["mozzarella", "feta"], ["mushrooms", "olives", "onions"]);
var pizza3 = pizzaOven("thin crust", "pesto", ["goat cheese"], ["sun-dried tomatoes", "basil", "pine nuts"]);
var pizza4 = pizzaOven("stuffed crust", "bbq", ["cheddar", "mozzarella"], ["chicken", "red onions", "cilantro"]);

// -----------------------------------------------------------------------------------------------------------------------------
//bonus

function randomPizza() {
    var crusts = ["deep dish", "hand tossed", "thin crust", "stuffed crust"];
    var sauces = ["traditional", "marinara", "pesto", "bbq"];
    var cheeseOptions = ["mozzarella", "cheddar", "feta", "goat cheese"];
    var toppingOptions = ["pepperoni", "sausage", "mushrooms", "olives", "onions", "basil", "pineapple", "chicken"];

    function getRandom(arr, count) {
        var result = [];
        while (result.length < count) {
            var item = arr[Math.floor(Math.random() * arr.length)];
            if (!result.includes(item)) result.push(item);
        }
        return result;
    }

    return pizzaOven(
        crusts[Math.floor(Math.random() * crusts.length)],
        sauces[Math.floor(Math.random() * sauces.length)],
        getRandom(cheeseOptions, 2),
        getRandom(toppingOptions, 3)
    );
}

var mysteryPizza = randomPizza();
console.log(mysteryPizza);


