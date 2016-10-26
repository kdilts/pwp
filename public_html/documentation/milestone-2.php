<!DOCTYPE html>
<html lang="en">
	<head>
		<meta charset="utf-8"/>
		<title>kdilts PWP</title>
		<link href="../css/stylesheet.css" rel="stylesheet" type="text/css"/>
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
		<script>
			$( document ).ready(function() {
				$("#hide1").click(function() {
					$("#photo1").fadeToggle(function() {
					});
				});
			});

			$( document ).ready(function() {
				$("#hide2").click(function() {
					$("#photo2").fadeToggle(function() {
					});
				});
			});
		</script>
	</head>
	<body>
		<header>
			<h1 id="titleheader">kdilts PWP Milestone 2 &alpha;</h1>
		</header>
		<main>
			<section>
				<h2 class="subheading">Content Strategy</h2>
				<p>
					I plan on creating a gallery of my old projects to show potential employers. This site will be multi-page, with one page devoted to each piece of my prior work. I would also like to have an about me section on the home page that features my contact info, alink to my resume, and my professional photo, as well animated pull down nav bar. It would be nice to have a couple of pages that will show screenshots of each project in a particular category, for example, an astronomy page with a picture, link, and small description of each of my astronomy projects.
				</p>
			</section>
			<section>
				<h3 class="subheading">Wire Frames</h3>
				<div>
					<h4 id="hide1" class="subheading">Desktop (click to show)</h4>
					<div id="photo1">
						<img src="images/landing_page_desktop_wireframe.png"/>
					</div>
					<h5 id="hide2" class="subheading">Mobile (click to show)</h5>
					<div id="photo2">
						<img src="images/landing_page_mobile_wireframe.jpg"/>
					</div>
				</div>
			</section>
		</main>
	</body>
</html>
