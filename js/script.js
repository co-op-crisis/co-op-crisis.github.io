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

var main = true;

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
				document.querySelector(".info-box").querySelector("h3").innerHTML = "Hudson Yards / Chelsea";
				document.querySelector(".info-box").querySelector("p").innerHTML = "\"Not our kind\": How discrimination persists in New York co-ops";
				document.querySelector(".overlay").querySelector("iframe").src = "stories/discr.html";
				break;
			case "secr":
				document.querySelector(".info-box").querySelector("h3").innerHTML = "Queens / Brooklyn";
				document.querySelector(".info-box").querySelector("p").innerHTML = "'All kinds of discrimination': inside the secretive world of New York housing co-ops";
				document.querySelector(".overlay").querySelector("iframe").src = "stories/secr.html";
				break;
			case "esther":
				document.querySelector(".info-box").querySelector("h3").innerHTML = "It's a lot harder to be discriminatory if you have to be transparent";
				document.querySelector(".info-box").querySelector("p").innerHTML = "An interview with Esther Chin";
				document.querySelector(".overlay").querySelector("iframe").src = "https://www.youtube.com/embed/VU0dhwE6mbM?autoplay=1&rel=0";
				break;
			case "uws":
				document.querySelector(".info-box").querySelector("h3").innerHTML = "Upper West Side";
				document.querySelector(".info-box").querySelector("p").innerHTML = "Average price range alongside total sales";
				document.querySelector(".overlay").querySelector("iframe").src = "https://lookerstudio.google.com/embed/reporting/86a88062-57f7-488d-87d0-9fa77f986de5/page/tcUyD";
				break;
			case "midtown":
				document.querySelector(".info-box").querySelector("h3").innerHTML = "Midtown";
				document.querySelector(".info-box").querySelector("p").innerHTML = "Average price range alongside total sales";
				document.querySelector(".overlay").querySelector("iframe").src = "https://lookerstudio.google.com/embed/reporting/d6bf6fb0-79b4-4d29-a520-98b1192a29c7/page/DcUyD";
				break;
			case "ues":
				document.querySelector(".info-box").querySelector("h3").innerHTML = "Upper East Side";
				document.querySelector(".info-box").querySelector("p").innerHTML = "Average price range alongside total sales";
				document.querySelector(".overlay").querySelector("iframe").src = "https://lookerstudio.google.com/embed/reporting/5dab9faf-a53d-42f6-a885-af8cba0b8471/page/HbUyD";
				break;
			case "downtown":
				document.querySelector(".info-box").querySelector("h3").innerHTML = "Downtown";
				document.querySelector(".info-box").querySelector("p").innerHTML = "Average price range alongside total sales";
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
	main = false;
}

function closeOverlays() {
	$("#timeline").fadeOut();
	$(".overlay").fadeOut();
	document.getElementById("bg-ambiance").play();
	if(main)
		location.href = "#";
	main = true;
}