let menuList = document.querySelector('.menuLink');
let menuBtn = document.querySelector('.hide');
menuBtn.addEventListener('click', displayMenu);
let facecover = document.querySelector('.facecover');
let cancel = document.querySelector('.cancel');


function displayMenu() {
    menuList.classList.toggle('showMenu');
    // facecover.classList.toogle('faceC');
    if (facecover.style.display == "block"){
        facecover.style.display = "none";
    } else {
        facecover.style.display = "block";
    }
}






// FOR SECTION LIVE OPPURTUNITIES

var owl = $('.owl-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause:true
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2000])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

//  FOR SECTION PARTNERS
$('.owl-carousel1').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:5
        }
    }
})


// function cancelList(){
//     facecover.style.display = "none";
// }

// let droppDown = document.querySelector('.dropDown');
// let dropdownShow = document.querySelector('.service');
// dropdownShow.addEventListener('click', dropDownMenu);

// function dropDownMenu(e){
//     event.preventDefault()
//     droppDown.style.display = "block"
//     droppDown.classList.toggle("drop")
// }


// function active(e) {
//     let list = document.querySelector(".active");
//     if (list !==null){
//         list.classList.remove(".active");
//     } else {

//     }
//     e.target.className = "active"
// }

//CALENDAR JS


var mainView = app.views.create('.view-main');

var $$ = Dom7;
var monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August' , 'September' , 'October', 'November', 'December'];
var calendarInline = app.calendar.create({
  containerEl: '#demo-calendar-inline-container',
  value: [new Date()],
  weekHeader: true,
  renderToolbar: function () {
    return '<div class="toolbar calendar-custom-toolbar no-shadow">' +
      '<div class="toolbar-inner">' +
        '<div class="left">' +
          '<a href="#" class="link icon-only"><i class="icon icon-back ' + (app.theme === 'md' ? 'color-red' : '') + '"></i></a>' +
        '</div>' +
        '<div class="center"></div>' +
        '<div class="right">' +
          '<a href="#" class="link icon-only"><i class="icon icon-forward ' + (app.theme === 'md' ? 'color-red' : '') + '"></i></a>' +
        '</div>' +
      '</div>' +
    '</div>';
  },
  on: {
    init: function (c) {
      $$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] +', ' + c.currentYear);
      $$('.calendar-custom-toolbar .left .link').on('click', function () {
        calendarInline.prevMonth();
      });
      $$('.calendar-custom-toolbar .right .link').on('click', function () {
        calendarInline.nextMonth();
      });
    },
    monthYearChangeStart: function (c) {
      $$('.calendar-custom-toolbar .center').text(monthNames[c.currentMonth] +', ' + c.currentYear);
    }
  }
});






