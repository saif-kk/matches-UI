baseUrl = 'http://127.0.0.1:3002'

function GetApi(Url, callback){
    $.ajax({
        type: "GET",
        url: Url,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        success: function (data, status, jqXHR) {
            callback(true, data);
        },
        error: function (jqXHR, status, errorThrown) {
            callback(false, JSON.parse(jqXHR.responseText));
        }
    })
}

function CreateApi(Url, data, callback){
    $.ajax({
        type: "POST",
        url: Url,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        data: data,
        success: function (data, status, jqXHR) {
            callback(true, data);
        },
        error: function (jqXHR, status, errorThrown) {
            callback(false, JSON.parse(jqXHR.responseText));
        }
    })
}

function UpdateApi(Url, data, callback){
    $.ajax({
        type: "PATCH",
        url: Url,
        dataType: "json",
        contentType: "application/json; charset=utf-8",
        crossDomain: true,
        data: data,
        success: function (data, status, jqXHR) {
            callback(true, data);
        },
        error: function (jqXHR, status, errorThrown) {
            callback(false, JSON.parse(jqXHR.responseText));
        }
    })
}

//////////////// Calling Apis

function getTeams(participating, callback){
    var url = baseUrl+'/api/match/getteam?isParticipating='+participating;
    GetApi(url, callback);
}

function getPlayerTeam(teamId, callback){
    var url = baseUrl+'/api/match/getplayer?teamId='+teamId;
    GetApi(url, callback);
}

function getMatches(completed, callback){
    var url = baseUrl+'/api/match/getmatches?isCompleted='+completed;
    GetApi(url, callback);
}

function getResults(callback){
    var url = baseUrl+'/api/match/resultall'
    GetApi(url, callback);
}