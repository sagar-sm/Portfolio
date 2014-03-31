$(document).ready(initScroll);

function initScroll() {
	/* ========== DRAWING THE PATH AND INITIATING THE PLUGIN ============= */
	var left = 400;
	var top = 40;
	var lefts = [400];
	var tops = [50];
	$(".wrapper").children().each(function (index){
		if($(this).hasClass("mordel")){
			left += 1000;
		}
		else if($(this).hasClass("frost")){
			top += 900;
		}
		else if($(this).hasClass("thing")){
			left += 900;
		}
		lefts.push(left);
		tops.push(top);
		$(this).css({"top":top+"px","left":left+"px", "width":"400px"});

	});

	$.fn.scrollPath("getPath")
		// Move to 'start' element
		.moveTo(lefts[0], tops[0], {name: "start"})
		// Line to 'description' element
		.lineTo(lefts[0], tops[0], {name: "c1"})
		.lineTo(lefts[1], tops[1], {name: "c2"})
		.lineTo(lefts[2], tops[2], {name: "c3"})
		.lineTo(lefts[3], tops[3], {name: "c4"})
		.lineTo(lefts[4], tops[4], {name: "c5"})
		.lineTo(lefts[5], tops[5], {name: "c6"})
		.lineTo(lefts[6], tops[6], {name: "c7"})
		.lineTo(lefts[7], tops[7], {name: "c8"})
		.lineTo(lefts[8], tops[8], {name: "c9"})
		.lineTo(lefts[9], tops[9], {name: "c10"})
		.lineTo(lefts[10], tops[10], {name: "c11"})
		.lineTo(lefts[11], tops[11], {name: "c12"})
		.lineTo(lefts[12], tops[12], {name: "c13"})
		.lineTo(lefts[13], tops[13], {name: "c14"})
		.lineTo(lefts[14], tops[14], {name: "c15"})
		.lineTo(lefts[15], tops[15], {name: "c16"})
		.lineTo(lefts[16], tops[16], {name: "c16"})
		.lineTo(lefts[17], tops[17], {name: "c14"})
		.lineTo(lefts[18], tops[18], {name: "c15"})
		.lineTo(lefts[19], tops[19], {name: "c16"})
		.lineTo(lefts[20], tops[20], {name: "c16"})
		.lineTo(lefts[21], tops[21], {name: "c15"})
		.lineTo(lefts[22], tops[22], {name: "c16"})
		.lineTo(lefts[23]+1000, tops[23], {name: "c17"});
		// Arc and rotate back to the beginning.
		//.arc(1300, 50, 900, -Math.PI/2, -Math.PI, true, {rotate: Math.PI*2, name: "end"});

	// We're done with the path, let's initate the plugin on our wrapper element
	$(".wrapper").scrollPath({drawPath: true, wrapAround: false, scrollbar: false});

	// Add scrollTo on click on the navigation anchors
	$("nav").find("a").each(function() {
		var target = $(this).attr("href").replace("#", "");
		$(this).click(function(e) {
			e.preventDefault();
			
			// Include the jQuery easing plugin (http://gsgd.co.uk/sandbox/jquery/easing/)
			// for extra easing functions like the one below
			$.fn.scrollPath("scrollTo", target, 1000, "easeInOutSine");
		});
	});

	/* ===================================================================== */

	$(".settings .show-path").click(function(e) {
		e.preventDefault();
		$(".sp-canvas").toggle();
	}).toggle(function() {
		$(this).text("Hide Path");
	}, function() {
		$(this).text("Show Path");
	});

	$(".tweet").click(function(e) {
		open(this.href, "", "width=550, height=450");
		e.preventDefault();
	});

	$.getJSON("http://cdn.api.twitter.com/1/urls/count.json?callback=?&url=http%3A%2F%2Fjoelb.me%2Fscrollpath",
			function(data) {
				if(data && data.count !== undefined) {
					$(".follow .count").html("the " + ordinal(data.count + 1) + " kind person to");
				}
			});
	}


function highlight(element) {
	if(!element.hasClass("highlight")) {
		element.addClass("highlight");
		setTimeout(function() { element.removeClass("highlight"); }, 2000);
	}
}
function ordinal(num) {
	return num + (
		(num % 10 == 1 && num % 100 != 11) ? 'st' :
		(num % 10 == 2 && num % 100 != 12) ? 'nd' :
		(num % 10 == 3 && num % 100 != 13) ? 'rd' : 'th'
	);
}
