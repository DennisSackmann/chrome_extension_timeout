function loadWebsite() {
    var center = document.getElementById("center");
    center.innerHTML = "";
    var node = document.createElement("h1");
    var textnode = document.createTextNode("Blocked websites");
    node.appendChild(textnode);
    node.setAttribute("class", "center_header")
    center.appendChild(node);
    chrome.storage.sync.get("website", function(data) {
        for (var i = 0; i < data.website.website.length; i++) {
          var node = document.createElement("p");
          var text = document.createTextNode(data.website.website[i].name);
          node.appendChild(text);
          node.setAttribute("class", "center_website_p")
          center.appendChild(node);
        }
    })
    var node = document.createElement("button");
    var textnode = document.createTextNode("add website");
    node.appendChild(textnode);
    node.setAttribute("class", "add_website_button")
    node.setAttribute("id", "addButton");
    //eventListener for new website
    node.addEventListener("click", function() {
        var value = document.getElementById("website_input").value;
        chrome.storage.sync.get("website", function(data) {
            console.log(data);
            try {
                console.log(data.website.website.push({"name": value}));
                var new_data = data;
                chrome.storage.sync.set({"website": new_data.website}), function() {
                    console.log("Message: data saved")
                    console.log(data)
                }
                document.getElementById("website_input").value = "";
                var node = document.createElement("p");
                var text = document.createTextNode(value);
                node.appendChild(text);
                node.setAttribute("class", "center_website_p")
                center.appendChild(node);
                center.scrollTo(0, center.scrollHeight);
            } catch (error) {
                console.log(error);
                var x = {"website": []}
                chrome.storage.sync.set({"website":x})
            }
            
        })
    })
    center.appendChild(node);
    var node = document.createElement("input");
    node.setAttribute("class", "website_input");
    node.setAttribute("id", "website_input");
    center.appendChild(node);
}



function loadTimeline() {
    var center = document.getElementById("center");
    center.innerHTML = "";
    //header
    var node = document.createElement("h1");
    var textnode = document.createTextNode("Timeline Page");
    node.appendChild(textnode);
    node.setAttribute("class", "center_header")
    center.appendChild(node);
    //time 1
    var node = document.createElement("input");
    node.setAttribute('type', 'time');
    node.setAttribute("class", "time_input");
    node.setAttribute("id", "firsttime");
    center.appendChild(node);
    //time 2
    var node = document.createElement("input");
    node.setAttribute('type', 'time');
    node.setAttribute("class", "time_input");
    node.setAttribute("id", "secondtime");
    center.appendChild(node);
    //button
    var node = document.createElement("button");
    var textnode = document.createTextNode("add time");
    node.setAttribute("class", "time_button")
    node.appendChild(textnode);
    node.addEventListener("click", function() {
        t1 = document.getElementById("firsttime").value;
        t2 = document.getElementById("secondtime").value;
        if (t1 && t2 && t1<t2) {
            var first_time = "";
            var second_time = "";
            if (t1.toString().startsWith("0")) {
                time = t1.toString().slice(1).split(":");
                first_time = time[0] + time[1]
                console.log(first_time);
            } else {
                time = t1.toString().split(":");
                first_time = time[0] + time[1]
                console.log(first_time)
            }
            if (t2.toString().startsWith("0")) {
                time = t2.toString().slice(1).split(":");
                second_time = time[0] + time[1]
                console.log(second_time);
            } else {
                time = t2.toString().split(":");
                second_time = time[0] + time[1]
                console.log(second_time);
            }
            chrome.storage.sync.get("time", function(data) {
                console.log(data);
                try {
                    console.log(data.time.time.push({"f1": first_time, "f2": second_time}));
                    var new_data = data;
                    chrome.storage.sync.set({"time": new_data.time}), function() {
                        console.log("Message: data saved")
                    }
                } catch (error) {
                    console.log(error);
                    var x = {"time": []}
                    chrome.storage.sync.set({"time":x})
                }
            })
            t1 = document.getElementById("firsttime").value = null;
            t2 = document.getElementById("secondtime").value = null;
        } else {
            console.log("Message: input not valid");
        };
    })
    center.appendChild(node);
}



window.onload = function() {
    loadWebsite();

    document.getElementById("website").onclick = function() {
        loadWebsite();
    }

    document.getElementById("timeline").onclick = function() {
        loadTimeline();
    }
}