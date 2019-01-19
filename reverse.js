
function createArray (arrsize) {
	
var myRevArr=[ ];
for (var x =0; x < (arrsize); x++) {
		myRevArr.push(x);
	}
	return myRevArr;
};	


function reversaArr(input) {
	var y;
	var t = [];

	
	for (y = input.length-1; y >= 0; y--) {
		t.push(input[y]);
	   	}
		    	
		 input = t;
		 
	return t;	    	
};


