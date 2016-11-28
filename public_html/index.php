<!DOCTYPE html>
<html lang="en">
	<head>
		<?php
		/*grab current directory*/
		$CURRENT_DIR = __DIR__;
		/*set page title here*/
		$PAGE_TITLE = "PWP Milestone 2b";
		?>

		<?php require_once("lib/head_utils.php"); ?>

		<!-- jQuery Form, Additional Methods, Validate -->
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery.form/3.51/jquery.form.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/jquery.validate.min.js"></script>
		<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery-validate/1.15.0/additional-methods.min.js"></script>

		<!-- Your JavaScript Form Validator -->
		<script src="javascript/form-validate.js"></script>

		<!-- Google reCAPTCHA -->
		<script src='https://www.google.com/recaptcha/api.js'></script>

		<link rel="stylesheet" href="css/stylesheet.css" type="text/css"/>
	</head>
	<body>

		<header>
			<?php
			require_once("lib/navbar.php");
			?>

			<div class="container">
				<div class="row">
					<div class="col-sm-3">
						<img src="images/me.jpg" class="img-responsive img-circle"/>
					</div>
					<div class="col-sm-6">
						<ul>
							<li>Kevin Dilts</li>
							<li>UNM blah blah</li>
							<li>Email: kevin@kevindilts.net</li>
							<li>Phone: 505-206-6400</li>
							<li><a href="resume.pdf" target="_blank">Resume</a></li>
						</ul>
					</div>
					<div class="col-sm-3">
						<?php require_once("lib/email_form.php"); ?>
					</div>
				</div>
			</div>
		</header>

	</body>
</html>