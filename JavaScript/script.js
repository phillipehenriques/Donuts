var donutMorango = {
    id: 1,
    value: 2.87
}

var donutChocolate = {
    id: 2,
    value: 5.49
}

var donutMorango = {
    id: 2,
    value: 5.49
}

var donutMorango = {
    id: 2,
    value: 5.49
}

var listOfProducts = [
    { 
        qntd: 2,
        product: obj1
    }, 
    {
        qntd: 5,
        product: obj2
    }
]

var result = listOfProducts.map(x => parseFloat((x.qntd * x.product.value).toFixed(2)))

// Avançado
var sum = result.reduce((sum, value) => {
    return sum + value;
}, 0);

// Basico
var total = 0;
for (var i = 0; i < result.length; i++) {
    total += result[i]
}

// Basico
var iterator = 0;
var total = 0;
while (iterator < result.length) {
    total += result[iterator];
}

console.log(VALOR A PAGAR: R$${sum});