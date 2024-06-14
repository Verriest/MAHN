

<?php
function afficherPageActive($name) {
  $currentPage = basename($_SERVER['PHP_SELF']);
  if($currentPage == $name) {
    return 'class="active"';
  }
  return "";
}






?>

<div class="loader">
        <ul class="hexagon-container">
            <li class="hexagon hex_1"></li>
            <li class="hexagon hex_2"></li>
            <li class="hexagon hex_3"></li>
            <li class="hexagon hex_4"></li>
            <li class="hexagon hex_5"></li>
            <li class="hexagon hex_6"></li>
            <li class="hexagon hex_7"></li>
        </ul>
    </div>
    <main role="main" class="main-content" id="main-content">
        <canvas id="noise" class="noise"></canvas>
        <div class="vignette"></div>

        <header>
            <a href="../index.html" class="logo"><img src="../images/logo.png"
                    style="height: 120%; border: 1px solid white" /></a>
            <div class="menu-toggle"></div>
            <nav>
                <ul>
                    <li><a href="./about_me.php"  <?php echo afficherPageActive('about_me.php'); ?> >A Propos de moi</a></li>
                    <li><a href="./portfolio.php" <?php echo afficherPageActive('portfolio.php'); ?>>Portfolio</a></li>
                    <li><a href="./competence.php" <?php echo afficherPageActive('competence.php'); ?> >Compétences</a></li>
                    <li><a href="./contact.php"    <?php echo afficherPageActive('contact.php'); ?>>Contact</a></li>
                </ul>
            </nav>
            <div class="clearfix"></div>
        </header>