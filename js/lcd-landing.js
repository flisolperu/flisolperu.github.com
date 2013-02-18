$(document).ready(function() {
	$('a[rel=tooltip]').tooltip();
});

$(document).ready(function() {
  var d, h, m, s;
  var now = new Date();
  now.setDate(126);
  $('div#clock').countdown(now, function(event) {
	var timeFormat = "%d día(s) %h:%m:%s"
		$this = $(this);
	switch(event.type) {
	  case "days":
		d = event.value;
		break;
	  case "hours":
		h = event.value;
		break;
	  case "minutes":
		m = event.value;
		break;
	  case "seconds":
		s = event.value;
		break;
	  case "finished":
		$this.fadeTo('slow', 0.5);
		break;
	}
	// Assemble time format
	if(d > 0) {
		timeFormat = timeFormat.replace(/\%d/, d);
		timeFormat = timeFormat.replace(/\(s\)/, Number(d) == 1 ? '' : 's');
	} else {
		timeFormat = timeFormat.replace(/\%d day\(s\)/, '');
	}
	timeFormat = timeFormat.replace(/\%h/, h);
	timeFormat = timeFormat.replace(/\%m/, m);
	timeFormat = timeFormat.replace(/\%s/, s);
	// Display
	$this.html(timeFormat);
  });
});