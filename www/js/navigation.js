var tic = true;
$("#arrows").transit({rotateY: "40deg"}, 0);
$("#next").transit({rotateY: "-40deg"}, 0);
$("#street").transit({rotateY: "40deg"}, 0);
$("#city").transit({rotateY: "-40deg"}, 0);
$("#button").transit({rotateY: "40deg"}, 0);
$("#card1").transit({rotateY: "90deg"}, 0);
$("#card2").transit({rotateY: "90deg"}, 0);
$("#card3").transit({rotateY: "90deg"}, 0);

$("#button").click(function()
{
	console.log("Redirecting to winner.html");
	$("#button").transit({right: "-200px"}, 1000);
	setTimeout(function()
	{
		location.href = "main.html";
	}, 250);
});

$(document).ready(function()
{
	setTimeout(function()
	{
		$("#next").transit({opacity: 1, rotateY: 0}, 1000);
		setTimeout(function()
		{
			$("#street").transit({opacity: 1, rotateY: 0}, 1000);
			setTimeout(function()
			{
				$("#city").transit({opacity: 1, rotateY: 0}, 1000);
				setTimeout(function()
				{
					$("#button").transit({opacity: "1", rotateY: 0}, 500);
					setTimeout(function()
					{
						$("#card1").transit({rotateY: "0"}, 1000);
						setTimeout(function()
						{
							$("#card2").transit({rotateY: "0"}, 1000);
							setTimeout(function()
							{
								$("#card3").transit({rotateY: "0"}, 1000);
							}, 1000);
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);
		}, 1000);
	}, 1000);


	setTimeout(function()
	{
		$("#arrows").transit({opacity: 1, rotateY: 0}, 1000);
		setInterval(function()
		{
			if (tic) {
				var text = $("#arrows").text();
				var ret = text.substring(2, text.length);
				$("#arrows").transit({opacity: 0.8}, 200);
				setTimeout(function()
				{
					$("#arrows").text(ret);
					$("#arrows").transit({opacity: 1}, 200);
				}, 200);
				tic = false;
			}
			else //toc
			{
				var text = $("#arrows").text();
				var ret = text + " >";
				$("#arrows").transit({opacity: 0.8}, 200);
				setTimeout(function()
				{
					$("#arrows").text(ret);
					$("#arrows").transit({opacity: 1}, 200);
				}, 200);
				tic = true;
			}
		}, 1000);
	}, 8500);
});