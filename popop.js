var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
      alert('checked');    
  } else {
      alert('unchecked');
  }
});



window.onload = function() {
  document.getElementById("button").onclick = function() {
    var value = document.getElementById("value_input").value;
    // alert(value);
    var x = Date.now();
    chrome.storage.sync.set({x:value}, function() {
      alert("Sucess")
    });
  }

  document.getElementById("getButton").onclick = function() {
    chrome.storage.sync.get("x", function(data) {
      console.log(data.x)
    });
  }


}