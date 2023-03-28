var times = 0;			// Global μεταβλητή - γνωστή σε όλες τις συναρτήσεις του script
var numArr = [];
var i;
function todo() {
	let pid, neon;		// Τοπικές μεταβλητές - γνωστές μόνο στη συνάρτησή τους

	if (times === 0) {	// Διάκριση αν είμαστε σε μονή ή ζυγή φορά (που έχει πατηθεί το κουμπί)
		pid = "p0"; 	// Το id της παραγράφου με την οποία θα ασχοληθούμε
		neon = " bla"; 	// Το έξτρα κείμενο που θέλουμε να προσθέσουμε
	}
	else {
		pid = "p1";		// Το id της παραγράφου με την οποία θα ασχοληθούμε
		neon = " bli";	// Το έξτρα κείμενο που θέλουμε να προσθέσουμε
	}
	let pp = document.getElementById(pid);	// Εντόπισε το αντικείμενο της σελίδας που έχει id ίσο με το περιεχόμενο της pid
	// και εκχώρησέ το στο pp
	pp.innerHTML = pp.innerHTML + neon;		// Πρόσθεσε στο κείμενο του αντικειμένου το έξτρα κείμενο που περιέχει η neon
	times = (times + 1) % 2; 					// Αύξησε το times κατά 1 και κράτησε το υπόλοιπο της διαίρεσης του με το 2
	// ώστε η τιμή να εναλλάσεται μεταξύ 0 και 1
}


function textBoxToArray() {
	let message, txtBoxTxt, txtArr, pinax;

	txtBoxTxt = document.getElementById("t0").value;

	txtArr = txtBoxTxt.split(","); // Μετατροπή των περιεχομένων του textbox σε πίνακα από strings (διαχωρίστηκαν από τα ",")
	numArr = []; // Επανεκκένωση του πίνακα αριθμών (ώστε να μην περιέχει προηγούμενες τιμές)
	for (i = 0; i <= txtArr.length - 1; i++)
		numArr[i] = parseInt(txtArr[i]); // Μετατροπή/αντιγραφή του πίνακα από strings σε πίνακα ακεραίων

	if (!isNaN(numArr[0])) {
		// Αν ο πίνακας ακεραίων δεν είναι κενός
		pinax = "";
		for (i = 0; i <= numArr.length - 1; i++) pinax += numArr[i] + "<BR>"; // Περιεχόμενα πίνακα ως κείμενο με αλλαγές γραμμής

		document.getElementById("p0").innerHTML =
			"Περιεχόμενα πίνακα:<BR>" + pinax;
	} else alert("Empty array!");
}

function showIndex() {
	var txtVal, intVal, indFound;

	txtVal = prompt("Δώσε τιμή", "");
	intVal = parseInt(txtVal); // Μετατροπή του κειμένου του textbox σε ακέραιο
	indFound = numArr.indexOf(intVal); // Επιστροφή της θέσης στον πίνακα του αριθμού που δίνεται σαν παράμετρος
	if (indFound >= 0) alert("Βρέθηκε στη θέση " + indFound);
	else alert("Δε βρέθηκε!");
}


function reset() {

	let par1 = document.getElementById("p0");
	let par2 = document.getElementById("p1");
	par1.innerHTML = "Bla:";
	par2.innerHTML = "Bli:";

	times = 0;

}

function calculation() {
	// Χρησιμοποιήστε την ιδιότητα checked (που έχει τιμή true/false) των παρακάτω radio buttons για να ελέγξετε την επιλογή του χρήστη
	// Πραγματοποιήστε τον υπολογισμό και εμφανίστε το (τρέχον) αποτέλεσμα στην παράγραφο p1
	let input = document.querySelector("input[type=radio]:checked")
	let option = input.id;
	if (option === "Sum") {
		sum();
	}
	else if (option === "Product") {
		product();
	}
	else if (option === "Max") {
		maxer();

	}
	else if (option === "Min") {
		miner();

	}
	else if (option === "Average") {
		average();

	}
}

function sum() {
	let result = 1;
	for (let i = 0; i < numArr.length; i++) {

		result = result + numArr[i];

	}
	alert(result)
}
function product() {
	let result = 1;
	console.log(numArr)
	for (let i = 0; i < numArr.length; i++) {
		result = result * numArr[i]
	}
	alert(result)
}
function maxer() {
	let max = numArr[i];
	for (i = 0; i < numArr.length; i++) {

		if (numArr[i] >= max) {
			max = numArr[i]
		}

	}
	alert(max)
}
function miner() {
	let min = numArr[i];
	for (i = 0; i < numArr.length; i++) {

		if (numArr[i] <= min) {
			min = numArr[i]
		}

	}
	alert(min)
}
function average() {
	let sum = 0;
	for (i = 0; i < numArr.length; i++) {

		sum = sum + numArr[i]
	}
	alert(sum / numArr.length)
}



