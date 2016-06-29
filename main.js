new Vivus('keyhole',  {
    type: 'scenario',
    duration:50,
    animTimingFunction: Vivus.EASE,
    file: 'logo.svg',
     
    
}, function doDone(obj) {
    obj.el.classList.add('finished');
});
  
  
$('#content_wrapper').mousemove(function (e) {

    $('#move_me').animate({
        'left': -e.pageX + 15 + 'px'
    }, 0);

});

$('#content_wrapper').mousemove(function (e) {

    $('#move_me').animate({
        'right': -e.pageX + 155 + 'px'
    }, 0);

});

$('body').flowtype({
   minimum   : 500,
   maximum   : 1200,
   minFont   : 12,
   maxFont   : 30,
   fontRatio : 30
});