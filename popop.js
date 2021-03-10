var checkbox = document.querySelector("input[name=checkbox]");

checkbox.addEventListener('change', function() {
  if (this.checked) {
      alert('checked');    
  } else {
      alert('unchecked');
  }
});