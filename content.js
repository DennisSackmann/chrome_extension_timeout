
//time settings
const time = new Date()
const hour = time.getHours();
const minutes = time.getMinutes();
//current time after converting
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

var status = false;
chrome.storage.sync.get("time", function(data) {

    //check if any timeline is true
    if (data.time.time.length > 0) {
        for (var i = 0; i < data.time.time.length; i++) {
            if (data.time.time[i].f1 <=  parseInt(x) && parseInt(x)<= data.time.time[i].f2 ) {

                chrome.storage.sync.get("website", function(data) {
                    for (var i = 0; i<data.website.website.length; i++) {
                        //current website
                        if (window.location.href.indexOf(data.website.website[i].name) > -1 ){
                            window.location.replace('http://www.blankwebsite.com/');
                        }
                    }
                })

            }
            }
    }
})