$(document).ready(function (){
    
    getResults( function(status, data){
        if(status){
            $(`#scores tbody`).empty();

            $.each(data.data, function(r, result){
                $(`#scores tbody`).append( `<tr><td>${r+1}</td><td>${result.matchNo.matchNo}</td><td>${result.winingTeam.teamName}</td>
                    <td>${result.winingTeam.point}</td><td>${result.losingTeam.teamName}</td>
                    <td>${result.losingTeam.point}</td></tr>`)
            })
        }else{
            console.log(data.mesage)
        }
    })
})