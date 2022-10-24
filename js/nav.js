$(function(){
    $('.mbtn').click(function(){
         $('.menu-sm').stop().slideToggle()      
    })

     $('.menu>li>a').click(function(e){
        e.preventDefault()
        $('.sub-menu').stop().slideToggle() 
    }) 
})