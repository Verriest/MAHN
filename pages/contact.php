<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>PortFolio MAHN</title>

<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Rubik+Glitch&display=swap" rel="stylesheet">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.1/font/bootstrap-icons.css" integrity="sha384-4LISF5TTJX/fLmGSxO53rV4miRxdg84mZsxmO8Rx5jGtp/LbrixFETvWa5a6sESd" crossorigin="anonymous">


    <link rel="stylesheet" type="text/css" href="../css/style.css" />
    <link rel="stylesheet" type="text/css" href="../css/contact.css" />

  </head>
  <body>

                            <!--   INCLUSION HEADER   -->
                            <?php include('header.php')?>


      <div id="contact_us">
            

            <div class="contact-container">
              <div class="left-col">
                
                <div class="elements-social">
                  <div class="element-social"><a href="#"><i class="bi bi-github"></i></a></div>
                  <div class="element-social"><a href="#"><i class="bi bi-linkedin"></i></a></div>
                  <div class="element-social"><a href="#"><i class="bi bi-envelope-at"></i></a></div>
              </div>

              </div>
              <div class="right-col">
                <div class="theme-switch-wrapper">
                <label class="theme-switch" for="checkbox">
                    <input type="checkbox" id="checkbox"  />
                    <div class="slider round"></div>
              </label>
              <div class="description">White Mode</div>
            </div>
                
                <h1>Contact</h1>
                <p></p>
                
                <form id="contact-form" method="post" action="https://formspree.io/f/mqkrrbkl">
                  <label for="name">Nom Complet</label>
              <input type="text" id="name" name="name" placeholder="Votre Nom Complet" required>
                  <label for="email">Addresse Email</label>
              <input type="email" id="email" name="email" placeholder="Votre Addresse Email" required>
                  <label for="message">Message</label>
              <textarea rows="6" placeholder="Votre Message" id="message" name="message" required></textarea>
                  <!--<a href="javascript:void(0)">--><button type="submit" id="submit" name="submit">Envoyer</button><!--</a>-->
              
            </form>
            <div id="error"></div>
            <div id="success-msg"></div>
              </div>
            </div>

            
      </div>

      
    </main>
  </body>
  <script
    src="https://code.jquery.com/jquery-3.5.1.min.js"
    integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0="
    crossorigin="anonymous"
  ></script>
  <script src="../js/global.js"></script>
  <script src="../js/loader.js"></script>
  <script src="../js/contact.js"></script>
</html>
