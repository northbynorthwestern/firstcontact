$(document).ready(function(){
  $(this).scrollTop(0);
});
$("#morty-email").hide();
  document.getElementById("email-notif").onclick = function(){
    document.querySelector(".click-prompt").classList.add("fighidden");
$("#morty-email").slideDown("slow");
setTimeout(function(){ document.querySelector(".oof-line").classList.add("targetPoint"); var bodyReveal = new Waypoint({
  element: document.querySelector(".targetPoint"),
  handler: function(direction) {
    console.log("Waypoint")
    document.querySelector(".article-top-info").classList.add("title-appear");
    document.querySelector(".article-body").classList.add("article-active");
    document.querySelector(".nav-bar").classList.add("nav-active")
  },
})

setTimeout(function(){
  var textReveal = new Waypoint({
    element: document.querySelector(".text-reveal-target"),
    handler: function(direction) {
      console.log("Waypoint 2");
      document.getElementById("text-1").classList.add("text-fly");
      setTimeout(function(){document.getElementById("text-2").classList.add("text-fly");}, 600);
      setTimeout(function(){document.getElementById("text-3").classList.add("text-fly");}, 1200);
      setTimeout(function(){document.getElementById("text-4").classList.add("text-fly");}, 1800);
      setTimeout(function(){document.querySelector(".message-attribution").classList.add("attribution-appear");}, 2400)
    },
    offset: 300,
  })
}, 501)
}, 500)}
