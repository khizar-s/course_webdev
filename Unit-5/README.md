## Features
- Idea 1: Adaptive page content that only shows teams in the selected conference. It should take the selected conference option from the dropdown box (when changed) and display only the teams in that selected conference. This will help personas choose a team from the many teams in the NBA.
- Idea 2: Data populator for selected team/player for each page. This should parse the URL for the team or player name and display the correct information (depending on what page they are on) from the default value set or through an API call (to be done). This can be implemented with a Team or Player class that gets accessed by each page and connected through a primary key player ID. This allows the personas to view proper and accurate information about players/teams so they can analyze their choices accordingly.
- Idea 3: A graph constructor that takes a dataset of the selected team/player and constructs a line graph from the values, comparing each stat to its previous year values. This is super useful to the personas as it provides them with a visual depiction of statistics and lets them analyze a trend easily.

## Brief
Implemented Idea 1 and Idea 2 that lets users choose a team or player and populates information in the pages according to selections. The updated website can be viewed here: http://student.athabascau.ca/~khizarsi/

## Rationale
I chose ideas 1 and 2 as they seemed to fit most with the needs of my personas while also being relatively simple to code. For example, my users can now choose from multiple teams instead of having to view information of only one team. Allowing them to choose from a variety makes it much more easier for users to compare different players/teams when making decisions for fantasy basketball trades or learning more about different players of the same team.

## Learning outcome
Learned how to properly utilize Javascript features and implement them into a dynamically changing HTML website. The use of classes were super helpful in maintaining neat access to objects and ensuring functions are easy to create.

## What went well and what didn’t
I was able to implement both of my ideas almost exactly as I wanted and the innerHTML feature was extremely helpful in ensuring that I was able to do so. While I would have also liked to complete the graph idea, I was not able to find proper code to help with me that, perhaps some API exists for that and I could attempt that in Unit 7.

## What I would do differently
I would try to have forms in each page using and POST and GET to pass information instead of the URL parsing method that I used which was unnecessarily complicated.