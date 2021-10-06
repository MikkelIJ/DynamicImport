const ConstantsWin = require('./constantsWin');

class TestSteps{

    openNewModel(){
        console.log("XPATH: ",ConstantsWin.clickFile);
    }
}

module.exports = new TestSteps;