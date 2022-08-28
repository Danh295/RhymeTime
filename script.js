$(document).ready(function(){
    $(".button").click(function() {
      $(".dropdown a").removeClass("clicked");
      $(".dropdown a").children("span").removeClass("clicked");
      $(".arrow").toggleClass("open");
      $(".dropdown").toggleClass("open");
    });
    
    $(".dropdown a").click(function() {
      $(".dropdown a").removeClass("clicked");
      $(".dropdown a").children("span").removeClass("clicked");
      $(this).toggleClass("clicked");  $(this).children("span").toggleClass("clicked");
    });
  });

function acceptInput() {
    let displayBox = document.getElementById("lnkInpt");
    displayBox.value = "";
}

