var random = require('./random');
var money = require('./monetize');


module.exports = "Account balance: "+'\n'+money.monetized(random.randomNumber(100, 1000000));
