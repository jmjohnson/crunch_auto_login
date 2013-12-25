var getUsernameInput = function() {
	return document.getElementsByName('username')[0];
};

var getPassInput = function() {
	return document.getElementsByName('pass')[0];
}

//Save the textboxes to local storage on each keyup
document.addEventListener('keyup', function() {
	localStorage.setItem('username', getUsernameInput().value);
	localStorage.setItem('pass', getPassInput().value);
});

document.addEventListener('DOMContentLoaded', function(){
	getUsernameInput().value = localStorage.getItem('username');
	getPassInput().value = localStorage.getItem('pass');
});