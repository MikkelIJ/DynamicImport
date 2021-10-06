const ConstantsWin = require('./constantsWin');

class TestSteps{

    sayHello(){
        console.log(ConstantsWin.clickFile);
    }
}

module.exports = new TestSteps;