/*  -11- */
let ordenesDePizzas = [
    {
        "type": "margarita",
        "size": "individual",
        "price": 5.67,
        "topping": [
            "extra queso",
            "champiñon",
            "piña"
        ],
        "para llevar": true
    },
    {
        "type": "cuatro quesos",
        "size": "familiar",
        "precio": 18.34,
        "topping": [
            "extra queso",
            "pimenton"
        ],
        "para llevar": false
    },
    {
        "type": "margarita",
        "size": "individual",
        "precio": 5.67,
        "topping": [
            "extra queso",
            "champiñon",
            "piña"
        ],
        "para llevar": true
    }
];
//
console.log(ordenesDePizzas[0]);                //first object.
console.log(ordenesDePizzas[0].type);           //type.
console.log(ordenesDePizzas[0].size);           //size.
console.log(ordenesDePizzas[0]["price"]);       //size.
console.log(ordenesDePizzas[0]["topping"]);     //size.
//
console.log(ordenesDePizzas[1].topping[0]);     //second object enside array, array topping index 0.
console.log(ordenesDePizzas[2]);