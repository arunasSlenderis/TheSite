(function() {
  var dropdownA = document.querySelector("#li-submenu > a");
  var dropdownLi = document.getElementById("li-submenu");
  var dropdownMenu = document.querySelector("ul.submenu");
  var nav = document.querySelector(".fa-bars");
  var menu = document.querySelectorAll(".menu");
  var arrow = document.querySelector(".arrow");

  dropdownA.addEventListener("click", function(e) {
    e.preventDefault();
    dropdownMenu.classList.toggle("displayNone");
    dropdownLi.style.height = "233px";
    arrow.classList.toggle("displayNone");

    if(dropdownMenu.className.match(/\bdisplayNone\b/) || window.innerWidth > 640) {
      dropdownLi.style.height = "auto";
    }
  });

  window.addEventListener("resize", function() {
    menu.forEach(function(menuList) {
      if(window.innerWidth < 640) {
        menuList.className += " displayNone";
      } else {
        menuList.classList.remove("displayNone");
      }
    });
  });

  nav.addEventListener("click", function(e) {
    e.preventDefault();
    if(window.innerWidth < 640) {
      menu.forEach(function(menuList) {
        menuList.classList.toggle("displayNone");
      });
    }
  })



})();
