<?php include("includes/sharepoint/head.php"); ?>
<?php include("includes/template/head.php"); ?>
<title>News and Articles</title>
<?php include("includes/sharepoint/header.php"); ?>

<div class="container / content__wrapper">         
    <header class="news__header">
        <h1>Managing a business environment</h1>    
        <span class="h4-alt text-red block baseline-xs">10 May 2017</span>
    </header>

    <div class="row">
        <div class="col-sm-9">
            <?php include("includes/news/news-single.php"); ?>            
        </div>
        <div class="col-sm-3 text-center">
            <h2>Related Articles</h2>
            <p>
                <a href="#" class="btn btn-orange btn-block">View All Articles</a>
            </p>
        </div>
    </div>
</div>

<?php include("includes/sharepoint/footer.php"); ?>
</body>
</html>
