// Raptors HTML Data
var raptors = '<h3><a class="team" href="team_schedule.html?team=raptors">Toronto Raptors</a></h3><img src="../images/raptors_logo.png" class="mainimg" alt="Raptors logo" width="15%">'

// Warriors HTML Data
var warriors = '<h3><a class="team" href="team_schedule.html?team=warriors">Golden State Warriors</a></h3><img src="../images/warriors_logo.png" class="mainimg" alt="Warriors logo" width="15%">' 

// Lakers HTML Data
var lakers = '<h3><a class="team" href="team_schedule.html?team=lakers">Los Angeles Lakers</a></h3><img src="../images/lakers_logo.png" class="mainimg" alt="Lakers logo" width="15%">'

// Kings HTML Data
var kings = '<h3><a class="team" href="team_schedule.html?team=kings">Sacramento Kings</a></h3><img src="../images/kings_logo.png" class="mainimg" alt="Kings logo" width="15%">'

// Collecting Western Conference Teams
var west = [
    warriors,
    lakers, 
    kings
];

// Collecting Eastern Conference Teams
var east = [
    raptors
];

// Function to view teams from the selected Conference
function viewTeams() {

    // Get selected conference select box value
    var conference = document.getElementById("choose_team");
    var confvalue = conference.value;

    // If selected conference is West, shows West teams
    if (confvalue == "west") {
        document.getElementById("teams").innerHTML = "";
        // Loops over teams in the West and adds them to the HTML page one by one
        for (i = 0; i < west.length; i++) {
            document.getElementById("teams").innerHTML += west[i] + "<br>";
        }
    // If selected conference is East, shows East teams
    } else {
        document.getElementById("teams").innerHTML = "";
        // Loops over teams in the East and adds them to the HTML page one by one
        for (i = 0; i < east.length; i++) {
            document.getElementById("teams").innerHTML += east[i] + "<br>";
        }
    }
}