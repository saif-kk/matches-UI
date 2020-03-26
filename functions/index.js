$(document).ready(function (){

    var part = 1;

    getTeams(part, function(status, data){
        if(status){
            $(`#teamTable tbody`).empty();

            $.each(data.data, function (t, team){
                $(`#teamTable tbody`).append(`<tr><td>${t+1}</td><td>${team.country.country}</td><td>${team.teamName}</td>
                        <td>${team.played}</td><td>${team.won}</td><td>${team.lost}</td><td>${team.point}</td>
                        <td><button type="button" class="btn btn-info" id="btnPlayer${t}">Players</button> </td></tr>`)


                        $(`#btnPlayer${t}`).off().on('click', function (){
                            var teamId = team._id;
                            $(`#dispPlayer`).css('display', 'block');
                            $(`#teamTable`).css('display', 'none');

                            getPlayerTeam(teamId, function(status, data){
                                if(status){
                                    $(`#playerTeam tbody`).empty();
                                    $(`#teamNameS`).empty().append(team.teamName);
                                    
                                    $.each(data.data, function (p, player){
                                        $(`#playerTeam tbody`).append(`<tr><td>${p+1}</td><td><strong>${player.name}</strong></td><td>${player.playingType}</td>
                                        <td>${player.age}</td><td>${player.playerNo}</td><td>${player.totalRun}</td><td>${player.wicketTaken}</td>
                                        <td>${player.runRate}</td></tr>`)
                                    })
                                }
                            })
                        })
            })

        }
    })

    $(`#teamTableBtn`).off().on('click', function(){
        location.reload();
    })

})