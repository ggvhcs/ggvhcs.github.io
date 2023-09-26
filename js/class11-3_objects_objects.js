/*  -11- */
let ordenesDePizzas = {
    "type": "margarita",
    "size": "individual",
    "price": 5.67,
    "ingredientes": {
        "masa": {
            "harina": "100 grs",
            "sal": "1na cucharada",
            "agua": "1na taza"
        },
        "cobertura": {
            "azucar": "120 grs",
            "chocolate": "4 cucharada"
        }
    }
};
//
console.log(ordenesDePizzas.ingredientes);                                  //ingredientes object.
console.log(ordenesDePizzas["ingredientes"].masa.harina);                  //ingredientes masa.
console.log(ordenesDePizzas.ingredientes.cobertura["chocolate"]);           //ingredientes masa.
