var frame;

$(document).ready(function()
{
	$("body").animate({"opacity": "1"}, 1000);
});

$("iframe").load(function()
{
	frame = $("iframe").contents();
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
