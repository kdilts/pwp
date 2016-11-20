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

		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
		<script type='text/javascript' rel="script" src="javascript/retrograde.js"></script>
	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>
	</body>
</html>