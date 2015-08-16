$("#navmap").transit({rotate: "-45deg"}, 1000);

$(document).ready(function()
{
	$("#navmap").transit({rotate: "0deg", right: 0, opacity: 1}, 1000);
	setTimeout(function()
	{
		$("#tripstat").css("opacity", "1");
		$("#tripstat").transit({top: 0}, 1000);
		setTimeout(function()
		{
			$("#line1").transit({opacity: 1}, 250);
			$("#group0").css("opacity", "1");
			$("#group0").transit({top: 0}, 1000);
			setTimeout(function()
			{
				$("#line2").transit({opacity: 1}, 250);
				$("#group1").css("opacity", "1");
				$("#group1").transit({top: 0}, 1000);
				setTimeout(function()
				{
					$("#group2").css("opacity", "1");
					$("#line3").transit({opacity: 1}, 250);
					$("#group2").transit({top: 0}, 1000);
					setTimeout(function()
					{
						$("#line4").transit({opacity: 1}, 250);
						$("#group3").css("opacity", "1");
						$("#group3").transit({top: 0}, 1000);
					}, 1000);
				}, 1000);
			}, 2500);
		}, 1500);
	}, 2000);
});