<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Solar System Model";
		?>

		<?php
		require_once("../../lib/head_utils_no_flickity.php");
		?>

		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
		<script src="javascript/three.min.js" type="text/javascript" rel="script"></script>
		<script src="javascript/Quaternion.js" type="text/javascript" rel="script"></script>
		<script src="javascript/OrbitControls.js" type="text/javascript" rel="script"></script>
		<script src="javascript/is.js" type="text/javascript" rel="script"></script>
		<script src="javascript/solarsystem.js" type="text/javascript" rel="script"></script>
	</head>
	<body>
		<?php
		require_once("../../lib/navbar.php");
		?>

		<div class="flexbox">
			<div id="renderPanel"></div>
			<div id="menuPanel">
				<form>

					<h1>Center View On: </h1>
					<select id='planetSelect'>
						<option value = "0">Sun</option>
						<option value = "1">Mercury</option>
						<option value = "2">Venus</option>
						<option value = "3">Earth</option>
						<option value = "4">Mars</option>
						<option value = "5">Jupiter</option>
						<option value = "6">Saturn</option>
						<option value = "7">Uranus</option>
						<option value = "8">Neptune</option>
						<option value = "9">Pluto</option>
						<option value = "10">Halley's Comet</option>
						<option value = "11">Eris</option>
					</select>

					<h1>Simulation Speed: </h1>
					<input type='range' id='slider' min='0' max ='50' value='1' step='1'>
					<input type = 'text' id='simSpeed' value='1' disabled>


					<h1>Rotate:</h1>

					<input type = 'button' id='up' value='^'>
					<input type = 'button' id='left' value='<'>

					<input type = 'button' id='right' value='>'>

					<input type = 'button' id='down' value='v'>

					<h1>Zoom: </h1>
					<input type='button' id='zoomIn' value='+'>
					<input type='button' id='zoomOut' value='-'>
					

					<h1>Show orbit rings: </h1>

					<h1>Mercury </h1>
					<input type='checkbox' id='mercuryRingBox' checked>

					<h1>Venus </h1><input type='checkbox' id='venusRingBox' checked>

					<h1>Earth </h1><input type='checkbox' id='earthRingBox' checked>

					<h1>Mars </h1><input type='checkbox' id='marsRingBox' checked>

					<h1>Jupiter </h1><input type='checkbox' id='jupiterRingBox' checked>

					<h1>Saturn </h1><input type='checkbox' id='saturnRingBox' checked>

					<h1>Uranus </h1><input type='checkbox' id='uranusRingBox' checked>

					<h1>Neptune </h1><input type='checkbox' id='neptuneRingBox' checked>

					<h1>Pluto </h1><input type='checkbox' id='plutoRingBox' checked>

					<h1>Halley </h1><input type='checkbox' id='halleyRingBox' checked>

					<h1>Eris </h1><input type='checkbox' id='erisRingBox' checked>

					<input type='button' id='ringCheckAllButton' value='Check All'>
					<input type='button' id='ringUncheckAllButton' value='Uncheck All'>

					<h1>Show name tags: </h1>

					<h1>Mercury </h1>
					<input type='checkbox' id='mercuryTagBox' checked>

					<h1>Venus </h1><input type='checkbox' id='venusTagBox' checked>

					<h1>Earth </h1><input type='checkbox' id='earthTagBox' checked>

					<h1>Mars </h1><input type='checkbox' id='marsTagBox' checked>

					<h1>Jupiter </h1><input type='checkbox' id='jupiterTagBox' checked>

					<h1>Saturn </h1><input type='checkbox' id='saturnTagBox' checked>

					<h1>Uranus </h1><input type='checkbox' id='uranusTagBox' checked>

					<h1>Neptune </h1><input type='checkbox' id='neptuneTagBox' checked>
					<h1>Pluto </h1><input type='checkbox' id='plutoTagBox' checked>

					<h1>Halley </h1><input type='checkbox' id='halleyTagBox' checked>

					<h1>Eris </h1><input type='checkbox' id='erisTagBox' checked>

					<input type='button' id='tagCheckAllButton' value='Check All'>
					<input type='button' id='tagUncheckAllButton' value='Uncheck All'>

				</form>
			</div>
		</div>
	</body>
</html>