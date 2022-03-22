$(document).ready(function () {
  function Size() {
    if ($(window).width() > 784) {
      console.log(">800");
      $("#header-menu-bar").css("height", "100%");
    } else {
      $("#header-menu-bar").css("height", "0");
    }
  }
  if (document.addEventListener) {
    window.addEventListener("load", Size);
    window.addEventListener("resize", Size);
  } else {
    window.attachEvents("load", Size);
    window.attachEvents("resize", Size);
  }

  var burger = true;
  $("#burger").click(function () {
    if (burger) {
      $("#header-menu-bar").animate({ height: "100%" }, "slow");
    } else {
      $("#header-menu-bar").animate({ height: "0" }, "slow");
    }
    burger = !burger;
  });
  $(".menu-title-Mac").click(function () {
    ItemCtl(".menu-title-Mac", ".menu-item-Mac");
  });
  $(".menu-title-iPad").click(function () {
    ItemCtl(".menu-title-iPad", ".menu-item-iPad");
  });
  $(".menu-title-iPhone").click(function () {
    ItemCtl(".menu-title-iPhone", ".menu-item-iPhone");
  });
  $(".menu-title-Watch").click(function () {
    ItemCtl(".menu-title-Watch", ".menu-item-Watch");
  });
  function ItemCtl(title, item) {
    $(".menu-title").css("color", "white");
    $(".menu-item").css("height", "0");
    $(title).css("color", "silver");
    $(item).css("height", "auto");
  }
});
