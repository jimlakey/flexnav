# FlexNav jQuery Plugin

## A Device Agnostic Approach to Complex Site Navigation

### The Details
Based on Jason Weaver's [FlexNav](https://github.com/indyplanets/flexnav). Changed to suit my preferences - on large screens the items in the nav are floated left rather than like buttons, acting more like a regular ol' fashioned drop-down. Added support for non-javascript devices on large and small screens.

### Usage

Add flexnav.css to the head of your document

		<link href="css/flexnav.css" rel="stylesheet" type="text/css" / >

Add jQuery and jquery.flexnav.js to the head of your document

		<script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js"></script>
		<script type="text/javascript" src="js/jquery.flexnav.js"></script>

Initialize FlexNav right before your closing body tag

		<script>
			$("flexNav-nav]").flexNav();
		</script>

