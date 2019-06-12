function myFirst(evt) {
    
    var ch = String.fromCharCode(evt.which);

    if(!(/[0-9]/.test(ch) || ch == '/' || ch == 'X')) {
    	evt.preventDefault();
    }
}

function calculate(form) {
//	myFirst(evt);

	var displayScore = 0;
	var thirdThrow = 0;
	var nextThrow = 0;

	// if (document.getElementById("first1").value.localeCompare("X") == 0) {
	// 	first = 10;


//	var firstF = parseInt(document.getElementsByName("ball")[0].value);
//	var secondF = parseInt(document.getElementsByName("ball")[1].value);
//	var example = document.forms.player
//	var list = form.elements["ball"];

//	document.getElementById("result").innerHTML = totalScore;


	 for (var i=0; i <= 18; i+=2) {

		 var showScore = false;
		 var totalScore = 0;

		 // Check for a strike
		 if (form.ball[i].value.toLowerCase() == 'x') 
{
		 	totalScore += 10;

		 	if (i < 16) {
				if (form.ball[i+1].value != '')			// Should not be able to put a value in the 
					form.ball[i+1].value = '';			// 2nd input of a frame when a strike is thrown
				nextThrow = form.ball[i+2].value;

				if (nextThrow.toLowerCase() == 'x')
					thirdThrow = form.ball[i+4].value;
				else
					thirdThrow = form.ball[i+3].value;
		 	}
		 	if (i == 16) {
		 		nextThrow = form.ball[i+2].value;
		 		thirdThrow = form.ball[i+3].value;
		 	}
		 	if (i == 18) {
		 		nextThrow = form.ball[i+1].value;
		 		thirdThrow = form.ball[i+2].value;
		 	}
		 	if (nextThrow != '' && thirdThrow != '') {
		 		if (nextThrow.toLowerCase() == 'x') {
		 			totalScore += 10;
		 			if(thirdThrow.toLowerCase() == 'x')
		 				totalScore += 10;
		 			else
		 				totalScore += parseInt(thirdThrow);

		 		}
 		 		else {	// the 2nd throw is not a strike
		 			if (thirdThrow == '/') {
		 				totalScore += 10;
		 			}
		 			else {	// we have an open frame
		 				totalScore += parseInt(nextThrow);
		 				totalScore += parseInt(thirdThrow);
		 			}
 		 		}
		 		showScore = true;
		 	}

		 } 
		 // Else we don't have a strike
		 else if (form.ball[i].value != '' && form.ball[i+1].value != '') {

		 	if (form.ball[i+1].value == '/') {

		 		totalScore += 10;
		 		if (form.ball[i+2].value != '') {

		 			if (form.ball[i+2].value.toLowerCase() == 'x') {
		 				totalScore += 10;
		 			}
		 			else {
		 				totalScore += parseInt(form.ball[i+2].value);
		 			}
		 			showScore = true;
		 		}
		 	}/*What happens if the second throw is set to 'X', what do we do?
		 		*/
		 	else {
		 		totalScore += parseInt(form.ball[i].value);
		 		if (form.ball[i+1].value.toLowerCase() != 'x') {
		 			totalScore += parseInt(form.ball[i+1].value);
		 			showScore = true;
		 		}
		 		else
		 			form.ball[i+1].value = '';
		 	}
		 }

		 displayScore += totalScore;

		 if(showScore) {
		 	var k = i/2;
		 	form.result[k].value = displayScore;
		 }
	 }
}

function notes() {

	 if (form.ball[0].value == 3) {
	 	form.result[0].value = form.ball[0].value;
	 	totalScore += 3;
	 }


	 if (form.ball[2].value.toLowerCase() == 'x') {
	 	form.result[1] = 'X';
	 }

	 if (form.ball[2].value == 7) {
	 	form.result[1].value = 'X';
	 	totalScore += 7;
	 } else if (form.ball[2].value == 'x') {
	 	form.result[1] = 'X';
	 	totalScore += 10;
	 	strike = true;
	 }
		 for (var i = 0; i <= len; i++) {

	 	//  if (form.ball[0].value == 'x') {
		 // 	form.result[0].value = 'X';
		 // 	form.ball[1].value = "";
		 // }

		 if (form.ball[i].value.toLowerCase() == 'x') {
		 	form.result[i].value = '9';
		 }
	 }
}


function keydownFunction() {
	document.getElementById("second2").style.backgroundColor = "red";
}

function keyupFunction() {
	document.getElementById("second").style.backgroundColor = "green";
}