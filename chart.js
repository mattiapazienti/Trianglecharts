function ColorLuminance(hex, lum) {
	// validate hex
	hex = String(hex).replace(/[^0-9a-f]/gi, '');
	if (hex.length < 6) {
		hex = hex[0]+hex[0]+hex[1]+hex[1]+hex[2]+hex[2];
	}
	lum = lum || 0;
	
	// convert to decimal rgb
	var rgb = "#", c, i;
	for (i = 0; i < 3; i++) {
		c = parseInt(hex.substr(i*2,2), 16);
		c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
		rgb += ("00"+c).substr(c.length);
	}
	return rgb;
}

var color = "#017160", lum = 0.10; //change start color here

var chart = function() {
$("#container").each(function() {
        tot = $("#container > div").length; //count charts
        for(var i = 1; i <= tot; i++) {
          name = $("#chart_" + i).attr("title"); //get the value num
          value = $("#chart_" + i).attr("class"); //get the description
          var nc = ColorLuminance(color, name*lum); //increase lum as value raises
          $("#chart_" + i + " .l1").css({
              "z-index": Math.round(10/name),
              "border-bottom": name + "em solid" + nc
            });
            $("#container").append("<span style='border-color:" + nc + "'>" + value + "</span>");
        };
});
};

var columns = function() {
       for(var i = 0; i <= 10; i++) {
           $("#container .columns").append("<li></li>"); //create lines as background
       };
};

$(document).ready(columns); 
$(document).ready(chart); //this can be launched onclick on index too
