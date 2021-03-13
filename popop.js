window.onload = function() {

  //getButton
  document.getElementById("getButton").onclick = function() {
    chrome.storage.sync.get("website", function(data) {
      console.log(data.website.website);
    })
  }

  //add new data
  document.getElementById("addButton").onclick = function() {
    var value = document.getElementById("value_input").value;
    console.log(value);
    if (value.length != 0) {
    chrome.storage.sync.get("website", function(data) {
      data.website.website.push(value);
      var new_data = data;
      var text = {"website": []}
      chrome.storage.sync.set({"website":new_data.website}), function() {
        console.log("Daten wurden gespeichert")
      }
    })
  }
}
}