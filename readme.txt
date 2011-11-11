

HELLO :D

Candy gallery is extremely simple to use, include jquery.candygallery.min.js and jquery.candygallery.css in your <head>

<link rel="stylesheet" href="jquery.candygallery.css" type="text/css" />
<script src="jquery.candygallery.min.js" type="text/javascript"></script>

Then call it and attach it to your element of choice. 

<script type="text/javascript">
	$(document).ready(function() {
		$('#myId').candygallery();
	});
</script>

If you want to customise the default options…

<script type="text/javascript">
	$(document).ready(function() {
		$('#myId').candygallery({
			maxwidth:		203, // max image width in pixels
			thumbwidth:		50, // thumbnail width and height
			thumbopacity:	0.7,  // opacity of thumbnail
			title: 'true' // whether to show title or not
			changeon: 'click' // whether to change image on click or hover
		});
	});
</script>


The HTML is as follows:

<div id="myId">
	<img src="images/image1.jpg" alt="Title 1" />
	<img src="images/image1.jpg" alt="Title 2" />
	<img src="images/image1.jpg" alt="Title 3" />
	<img src="images/image1.jpg" alt="Title 4" />
</div>

You can style it however you like, rearrange the thumbnails etc.

Have fun!