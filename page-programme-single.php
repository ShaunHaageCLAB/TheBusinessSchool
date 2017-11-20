<?php include("includes/sharepoint/head.php"); ?>
<?php include("includes/template/head.php"); ?>
<title>Programme Page</title>
<?php include("includes/sharepoint/header.php"); ?>

<div class="container / content__wrapper">

    <h1>IIE Accounting Software</h1>

    <?php include("includes/programmes/buttons-register.php"); ?>

    <div class="row">
        <?php include("includes/template/sidebar-programmes.php"); ?>

        <div class="col-sm-12 col-md-8 col-lg-8">
            <div class="panel__wrapper">
                <?php include("includes/programmes/tabs-menu.php"); ?>
                <?php include("includes/programmes/tabs-content.php"); ?>
            </div>          
            <?php include("includes/programmes/buttons-enquire.php"); ?>
        </div>
        
    </div>
</div>


<?php include("includes/template/testimonials.php"); ?>
<?php include("includes/sharepoint/footer.php"); ?>
</body>
</html>
