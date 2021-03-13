window.onload = function() {

  //getButton
  document.getElementById("getButton").onclick = function() {
    chrome.storage.sync.get("website", function(data) {
      console.log(data);
    })
  }

  //add new data
  document.getElementById("addButton").onclick = function() {
    var value = document.getElementById("value_input").value;
    chrome.storage.sync.get("website", function(data) {
      console.log(data.website.website.push({"name":value}));
      var new_data = data;
      var text = {"website": []}
      chrome.storage.sync.set({"website":new_data.website}), function() {
        console.log("Daten wurden gespeichert")
      }
    })
  }



}