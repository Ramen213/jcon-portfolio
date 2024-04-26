document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("htmlbtn");
    var row1 = document.getElementById("bgchange");
  
    button.addEventListener("mouseover", function() {
      row1.style.backgroundImage = "url('html5.jpg')"; // Change background image of row 1
    });
  
    button.addEventListener("mouseout", function() {
      row1.style.backgroundImage = "url('default_image.jpg')"; // Reset background image of row 1
    });
  });