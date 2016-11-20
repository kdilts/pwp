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


					<table>
						<tr>
							<th>Body:</th>
							<th>Show Rings:</th>
							<th>Show Name Tags:</th>
						</tr>
						<tr>
							<td>Mercury</td>
							<td><input type='checkbox' id='mercuryRingBox' checked></td>
							<td><input type='checkbox' id='mercuryTagBox' checked></td>
						</tr>
						<tr>
							<td>Venus</td>
							<td><input type='checkbox' id='venusRingBox' checked></td>
							<td><input type='checkbox' id='venusTagBox' checked></td>
						</tr>
						<tr>
							<td>Earth</td>
							<td><input type='checkbox' id='earthRingBox' checked></td>
							<td><input type='checkbox' id='earthTagBox' checked></td>
						</tr>
						<tr>
							<td>Mars</td>
							<td><input type='checkbox' id='marsRingBox' checked></td>
							<td><input type='checkbox' id='marsTagBox' checked></td>
						</tr>
						<tr>
							<td>Jupiter</td>
							<td><input type='checkbox' id='jupiterRingBox' checked></td>
							<td><input type='checkbox' id='jupiterTagBox' checked></td>
						</tr>
						<tr>
							<td>Saturn</td>
							<td><input type='checkbox' id='saturnRingBox' checked></td>
							<td><input type='checkbox' id='saturnTagBox' checked></td>
						</tr>
						<tr>
							<td>Uranus</td>
							<td><input type='checkbox' id='uranusRingBox' checked></td>
							<td><input type='checkbox' id='uranusTagBox' checked></td>
						</tr>
						<tr>
							<td>Neptune</td>
							<td><input type='checkbox' id='neptuneRingBox' checked></td>
							<td><input type='checkbox' id='neptuneTagBox' checked></td>
						</tr>
						<tr>
							<td>Pluto</td>
							<td><input type='checkbox' id='plutoRingBox' checked></td>
							<td><input type='checkbox' id='plutoTagBox' checked></td>
						</tr>
						<tr>
							<td>Halley</td>
							<td><input type='checkbox' id='halleyRingBox' checked></td>
							<td><input type='checkbox' id='halleyTagBox' checked></td>
						</tr>
						<tr>
							<td>Eris</td>
							<td><input type='checkbox' id='erisRingBox' checked></td>
							<td><input type='checkbox' id='erisTagBox' checked></td>
						</tr>
					</table>

					<h1>Rings:</h1>
					<input type='button' id='ringCheckAllButton' value='Check All'>
					<input type='button' id='ringUncheckAllButton' value='Uncheck All'>

					<h1>Name tags:</h1>
					<input type='button' id='tagCheckAllButton' value='Check All'>
					<input type='button' id='tagUncheckAllButton' value='Uncheck All'>

				</form>
			</div>
		</div>
	</body>
</html>