const Constants = require('./constantsMac'); // WIN

class TestSteps{

    openNewModel(){
        console.log("XPATH: ",Constants.clickFile);
    }
}

module.exports = new TestSteps;