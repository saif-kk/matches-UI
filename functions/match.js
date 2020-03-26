$(document).ready( function(){

    var isCompleted = 0;

//for Upcomimg Matches
    getMatches(isCompleted, function(status, data){
        if(status){
            $(`#MatchesUpComing tbody`).empty()

            $.each(data.data, function (m, match){
                var date = moment(match.time).format('DD-MM-YYYY HH:MM')
                $(`#MatchesUpComing tbody`).append(`<tr><td>${m+1}</td><td>${match.matchNo}</td><td>${match.venue.venueName} (${match.venue.venuePlace})</td>
                    <td>${date}</td><td>${match.team1.team.teamName}</td><td>${match.team2.team.teamName}</td><td>${match.matchType}</td>
                </tr>`)
            })
        }else{

        }
    })

//for onGoing Matches
isCompleted = 2;
getMatches(isCompleted, function(status, data){
    if(status){
        $(`#Matches tbody`).empty()

        $.each(data.data, function (m, match){
            var summary = ""
            if(match.summary || match.summary != undefined){
                summary = match.summary
            }else{
                summary = `The ${match.team1.team.teamName} is playing the ${match.team1.playing} with score ${match.team1.score}<br/> and 
                                ${match.team2.team.teamName} is playing the ${match.team2.playing} with score ${match.team2.score}`
            }
            $(`#Matches tbody`).append(`<tr><td>${m+1}</td><td>${match.matchNo}</td><td>${match.venue.venueName} (${match.venue.venuePlace})</td>
                <td>${match.matchType}</td><td>${match.team1.team.teamName}</td><td>${match.team2.team.teamName}</td><td>${summary}</td>
                </tr>`)
        })
    }else{

    }
})
})