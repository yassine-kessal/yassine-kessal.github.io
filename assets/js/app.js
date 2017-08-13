/**
ATTENTION: Ce site est la propriété de Yassine Kessal! Vous pouvez regarder le code source et vous inspirer mais toute réutilisation ou reproduction est interdite.
**/
function smoothScroll(element){
  $(element).click(function(){
    var goscroll = false;
    var the_hash = $(this).attr("href");
    var regex = new RegExp("\#(.*)","gi");
    var the_element = '';

    if(the_hash.match("\#(.+)")) {
      the_hash = the_hash.replace(regex,"$1");

      if($("#"+the_hash).length>0) {
        the_element = "#" + the_hash;
        goscroll = true;
      }
      else if($("a[name=" + the_hash + "]").length>0) {
        the_element = "a[name=" + the_hash + "]";
        goscroll = true;
      }

      if(goscroll) {
        $('html, body').animate({
          scrollTop:$(the_element).offset().top
        }, 'slow');
        return false;
      }
    }
  });
};

$(function() {
  $("img:not(.without-lazy)").lazyload({
    effect : "fadeIn"
  });

  var menuShowed = false;

  $('.hamburger').click(function(e) {
    e.preventDefault();

    if( ! menuShowed)
    {
      menuShowed = true;
      $("#navigation").hide().removeClass("visible-md").removeClass("visible-lg").fadeIn(500);
      $(this).addClass('active');
    }
    else
    {
      menuShowed = false;
      $("#navigation").addClass("visible-md").addClass("visible-lg");
      $(this).removeClass('active');
    }
  });

  $(document).scroll(function() {
    if($(document).scrollTop() > 400)
    {
      $("#backtotop").fadeIn(300);
    }
    else
    {
      $("#backtotop").fadeOut(300);
    }
  });

  smoothScroll('a[href^="#"]');
});

(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

ga('create', 'UA-85431557-2', 'auto');
ga('send', 'pageview');