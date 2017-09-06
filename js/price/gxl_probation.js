/**
 * Created by hp on 2017/8/31.
 */

$(function () {
//第一个输入框
    $('.text1 input').focus(function () {
        $('.text1').addClass('focus');
        $(this).keyup(function () {
            if($(this).val().trim() != ''){
                $('.text1').css('borderColor','#d1d1d1');
                $(this).css('color','#757575');
            };
        });
    }).blur(function () {
        $('.text1').removeClass('focus');
    });

//第二个输入框
    $('.text-up input').focus(function () {
        $('.text-up').addClass('focus');
        $(this).keyup(function () {
            if($(this).val().trim() != ''){
                $('.text-up').css('borderColor','#d1d1d1');
                $(this).css('color','#757575');
            };
        });
    }).blur(function () {$('.text-up').removeClass('focus');});

//下拉框
    $('.text-box').click(function () {
        $(this).addClass('focus').parent().next().show();
    });

    $('.text-text>li>a').click(function () {
        var index = $(this).index();
        $('.text-box span').html($(this).eq(index).html());
        $('.text-text').hide();
        $('.text-box').removeClass('focus');
        if($('.text-box>span').html() != '企业规模'){
            $('.text-box').css('borderColor','#d1d1d1');
        };
    });


//点击按钮
    $('.text-down a').click(function () {
        if($('.text1 input').val() == ''){
            $('.text1').css('borderColor','red');
        };
        if($('.text-up input').val().trim() == ''){
            $('.text-up').css('borderColor','red');
        };
        if($('.text-box>span').html() == '企业规模'){
            $('.text-box').css('borderColor','red');
        };
    })
})
