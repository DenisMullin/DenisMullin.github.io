<?php
 require "includes/config.php";
?>
<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <title><?php echo $config['title']; ?></title>
    <link rel="stylesheet" type="text/css" href="css/main.css">
</head>
<body>
    <header>
        <h1>ФИНАНСЫ</h1>
        <p>$ 99999999999999</p>
    </header>

    <img class="part" id="first" src="images/first.png">
    <img class="part" id="second" src="images/second.png">
    <img class="part" id="third" src="images/third.png">
    <img class="part" id="fourth" src="images/fourth.png">
    <img class="part" id="fifth" src="images/fifth.png">
    <img class="part" id="sixth" src="images/sixth.png">

    <script type="text/javascript" src="scripts/script.js"></script>

    <div class="pizza" onclick="test()"></div>

    <button class="boosters">Усилители</button>
    <button class="top">Топ-100</button>    


</body>
</html>