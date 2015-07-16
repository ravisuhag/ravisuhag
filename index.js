var pkg = require("./package.json"),
	me = require("./data/me.json");

me = deepCopy(me);
	
// Helpers
function deepCopy(data) {
    return JSON.parse(JSON.stringify(data));
}


//  Methods
function info() {
    console.info(me.info);
}

//  Export methods
module.exports = {
    info: info
};
