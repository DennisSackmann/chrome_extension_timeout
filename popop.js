window.onload = function() {

  //getButton
  document.getElementById("getButton").onclick = function() {

    chrome.storage.sync.get("website", function(data) {
      if (data.website.website.length == 0) {
        console.log("Es gibt keine Daten");
      } else {
        console.log(data.website.website.length);
        console.log(data);
      }
    });
  }

  //add new data
  document.getElementById("replaceButton").onclick = function() {
    var value = document.getElementById("value_input").value;
    chrome.storage.sync.get("website", function(data) {
      console.log(data.website.website.push({"name":value}));
      var new_data = data;
      chrome.storage.sync.set({"website":new_data.website}), function() {
        console.log("Daten wurden gespeichert")
      }
    })
  }
}