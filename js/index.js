
$(function(){
    //顶部通栏
    //var scroll;
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
            $(".login_up a").css("color","#fff");
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

    //头尾js

//})
//下拉头部
    var lis = $(".solution");
    lis.mouseenter(function () {

        $(".solution-menu").stop().slideDown(200);
    }).mouseleave(function () {
        $(".solution-menu").stop().slideUp(200);
    })


    var lis1 = $(".company");
    lis1.mouseenter(function () {
        $(".company-menu").stop().slideDown(200);
    }).mouseleave(function () {
        $(".company-menu").stop().slideUp(200);
    })
//下拉头部

    var lis2 = $(".style");
    lis2.mouseenter(function () {
        $(".style-menu").stop().slideDown(200);
    }).mouseleave(function () {
        $(".style-menu").stop().slideUp(200);
    })
    var lis3 = $(".serves");
    lis3.mouseenter(function () {
        $(".serves-menu").stop().slideDown(200);
    }).mouseleave(function () {
        $(".serves-menu").stop().slideUp(200);
    })
//    下拉底部

    var lis4 =$(".sna-vx");
    lis4.mouseenter(function () {
        $(".pop").stop().slideDown(10);
    }).mouseleave(function () {
        $(".pop").stop().slideUp(10);
    })


    var lis5 =$(".sna-qq");
    lis5.mouseenter(function () {
        $(".qun").stop().slideDown(10);
    }).mouseleave(function () {
        $(".qun").stop().slideUp(10);
    })

});