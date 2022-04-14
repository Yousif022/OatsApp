const { default: typed } = require("../lib/typed");

$(document).ready(function(){

$(window).on('scroll',function(){

    var scroll = $(window).scrollTop();
   
    if(scroll>=50){

          $(".sticky").addClass("stickyadd");
    }
    else{
        $(".sticky").removeClass("stickyadd");

    }
})


var typed = new Typed('.element', {
    // Waits 1000ms after typing "First"
    strings: ['First ^1000 sentence.', 'Second sentence.']
   });
   

   /*==========================================================
     funfact 
     ======================================================================*/
     var skl = true;
     $('.ts-funfact').appear();
  
     $('.ts-funfact').on('appear', function () {
        if (skl) {
           $('.counterUp').each(function () {
              var $this = $(this);
              jQuery({
                 Counter: 0  
              }).animate({
                 Counter: $this.attr('data-counter')
              }, {
                 duration: 8000,
                 easing: 'swing',
                 step: function () {
                    var num = Math.ceil(this.Counter).toString();
                    if (Number(num) > 99999) {
                       while (/(\d+)(\d{3})/.test(num)) {
                          num = num.replace(/(\d+)(\d{3})/, '');
                       }
                    }
                    $this.html(num);
                 }
              });
           });
           skl = false;
        }
     });
  

});

