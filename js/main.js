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
  });
  // setTimeout(sliderInit, 1000);
  // sliderInit();
  
//   $('.features .feature').each(function(index, el) {
//     features[index] = el;
//     $(el).on('click', function () {
//       $(this).closest('section').find('.iphone').attr('class', 'iphone slide-' + (++index));
//       console.log(features);
//       $('.features .feature').removeClass('active')
//       $(this).addClass('active');
//     }) 
//   });
});

function sliderInit() {
  for (var i = 0; i < $('.features .feature').length; i++ ) {
    console.log('nuka '+ i);
    $('.features .feature')[i].click(function () {
      console.log($(this));
      $(this).closest('section').find('.iphone').attr('class', 'iphone slide-' + (i+1));
      $('.features .feature').removeClass('active')
      $(this).addClass('active');
    });
  }
}
function hidePopUp() {
  $('.popup-wrapper').removeClass('active');
}