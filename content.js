var url = window.location;


var danger = ["twitter", "instagram", "github", "youtube", "medium", "stackoverflow"]

for (var i = 0; i <danger.length; i++) {
    if (window.location.href.indexOf(danger[i]) > -1) {
        window.location.replace('http://www.blankwebsite.com/');
    }
}