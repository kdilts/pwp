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

		<form style='margin-top:3px; float:right;'>

			<b1>Center View On: </b1>
			<select id='planetSelect' style='width:200'>
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
			</select><br></br>

			<b1>Simulation Speed: </b1><input type='range' id='slider' min='0' max ='50' value='1' step='1'>
			<input type = 'textbox' id='simSpeed' style='width:10%' value='1' disabled><br></br>

			&nbsp;&nbsp;&nbsp;
			<b1>Rotate:</b1><br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input type = 'button' id='up' value='^'></br>
			<input type = 'button' id='left' value='<'>
			&nbsp;&nbsp;&nbsp;&nbsp;
			<input type = 'button' id='right' value='>'><br>
			&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
			<input type = 'button' id='down' value='v'><br></br>

			<b1>Zoom: </b1>
			<input type='button' id='zoomIn' value='+'>
			<input type='button' id='zoomOut' value='-'>
			<br></br>

			<b1>Show orbit rings: </b1><br></br>

			<b1>Mercury </b1>
			<input type='checkbox' id='mercuryRingBox' checked><br>

			<b1>Venus </b1><input type='checkbox' id='venusRingBox' checked></br>

			<b1>Earth </b1><input type='checkbox' id='earthRingBox' checked><br>

			<b1>Mars </b1><input type='checkbox' id='marsRingBox' checked></br>

			<b1>Jupiter </b1><input type='checkbox' id='jupiterRingBox' checked><br>

			<b1>Saturn </b1><input type='checkbox' id='saturnRingBox' checked></br>

			<b1>Uranus </b1><input type='checkbox' id='uranusRingBox' checked><br>

			<b1>Neptune </b1><input type='checkbox' id='neptuneRingBox' checked></br
			>
			<b1>Pluto </b1><input type='checkbox' id='plutoRingBox' checked></br>

			<b1>Halley </b1><input type='checkbox' id='halleyRingBox' checked><br>

			<b1>Eris </b1><input type='checkbox' id='erisRingBox' checked></br><br>

			<input type='button' id='ringCheckAllButton' value='Check All'>
			<input type='button' id='ringUncheckAllButton' value='Uncheck All'><br></br>

			<b1>Show name tags: </b1><br></br>

			<b1>Mercury </b1>
			<input type='checkbox' id='mercuryTagBox' checked><br>

			<b1>Venus </b1><input type='checkbox' id='venusTagBox' checked></br>

			<b1>Earth </b1><input type='checkbox' id='earthTagBox' checked><br>

			<b1>Mars </b1><input type='checkbox' id='marsTagBox' checked></br>

			<b1>Jupiter </b1><input type='checkbox' id='jupiterTagBox' checked><br>

			<b1>Saturn </b1><input type='checkbox' id='saturnTagBox' checked></br>

			<b1>Uranus </b1><input type='checkbox' id='uranusTagBox' checked><br>

			<b1>Neptune </b1><input type='checkbox' id='neptuneTagBox' checked></br
			>
			<b1>Pluto </b1><input type='checkbox' id='plutoTagBox' checked></br>

			<b1>Halley </b1><input type='checkbox' id='halleyTagBox' checked><br>

			<b1>Eris </b1><input type='checkbox' id='erisTagBox' checked></br><br>

			<input type='button' id='tagCheckAllButton' value='Check All'>
			<input type='button' id='tagUncheckAllButton' value='Uncheck All'><br></br>

		</form>

	</body>
</html>