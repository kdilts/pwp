<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Eclipsing Binaries";
		?>

		<?php
		require_once("../../lib/head_utils_no_flickity.php");
		?>

		<link href="css/stylesheet.css" type="text/css" rel="stylesheet"/>
	</head>
	<body>
		<?php require_once("../../lib/navbar.php"); ?>

		<iframe src="eclipsing.html"></iframe>
	</body>
</html>