var firstClick = false;

$("#button").click(function()
	{
		if (!firstClick) {
			setTimeout(function () {
				$("#bikes").transit({opacity: 1}, 500);
				$("#red").click(function () {
					$("body").css("background-image", "url('img/introbackgroundred.png')");
					$("#button").attr("src", "img/ridebuttonred.png");
					$("#titlebox").css("background-color", "rgba(0,0,0,0.1)");
				});
				$("#blue").click(function () {
					$("body").css("background-image", "url('img/introbackground.png')");
					$("#button").attr("src", "img/ridebutton.png");
					$("#titlebox").css("background-color", "#2B91CC");
				});
			}, 250);
			firstClick = true;
		}
		else
		{
			console.log("Changing to cards.html");
			setTimeout(function()
			{
				location.href = "cards.html";
			}, 250);
		}

	});

$(document).ready(function()
{
	setInterval(function()
	{
		$("#button").transit({rotate: "0.25deg"}, 250);
	}, 500);

	setTimeout(function()
	{
		setInterval(function()
		{
			$("#button").transit({rotate: "-0.25deg"}, 250);
		}, 500);

	}, 500);

	setTimeout(function() {
		$("#topBar").transit({top: 0}, 1500);
		$("#bottomBar").transit({bottom: 0}, 1500);
		setTimeout(function () {
			setTimeout(function () {
				$("#titlebox").animate({opacity: 1}, 350, undefined, function () {
					$("#welcome").animate({opacity: 1}, 350, undefined, function () {
						$("#built").animate({opacity: 1}, 350, undefined, function () {
							$("#ultimate").animate({opacity: 1}, 350, undefined, function () {
								setTimeout(function () {
									$("#button").animate({opacity: 1}, 500);
								}, 300);
							});
						});
					});
				});
			}, 200);
		}, 1000);
	}, 500);
});

