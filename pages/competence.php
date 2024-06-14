<?php
$title = "Compétences";
include 'data.php';
?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title><?php echo $title; ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet" />
    <link rel="stylesheet" type="text/css" href="../css/style.css" />
    <link rel="stylesheet" type="text/css" href="../css/competence.css" />
</head>

<body>
    

<!-- INCLUSION HEADER  -->
<?php include('header.php')?>

        <div class="competence">
            <h2 class="competence-title">#Compétence</h2>

            <section class="competence_tableau">
                <article class="competence_tableau_contenu">
                    <?php foreach ($competences as $title => $items) : ?>
                    <div class=<?= "competence_tableau_" . $title ?>>
                        <table>
                            <thead>
                                <tr>
                                    <th><?php echo $title; ?></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <?php foreach ($items as $item) : ?>

                                    <td class="contentTD"><?php echo $item; ?></td>
                                    <?php endforeach; ?>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                    <?php endforeach; ?>
                </article>
            </section>

        </div>
        <div class="timeline_title_div">
            <h3 class="timeline-title">Mes Experiences</h3>
        </div>
        <div class="divider div-transparent div-dot"></div>

        <section class="timeline">
            <div class="outer">
                <?php foreach ($experiences as $experience) : ?>
                <div class="card">
                    <div class="info">
                        <h3 class="title"><?php echo $experience["date"]; ?></h3>
                        <h3><?php echo $experience["title"]; ?></h3>
                        <p><?php echo nl2br($experience["description"]); ?></p>
                    </div>
                </div>
                <?php endforeach; ?>
            </div>
        </section>

    </main>

</body>

<script src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
<script src="../js/global.js"></script>
<script src="../js/loader.js"></script>

</html>