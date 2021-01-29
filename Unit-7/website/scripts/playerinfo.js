// Extract ID
const idF  = location.search.substring(1);
const id   = idF.substring(3, idF.length);

// Default bio for 5 players
var defaultBio = {
    name: "John Doe",
    height: "6ft 3in",
    weight: "195 lbs",
    team: "Raptors",
    position: "G",
    image: "google.com"
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

var currentPlayer = new Player(id, defaultBio, defaultStats, defaultPerformance);

// Function to change the description at the top to selected player's name
function description() {
    $.get(`https://www.balldontlie.io/api/v1/players/${id}`).done(function( data ) {
        $("#schedule_team").html(data.first_name + " " + data.last_name);
    });
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
    $.get(`https://www.balldontlie.io/api/v1/players/${id}`).done(function( data ) {
        $(".player_name").html(data.first_name + " " + data.last_name);
        $("#player_height").html(data.height_feet + "ft " + data.height_inches + "in");
        $("#player_weight").html(data.weight_pounds + " lbs");
        $("#player_team").html(data.team.name);
        $("#player_position").html(data.position);
    })
}

// Function to populate the stats with the selected players data
function stats() {
    $.get(`https://www.balldontlie.io/api/v1/season_averages?player_ids[]=${id}`).done(function( data ) {
        $("#player_ppg").html(data.data[0].pts);
        $("#player_rpg").html(data.data[0].reb);
        $("#player_apg").html(data.data[0].ast);
        $("#player_bpg").html(data.data[0].blk);
        $("#player_spg").html(data.data[0].stl);
        $("#player_fg").html(Number(data.data[0].fg_pct)*100);
    })

    $.get(`https://www.balldontlie.io/api/v1/players/${id}`).done(function( data ) {
        $(".player_name").html(data.first_name + " " + data.last_name);
    })
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