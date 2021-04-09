const time = new Date()
const hour = time.getHours();
const minutes = time.getMinutes();

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

chrome.storage.sync.get("time", function(data) {

    if (data.time.time.length > 0) {
        data.time.time.forEach(element => {
            console.log(element.f1, element.f2);
            if (element.f1 <=  parseInt(x) && parseInt(x)<= element.f2 ) {
                chrome.storage.sync.get("website", function(data) {
                    data.website.website.forEach(element => {
                        console.log(element.name)
                        if (window.location.href.indexOf(element.name) > -1) {
                            window.location.replace("https://www.blank.org/");
                        }
                    })
                })
            }
        });
    }

})