<header class="site-header" id="site-header">

	<div class="infobar__wrapper visible-sm-block visible-md-block visible-lg-block">
		<div class="container clearfix">
			<span class="infobar__message text-uppercase">
				Click here for <a href="#">Part Time qualifications</a>
			</span>

			<ul class="utility__menu / menu-horz-inline">
				<li class="utility__item">
					<a class="utility__link" href="https://www.facebook.com/BusinessSchoolVC" target="_blank">
						<img src="img/fb-icon.gif" alt="Facebook" />
					</a>
				</li>	
				<li class="utility__item">
					<a class="utility__link" href="https://twitter.com/BizSchoolVC" target="_blank">
						<img src="img/twitter-icon.gif" alt="Twitter" />
					</a>
				</li>	
				<li class="utility__item">
					<a class="utility__link" href="http://www.linkedin.com/company/the-business-school" target="_blank">
						<img src="img/linkedin-icon.gif" alt="LinkedIn" />
					</a>
				</li>
				<li class="utility__item">
					<a class="utility__link btn btn-primary" href="">
						<i class="fa fa-pencil" aria-hidden="true"></i>
						Register
					</a>
				</li>
				<li class="utility__item">
					<a class="utility__link btn btn-red" href="" >
						<i class="fa fa-info-circle" aria-hidden="true"></i>	
						Enquire Now
					</a>
				</li>
			</ul>	
		</div>	
	</div>

	<nav class="navbar-wrapper">
		<div class="container relative">
			
			<a class="navbar-brand" href="#">
				<img class="navbar-brand-logo" src="img/tbs_logo.png" alt="The Business School Logo">
			</a>

			<button class="navbar-toggle / js-toggle-menu">
				<span class="sr-only">Toggle navigation</span>
				<i class="fa fa-bars" aria-hid	den="true"></i>
				<i class="fa fa-close" aria-hid	den="true"></i>
			</button>
			
			<div class="navbar navbar-primary" id="site-navigation" data-menu='1'>
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
						<a class="level-1-link / js-has-children" href="#">Find A Campus</a>
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

</header> 

