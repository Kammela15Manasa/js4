// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
function myFunction() {
	var x = document.getElementById("myDate").value;
	document.getElementById("demo").innerHTML = x;
	const d = new Date(x);
let day = d.getDay()
  
console.log(day);
switch (day) {
	case 0:
		console.log("Sunday");
		break;
	case 1:
		console.log("Monday");
		break;
	case 2:
		console.log("Tuesday");
		break;
	case 3:
		console.log("wednesday!");
		break;
	case 4:
		console.log("thrusday");
		break;
	case 5:
		console.log("Friday");
		break;
	case 6:
		console.log("Saturday");
		break;
	default:
		console.log("Something went horribly wrong...");
}
}
