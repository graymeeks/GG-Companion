// Allow users to enter a five gobblegum
// configuration, and when they do bounce
// them to the core web app page.
function configure() {
	// Receive input and check for validity
	localStorage.setItem("check", 0)
        var gg_1 = document.getElementById("g1").value;
	checkInput(gg_1)
	var gg_2 = document.getElementById("g2").value;
	checkInput(gg_2)
	var gg_3 = document.getElementById("g3").value;
	checkInput(gg_3)
	var gg_4 = document.getElementById("g4").value;
	checkInput(gg_4)
	var gg_5 = document.getElementById("g5").value;
	checkInput(gg_5)
	// Move input into local storage
	localStorage.setItem("local_g1_name",gg_1);
	localStorage.setItem("local_g2_name",gg_2);
	localStorage.setItem("local_g3_name",gg_3);
	localStorage.setItem("local_g4_name",gg_4);
	localStorage.setItem("local_g5_name",gg_5);
	localStorage.setItem("local_g1_status","1");
	localStorage.setItem("local_g2_status","1");
	localStorage.setItem("local_g3_status","1");
	localStorage.setItem("local_g4_status","1");
	localStorage.setItem("local_g5_status","1");
	localStorage.setItem("count","5");
	// Switch to calc page
	if (localStorage.getItem("check") == 0){
		window.location.href="http://ggcompanion.com/index.php/companion-app/";
	} else {
		document.getElementById("error").innerHTML="Error: Please enter 5 gobblegum names";
	}
}

// Manage a global check to ensure that all
// five gobblegums were configured.
function checkInput(i) {
	if (!i) {
		localStorage.setItem("check", 1)
	}
}
