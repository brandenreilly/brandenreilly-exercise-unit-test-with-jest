const {fromDollarToYen,fromEuroToDollar,fromYenToPound} = require('./app.js');

test("One euro should be 1.07 dollars", function() {
    const {fromEuroToDollar} = require('./app.js');
    const dollars = fromEuroToDollar(3.5);
    const expected = 3.5 * 1.07;
    expect(dollars).toBe(expected);
});

test('100 dollars should be 14626.16 YEN', function() {
    const {fromDollarToYen} = require('./app.js');
    expect(fromDollarToYen(100)).toBe(Math.round(100*14626.168224299065) / 100)
});
test('One Yen should be 0.56 pound', function() {
    const {fromYenToPound} = require('./app.js');
    expect(fromYenToPound(1000)).toBe(Math.round(100*5.559105431309905) / 100);
});