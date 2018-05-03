'use strict';

require('./main.scss');
// --------------- preloader -------------------------------

// document.body.onload = function () {
//     setTimeout(function () {
//         let preloader = document.getElementById('page-preloader');
//         if( !preloader.classList.contains('preloader--done')) {
//             preloader.classList.add('preloader--done');
//         }
//     }, 2000);
// }

window.onscroll = function() {
  let navbar = document.getElementById("header");
  let sticky = navbar.offsetTop + 1;

      if (window.pageYOffset > sticky) {
          navbar.classList.add("header--top")
      } else {
          navbar.classList.remove("header--top");
      }
}

