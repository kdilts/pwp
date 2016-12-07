<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Java Downloads Gallery";
		?>

		<?php
		require_once("lib/head_utils.php");
		?>
		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
		<script src="javascript/cellDescriptionVisiblity.js" rel="script" type="text/javascript"></script>
	</head>
	<body>

		<header>
			<?php
			require_once("lib/navbar.php");
			?>
		</header>

		<main>
			<div class="container-fluid">
				<div class="row">
					<div class="col-xs-12">
						<h1 class="text-center">Java Downloads</h1>
						<p class="text-center">These are .jar files containing java programs that I have built. They need to be downloaded onto a computer with a Java Run Time Environment in order to work.</p>
					</div>
				</div>

				<div class="row">

					<div class="col-xs-6">
						<a href="apps/jars/juliaset.jar" class="jlink">
							<img src="images/juliaset.jpg" class="img-rounded img-responsive center-block"/>
						</a>
						<h1 class="text-center">Julia Set Fractals</h1>
						<p>This program generates fractal images from a couple of parameters that the user enters. Someday I would like to make a new version that will allow the user to pan and zoom to explore the fractals they generate.</p>
					</div>

					<div class="col-xs-6">
						<a href="apps/jars/game.jar" class="jlink">
							<img src="images/zombie.jpg" class="img-rounded img-responsive center-block"/>
						</a>
						<h1 class="text-center">Zombie Defense</h1>
						<p>This is a demo I made as proof of conecpt for a class project. Zombies come from the edges of the screen and try to eat the player. The play can build breakable walls and gun turrets to help fight them off. The game runs until the player dies.</p>
					</div>

				</div>
			</div>

		</main>

	</body>
</html>