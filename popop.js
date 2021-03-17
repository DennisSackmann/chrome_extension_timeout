

window.onload = function() {


  // zum laden der Daten beim öffnen
  var center = document.getElementById("center");
  center.innerHTML = "";
  var node = document.createElement("h1");
  var textnode = document.createTextNode("Blocked websites");
  node.appendChild(textnode);
  node.setAttribute("class", "center_header");
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
  node.addEventListener("click", () => {
    var value = document.getElementById("website_input").value;
    chrome.storage.sync.get("website", function(data) {
      console.log(data.website.website.push({"name":value}));
      var new_data = data;
      chrome.storage.sync.set({"website":new_data.website}), function() {
        console.log("Message: data changed")
      }
      var center = document.getElementById("center");
      center.innerHTML = "";
      chrome.storage.sync.get("website", function(data) {
        var node = document.createElement("h1");
        var textnode = document.createTextNode("Blocked websites");
        node.appendChild(textnode);
        node.setAttribute("class", "center_header")
        center.appendChild(node);
        for (var i = 0; i < data.website.website.length; i++) {
          var node = document.createElement("p");
          var text = document.createTextNode(data.website.website[i].name);
          node.appendChild(text);
          node.setAttribute("class", "center_website_p")
          center.appendChild(node);
        }
      })
    })
    }
  );
  center.appendChild(node);
  var node = document.createElement("input");
  node.setAttribute("class", "website_input");
  node.setAttribute("id", "website_input");
  center.appendChild(node);






  //wenn website-button gedrückt wird
  document.getElementById("website").onclick = function() {
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
    node.addEventListener("click", () => {
      var value = document.getElementById("website_input").value;
      console.log(value);
      }
    );
    center.appendChild(node);
    var node = document.createElement("input");
    node.setAttribute("class", "website_input");
    node.setAttribute("id", "website_input");
    center.appendChild(node);
  }
  


  //wenn timeline-button gedrückt wird
  document.getElementById("timeline").onclick = function() {
    var center = document.getElementById("center");
    center.innerHTML = "";
    var node = document.createElement("h1");
    var textnode = document.createTextNode("Timelines");
    node.appendChild(textnode);
    node.setAttribute("class", "center_header")
    center.appendChild(node);
  }



  // document.getElementById("addButton").onclick = function() {
  //   var value = document.getElementById("website_input").value;
  //   console.log(value);
  // }
}