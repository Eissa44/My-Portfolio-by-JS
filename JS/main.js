//START OF REGION LODING PAGE
// $(() => {
//   $(".spinner").fadeOut(1500, () => {
//     $(".loading").slideUp(800, () => {
//       $("body").css("overflow", "auto", () => {
//         $(".loading").remove();
//       });
//     });
//   });
// });
//END OF REGION LODING PAGE

// START OF RIGION NAVBAR
$("#nav-btns").click(() => {
  $("#nav-bar").toggleClass("active");
  $("#open").toggleClass("d-none");
  $("#close").toggleClass("d-none");
});

/* const nav = document.getElementById("nav-bar");
const close = document.getElementById("close");
const open = document.getElementById("open");

open.addEventListener("click", () => {
  nav.classList.remove("active");
  open.classList.add("d-none");
  close.classList.remove("d-none");
});

close.addEventListener("click", () => {
  nav.classList.add("active");
  close.classList.add("d-none");
  open.classList.remove("d-none");
}); */
// END OF RIGION NAVBAR

// ابقي اشوف المشكلة فين هنااا/* START OF REGION GENERAL STYLE */
// Start of scroll smoth
$("#nav-bar ul li a,.go-down,.go-up").click(function (e) {
  const currentLink = $(this).attr("href");
  const currenOffset = $(currentLink).offset().top;
  $("html,body").animate({ scrollTop: currenOffset }, 2000);
});
// End of scroll smoth

//START OF REGION COLOR SWITCHER
$(".setting").on("click", () => {
  $("#side-contents").animate({ width: "toggle" }, 500);
});

let itemColor = $(".item-color");

itemColor.eq(0).css("backgroundColor", "#07bafc");
itemColor.eq(1).css("backgroundColor", "#ff7300");
itemColor.eq(2).css("backgroundColor", "#fff");
itemColor.eq(3).css("backgroundColor", "#ef6293");
itemColor.eq(4).css("backgroundColor", "#888");
itemColor.eq(5).css("backgroundColor", "#e92416");
itemColor.eq(6).css("backgroundColor", "#d9a520");
itemColor.eq(7).css("backgroundColor", "#fcd");

itemColor.on("click", (eventInfo) => {
  let currentColor = $(eventInfo.target).css("backgroundColor");
  $(
    `#home .home-info h1 span,
      #home .home-info h2 span,
      .main-section-head h3 span, 
      .main-section-head h2 span,
      #about .personal-info-left h5,
      #home .go-down , .go-up`
  ).css("color", currentColor);

  $(
    `#nav-bar,
    #home .cv-btn a,
    #home .social-links a,
    #home .social-links a:hover,
    .styleBg`
  ).css("backgroundColor", currentColor);
});
//END OF REGION COLOR SWITCHER

// Fire fun AOS
AOS.init();

//Fire fun typed
var typed2 = new Typed("#auto-play", {
  strings: ["Eissa El-Emam.", "a Front-End Developer."],
  typeSpeed: 50,
  backSpeed: 10,
  fadeOut: true,
  loop: true,
});

// START OF REGION SWITCH MOOD

$(".mode-command").click(function () {
  $("body").toggleClass("dark-mood");
  $("#light").toggleClass("d-none");
  $("#dark").toggleClass("d-none");
});

/* const lighMood = document.getElementById("light");
const darkMood = document.getElementById("dark");

lighMood.addEventListener("click", () => {
  document.body.classList.toggle("dark-mood");
  lighMood.classList.add("d-none");
  darkMood.classList.remove("d-none");
});

darkMood.addEventListener("click", () => {
  lighMood.classList.remove("d-none");
  darkMood.classList.add("d-none");
  document.body.classList.toggle("dark-mood");
}); */

// END OF REGION SWITCH MOOD

// Start of hidden arrow up
$(window).scroll(function () {
  let aboutOffset = $("#about").offset().top;
  const currentScroll = $(window).scrollTop();
  if (currentScroll > aboutOffset - 450) {
    $(".go-up").fadeIn(1000);
  } else {
    $(".go-up").fadeOut(100);
  }
});
// End of hidden arrow up
// ///////////////
/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load("particles-js", "js/particles.json", function () {
//   console.log("callback - particles.js config loaded");
// });

//START OF REGION SKILLS PROGRESS
const num = document.getElementById("number");
let counter = 0;
setInterval(() => {
  if (counter === 95) {
    clearInterval();
  } else {
    counter += 1;
    num.innerHTML = counter + "%";
  }
}, 20);
