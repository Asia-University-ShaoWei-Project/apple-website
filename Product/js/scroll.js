var value = 95;

$(document).ready(function() {
    $("#btn1").click(function() {
        $("html, body").animate({
            scrollTop: $("#div1").offset().top-value }, {duration: 800,easing: "swing"});
        return false;
    });
    $("#btn2").click(function() {
        $("html, body").animate({
            scrollTop: $("#div2").offset().top-value }, {duration: 800,easing: "swing"});
        return false;
    });
    $("#btn3").click(function() {
        $("html, body").animate({
            scrollTop: $("#div3").offset().top-value }, {duration: 800,easing: "swing"});
        return false;
    });
    $("#btn4").click(function() {
        $("html, body").animate({
            scrollTop: $("#div4").offset().top-value }, {duration: 800,easing: "swing"});
        return false;
    });
   
});

function showMenu() {
    var nav = document.getElementById("nav");
    if (nav.className === "nav") {
      nav.className += " responsive";
    } else {
      nav.className = "nav";
    }
}