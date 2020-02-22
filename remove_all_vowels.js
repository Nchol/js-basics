// buat function yang mereturn string yang tidak memiliki huruf vowel (a, i, u, e, o);

function removeVowels(str) {
	// expecto patronum!
	var strTemp ='';
	str.toLowerCase();
	for (i = 0; i < str.length; i++) {
		if (str[i] === 'a' || str[i] === 'i' || str[i] === 'u' || str[i] === 'e' || str[i] === 'o') {
			strTemp += ''
		} else {
			strTemp += str[i]
		}

	}
	console.log(strTemp);
}

removeVowels("I have never seen a thin person drinking Diet Coke.") // " hv nvr sn  thn prsn drnkng Dt Ck."
removeVowels("We're gonna build a wall!") // "W'r gnn bld  wll!"
removeVowels("Happy weekend guys!") // "Hppy wknd gys!"