import $ from 'jquery';

const kinveyBaseUrl = "https://baas.kinvey.com/";
const kinveyAppKey = "kid_BkAHB6bGg";
const kinveyAppSecret = "29dafd5b355d416b83c0862501ff9aa5";

function makeAuth(type) {
    switch (type) {
        case 'basic':
            return { 'Authorization': "Basic " + btoa(kinveyAppKey + ":" + kinveyAppSecret) };
        case 'kinvey':
            return { 'Authorization': "Kinvey " + sessionStorage.getItem('authToken') };
        default: break;
    }
}

function get(module, uri, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    return $.ajax({
        method: "GET",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    });
}

function post(module, uri, data, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "POST",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders
    };

    if (data !== null) {
        request.data = data;
    }
    return $.ajax(request);
}

function update(module, uri, data, auth) {
    const kinveyLoginUrl = kinveyBaseUrl + module + "/" + kinveyAppKey + "/" + uri;
    const kinveyAuthHeaders = makeAuth(auth);

    let request = {
        method: "PUT",
        url: kinveyLoginUrl,
        headers: kinveyAuthHeaders,
        data: data
    };

    return $.ajax(request);
}




export {get, post, update};