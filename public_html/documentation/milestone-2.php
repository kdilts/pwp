<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="UTF-8"/>
		<meta name="viewport" content="width=device-width, initial-scale=1"/>
		<title>kdilts PWP</title>
		<link rel="stylesheet" href="../css/flickity.css" media="screen">
		<link rel="stylesheet" href="../css/stylesheet.css" type="text/css"/>
		<script src="../javascript/flickity.pkgd.min.js"></script>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script src="../javascript/script.js" type="text/javascript"></script>
	</head>
	<body>
		<header>
			<h1 id="titleheader">kdilts PWP Milestone 2 &alpha;</h1>
		</header>
		<main>
			<section>
				<h2 class="subheading">Content Strategy</h2>
				<ul>
					<li>This site will be a gallery of my prior work to show to employers.</li>
					<li>
						Header Bar
						<ul>
							<li>This will tie the site together by providing links to my home page, and all my various projects. I would like it to be animated with effects and drop downs that happen as the mouse hovers over different parts of it.</li>
						</ul>
					</li>
					<li>
						About Me
						<ul>
							<li>The about me will contain my professional photo, my name and contact info, a link to my resume, and an email contact form.</li>
						</ul>
					</li>
					<li>
						Gallery
						<ul>
							<li>This will display thumbnails for each of my project pages. I would like to use flikity to make three carousels that will allow the user to rotate through the thumbnails by swiping left and right.</li>
						</ul>
					</li>
					<li>
						Individual App Pages
						<ul>
							<li>
								Each one of these will be a different project that I have created. Most of them consist of a full screen canvas with interactive content. I will try to use PHP require once to include a header bar on top of each of these projects to make it easy to navigate. The applications I'm showing off break down into three categories:
								<ul>
									<li>Astronomy</li>
									<li>Games / Demos</li>
									<li>Java / Downloadable</li>
								</ul>
								The first two categories fit the full screen canvas description. The Java applications need to be downloaded and run locally. These could just be screenshots with a description, or they may not be featured in the gallery.
							</li>
						</ul>
					</li>
				</ul>
			</section>
			<section>
				<h3 class="subheading">Wire Frames</h3>
				<div>
					<h4 id="hide1" class="subheading">Desktop (click to show)</h4>
					<div id="photo1">
						<img src="images/landing_page_desktop_wireframe.png" alt="This should be a desktop wireframe."/>
					</div>
					<h5 id="hide2" class="subheading">Mobile (click to show)</h5>
					<div id="photo2">
						<img src="images/landing_page_mobile_wireframe.png" alt="This should be a mobile wireframe."/>
					</div>
				</div>
			</section>
			<?php
			require("cats.php");
			require("cats.php");
			require("cats.php");
			?>
		</main>
	</body>
</html>
