/*$(".brownstone").hover(function() {
	switch2d();
}, function() {
	switch3d();
});

function switch2d() {
	$(".brownstone:nth-child(1)").attr("style", "transform: rotateY(90deg);");
	$(".brownstone:nth-child(2)").attr("style", "transform: translate(50%, 0%);");
}

function switch3d() {
	$(".brownstone").attr("style", "");
}*/

$(".window").hover(function() {
	let currID = this.getAttribute("data-id");
	switch(currID) {
		case "prospect":
			document.querySelector(".info-box").querySelector("h3").innerHTML = "Prospect Heights, Brooklyn";
			document.querySelector(".info-box").querySelector("p").innerHTML = "Why I'll never buy a NYC co-op again";
			break;
		case "discr":
			document.querySelector(".info-box").querySelector("h3").innerHTML = "Prospect Heights, Brooklyn";
			document.querySelector(".info-box").querySelector("p").innerHTML = "\"Not our kind\": How discrimination persists in New York co-ops";
			break;
		case "820fifthave":
			document.querySelector(".info-box").querySelector("h3").innerHTML = "820 Fifth Ave";
			document.querySelector(".info-box").querySelector("p").innerHTML = "test";
			break;
		default:
			document.querySelector(".info-box").querySelector("h3").innerHTML = "";
			document.querySelector(".info-box").querySelector("p").innerHTML = "";
			break;
	}
	$(".info-box").css("opacity", 1);
}, function() {
	$(".info-box").css("opacity", 0);
});

$(document).keydown(function(e) {
     if (e.key === "Escape") { // escape key maps to keycode `27`
        //
    }
});