var url = window.location;
const time = new Date()


const hour = time.getHours();
const minutes = time.getMinutes();
const seconds = time.getSeconds();

const start1 = 193000;
const end1 = 193300;
const start2 = 074000;
const end2 = 125000;

var x = ""

if (hour.toString().length == 2) {
    x = x + hour.toString()
} else {
    x = x + hour.toString()
}
if (minutes.toString().length == 2) {
    x = x + minutes.toString()
} else {
    x = x + minutes.toString()
}
if (seconds.toString().length == 2) {
    x = x + seconds.toString()
} else {
    x = x + seconds.toString()
}

var danger = ["twitter", "instagram", "github", "youtube", "medium", "stackoverflow"]


if ( start1 <=  parseInt(x) && parseInt(x)< end1 ) {
    for (var i = 0; i <danger.length; i++) {
        if (window.location.href.indexOf(danger[i]) > -1) {
            window.location.replace('http://www.blankwebsite.com/');
        }
    }
} else if(start2 <=  parseInt(x) && parseInt(x)< end2) {
    for (var i = 0; i <danger.length; i++) {
        if (window.location.href.indexOf(danger[i]) > -1) {
            window.location.replace('http://www.blankwebsite.com/');
        }
    }
}

