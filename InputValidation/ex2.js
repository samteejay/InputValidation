<!DOCTYPE html>
<html>

<body>

<h2>JavaScript can validate Input</h2>

<p>Please input a number between 1 and 10:</p>

<input id="numb1">

<button type="button" onclick="myFunction()">Submit</button>

<p id="demo1"></p>

<p>Please input a name:</p>

<input id="numb2">

<button type="button" onclick="validateForm()">Submit</button>

<p id="demo2"></p>

<script>

function myFunction() {
	var x, text;
	x = document.getElementById("numb1").value;

	if (isNaN(x) || x < 1 || x > 10) {
		text = "input not valid";
	} else {
		test = "Input ok";
	}
	document.getElementById("demo1").innerHTML = text;
}

function validateForm() {
	var y, test;
	
	y = document.getElementById("numb2").value;

	if (y == "") {
		alert("Name must be filled out");
		return false;
	document.getElementById("demo2").innerHTML = test;
}
	
</script>
</body>
</html>