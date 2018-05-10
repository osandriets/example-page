'use strict';

require('./main.scss');

// --------------- preloader -------------------------------

document.body.onload = function () {
   setTimeout(function () {
       let preloader = document.getElementById('page-preloader');
       if( !preloader.classList.contains('preloader--done')) {
           preloader.classList.add('preloader--done');
       }
   }, 1000);
}

// --------------- sticky -------------------------------

window.onscroll = function() {
  let navbar = document.getElementById("header");
  let sticky = navbar.offsetTop + 1;
      if (window.pageYOffset > sticky) {
          navbar.classList.add("header--top")
      } else {
          navbar.classList.remove("header--top");
      }
}

// --------------- burger + nav -------------------------------

document.getElementById("burger").onclick = function() {
  event.preventDefault();
  if( !document.body.classList.contains('open-nav')) {
    this.classList.add('burger--open');
    document.body.classList.add('open-nav');
  }
  else {
     this.classList.remove('burger--open');
    document.body.classList.remove('open-nav');
  }
}

document.getElementsByClassName("nav-header")[0].onclick = function() {
  event.preventDefault();
  let burger = document.getElementById("burger");
  if( document.body.classList.contains('open-nav')) {
    burger.classList.remove('burger--open');
    document.body.classList.remove('open-nav');
  }
}
