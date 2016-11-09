<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "Astronomy Project Gallery";
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
			<div class="container">
				<div class="row">
					<div class="col-xs-12">
						<div class="carousel" id="flick" data-flickity='{ "wrapAround": true }'>

							<div class="carousel-cell cell-text">
								<img src="images/milkyway.jpg" class="img-rounded"/>
								<div class="cell-description">
									<h1>Milky Way Model</h1>
									<p>This is a model of the Milky Way Galaxy. The user can can rotate the model by left clicking and dragging. The model can be zoomed with the scroll wheel, and panned by right clicking and dragging. There are buttons for each of these features on the side menu as well. The checkboxes on the side menu hide and show different groupings of stars. Each grouping is represented by a unique color in the model.</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<img src="images/solarsystem.jpg" class="img-rounded"/>
								<div class="cell-description">
									<h1>Solar System Model</h1>
									<p>This is a model of the Solar System. The user is able to rotate and zoom, as well as center the view on each of the different objects in the model. The different check boxes in the menu enable the user to toggle the name tags and orbit rings for each object.</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<img src="images/retrograde.jpg" class="img-rounded"/>
								<div class="cell-description">
									<h1>Retrograde Motion</h1>
									<p>This program shows retrograde motion from two perspectives to help the user understand what is happening. The outermost ring with the stars is the sky view from whichever planet the user is looking from. It shows the positions of the sun and the planet the user is looking to, as seen from the surface of the first planet.
										Retrograde motion happens when the planet the user is looking at appears to move backwards in the sky view before returning to its normal progression. This can be highlighted by enabling the 'show trace' and 'use direction coloring' check boxes.</p>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<img src="images/spectroscopic.jpg" class="img-rounded"/>
								<div class="cell-description">
									<h1>Spectroscopic Binaries</h1>
									<p>This program demonstrates the behavior of binary stars, and the light they emit. The fiducial view and Earth view show the same pair of binary stars from different angles. Fiducial view can be thought of as looking straight down at the plane of the stars' orbit. Earth view is usually tilted at an angle to this plane. The graph shows the radial velocities of each star in the pair. These correspond the motion on the color bar below the graph. The color bar shows how the doppler effect changes the wavelength of light given off by each star as it moves towards or away from the observer on earth.</p>
									<p>The user is able to create different binary star systems based on input parameters.</p>
									<p>The enter button in the top left must be click for changes to take effect.</p>
									<ul>
										<li>
											M1 and M2 are the masses for each star.
										</li>
										<li>
											'a' is the initial distance between the stars.
										</li>
										<li>
											'e' is the eccentricity of each orbit.
										</li>
										<li>
											'i' is the inclination of the plane of orbit in Earth view.
										</li>
										<li>
											'w' is the rotation of the pair of stars on the plane of orbit.
										</li>
									</ul>
								</div>
							</div>

							<div class="carousel-cell cell-text">
								<img src="images/eclipsing.jpg" class="img-rounded"/>
								<div class="cell-description">
									<h1>Eclipsing Binaries</h1>
									<p>This program demonstrates how the intensity of light given of by binary stars changes as they orbit each other. The user can change the angle of inclination, the distance between the stars, and how large the stars are. These factors will change how the stars eclipse each other, which will be reflected in the intensity graph.</p>
								</div>
							</div>

						</div>
					</div>
				</div>
			</div>
		</main>

	</body>
</html>