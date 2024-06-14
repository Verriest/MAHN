<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PortFolio MAHN</title>

    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet" />

    <link rel="stylesheet" type="text/css" href="../css/style.css" />
    <link rel="stylesheet" href="../css/portfolio.css" />
    <script src="../js/portfolio.js"></script>
</head>

<body>
                            <!--   INCLUSION HEADER   -->
                            <?php include('header.php')?>

            <div class="portfolio-content">
                <h3 class="portfolio-title">#Portfolio</h3>
                <p class="portfolio-text">Explorez mes projets variés et créatifs qui mettent en avant mes compétence en développement. Découvrez comment je fusionne technologie et design pour créer des expériences uniques et engageantes.</p>
            </div>
            

        <!-- Portfolio Carousel 3D -->
        <div id="carousel">
            <figure id="spinner">
                <img src="../images/portfolio/portfolio-1.jpg" alt />
                <img src="../images/portfolio/portfolio-2.jpg" alt />
                <img src="../images/portfolio/portfolio-3.jpg" alt />
                <img src="../images/portfolio/portfolio-4.jpg" alt />
                <img src="../images/portfolio/portfolio-6.jpg" alt />
                <img src="../images/portfolio/portfolio-8.jpg" alt />
                <img src="../images/portfolio/portfolio-14.jpg" alt />
                <img src="../images/portfolio/portfolio-13.jpg" alt />
                <img src="../images/portfolio/portfolio-12.jpg" alt />
            </figure>
        </div>
        <span class="ss-icon icon-left" onclick="galleryspin('-')">&lt;</span>
        <span class="ss-icon icon-right" onclick="galleryspin('')">&gt;</span>


        <!-- Mise en place du portfolio-->
        <div class="portfolio">
            <p class="portfolio-description"></p>

            <div class="portfolio-grid">
                <div class="project">
                    <img src="../images/portfolio/portfolio-1.jpg" alt="Project 1" />
                </div>
                <div class="project">
                    <img src="../images/portfolio/portfolio-2.jpg" alt="Project 2" />
                </div>
                <div class="project">
                    <img src="../images/portfolio/portfolio-3.jpg" alt="Project 3" />
                </div>
                <div class="project">
                    <img src="../images/portfolio/portfolio-4.jpg" alt="Project 1" />
                </div>
                <div class="project">
                    <img src="../images/portfolio/portfolio-6.jpg" alt="Project 2" />
                </div>
                <div class="project">
                    <img src="../images/portfolio/portfolio-8.jpg" alt="Project 2" />
                </div>
                <div class="project">
                    <img src="../images/portfolio/portfolio-14.jpg" alt="Project 2" />
                </div>
                <div class="project">
                    <img src="../images/portfolio/portfolio-13.jpg" alt="Project 2" />
                </div>
                <div class="project">
                    <img src="../images/portfolio/portfolio-12.jpg" alt="Project 2" />
                </div>
            </div>
        </div>
    </main>
</body>
<script src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="../js/global.js"></script>
<script src="../js/loader.js"></script>

</html>