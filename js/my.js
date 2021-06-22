//bell
var x = document.getElementById("myAudio"); 

function playAudio() { 
  x.play(); 
} 

function pauseAudio() { 
  x.pause(); 
} 

//bell-end

$("[data-trigger]").on("click", function(){
  var trigger_id =  $(this).attr('data-trigger');
  $(trigger_id).toggleClass("show");
  $('body').toggleClass("offcanvas-active");
});

// mobile-menu-close-button 
$(".btn-close").click(function(e){
  $(".navbar-collapse").removeClass("show");
  $("body").removeClass("offcanvas-active");
}); 
// mobile-menu-close-button-end


//data-tooltip
$('document').ready(function(){
  $('[data-toggle=tooltip]').tooltip();
});
$('#example').tooltip(Option)
//data-tooltip-end


//logo-slider
var imageSources = [ "img/logo/logo-2/2.png","img/logo/logo-2/3.png","img/logo/logo-2/4.png","img/logo/logo-2/5.png"]
        
var index = 0;
setInterval (function(){
  if (index === imageSources.length) {
    index = 0;
  }
  document.getElementById("image").src = imageSources[index];
  index++;
} , 500);


//logo-slider-end
//pray-hand-slider
var imageSources_two = [ "img/nav/105.png","img/nav/101.png","img/nav/102.png","img/nav/103.png","img/nav/104.png","img/nav/105.png"]
        
var index = 0;
setInterval (function(){
  if (index === imageSources_two.length) {
    index_two = 0;
  }
  document.getElementById("image_two").src = imageSources_two[index];
  index_two++;
} , 500);
//pray-hand-slider-end


// readmore-btn




function myFunction() {
  var dots = document.getElementById("dots");
  var moreText = document.getElementById("more");
  var btnText = document.getElementById("myBtn");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}


