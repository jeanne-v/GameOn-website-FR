const navbarIcon = document.querySelector(".main-navbar .icon");

navbarIcon.addEventListener("click", () => {
  editNav();
});

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
