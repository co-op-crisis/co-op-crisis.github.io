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
	if(currID != null) {
		switch(currID) {
			case "prospect":
				document.querySelector(".info-box").querySelector("h3").innerHTML = "Prospect Heights, Brooklyn";
				document.querySelector(".info-box").querySelector("p").innerHTML = "Why I'll never buy a NYC co-op again";
				document.querySelector(".overlay").querySelector("iframe").src = "stories/prospect.html";
				break;
			case "discr":
				document.querySelector(".info-box").querySelector("h3").innerHTML = "Prospect Heights, Brooklyn";
				document.querySelector(".info-box").querySelector("p").innerHTML = "\"Not our kind\": How discrimination persists in New York co-ops";
				break;
			case "820fifthave":
				document.querySelector(".info-box").querySelector("h3").innerHTML = "820 Fifth Ave";
				document.querySelector(".info-box").querySelector("p").innerHTML = "test";
				break;
			case "uws":
				document.querySelector(".overlay").querySelector("iframe").src = "https://lookerstudio.google.com/embed/reporting/86a88062-57f7-488d-87d0-9fa77f986de5/page/tcUyD";
				break;
			case "midtown":
				document.querySelector(".overlay").querySelector("iframe").src = "https://lookerstudio.google.com/embed/reporting/d6bf6fb0-79b4-4d29-a520-98b1192a29c7/page/DcUyD";
				break;
			case "ues":
				document.querySelector(".overlay").querySelector("iframe").src = "https://lookerstudio.google.com/embed/reporting/5dab9faf-a53d-42f6-a885-af8cba0b8471/page/HbUyD";
				break;
			case "downtown":
				document.querySelector(".overlay").querySelector("iframe").src = "https://lookerstudio.google.com/embed/reporting/1bcee990-a28b-49b8-9b77-98546923811c/page/jZUyD";
				break;
			default:
				document.querySelector(".info-box").querySelector("h3").innerHTML = "";
				document.querySelector(".info-box").querySelector("p").innerHTML = "";
				break;
		}
		$(".info-box").css("opacity", 1);
	}
}, function() {
	$(".info-box").css("opacity", 0);
});

$(document).keydown(function(e) {
     if (e.key === "Escape") { // escape key maps to keycode `27`
        closeOverlays();
    }
});

function triggerOverlay() {
	$('.overlay').fadeIn();
}

function closeOverlays() {
	$("#timeline").fadeOut();
	$(".overlay").fadeOut();
	document.getElementById("bg-ambiance").play();
}