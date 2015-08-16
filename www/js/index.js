$("iframe").load(function()
{
	$('iframe').contents().find("#button").click(function() {
		console.log("Clicked #Button");
		$("iframe").animate({opacity: "0"}, 250, undefined, function()
		{
			setTimeout(function()
			{
				$("iframe").transit({opacity: "1"}, 250);
			}, 250);
		});
	});
});
