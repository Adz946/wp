<!DOCTYPE html>
<html lang='en'>
  <!-- -------------------------------------------------------------------------------- -->
  <head>
    <meta charset="utf-8">
    <title>Lunardo CINEMA</title>
    <link type="text/css" rel="stylesheet" href="../css/mobile.css"> 
    <link type="text/css" rel="stylesheet" href="../css/desktop.css">
    <link type="text/css" rel="stylesheet" href="../css/fontsheet.css">  
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
  </head>
  <!-- -------------------------------------------------------------------------------- -->
  <header> <h1>Lunardo CINEMA</h1> </header>
  <!-- -------------------------------------------------------------------------------- -->
  <body>
    <div id="content">
      <!-- -------------------------------------------------------------------------------- -->
      <nav class="col-2">
        <a href="../a1/index.html">My Page</a>
        <a href="index.php">Lunardo CINEMA</a>
      </nav>
      <!-- -------------------------------------------------------------------------------- -->
      <main class="col-8">
        <!-- -------------------------------------------------------------------------------- -->
        <section>
          <h2>About Us</h2>
          <p>
              After extensive improvement, the Lunardo staff is happy to welcomes you to a 
              once-in-a-lifetime experience! <br>
              
              With <span id="bold">reclinable chairs</span> in addition to our regular seatings and our brand 
              new <span id="bold">3D Dolby Vision</span> projection system, this'll be a fun time for all 
              members of the family! <br><br>
  
              To all newcomers and our ever loyal customers, we welcome you to the new <br>
              <span id="bold">LUNARDO CINEMA</span>
          </p>
        </section>
        <!-- -------------------------------------------------------------------------------- -->
        <section>
          <h2>Now Showing</h2>
          <div id="inFocus">
            <img id="focus_image">

            <div id="info">
              <h3 id="focus_title"></h3>
              <p id="focus_synopsis"></p>
              <iframe id="focus_trailer" frameBorder="0" allowfullscreen></iframe>
              <a id="flip_switch">Watch Trailer</a>
              <a href="booking.php">Book Now</a>
            </div>
          </div>

          <div id="selection">
            <img src="../../media/Avatar.png">
            <img src="../../media/Weird.png">
            <img src="../../media/Puss.png">
            <img src="../../media/Margrete.png">
          </div>
        </section>
        <!-- -------------------------------------------------------------------------------- -->
      </main>
      <!-- -------------------------------------------------------------------------------- -->
      <aside class="col-2">
        <h2>Our Seatings</h2>

        <img src="../../media/Profern-Standard-Twin.png">
        <div> <h3>Standard Adult</h3> <p>SeatCode - STA <br> Standard - $21.50 <br> Discount - $16.00</p> </div>
        <div> <h3>Standard Concession</h3> <p>SeatCode - STP <br> Standard - $19.00 <br> Discount - $14.50</p> </div>
        <div> <h3>Standard Child</h3> <p>SeatCode - STC <br> Standard - $17.50 <br> Discount - $13.00</p> </div>

        <img src="../../media/Profern-Verona-Twin.png">
        <div> <h3>First-Class Adult</h3> <p>SeatCode - FCA <br> Standard - $31.00 <br> Discount - $25.00</p> </div>
        <div> <h3>First-Class Concession</h3> <p>SeatCode - FCP <br> Standard - $28.00 <br> Discount - $23.50</p> </div>
        <div> <h3>First-Class Child</h3> <p>SeatCode - FCC <br> Standard - $25.00 <br> Discount - $22.00</p> </div>
      </aside>
      <!-- -------------------------------------------------------------------------------- -->
    </div>
    <!-- -------------------------------------------------------------------------------- -->
    <footer>
      <p> 
        &copy; Adam Saleh | s3940024
        <a target="_blank" href="https://github.com/Adz946/wp">My Repo</a>
      </p>
    </footer>
    <!-- -------------------------------------------------------------------------------- -->
    <script type="text/javascript" src="../jquery-3.6.3.js"></script>
    <script type="text/javascript" src="../movie_details.js"></script>
    <!-- -------------------------------------------------------------------------------- -->
  </body>
</html>