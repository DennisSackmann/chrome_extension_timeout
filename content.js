var url = window.location;
const time = new Date()


const hour = time.getHours();
const minutes = time.getMinutes();

const start1 = 1920;
const end1 = 2000;
const start2 = 740;
const end2 = 1250;

var x = ""

if (hour.toString().length == 2) {
    x = x + hour.toString()
} else {
    x = x + hour.toString()
}
if (minutes.toString().length == 2) {
    x = x + minutes.toString()
} else {
    x = x + '0' + minutes.toString()
}

var danger = ["twitter", "instagram", "github", "youtube", "medium", "stackoverflow"]


if ( start1 <=  parseInt(x) && parseInt(x)< end1 ) {
    for (var i = 0; i <danger.length; i++) {
        if (window.location.href.indexOf(danger[i]) > -1) {
            window.location.replace('http://www.blankwebsite.com/');
            //continue;
        }
    }
} else if(start2 <=  parseInt(x) && parseInt(x)< end2) {
    for (var i = 0; i <danger.length; i++) {
        if (window.location.href.indexOf(danger[i]) > -1) {
            window.location.replace('http://www.blankwebsite.com/');
            
        }
    }
}

