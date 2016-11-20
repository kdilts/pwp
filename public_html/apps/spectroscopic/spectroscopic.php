<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Game of Life";
		?>

		<?php
		require_once("../../lib/head_utils_no_flickity.php");
		?>
		<script type="text/javascript" src="javascript/tinycolor.js" rel="script"></script>
		<script type="text/javascript" src="javascript/is.js" rel="script"></script>
		<script type="text/javascript" src="javascript/spectroscopic.js" rel="script"></script>
		<link type="text/css" href="css/stylesheet.css" rel="stylesheet"/>
	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>
	</body>
</html>