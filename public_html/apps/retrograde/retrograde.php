<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Retrograde Motion";
		?>

		<?php
		require_once("../../lib/head_utils_no_flickity.php");
		?>

		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>
		<iframe src="retrograde.html"></iframe>
	</body>
</html>