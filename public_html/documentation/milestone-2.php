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
				<ul>
					<li>This site will be a gallery of my prior work to show to employers.</li>
					<li>
						Header Bar
						<ul>
							<li>1</li>
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
							<li>1</li>
						</ul>
					</li>
					<li>
						Individual App Pages
						<ul>
							<li>
								Each one of these will be a different project that I have created. Most of them consist of a full screen canvas with interactive content. I will try to use PHP require once to include a header bar on top of each of these projects to tie my site together and make it easy to navigate.
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
