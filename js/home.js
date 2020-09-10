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



