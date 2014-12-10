 
$(function() {
  var features = [];

  if(!isMobile()) {
    $('.features .feature').click(function(event) {
      $('.features .feature').removeClass('active')
      $(this).addClass('active');
      for(var i = 0; i < $('.features .feature').length; i++) {
        console.log(i)
        if($(this).is($('.features .feature')[i])) {
          $(this).closest('section').find('.iphone').attr('class', 'iphone slide-' + (i+1));
        }

      }
    });
  }
  

  $('#pagepiling').pagepiling({
    menu: '#nav',
    anchors: ['first', 'second', 'third', 'fourth'],
    verticalCentered: false,
    // navigation: {
    //   'textColor': '#f2f2f2',
    //   'bulletsColor': '#ccc',
    //   'position': 'right',
    //   'tooltips': ['Page 1', 'Page 2', 'Page 3', 'Page 4']
    // },
    navigation: false, 
    afterLoad: function(anchorLink, index){
      if(anchorLink == 'first'){
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
