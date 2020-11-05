$(document).ready(function(){
$("a").on('click', function(event) {
  if (this.hash !== "") {
    event.preventDefault();
    var hash = this.hash;
    $('html, body').animate({
      scrollTop: $(hash).offset().top
    }, 600, function(){
      window.location.hash = hash;
    });
  }
});
});

$().ready(function(){ $("body").css({visibility:'visible'})});

$(document).ready(function() {
    $("#main").removeClass('loading').addClass('loaded');
});

AOS.init({
  duration: 800
});
