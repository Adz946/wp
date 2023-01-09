class Movie {
    constructor(code, title, rating, image, trailer, days_time, synopsis) {
        this.code = code;
        this.title = title;
        this.rating = rating;
        this.image = image;
        this.trailer = trailer;
        this.days_time = days_time;
        this.synopsis = synopsis;
    }
}
// ---------------------------------------------------------------------------------------------------- //
let Avatar = new Movie("ACT", "Avatar: The Way of Watar", "M", "Avatar.png", "d9MyW72ELq0",
                [["Mon-Tue", "9pm"], ["Wed-Fri", "9pm"], ["Sat-Sun", "6pm"]],
                "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. " +
                "However, they must leave their home and explore the regions of Pandora. When an ancient " +
                "threat resurfaces, Jake must fight a difficult war against the humans.");
                // ---------------------------------------------------------------------- //
let Weird = new Movie("RMC", "Weird: The Al Yankovic Story", "M", "Weird.png", "RyYZOtAxYKY",
                [["Mon-Tue", " - "], ["Wed-Fri", "12pm"], ["Sat-Sun", "3pm"]],
                "The unexaggerated true story about the greatest musician of our time. From a conventional " + 
                "upbringing where playing the accordion was a sin, 'Weird Al' Yankovic rebels and makes his " +
                "dream of changing the words to world-renowned songs come true.");
                // ---------------------------------------------------------------------- //
let Puss = new Movie("FAM", "Puss in Boots: The Last Wish", "PG", "Puss.png", "RqrXhwS33yc",
                [["Mon-Tue", "12pm"], ["Wed-Fri", "6pm"], ["Sat-Sun", "12pm"]],
                "Puss in Boots discovers that his passion for adventure has taken its toll: he has burnt " +
                "through eight of his nine lives. Puss sets out on an epic journey to find the mythical " +
                "Last Wish and restore his nine lives.");
                // ---------------------------------------------------------------------- //
let Margrete = new Movie("AHF", "Margrete: Queen of the North", "MA15", "Margrete.png", 
                "-7OCX98JgGk", [["Mon-Tue", "6pm"], ["Wed-Fri", " - "], ["Sat-Sun", "9pm"]],
                "The year is 1402, and a woman is at the head of a new Nordic empire. Margarete I has " +
                "united Denmark, Norway and Sweden in a union that she rules single-handedly through " +
                "her adopted son, King Erik. However, a conspiracy is afoot.");
                // ---------------------------------------------------------------------- //
let movies = [Avatar, Weird, Puss, Margrete];
let seat_selection = [];
// ---------------------------------------------------------------------------------------------------- //
function set_movie(movie) {
    localStorage.removeItem("movie");
    localStorage.setItem("movie", JSON.stringify(movie));
}
// ---------------------------------------------------------------------- //
function load_movie() {
    let movie = JSON.parse(localStorage.getItem("movie"));
    $("#focus_image").attr("src", "../../media/" + movie.image);
    $("#focus_title").text(movie.title + " | " + movie.rating);
    $("#focus_synopsis").text(movie.synopsis);
    $("#focus_trailer").attr("src", "https://www.youtube.com/embed/" + movie.trailer);
};
// ---------------------------------------------------------------------- //
function load_times() {
    let movie = JSON.parse(localStorage.getItem("movie"));
    $("#times-Mon").text(movie.day_time[0][1]);
    $("#times-Tue").text(movie.day_time[0][1]);
    $("#times-Wed").text(movie.day_time[1][1]);
    $("#times-Thu").text(movie.day_time[1][1]);
    $("#times-Fri").text(movie.day_time[1][1]);
    $("#times-Sat").text(movie.day_time[2][1]);
    $("#times-Sun").text(movie.day_time[2][1]);
};
// ---------------------------------------------------------------------- //
function set_day_time(day_time) {
    $("#seats").show();
    localStorage.removeItem("day_time");
    localStorage.setItem("day_time", day_time);
};
// ---------------------------------------------------------------------- //
// Standard Seats - rgb(173, 216, 230) | light blue
// First Class Seats - rgb(240, 128, 128) | light coral [red]
function set_seats() {
    localStorage.removeItem("seating");
    localStorage.setItem("seating", seat_selection);
    seat_selection.length = 0;

    $("button").each(function() {
        let row = $(this).text()[0];
        if (row == "A" || row == "B") 
            { $(this).css("background-color", "rgb(173, 216, 230)"); }
        else if (row == "C" || row == "D")
            { $(this).css("background-color", "rgb(240, 128, 128)"); }
    });
}
// ---------------------------------------------------------------------------------------------------- //
$(window).on('load', function() {
    let path = location.pathname.split("/").pop();
    if (path == "booking.html") { load_movie(); load_times(); }
    else { set_movie(Avatar); load_movie(); }
})
// ---------------------------------------------------------------------------------------------------- //
$(document).ready(function() {
    // ---------------------------------------------------------------------- //
    $("#selection img").click(function() {
        var img = $(this).attr("src");
        var mv = movies.find(m => "../../media/" + m.image === img);
        set_movie(mv);
        load_movie();
        $('html, body').animate( {scrollTop: $("#inFocus").offset().top}, 250 );
    });
    // ---------------------------------------------------------------------- //
    $("#flip_switch").click(function() {
        if ( $("#focus_synopsis").is(":visible") ) {
            $("#focus_synopsis").hide();
            $("#focus_trailer").show(); 
            $(this).text("Read Synopsis");
        }
        else if ( $("#focus_synopsis").is(":hidden") ) {
            $("#focus_synopsis").show();
            $("#focus_trailer").hide();
            $(this).text("Watch Trailer"); 
        }
    });
    // ---------------------------------------------------------------------- //
    $("[class*='days-']").click(function() {
        if ($(this).find("p").text() != " - ") {
            $("#times a").attr("id", "noID");
            $(this).attr("id", "day_time");
            set_day_time($(this).find("h3").text() + "_" + $(this).find("p").text());
        }
        else { alert(JSON.parse(localStorage.getItem("movie")).title + " is not playing on that day.")};
    });
    // ---------------------------------------------------------------------- //
    $("[class*='row-'] button").click(function() {
        seat_selection.push($(this).text());
        $(this).css("background-color", "rgb(169, 169, 169)");
    });
    $("#set_seats").click(function() { set_seats(); });
});