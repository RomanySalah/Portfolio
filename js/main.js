new WOW().init();

$(window).on('load',function(){
    $("#spinner").fadeOut(1000,function(){
        $('body').css('overflow','auto')
    })
})

$('#btnUp').click(()=>{
    $('html,body').animate({scrollTop:0},1000)
})