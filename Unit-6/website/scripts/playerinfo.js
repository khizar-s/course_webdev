// Extract ID
const idF  = location.search.substring(1);
const id  = idF.substring(3, idF.length);

// Default bio for 5 players
var defaultBio = {
    "001":
        {
            name: "John Doe",
            height: "6ft 3in",
            weight: "195 lbs",
            team: "Raptors",
            position: "G",
            image: "google.com"
        },
    "002": 
        {
            name: "Harry Oak",
            height: "6ft 8in",
            weight: "255 lbs",
            team: "Lakers",
            position: "F",
            image: "google.com"
        },
    "003": 
        {
            name: "Stephen Mahomes",
            height: "6ft 4in",
            weight: "215 lbs",
            team: "Kings",
            position: "G",
            image: "google.com"
        },
    "004": 
        {
            name: "Eric Green",
            height: "7ft 1in",
            weight: "265 lbs",
            team: "Warriors",
            position: "C",
            image: "google.com"
        },
    "005": 
        {
            name: "Miles Allen",
            height: "6ft 10in",
            weight: "255 lbs",
            team: "Lakers",
            position: "C",
            image: "google.com"
        }
}

// Default stats
var defaultStats = {
    ppg: "24.1",
    rpg: "4.2",
    apg: "2.3",
    spg: "0.9",
    bpg: "0.3",
    fg:  "48.3%"
}

// Default performance over the years for a player
var defaultPerformance = {
    2020: 
        {
            ppg: 24.1,
            rpg: 8.7,
            apg: 6.2,
            spg: 1.6,
            bpg: 1.2
        },
    2019:
        {
            ppg: 22.3,
            rpg: 7.1,
            apg: 3.3,
            spg: 1.5,
            bpg: 1.5
        },
    2018:
        {
            ppg: 14.1,
            rpg: 4.7,
            apg: 5.1,
            spg: 2.1,
            bpg: 1.3
        },
}

// This class stores all the information about a player
class Player {

    constructor(id, bio, stats, performance) {
        this.id = id;
        this.bio = bio;
        this.stats = stats;
        this.performance = performance;
    }
}

var currentPlayer = new Player(id, defaultBio[id], defaultStats, defaultPerformance);

// Function to change the description at the top to selected player's name
function description() {
    $("#schedule_team").html(currentPlayer.bio["name"]);
}

// This function adds the player id to the links in the navbar
function nav() {
    // Parses the list items
    var navbar = $(".navbar > ul > li");

    for (i = 0; i < 3; i++) {
        // Chooses the not selected class
        if (navbar[i].className == "selected") {
            continue;
        } else {
            // Appends the player id to the remaining links
            var _href = $("> a", navbar[i]).attr('href');
            $("> a", navbar[i]).attr('href', _href + "?id=" + id);
        }
    }
}

// Function to populate bio with selected players information
function bio() {
    $(".player_name").html(currentPlayer.bio["name"]);
    $(".player_image").attr("src", currentPlayer.bio["image"]);
    $("#player_height").html(currentPlayer.bio["height"]);
    $("#player_weight").html(currentPlayer.bio["weight"]);
    $("#player_team").html(currentPlayer.bio["team"]);
    $("#player_position").html(currentPlayer.bio["position"]);
}

// Function to populate the stats with the selected players data
function stats() {
    $(".player_name").html(currentPlayer.bio["name"]);
    $(".player_image").attr("src", currentPlayer.bio["image"]);
    $("#player_ppg").html(currentPlayer.stats["ppg"]);
    $("#player_rpg").html(currentPlayer.stats["rpg"]);
    $("#player_apg").html(currentPlayer.stats["apg"]);
    $("#player_spg").html(currentPlayer.stats["spg"]);
    $("#player_bpg").html(currentPlayer.stats["bpg"]);
    $("#player_fg").html(currentPlayer.stats["fg"]);
}

// This function populates the table with the players performance over the years
function performance() {
    // Gets each row separately because of the way we are parsing the performance
    var row2020 = $("#2020player > td")
    var row2019 = $("#2019player > td")
    var row2018 = $("#2018player > td")
    var keys = Object.keys(defaultPerformance[2020]);

    // Loops over the table columns and fills each rows value
    for (i = 1; i < 6; i++) {
        var pval2020 = defaultPerformance[2020][keys[i-1]];
        var pval2019 = defaultPerformance[2019][keys[i-1]];
        var pval2018 = defaultPerformance[2018][keys[i-1]];
        $(row2020[i]).html(pval2020);
        $(row2019[i]).html(pval2019);
        $(row2018[i]).html(pval2018);
    }
}