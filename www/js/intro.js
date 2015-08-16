$("#button").click(function()
	{
		console.log("Changing to main.html");
		setTimeout(function()
		{
			location.href = "main.html";
		}, 250);
	});



$(document).ready(function()
{
	setInterval(function()
	{
		$("#button").transit({rotate: "0.5deg"}, 250);
	}, 500);

	setTimeout(function()
	{
		setInterval(function()
		{
			$("#button").transit({rotate: "-0.5deg"}, 250);
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

