
//time settings
const time = new Date()
const hour = time.getHours();
const minutes = time.getMinutes();

const start1 = 1008;
const end1 = 1020;

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


//chrome storage
chrome.storage.sync.get("website", function(data) {
    for (var i = 0; i<data.website.website.length; i++) {
        //current website
        if (window.location.href.indexOf(data.website.website[i].name) > -1 ){
            window.location.replace('http://www.blankwebsite.com/');
        }
    }
})
