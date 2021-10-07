var os = require("os")
var Constants = "";
if(os.platform == 'win32'){
    console.log("windows")
    Constants = require('./constantsWin'); // WIN
}else if(os.platform == 'darwin'){
    console.log("mac")
    Constants = require('./constantsMac'); // WIN
}

class TestSteps{

    openNewModel(){
        console.log("XPATH: ",Constants.clickFile);
    }
}

module.exports = new TestSteps;