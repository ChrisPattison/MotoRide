$("#2d").transit({rotateY: "90deg"}, 0);
$("#3d").transit({rotateY: "90deg"}, 0);
$("#4s").transit({rotateY: "90deg"}, 0);
$("#5h").transit({rotateY: "90deg"}, 0);
$("#6s").transit({rotateY: "90deg"}, 0);

$(document).ready(function()
{
	setTimeout(function()
	{
		$("#won").transit({opacity: 1, top: 0}, 250);
		setTimeout(function()
		{
			$("#giftcard").transit({left: 0}, 1000);
			setTimeout(function()
			{
				$("#2d").transit({rotateY: "0"}, 1000);
				setTimeout(function()
				{
					$("#3d").transit({rotateY: "0"}, 1000);
					setTimeout(function()
					{
						$("#4s").transit({rotateY: "0"}, 1000);
						setTimeout(function()
						{
							$("#5h").transit({rotateY: "0"}, 1000);
							setTimeout(function()
							{
								$("#6s").transit({rotateY: "0"}, 1000);
								setTimeout(function()
								{
									$("#score").transit({opacity: "1"}, 500);
									setTimeout(function()
									{
										$("#friends").transit({opacity: "1"}, 500);
									}, 1000);
								}, 1250);
							}, 500);
						}, 500);
					}, 500);
				}, 500);
			}, 1500);
		}, 750);
	}, 500);
});
