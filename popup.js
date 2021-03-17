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
                console.log(error)
                var x = {"website": []}
                chrome.storage.sync.set({"website": x}), function() {
                    console.log("Message: error while savig data");
                }
                document.getElementById("website_input").value = "";
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
    var node = document.createElement("h1");
    var textnode = document.createTextNode("Die Timeline Seite");
    node.appendChild(textnode);
    node.setAttribute("class", "center_header")
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