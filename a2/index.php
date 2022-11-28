<!DOCTYPE html>
<html lang='en'>
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Lunardo Home Page</title>

    <!-- Keep wireframe.css for debugging, add your css to style.css -->
    <link id='wireframecss' type="text/css" rel="stylesheet" href="../wireframe.css" disabled>
    <link id='stylecss' type="text/css" rel="stylesheet" href="style.css" <?= filemtime("style.css"); ?> >
    <script src='../wireframe.js'></script>
  </head>

  <body>

  <header>
    <!-- Image sourced from www.rmit.edu.au for educational purposes only -->
    <div><img src='../../media/RMIT_Logo.png' alt='RMIT University logo' height=80>Adam Saleh</div>
  </header>

  <nav>
    Assignments:
    <!-- link locations: relative to current directory -->
    <ul>
      <li><a href="../index.html" target="_blank">A1</a></li>
      <li><a href="a3/index.php" target="_blank">A3</a></li> <!-- File not currently existing -->
    </ul> |
    <!-- link locations: relative to e54061's public_html directory -->
    <a href="/~e54061/wp" target="_blank">Course Homepage</a> | <!-- Cannot Access -->
    <a href="/~e54061/wp/lectures" target="_blank">Lectures 0 - 11</a> | <!-- Cannot Access -->
    <a href="/~e54061/secure" target="_blank">Secure Resources Area</a> <!-- Cannot Access -->
  </nav>

    <main>
      <article id='Website Under Construction'>
    <!-- Creative Commons image sourced from https://pixabay.com/en/maintenance-under-construction-2422173/ and used for educational purposes only -->
        <img src='../../media/website-under-construction.png' alt='Website Under Construction'>
      </article>
    </main>

    <footer>
      <div>&copy;<script>
        document.write(new Date().getFullYear());
      </script> Put your name(s), student number(s) and group name here. Last modified <?= date ("Y F d  H:i", filemtime($_SERVER['SCRIPT_FILENAME'])); ?>.</div>
      <div>Disclaimer: This website is not a real website and is being developed as part of a School of Science Web Programming course at RMIT University in Melbourne, Australia.</div>
      <div><button id='toggleWireframeCSS' onclick='toggleWireframe()'>Toggle Wireframe CSS</button></div>
    </footer>

  </body>
</html>
