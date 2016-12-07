<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Word Search Maker";
		?>

		<?php
		require_once("../../lib/head_utils_no_flickity.php");
		?>
		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
		<script type="text/javascript" src="javascript/wordsearch.js"></script>
	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>

		<h1>Word Search</h1>

		<div class="flexcontainer">
			<div id="menu">
				<form>
					<label>Grid Size:</label><input id='sizebox' value='20' type='textbox' maxlength='2' size='2'/>
					<br>
					<label>Word List:</label>
					<textarea id='wordbox' rows='10' cols='50'></textarea>
					<input id='submit' value='Update' type='button'/>
					<br>
					<input id='backward' type='checkbox'/><label>Backwards Words</label>
					<br>
					<input id='diagonal' type='checkbox' checked/><label>Diagonal Words</label>
					<br>
					<input id='cross' type='checkbox'/><label>Crossed Words</label>
					<br>
					<input id='show' type='checkbox' checked/><label>Show Answers</label>
				</form>
			</div>

			<canvas id="mycanvas"></canvas>

			<div id="instructions">
				<h2>Instructions</h2>
				<p>Enter a list of words separated by commas and then click update to generate a new word search.
					<br>
					The grid size can be any number up to 20.
					<br>
					The backwards words checkbox will allow words to be placed into the search in backwards order if selected.
					<br>
					The diagonal words checkbox will allow words to be placed into the search at an upwards or downwards angle.
					<br>
					The crossed words checkbox is under construction.
					<br>
					The show answers checkbox will highlight the words in red when enabled. This box can be toggled without hitting the update button.
				</p>
			</div>
		</div>

	</body>
</html>