// Extract the team name from URL
const teamf  = location.search.substring(1);
const teaml  = teamf.substring(5, teamf.length);
const team   = teaml.charAt(0).toUpperCase() + teaml.slice(1)

// A default schedule for every team
var defaultSchedule = {
    // Each schedule has 4 matches
    match1:
        {
            // Each match has 2 teams, and the date/time
            homeTeam: "Team S",
            awayTeam: "Team A",
            date:     "10-January-2021",
            time:     "10:00 PM"
        },
    match2:
        {
            homeTeam: "Team S",
            awayTeam: "Team B",
            date:     "14-January-2021",
            time:     "8:00 PM"
        },
    match3:
        {
            homeTeam: "Team S",
            awayTeam: "Team C",
            date:     "18-January-2021",
            time:     "7:00 PM"
        },
    match4:
        {
            homeTeam: "Team S",
            awayTeam: "Team D",
            date:     "22-January-2021",
            time:     "10:00 PM"
        }
}

// The default stats for a team
var defaultStats = {
    ppg: [25, 21, 16, 12, 14],
    rpg: [7.1, 11.9, 13.1, 4.2, 5.1],
    apg: [9.8, 3.3, 2.4, 1.9, 6.6],
    spg: [2.1, 1.9, 1.7, 0.5, 1.1],
    bpg: [3.1, 1.5, 0.3, 1.1, 1.8]
}

// The default performance over the year for the team
var defaultPerformance = {
    // Has stats for every year
    2020: 
        {
            ppg: 109.8,
            rpg: 44.6,
            apg: 27.8,
            spg: 15.6,
            bpg: 6.4
        },
    2019:
        {
            ppg: 108.2,
            rpg: 50.1,
            apg: 32.3,
            spg: 13.1,
            bpg: 5.4
        },
    2018:
        {
            ppg: 112.3,
            rpg: 46.8,
            apg: 22.1,
            spg: 16.2,
            bpg: 8.5
        }
}

// The default team roster
defaultRoster = {
    // Each player has his own unique id
    player1:
        {
            id: "001",
            name: "John Doe"
        },
    player2:
        {
            id: "002",
            name: "Harry Oak"
        },
    player3:
        {
            id: "003",
            name: "Stephen Mahomes"
        },
    player4:
        {
            id: "004",
            name: "Eric Green"
        },
    player5:
        {
            id: "005",
            name: "Miles Allen"
        },
        
}

// This class will store all information about a team
class Team {

    // Constructor used to create an object for each team
    constructor(name, schedule, stats, performance, roster) {
        // List of information each team should have
        this.name = name;
        this.schedule = schedule;
        this.stats = stats;
        this.performance = performance;
        this.roster = roster;
    }

    // Function to populate the selected team name into the schedule
    populateSchedule() {
        // Iterate through each match in the schedule and change hometeam name
        for (var match in this.schedule) {
            // match[homeTeam] = this.name;
            this.schedule[match].homeTeam = team;
        }
    }

}

// Initialize our team with default values
var currentTeam = new Team(team, defaultSchedule, defaultStats, defaultPerformance, defaultRoster);
// Populate the schedule with our home team as the selected team
currentTeam.populateSchedule();

// Function to change the description at the top to selected team's value
function description() {
    $("#schedule_team").html(currentTeam.name);
}

// This function adds the team name to the links in the navbar
function nav() {
    // Parses the list items
    var navbar = $(".navbar > ul > li");

    for (i = 0; i < 4; i++) {
        // Chooses the not selected class
        if (navbar[i].className == "selected") {
            continue;
        } else {
            // Appends the team name to the remaining links
            var _href = $("> a", navbar[i]).attr('href');
            $("> a", navbar[i]).attr('href', _href + "?team=" + teaml);
        }
    }
}

// Modifies the HTML content with the selected teams schedule
function schedule() {
    $("#schedule").html("");
    // A for loop to go over every match in the given schedule
    for ( match in currentTeam.schedule ) {
        // Home team, away team and match time are all set to selected teams schedule
        $("#schedule").append(
            `<span class="hometeam">${currentTeam.schedule[match].homeTeam}</span> VS <span class="awayteam">${currentTeam.schedule[match].awayTeam}</span> <br>${currentTeam.schedule[match].time}<br>`
        );
    }
}

// This function sorts the list of stats for players on the selected team in descending order and adds them to the list
function stats() {
    // Gets elements of the list
    const stat  = $("#stat").val();
    // Sort was being buggy so used this variation obtained from: https://stackoverflow.com/questions/7000851/array-sort-doesnt-sort-numbers-correctly
    const stats = defaultStats[stat].sort(function(a,b){return a - b}).reverse();
    var list = $("#roster_stat > ol > h3")
    list.html("");
    // Adds the stats from the sorted list
    for (i = 0; i < 5; i++) {
        list.append(
            `<li>${stats[i]} ${stat.toUpperCase()}</li>`
        )
    }
}

// This function populates the table with the teams performance over the years
function performance() {
    var keys = Object.keys(defaultPerformance[2020]);

    // Loops over the table columns and fills each rows value
    for (i = 1; i < 6; i++) {
        var pval2020 = defaultPerformance[2020][keys[i-1]];
        var pval2019 = defaultPerformance[2019][keys[i-1]];
        var pval2018 = defaultPerformance[2018][keys[i-1]];
        $($("#2020team > td")[i]).html(pval2020);
        $($("#2019team > td")[i]).html(pval2019);
        $($("#2018team > td")[i]).html(pval2018);
    }
}

// This function populates the roster list with the players on the selected team
function roster() {
    // Gets roster list
    var roster = $("#team_roster > ul");
    $($(roster)[0]).html("");

    // Loops through list of players and appends them to the roster list
    for (var x in defaultRoster) {
        var name = defaultRoster[x]["name"];
        var id = defaultRoster[x]["id"];
        $($(roster)[0]).append(
            `<li><a href="player_bio.html?id=${id}">${name}</a></li>`
        );
    }
}