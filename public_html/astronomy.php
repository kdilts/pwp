<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		require_once("lib/head_utils.php");
		?>
		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
	</head>
	<body>

		<header>
			<?php
			require_once("lib/navbar.php");
			?>
		</header>
		<main>
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="carousel" data-flickity>
							<div class="carousel-cell">
								<img src="images/milkyway.jpg"/>
							</div>
							<div class="carousel-cell">
								<img src="images/solarsystem.jpg"/>
							</div>
							<div class="carousel-cell">
								<img src="images/retrograde.jpg"/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>

	</body>
</html>