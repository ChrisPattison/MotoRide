$("#button").click(function()
	{
		console.log("Changing to main.html");
		setTimeout(function()
		{
			location.href = "main.html";
		}, 250);
	});
