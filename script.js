function firstNonRepeatedChar(str) {
 // Write your code here
	for(let i = 0; i < str.length; i++){
		let flag = false;
		for(let j = 0; j < str.length; j++){
			if(str[i] == str[j] && i != j){
				flag = true;
				break;
			}
		}

		if(flag == false) return str[i];
	}

	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
