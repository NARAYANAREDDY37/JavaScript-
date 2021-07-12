var username = 'Venkatesh';
var a = (function (username) {
	username = 'Chinni';
	return username;
})(username);
console.log(a);
console.log(username);
// What will be the output? Is it Venkatesh or Chinni?

var name = 'Venkatesh';
var Bank = (function (name) {
	name = 'Venkatesh';
	function getName() {
		return name;
	}
	function setName(newName) {
		name = newName;
	}

	return {
		setName,
		getName
	};
})(name);
console.log(Bank);
console.log(Bank.getName());
Bank.setName('Chinni');
console.log(Bank.getName());
console.log(name);
