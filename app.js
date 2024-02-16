let oneEuroIs = {
    "JPY": 156.5,
    "USD": 1.07,
    "GBP": 0.87,
}
const fromDollarToYen = (valueInDollar) => {
    let valueInEuro = valueInDollar / oneEuroIs['USD'];
    let valueInYen = Math.round(100*valueInEuro * oneEuroIs['JPY']) / 100;
    return valueInYen
}
const fromEuroToDollar = (valueInEuro) => {
    let valueInDollar = valueInEuro * oneEuroIs['USD'];
    return valueInDollar
}
const fromYenToPound = (valueInYen) => {
    let valueInEuro = valueInYen / oneEuroIs['JPY'];
    let valueInPound = Math.round(100*valueInEuro * oneEuroIs['GBP']) / 100;
    return valueInPound
}

module.exports = {
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound,
};