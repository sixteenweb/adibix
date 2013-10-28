
// Activate Mobile Nav
$(".navclosed").click(function () {
	$(this).toggleClass("navclicked");
	$(".navigation").toggle();
	checkState();
});

$(".navigation ul li").click(function () {
	
	$(".navigation ul li").removeClass('active');
	$(this).addClass("active");
	
	$(".navclosed").toggleClass("navclicked");
	$(".navigation").toggle();
	checkState();
});

// When resizing the window to be bigger, show the navigation again
var isnavclicked;
var isnavshown;
var issmall;

function checkState(){	
	// Check if nav has been clicked open for when on 480 or 320. 
	// If it has then need to toggle back to display main nav for when going back to 768 and 1024.
	if($(".navclosed").is(".navclicked")){
		isnavclicked = "true";
	}
	else {
		isnavclicked = "false";
	}
	//
	if($(".navigation").is(":hidden")){
		isnavshown = "false";
	}
	else {
		isnavshown = "true";
	}
	//
	if($(document).width()>750){
		issmall = "false";
	}
	else{
		issmall = "true";
	}

	//
	if(issmall == "false" && isnavshown == "false"){
		$(".navclosed").removeClass("navclicked");
		$(".navigation").toggle();		
	}

	if (issmall == "true" && isnavshown == "true" && isnavclicked == "false"){
		$(".navigation").toggle();	
	}

	if (issmall == "true" && isnavshown == "false" && isnavclicked == "true"){
		$(".navclosed").toggleClass("navclicked");		
	}	
}

$(window).resize(function(){	
	checkState();	
});
