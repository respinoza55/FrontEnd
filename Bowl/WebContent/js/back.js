function myFirst(evt) {
    
    var ch = String.fromCharCode(evt.which);

    if(!(/[0-9]/.test(ch) || ch == '/' || ch == 'X')) {
    	evt.preventDefault();
    }
}

function calculate(form) {
//	myFirst(evt);

	// var first = parseInt(document.getElementById("first1").value);
	// var second = parseInt(document.getElementById("second1").value);
	var totalScore = 0;
	var strike = false;
	var strikeTwo = false;
	var spare = false;

	for (var i = 0; i <= 20; i++) {
		form.ball[i].value = "";
	}

	for (var j = 0; j <= 18; j+=2) {

		var frameScore = 0;
		var shouldDisplay = false;

		if (form.ball[j].value.toLowerCase() == 'x') {

			frameScore += 10;
		}
	}

	// if (document.getElementById("first1").value.localeCompare("X") == 0) {
	// 	first = 10;

	// 	if (strikeTwo) {
	// 		totalScore += 30;
	// 	}
	// 	else if (strike) {
	// 		strikeTwo = true;
	// 	}
	// 	// else {

	// 	// }

	// 	document.getElementById("result").innerHTML = totalScore;
	// } 
	// // else if (first + second == 10) {
	// // 	document.getElementById("second1").innerHTML = "/";
	// // 	spare = true;
	// // }
	// else {
	// 	document.getElementById("result").innerHTML = first + second;
	// }
}

function calculate2(evt) {
	myFirst(evt);

	var first = 0;
	var totalScore = 0;
	var strike = false;
	var strikeTwo = false;

	if (document.getElementById("first2").value.localeCompare("X") == 0) {
		first = 10;

		if (strikeTwo) {
			totalScore += 30;
		}
		else if (strike) {
			strikeTwo = true;
		}
		// else {

		// }

		document.getElementById("result2").innerHTML = totalScore;
	} else {

		first = parseInt(document.getElementById("first2").value);
		var second = parseInt(document.getElementById("second2").value);

		document.getElementById("result2").innerHTML = first + second;
	}
}


function keydownFunction() {
	document.getElementById("second2").style.backgroundColor = "red";
}

function keyupFunction() {
	document.getElementById("second").style.backgroundColor = "green";
}