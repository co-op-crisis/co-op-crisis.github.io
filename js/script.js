/*$(".brownstone").hover(function() {
	switch2d();
}, function() {
	switch3d();
});*/

function switch2d() {
	$(".brownstone:nth-child(1)").attr("style", "transform: rotateY(90deg);");
	$(".brownstone:nth-child(2)").attr("style", "transform: translate(50%, 0%);");
}

function switch3d() {
	$(".brownstone").attr("style", "");
}