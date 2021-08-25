/* Given below an objects representing different teams in Q and #teamMembers in that team 
 Write an efficient code to display names of the teams in descending order wrt to the #teamMembers 
 working in the teams. */

var qTeams = 
{ 
    "aaiec": 400,
    "aaiwc": 60,
    "qai": 200,
    "poc": 100,
    "gtm": 50,
    "hr": 10
};

qTeamsSorted = Object.keys(qTeams).sort(function(a,b){return qTeams[b]-qTeams[a]})

console.log(qTeamsSorted);

qTeamsSorted.forEach(function(roles) {
    console.log(roles);
  });