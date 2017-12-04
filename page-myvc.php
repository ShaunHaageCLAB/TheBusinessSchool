<?php include("includes/sharepoint/head.php"); ?>
<?php include("includes/template/head.php"); ?>
<title>Template</title>
<?php include("includes/sharepoint/header.php"); ?>

<div class="container / content__wrapper">
	<div class="row">
		<header class="page__header col-md-8 col-md-push-4">
    		<h1>My VC</h1>
		</header>            
	</div>

    <div class="row">
        <?php include("includes/template/sidebar-myvc.php"); ?>

        <div class="col-sm-12 col-md-8 col-lg-8">
            <?php include("includes/myvc/myvc.php"); ?>         
        </div>
    </div>
</div>

<?php include("includes/template/testimonials.php"); ?>
<?php include("includes/sharepoint/footer.php"); ?>
</body>
</html>
