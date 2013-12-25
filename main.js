var isLoggedIn = function() {
	return !!document.getElementsByClassName('logged-in').length;
};

var makeXhrPromise = function() {
	return new Promise(function(resolve){
		chrome.runtime.sendMessage({}, function(response){
			resolve(response);
		});
	}).then(function(credentials) {
		return new Promise(function(resolve) {
			var xhr = new XMLHttpRequest();
			// Make a call to http://www.crunch.com/library/ajax/login.cfm
			xhr.open("POST", "http://www.crunch.com/library/ajax/login.cfm");
			xhr.onload = function() { resolve(xhr.status === 200); };
			// Form data: https://developer.mozilla.org/en-US/docs/Web/Guide/Using_FormData_Objects?redirectlocale=en-US&redirectslug=Web%2FAPI%2FFormData%2FUsing_FormData_Objects
			var form = new FormData();
			form.append("username", credentials.username);
			form.append("password", credentials.pass);
			xhr.send(form);
		});
	});
}

var login = function() {
	// Am I already logged in?
	if (isLoggedIn())
		return;

	makeXhrPromise().then(function(success) {
		if (success) {
			window.location.reload();
		} else {
			console.log('Something bad happened!');
		}
	});
};

// Main
login();