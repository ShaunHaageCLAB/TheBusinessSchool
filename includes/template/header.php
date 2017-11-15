<header class="site-header" id="site-header">	

	<nav class="navbar-wrapper" id="site-navigation">
		<div class="navbar navbar-primary" id="primary-navigation" data-menu='1'>
			<div class="container relative">

				<a class="navbar-brand" href="#">
					<img class="navbar-brand-logo" src="img/tbs_logo.png" alt="The Business School Logo">
				</a>

				<ul class="navbar-nav level-1-list">
					<li class="level-1-item">
						<a class="level-1-link / js-has-children" href="#">About Us</a>
						<?php include("includes/dropdown/about-us-megamenu.php"); ?>
					</li>
					<li class="level-1-item">
						<a class="level-1-link / js-has-children" href="#">Programmes</a>					
						<?php include("includes/dropdown/programmes.php"); ?>
						
					</li>
					<li class="level-1-item">
						<a class="level-1-link" href="#">Find A Campus</a>
						<?php include("includes/dropdown/campuses.php"); ?>
					</li>

					<li class="level-1-item"><a  class="level-1-link" href="#">News &amp; Articles</a></li>
					<li class="level-1-item"><a  class="level-1-link" href="#">My VC</a></li>
					<li class="level-1-item"><a  class="level-1-link" href="#">Contacts</a></li>

					<li class="toggle__search-wrapper" hidden>
						<button class="toggle__search js-toggle-search">
							<i class="fa fa-search" aria-hidden="true"></i>
							<i class="fa fa-close" aria-hidden="true"></i>
						</button>

						<div class="search-form__wrapper / form-inline" hidden>
							<label class="sr-only" for="search-website">Search the website</label>
							
							<input type="search" class="search-form__field / form-control" id="search-website" placeholder="Search the Website...">
							
							<button type="submit" class="search-form__button / btn btn-default">
								Search <i class="fa fa-search" aria-hidden="true"></i>
							</button>
						</div>						

					</li>
				</ul>
			</div>
		</div>

	</nav>

	<div class="dottedHor"></div>
</header> 

