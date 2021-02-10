function footerText() {
	let g = new Date(document.lastModified);
	//create a new date object based on lastModified date

	let h =
		new Date().toLocaleDateString() + "&mdash;" + new Date().toLocaleTimeString();
	// create new "current" date + time string using locale format

	let q = new Date(); // new date do display copyright year

	const months = [
		//create an array of months to use in lastModified date information
		"January",
		"February",
		"March",
		"Aprril",
		"May",
		"June",
		"July",
		"August",
		"Sepember",
		"October",
		"November",
		"December",
	];

	const days = [
		//create an array of days to use in lastModified date information
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];

	let myMonth = months[g.getMonth()]; //"date part" month fully spelled out using array above
	let myDay = days[g.getDay()]; // "date part" day fully spelled out using array above
	let myDate = g.getDate(); // "date part" numeric date
	let myYear = g.getFullYear(); // "date part" 4-digit year
	//create "date part" variables using date properties and the indexes of the arrays created above

	let myHMS = g.toLocaleTimeString();
	//get time in "locale" format to display in lastModified information

	let copyrightYear = q.getFullYear();

		let y = `&copy ${copyrightYear} GIT Site Bogdan<br>All Rights Reserved<br><br><br>
    
	`;

	// create variable to hold all text using template literal

	document.getElementById("copyright").innerHTML = `${y}`;
	//document.getElementById("footertext").style.fontSize = ".8rem";
	// output text in variable to the footertext paragraph in footer

	console.log(copyrightYear);

	
}
