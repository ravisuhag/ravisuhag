var pkg = require("./package.json"),
	me = require("./data/me.json");

// Helpers
function deepCopy(data) {
    return JSON.parse(JSON.stringify(data));
}
//  Methods
function info() {
    console.log("Ravi Suhag is an award-winning web architect, designer, developer, hardware hacker and entrepreneur from India. He helps people build great products.");
}



//  Export methods
module.exports = {
    info: info
};
