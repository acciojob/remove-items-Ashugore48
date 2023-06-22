//your JS code here. If required.
window.addEventListener('DOMContentLoaded', function() {
  var selectElement = document.getElementById('colorSelect');
  var removeButton = document.querySelector('input[type="button"]');
  removeButton.addEventListener('click', function() {
    var selectedOption = selectElement.options[selectElement.selectedIndex];
    if (selectedOption) {
      selectElement.removeChild(selectedOption);
    }
  });
});