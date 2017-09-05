
$(function(){
    //顶部通栏
    var scroll;
    $(window).scroll(function () {
        var top = $(window).scrollTop();
        if(top>50) {
            $(".navbar-zzc").css({
                background:"#fff",
            });
            $(".navbar-brand").css({
                backgroundImage: 'url("images/logo.svg")'
            });
            $(".navbar-nav a").css({
                color:"#000"
            });
            $(".login_up").css("color","#fff");
            $(".navbar-toggle").css({
                borderColor:"#000",
                color:"#000"
            })
        }else {
            $(".navbar-zzc").css({
                background:"transparent",
            });
            $(".navbar-brand").css({
                backgroundImage: 'url("images/logo-white.svg")'
            });
            $(".navbar-nav a").css({
                color:"#fff"
            });
            $(".login_up").css("color","#fff");
            $(".navbar-toggle").css({
                borderColor:"#fff",
                color:"#fff"
            })
        }
    })

});