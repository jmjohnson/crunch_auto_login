// Handles requests for credentials. That's pretty much it.
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
	sendResponse({username: localStorage.username, pass: localStorage.pass});
});
