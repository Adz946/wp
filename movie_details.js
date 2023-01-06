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
// ---------------------------------------------------------------------------------------------------- //
function load_data() {
    let movie = JSON.parse(localStorage.getItem("movie"))
    $("#focus_image").attr("src", "../../media/" + movie.image);
    $("#focus_title").text(movie.title + " | " + movie.rating);
    $("#focus_synopsis").text(movie.synopsis);
    $("#focus_trailer").attr("src", "https://www.youtube.com/embed/" + movie.trailer);
};
// ---------------------------------------------------------------------- //
function set_data(movie) {
    localStorage.clear();
    localStorage.setItem("movie", JSON.stringify(movie));
}
// ---------------------------------------------------------------------- //
$(window).on('load', function() {
    let path = location.pathname.split("/").pop();
    if (path == "booking.php") { load_data(); }
    else { set_data(Avatar); load_data(); }
})
// ---------------------------------------------------------------------- //
$(document).ready(function() {
    // ---------------------------------------------------------------------- //
    $("#selection img").click(function() {
        var img = $(this).attr("src");
        var mv = movies.find(m => "../../media/" + m.image === img);
        set_data(mv);
        load_data();
    });
    // ---------------------------------------------------------------------- //
    let change = 0;
    // ---------------------------------------------------------------------- //
    $("#flip_switch").click(function() {
        if (change == 0) {
            $("#focus_synopsis").hide();
            $("#focus_trailer").show(); 
            $(this).text("Read Synopsis");
            change = 1;
        }

        else if (change == 1) {
            $("#focus_synopsis").show();
            $("#focus_trailer").hide();
            $(this).text("Watch Trailer"); 
            change = 0;
        }
    });
    // ---------------------------------------------------------------------- //
});