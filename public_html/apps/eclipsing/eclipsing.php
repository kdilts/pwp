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
		<script src="javascript/is.js" type="text/javascript" rel="script"></script>
		<script src="javascript/eclipsing.js" type="text/javascript" rel="script"></script>
		<link href="css/stylesheet.css" type="text/css" rel="stylesheet"/>
	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>
		<input type='button' id='submitButton' value='Enter Values'>
		<input type='button' id='clearButton' value='Clear Graph'>
		<input type='button' id='pauseButton' value='Pause'>
		<input type = 'button' id = 'aDownButton' value = '<--'>
		<input type = 'range' id = 'angleSlider' min='0' max = '90' style='width:150px'>
		<input type = 'button' id = 'aUpButton' value = '-->'>
		<input type = 'button' id = 'sDownButton' value = '<--'>
		<input type = 'range' id = 'separationSlider' min='2' max = '25' style='width:150px'>
		<input type = 'button' id = 'sUpButton' value = '-->'>
		<select id='pulldown1'>
			<option value = "B">B</option>
			<option value = "A">A</option>
			<option value = "F">F</option>
			<option value = "G">G</option>
			<option value = "K">K</option>
			<option value = "M">M</option>
		</select>
		<select id='pulldown2'>
			<option value = "B">B</option>
			<option value = "A">A</option>
			<option value = "F">F</option>
			<option value = "G">G</option>
			<option value = "K">K</option>
			<option value = "M">M</option>
		</select>
	</body>
</html>