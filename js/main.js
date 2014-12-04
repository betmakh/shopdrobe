 
$(function() {
  var features = [];
  $('.features .feature').click(function(event) {
    $('.features .feature').removeClass('active')
    $(this).addClass('active');
    for(var i = 0; i < $('.features .feature').length; i++) {
      console.log(i)
      if($(this).is($('.features .feature')[i])) {
        $(this).closest('section').find('.iphone').attr('class', 'iphone slide-' + (i+1));
      }

    }

    // $('#pagepiling').pagepiling({
    //     // menu: null,
    //     // direction: 'vertical',
    //     // verticalCentered: true,
    //     // sectionsColor: [],
    //     // anchors: [],
    //     // scrollingSpeed: 700,
    //     // easing: 'swing',
    //     // loopBottom: false,
    //     // loopTop: false,
    //     css3: true
    //     // // navigation: {
    //     // //     'textColor': '#000',
    //     // //     'bulletsColor': '#000',
    //     // //     'position': 'right',
    //     // //     'tooltips': ['section1', 'section2', 'section3', 'section4']
    //     // // },
    //     // normalScrollElements: null,
    //     // normalScrollElementTouchThreshold: 5,
    //     // touchSensitivity: 5,
    //     // keyboardScrolling: true,
    //     // sectionSelector: 'section',
    //     // animateAnchor: false,

    //     //events
    // });
  });
  $('#pagepiling').pagepiling({
    menu: '#nav',
    anchors: ['page1', 'page2', 'page3', 'page4'],
    verticalCentered: false,
    // navigation: {
    //   'textColor': '#f2f2f2',
    //   'bulletsColor': '#ccc',
    //   'position': 'right',
    //   'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
    // },
    navigation: false, 
    afterLoad: function(anchorLink, index){
      if(anchorLink == 'page1'){
          $('#nav').find('.logo').css('opacity', '1');
      } else {
          $('#nav').find('.logo').css('opacity', '0');
      }
    }
  });
});

function hidePopUp() {
  $('.popup-wrapper').removeClass('active');
}