/*
Ready states

0 - request not initialized
1 - request has been set up
2 - request has been sent
3 - request is in process
4 - request is complete
*/

/* // vanilla JS
var http = new this.XMLHttpRequest();

http.onreadystatechange = function () {
    if (http.readyState == 4 && http.status == 200) {
        console.log(JSON.parse(http.response));
    }
};

// true = async, false = sync
http.open("GET", "data/tweets.json", false);
http.send();
*/

/* // jquery method
function cb(data) {
    console.log(data);
}

$.get("data/tweets.json", cb);
console.log("test");
*/

/* // AJAX method
function handleError(jqXHR, textStatus, error) {
    console.log(error);
}

function cbTweets(data) {
    console.log(data);

    $.ajax({
        type: "GET",
        url: "data/friends.json",
        success: cbFriends,
        error: handleError
    })
}

function cbFriends(data) {
    console.log(data);

    $.ajax({
        type: "GET",
        url: "data/videos.json",
        success: function (data) {
            console.log(data);

        },
        error: handleError
    })
}

$.ajax({
    type: "GET",
    url: "data/tweets.json",
    success: cbTweets,
    error: handleError
})
*/

window.onload = function () {



};