$(function () {
    function parallax(){
    $('.side ul li').each(function(){
        t = $(this).offset().top
        if(scrt >= t - winh){
          $(this).addClass('active')
        }else{
          $(this).removeClass('active')
        }//if else
      })//each
    }//fn

    parallax()
    $(window).scroll(function(){
      parallax()
    }).resize(function(){
      parallax()
    })  
})