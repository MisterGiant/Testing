function getStatus() {
	var a=$statusBar.text();
	if(hasSubString(a,"Rolling in")) {
		return"waiting";
	} else if(hasSubString(a,"***ROLLING***")) {
		return"rolling";
	} else if(hasSubString(a,"rolled")) {
        var b=parseInt(a.split("rolled")[1]);
		return lastRollColor=getColor(b),"rolled";
	} else {
		return"unknown";
	}
}

alert(getStatus());

var $statusBar=$(".progress #banner"),$balance=$("#balance");
