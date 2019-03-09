//https://stackoverflow.com/questions/30008114/how-do-i-promisify-native-xhr
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;
function makeRequestBasic (method, url, done) {
	var xhr = new XMLHttpRequest();
	xhr.open(method, url);
	xhr.setRequestHeader("Authorization", "Basic c2FtcGxlQ2xpZW50SWQ6c2VjcmV0");
	xhr.onload = function () {
		done(null, xhr.response);
	};
	xhr.onerror = function () {
		done(xhr.response);
	};
	xhr.send();
}

// And we'd call it as such:

makeRequestBasic('POST', 'https://servicesgateway-dev.apps.cf.tmca-digital.com.au/api/authhelper/access_token', function (err, datums) {
	if (err) { throw err; }
	console.log(datums);
});