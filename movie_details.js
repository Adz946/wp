class Movie {
    constructor(code, title, rating, image, days_time, synopsis) {
        this.code = code;
        this.title = title;
        this.rating = rating;
        this.image = image;
        this.days_time = days_time;
        this.synopsis = synopsis;
    }
}

// ---------------------------------------------------------------------------------------------------- //

let Avatar = new Movie("ACT", "Avatar: The Way of Watar", "M", "tempImages/Avatar.png", 
                [["Mon-Tue", "9pm"], ["Wed-Fri", "9pm"], ["Sat-Sun", "6pm"]],
                "Jake Sully and Ney'tiri have formed a family and are doing everything to stay together. " +
                "However, they must leave their home and explore the regions of Pandora. When an ancient " +
                "threat resurfaces, Jake must fight a difficult war against the humans.");

let Weird = new Movie("RMC", "Weird: The Al Yankovic Story", "M", "tempImages/Weird.png",
                [["Mon-Tue", " - "], ["Wed-Fri", "12pm"], ["Sat-Sun", "3pm"]],
                "The unexaggerated true story about the greatest musician of our time. From a conventional " + 
                "upbringing where playing the accordion was a sin, 'Weird Al' Yankovic rebels and makes his " +
                "dream of changing the words to world-renowned songs come true.");

let Puss = new Movie("FAM", "Puss in Boots: The Last Wish", "PG", "tempImages/Puss.png",
                [["Mon-Tue", "12pm"], ["Wed-Fri", "6pm"], ["Sat-Sun", "12pm"]],
                "Puss in Boots discovers that his passion for adventure has taken its toll: he has burnt " +
                "through eight of his nine lives. Puss sets out on an epic journey to find the mythical " +
                "Last Wish and restore his nine lives.");

let Margrete = new Movie("AHF", "Margrete: Queen of the North", "MA15", "tempImages/Margrete.png",
                [["Mon-Tue", "6pm"], ["Wed-Fri", " - "], ["Sat-Sun", "9pm"]],
                "The year is 1402, and a woman is at the head of a new Nordic empire. Margarete I has " +
                "united Denmark, Norway and Sweden in a union that she rules single-handedly through " +
                "her adopted son, King Erik. However, a conspiracy is afoot.");

let movies = [Avatar, Weird, Puss, Margrete];

// ---------------------------------------------------------------------------------------------------- //

$(document).ready(function() {
    $("#selection img").click(function() {
        let img = $(this).attr("src");
        let mv = movies.find(m => m.image === img);

        $("#focus_image").attr("src", mv.image);
        $("#focus_title").text(mv.title + " | " + mv.rating);
        $("#focus_synopsis").text(mv.synopsis);
    });
});

// To Explain -->
//   In the "INDEX" page, when an image in the list has been pressed,
//   the image, title, rating, and synopsis all change to match.

// NOTE -->
//   This only works because the selected image and the image_list
//   value are the exact same, e.g. 
//           image_list image = "../../media/Puss.png"
//             selector image = "../../media/Puss.png"