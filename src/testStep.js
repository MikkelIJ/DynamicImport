var Constants = require('./constantsMac') // only for intellisense to work
Constants = (process.platform == 'win32') ? (Constants = require('./constantsWin')) : (process.platform == 'darwin') ? (Constants = require('./constantsMac')) : "";

class TestSteps{

    openNewModel(){
        console.log("XPATH: ",Constants.clickFile);
        
    }
}

module.exports = new TestSteps;