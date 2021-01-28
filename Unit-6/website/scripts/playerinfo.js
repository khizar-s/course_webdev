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
    document.getElementById("schedule_team").innerHTML = currentPlayer.bio["name"];
}

// This function adds the player id to the links in the navbar
function nav() {
    // Parses the list items
    var navbar = document.getElementsByClassName("navbar")[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
    for (i = 0; i < 3; i++) {
        // Chooses the not selected class
        if (navbar[i].className == "selected") {
            continue;
        } else {
            // Appends the team name to the remaining links
            var test = navbar[i].getElementsByTagName("a")[0];
            test.href += "?id=" + id;
        }
    }
}

// Function to populate bio with selected players information
function bio() {
    document.getElementsByClassName("player_name")[0].innerHTML = currentPlayer.bio["name"];
    document.getElementsByClassName("player_image").src = currentPlayer.bio["image"];
    document.getElementById("player_height").innerHTML = currentPlayer.bio["height"];
    document.getElementById("player_weight").innerHTML = currentPlayer.bio["weight"];
    document.getElementById("player_team").innerHTML = currentPlayer.bio["team"];
    document.getElementById("player_position").innerHTML = currentPlayer.bio["position"];
}

// Function to populate the stats with the selected players data
function stats() {
    document.getElementsByClassName("player_name")[0].innerHTML = currentPlayer.bio["name"];
    document.getElementsByClassName("player_image").src = currentPlayer.bio["image"];
    document.getElementById("player_ppg").innerHTML = currentPlayer.stats["ppg"];
    document.getElementById("player_rpg").innerHTML = currentPlayer.stats["rpg"];
    document.getElementById("player_apg").innerHTML = currentPlayer.stats["apg"];
    document.getElementById("player_spg").innerHTML = currentPlayer.stats["spg"];
    document.getElementById("player_bpg").innerHTML = currentPlayer.stats["bpg"];
    document.getElementById("player_fg").innerHTML = currentPlayer.stats["fg"];
}

// This function populates the table with the players performance over the years
function performance() {
    // Gets each row separately because of the way we are parsing the performance
    var row2020 = document.getElementById("2020player").getElementsByTagName("td");
    var row2019 = document.getElementById("2019player").getElementsByTagName("td");
    var row2018 = document.getElementById("2018player").getElementsByTagName("td");
    var keys = Object.keys(defaultPerformance[2020]);

    // Loops over the table columns and fills each rows value
    for (i = 1; i < 6; i++) {
        var pval2020 = defaultPerformance[2020][keys[i-1]];
        var pval2019 = defaultPerformance[2019][keys[i-1]];
        var pval2018 = defaultPerformance[2018][keys[i-1]];
        row2020[i].innerHTML = pval2020;
        row2019[i].innerHTML = pval2019;
        row2018[i].innerHTML = pval2018;
    }
}