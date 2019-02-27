// update() contains the core functionality for the app. This function
// essentially displays all available gobblegums, their corresponding
// probabilities, and gives the user the option to consume any
// gobblegum that is available.
function update(){
	//
	// GG1
	//
	// Name:
	document.getElementById("first_g_name").innerHTML=localStorage.getItem("local_g1_name");
	// If consumable
	if (localStorage.getItem("local_g1_status") == "1"){
		// Display probability
		var chance = (1 / parseInt(localStorage.getItem("count"))) * 100;
		chance = chance.toFixed(2);
		var chanceStr = chance.toString() + "%";
		document.getElementById("first_g_chance").innerHTML=chanceStr;
		// Give option to consume
		document.getElementById("cons1").innerHTML='<a href="javascript:consume(1);" style="text-decoration:none">X</a>';
		document.getElementById("cons1").style.fontWeight = "bolder";
	} else {
		// Else probability
		document.getElementById("first_g_chance").innerHTML="0%";
		// Omit option to consume
		document.getElementById("cons1").innerHTML=" ";
	}
	//
	// GG2
	//
	// Name:
	document.getElementById("second_g_name").innerHTML=localStorage.getItem("local_g2_name");
	// If consumable
	if (localStorage.getItem("local_g2_status") == "1"){
		// Display probability
		var chance = (1 / parseInt(localStorage.getItem("count"))) * 100;
		chance = chance.toFixed(2);
		var chanceStr = chance.toString() + "%";
		document.getElementById("second_g_chance").innerHTML=chanceStr;
		// Give option to consume
		document.getElementById("cons2").innerHTML='<a href="javascript:consume(2);" style="text-decoration:none">X</a>';
		document.getElementById("cons2").style.fontWeight = "bolder";
	} else {
		// Else probability
		document.getElementById("second_g_chance").innerHTML="0%";
		// Omit option to consume
		document.getElementById("cons2").innerHTML=" ";
	}
	//
	// GG3
	//
	// Name:
	document.getElementById("third_g_name").innerHTML=localStorage.getItem("local_g3_name");
	// If consumable
	if (localStorage.getItem("local_g3_status") == "1"){
		// Display probability
		var chance = (1 / parseInt(localStorage.getItem("count"))) * 100;
		chance = chance.toFixed(2);
		var chanceStr = chance.toString() + "%";
		document.getElementById("third_g_chance").innerHTML=chanceStr;
		// Give option to consume
		document.getElementById("cons3").innerHTML='<a href="javascript:consume(3);" style="text-decoration:none">X</a>';
		document.getElementById("cons3").style.fontWeight = "bolder";
	} else {
		// Else probability
		document.getElementById("third_g_chance").innerHTML="0%";
		// Omit option to consume
		document.getElementById("cons3").innerHTML=" ";
	}
	//
	// GG4
	//
	// Name:
	document.getElementById("fourth_g_name").innerHTML=localStorage.getItem("local_g4_name");
	// If consumable
	if (localStorage.getItem("local_g4_status") == "1"){
		// Display probability
		var chance = (1 / parseInt(localStorage.getItem("count"))) * 100;
		chance = chance.toFixed(2);
		var chanceStr = chance.toString() + "%";
		document.getElementById("fourth_g_chance").innerHTML=chanceStr;
		// Give option to consume
		document.getElementById("cons4").innerHTML='<a href="javascript:consume(4);" style="text-decoration:none">X</a>';
		document.getElementById("cons4").style.fontWeight = "bolder";
	} else {
		// Else probability
		document.getElementById("fourth_g_chance").innerHTML="0%";
		// Omit option to consume
		document.getElementById("cons4").innerHTML=" ";
	}
	//
	// GG5
	//
	// Name:
	document.getElementById("fifth_g_name").innerHTML=localStorage.getItem("local_g5_name");
	// If consumable
	if (localStorage.getItem("local_g5_status") == "1"){
		// Display probability
		var chance = (1 / parseInt(localStorage.getItem("count"))) * 100;
		chance = chance.toFixed(2);
		var chanceStr = chance.toString() + "%";
		document.getElementById("fifth_g_chance").innerHTML=chanceStr;
		// Give option to consume
		document.getElementById("cons5").innerHTML='<a href="javascript:consume(5);" style="text-decoration:none">X</a>';
		document.getElementById("cons5").style.fontWeight = "bolder";
	} else {
		// Else probability
		document.getElementById("fifth_g_chance").innerHTML="0%";
		// Omit option to consume
		document.getElementById("cons5").innerHTML=" ";
	}
}

// Initial loading of app onto page
update();

// Consume a given gobblegum by decreasing setting it
// to 'eaten' and reloading the page to reflect changes
// in gobblegum probability.
function consume(i){
	var count = parseInt(localStorage.getItem("count"));
	count = count - 1;
	localStorage.setItem("count", count.toString());
	if (count == 0){
		// Clean the slate
		localStorage.setItem("local_g1_status","1");
		localStorage.setItem("local_g2_status","1");
		localStorage.setItem("local_g3_status","1");
		localStorage.setItem("local_g4_status","1");
		localStorage.setItem("local_g5_status","1");
		localStorage.setItem("count", "5");
	} else {
		// Update appropriate GG
		if (i == 1){
			localStorage.setItem("local_g1_status", "0");
		}
		if (i ==2){
			localStorage.setItem("local_g2_status", "0");
		}
		if (i ==3){
			localStorage.setItem("local_g3_status", "0");
		}
		if (i ==4){
			localStorage.setItem("local_g4_status", "0");
		}
		if (i == 5){
			localStorage.setItem("local_g5_status", "0");
		}
	}
	// Lastly: reload
	update();
}
