<!-- thanks bootstrap: http://getbootstrap.com/components/#navbar -->
<nav class="navbar navbar-default">
	<div class="container-fluid">
		<!-- Brand and toggle get grouped for better mobile display -->
		<div class="navbar-header">
			<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
				<span class="sr-only">Toggle navigation</span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
				<span class="icon-bar"></span>
			</button>
			<a class="navbar-brand" href="#">Brand</a>
		</div>

		<!-- Collect the nav links, forms, and other content for toggling -->
		<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
			<ul class="nav navbar-nav navbar-right">
				<li><a href="<?php echo $PREFIX; ?>index.php">Home</a></li>
				<li><a href="<?php echo $PREFIX; ?>astronomy.php">Astronomy Apps</a></li>
				<li><a href="<?php echo $PREFIX; ?>demos.php">Games and Demos</a></li>
				<li><a href="<?php echo $PREFIX; ?>java.php">Java Downloads</a></li>
				<li><a href="<?php echo $PREFIX; ?>resume.pdf" target="_blank">Resume</a></li>
			</ul>
		</div><!-- /.navbar-collapse -->
	</div><!-- /.container-fluid -->
</nav>