// var app = new Framework7({
//   root: '#app',
//   name: 'My App',
//   id: 'com.myapp.test',
//   routes: [
//     // Add your routes here
//     // Example:
//     /*
//     {
//       path: '/about/',
//       url: 'about.html',
//     },
//     */
//   ],
// });

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


// ADD REMOVE ACTIVE
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for (let i = 0; i< menuLength; i++){
    if(menuItem[i].href === currentLocation){
        menuItem[i].className = "active"
    }
}