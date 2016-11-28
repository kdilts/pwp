<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Spectroscopic Binaries";
		?>

		<?php
		require_once("../../lib/head_utils_no_flickity.php");
		?>

		<link type="text/css" href="css/stylesheet.css" rel="stylesheet"/>
	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>
		<iframe src="spectroscopic.html"></iframe>
	</body>
</html>