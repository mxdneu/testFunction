

function palindrome(str){
	var arr = str.split('');
	var boo = true;
	for(var i = 0;i < arr.length;i++){
		var index = arr[i];
		if(arr[i] != arr[arr.length - i - 1]){
			boo = false;
		}
	}
	return boo;
}