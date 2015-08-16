$(document).ready(function()
{
	$("#arrived").transit({opacity: 1}, 1000);
	setTimeout(function()
	{
		$("#givecard").transit({opacity: 1}, 1000);
		setTimeout(function()
		{
			$("#card").transit({opacity:0.2}, 500);
		}, 1500)
	}, 1000);
});

var firstClick = false;
var cont = true;
var token = setInterval(function()
{
	if (cont) {
		$("#card").transit({rotateY: "+=360deg"}, 250, "linear");
	}
	else
	{
		clearInterval(token);
	}
}, 250);

$("#card").click(function()
{
		cont = false;
		$("#card").transit({opacity: 1}, 500);
		setTimeout(function () {
			$("#button").transit({opacity: 1, rotateY: "360deg"}, 1000);

		}, 2000);
		console.log("Card clicked");
		firstClick = true;
});

$("#button").click(function()
{
	console.log("Redirecting to winner.html");
	setTimeout(function()
	{
		location.href = "winner.html";
	},250);
});