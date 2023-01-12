<!DOCTYPE html>
<html lang="en">
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
                <section>
                <div id="inFocus">
                <div id="back"> <div id="row_"></div> <div id="details"></div> </div>

                <div id="front">
                    <img id="focus_image">
                    <div id="info">
                        <h3 id="focus_title"></h3>
                        <p id="focus_synopsis"></p>
                        <iframe id="focus_trailer" frameBorder="0" allowfullscreen></iframe>
                        <a id="flip_switch">Watch Trailer</a>
                        <a href="booking.html">Book Now</a>
                    </div>
                </div>

                <a id="card_flip">Meet the Cast</a>
                </div>
                </section>
                <!-- -------------------------------------------------------------------------------- -->
                <section>        
                    <div id="form">
                        <h2>When do you want to Watch?</h2>          
                        <div id="times">
                            <a class="days-Mon"> <h3>MON</h3> <p id="times-Mon"></p> </a>
                            <a class="days-Tue"> <h3>TUE</h3> <p id="times-Tue"></p> </a>
                            <a class="days-Wed"> <h3>WED</h3> <p id="times-Wed"></p> </a>
                            <a class="days-Thu"> <h3>THU</h3> <p id="times-Thu"></p> </a>
                            <a class="days-Fri"> <h3>FRI</h3> <p id="times-Fri"></p> </a>
                            <a class="days-Sat"> <h3>SAT</h3> <p id="times-Sat"></p> </a>
                            <a class="days-Sun"> <h3>SUN</h3> <p id="times-Sun"></p> </a>
                        </div>
                        <div id="seats">
                            <h2>Select Your Seats</h2>
                            <div class="row-4" id="first-class">
                                <button>D4</button> <button>D3</button>
                                <h3>D</h3>
                                <button>D2</button> <button>D1</button>
                            </div>
                            <div class="row-3" id="first-class">
                                <button>C6</button> <button>C5</button> <button>C4</button>
                                <h3>C</h3>
                                <button>C3</button> <button>C2</button> <button>C1</button>
                            </div>
                            <div class="row-2" id="standard">
                                <button>B8</button> <button>B7</button> <button>B6</button> <button>B5</button> 
                                <h3>B</h3>
                                <button>B4</button> <button>B3</button> <button>B2</button> <button>B1</button>
                            </div>
                            <div class="row-1" id="standard">
                                <button>A8</button> <button>A7</button> <button>A6</button> <button>A5</button> 
                                <h3>A</h3>
                                <button>A4</button> <button>A3</button> <button>A2</button> <button>A1</button>
                            </div>
                            <a id="set_seats">Set Seats</a>
                            <div id="purchase">
                                <div id="inFocus"></div>
                            </div>
                        </div>
                    </div>
                </section>
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
    <!-- -------------------------------------------------------------------------------- -->
</html>