function myFunctiontwo() {
  var dots = document.getElementById("dotstwo");
  var moreText = document.getElementById("moretwo");
  var btnText = document.getElementById("myBtntwo");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctionthree() {
  var dots = document.getElementById("dotsthree");
  var moreText = document.getElementById("morethree");
  var btnText = document.getElementById("myBtnthree");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctionfour() {
  var dots = document.getElementById("dotsfour");
  var moreText = document.getElementById("morefour");
  var btnText = document.getElementById("myBtnfour");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}

function myFunctionfive() {
  var dots = document.getElementById("dotsfive");
  var moreText = document.getElementById("morefive");
  var btnText = document.getElementById("myBtnfive");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}

function myFunctionsix() {
  var dots = document.getElementById("dotssix");
  var moreText = document.getElementById("moresix");
  var btnText = document.getElementById("myBtnsix");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}

function myFunctionseven() {
  var dots = document.getElementById("dotsseven");
  var moreText = document.getElementById("moreseven");
  var btnText = document.getElementById("myBtnseven");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctioneight() {
  var dots = document.getElementById("dotseight");
  var moreText = document.getElementById("moreeight");
  var btnText = document.getElementById("myBtneight");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}




function myFunction11() {
  var dots = document.getElementById("dots11");
  var moreText = document.getElementById("more11");
  var btnText = document.getElementById("myBtn11");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}


function myFunction12() {
  var dots = document.getElementById("dots12");
  var moreText = document.getElementById("more12");
  var btnText = document.getElementById("myBtn12");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}



function myFunction13() {
  var dots = document.getElementById("dots13");
  var moreText = document.getElementById("more13");
  var btnText = document.getElementById("myBtn13");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}



function myFunction14() {
  var dots = document.getElementById("dots14");
  var moreText = document.getElementById("more14");
  var btnText = document.getElementById("myBtn14");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}

function myFunctiontwenty() {
  var dots = document.getElementById("dotstwenty");
  var moreText = document.getElementById("moretwenty");
  var btnText = document.getElementById("myBtntwenty");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}

function myFunctiontwentyone() {
  var dots = document.getElementById("dotstwentyone");
  var moreText = document.getElementById("moretwentyone");
  var btnText = document.getElementById("myBtntwentyone");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}

function myFunctiontwentytwo() {
  var dots = document.getElementById("dotstwentytwo");
  var moreText = document.getElementById("moretwentytwo");
  var btnText = document.getElementById("myBtntwentytwo");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}

function myFunctiontwentythree() {
  var dots = document.getElementById("dotstwentythree");
  var moreText = document.getElementById("moretwentythree");
  var btnText = document.getElementById("myBtntwentythree");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}


function myFunctiontwentyfour() {
  var dots = document.getElementById("dotstwentyfour");
  var moreText = document.getElementById("moretwentyfour");
  var btnText = document.getElementById("myBtntwentyfour");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctiontwentyfive() {
  var dots = document.getElementById("dotstwentyfive");
  var moreText = document.getElementById("moretwentyfive");
  var btnText = document.getElementById("myBtntwentyfive");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctiontwentysix() {
  var dots = document.getElementById("dotstwentysix");
  var moreText = document.getElementById("moretwentysix");
  var btnText = document.getElementById("myBtntwentysix");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctiontwentyseven() {
  var dots = document.getElementById("dotstwentyseven");
  var moreText = document.getElementById("moretwentyseven");
  var btnText = document.getElementById("myBtntwentyseven");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctiontwentyeight() {
  var dots = document.getElementById("dotstwentyeight");
  var moreText = document.getElementById("moretwentyeight");
  var btnText = document.getElementById("myBtntwentyeight");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctiontwentynine() {
  var dots = document.getElementById("dotstwentynine");
  var moreText = document.getElementById("moretwentynine");
  var btnText = document.getElementById("myBtntwentynine");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctionthirteen() {
  var dots = document.getElementById("dotsthirteen");
  var moreText = document.getElementById("morethirteen");
  var btnText = document.getElementById("myBtnthirteen");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}

function myFunctionthirtyone() {
  var dots = document.getElementById("dotsthirtyone");
  var moreText = document.getElementById("morethirtyone");
  var btnText = document.getElementById("myBtnthirtyone");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctionthirtytwo() {
  var dots = document.getElementById("dotsthirtytwo");
  var moreText = document.getElementById("morethirtytwo");
  var btnText = document.getElementById("myBtnthirtytwo");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctionthirtythree() {
  var dots = document.getElementById("dotsthirtythree");
  var moreText = document.getElementById("morethirtythree");
  var btnText = document.getElementById("myBtnthirtythree");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctionthirtyfour() {
  var dots = document.getElementById("dotsthirtyfour");
  var moreText = document.getElementById("morethirtyfour");
  var btnText = document.getElementById("myBtnthirtyfour");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctionthirtyfive() {
  var dots = document.getElementById("dotsthirtyfive");
  var moreText = document.getElementById("morethirtyfive");
  var btnText = document.getElementById("myBtnthirtyfive");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
function myFunctionthirtysix() {
  var dots = document.getElementById("dotsthirtysix");
  var moreText = document.getElementById("morethirtysix");
  var btnText = document.getElementById("myBtnthirtysix");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}

function myFunctionthirtyseven() {
  var dots = document.getElementById("dotsthirtyseven");
  var moreText = document.getElementById("morethirtyseven");
  var btnText = document.getElementById("myBtnthirtyseven");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}


function myFunctionthirtyeight() {
  var dots = document.getElementById("dotsthirtyeight");
  var moreText = document.getElementById("morethirtyeight");
  var btnText = document.getElementById("myBtnthirtyeight");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}


function myFunctionthirtynine() {
  var dots = document.getElementById("dotsthirtynine");
  var moreText = document.getElementById("morethirtynine");
  var btnText = document.getElementById("myBtnthirtynine");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}

function myFunctionfourty() {
  var dots = document.getElementById("dotsfourty");
  var moreText = document.getElementById("morefourty");
  var btnText = document.getElementById("myBtnfourty");

  if (dots.style.display === "none") {
    dots.style.display = "inline";
    btnText.innerHTML = "read more"; 
    moreText.style.display = "none";
  } else {
    dots.style.display = "none";
    btnText.innerHTML = "readless"; 
    moreText.style.display = "inline";
  }
}
//readmore-btn-end


/* Self-Repent Posted From User slider */
jQuery(document).ready(function($) {
  jQuery('.self-repent-slider').owlCarousel({
      loop: true,
      nav: false,
      autoplay: true,
      autoplayTimeout: 60000,
      margin: 10,
      responsiveClass: true,            
      responsive: {
          0: {
              items: 1,
          },
          600: {
              items: 1,

          },
          1000: {
              items: 3,
              
          }
      }
  })
});
/* Self-Repent Posted From Users-section-end */




// Hide submenus
$('#body-row .collapse').collapse('hide'); 

// Collapse/Expand icon
$('#collapse-icon').addClass('fa-angle-double-left'); 

// Collapse click
$('[data-toggle=sidebar-colapse]').click(function() {
    SidebarCollapse();
});

function SidebarCollapse () {
    $('.menu-collapsed').toggleClass('d-none');
    $('.sidebar-submenu').toggleClass('d-none');
    $('.submenu-icon').toggleClass('d-none');
    $('#sidebar-container').toggleClass('sidebar-expanded sidebar-collapsed');
    
    // Treating d-flex/d-none on separators with title
    var SeparatorTitle = $('.sidebar-separator-title');
    if ( SeparatorTitle.hasClass('d-flex') ) {
        SeparatorTitle.removeClass('d-flex');
    } else {
        SeparatorTitle.addClass('d-flex');
    }
    
    // Collapse/Expand icon
    $('#collapse-icon').toggleClass('fa-angle-double-left fa-angle-double-right');
}


//soul-learing-two-html

function myFunction_soul_learing_two_one() {

  document.getElementById("idone").style.display = "block";
  document.getElementById("idtwo").style.display = "none";
  document.getElementById("idthree").style.display = "none";
  document.getElementById("idfour").style.display = "none";

}
function myFunction_soul_learing_two_two() {

  document.getElementById("idone").style.display = "none";
  document.getElementById("idtwo").style.display = "block";
  document.getElementById("idthree").style.display = "none";
  document.getElementById("idfour").style.display = "none";

}
function myFunction_soul_learing_two_three() {

  document.getElementById("idone").style.display = "none";
  document.getElementById("idtwo").style.display = "none";
  document.getElementById("idthree").style.display = "block";
  document.getElementById("idfour").style.display = "none";

}

function myFunction_soul_learing_two_four() {



  document.getElementById("idone").style.display = "block";
  document.getElementById("idtwo").style.display = "none";
  document.getElementById("idthree").style.display = "none";
  document.getElementById("idfour").style.display = "none";

}
function myFunction_soul_learing_two_five() {

  document.getElementById("idone").style.display = "none";
  document.getElementById("idtwo").style.display = "block";
  document.getElementById("idthree").style.display = "none";
  document.getElementById("idfour").style.display = "none";

}


