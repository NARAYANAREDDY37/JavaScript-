function validate() {
	var username = document.getElementById('uname').value;

	// regx = new RegExp('E00', 'i');
	// var regx = /E00/;
  var regx = /[a-z][0-9]@gmail.com/

	if (regx.test(username)) {
		alert('Valid username');
	} else {
		// alert('Invalid username');
		document.getElementById('lbluser').style.visibility = 'visible';
	}
}

/* var regx = function useRegex(input) {
	let regex =
		/^2020-03-12T13:34:56\.123Z INFO  \[org\.example\.Class]: This is a #simple #logline containing a 'value'\.$/i;
	return regex.test(input);
};

var input = window.prompt('Enter input');

console.log(regx(input));
 */
