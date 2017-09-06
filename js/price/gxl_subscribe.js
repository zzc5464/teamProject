/*
$(function () {
    $('.price-btn').click(function () {
        if($('.people-input>input').val().trim() == ''){
            $('.people-input>input').css('border','1px solid red');
            $('.none').css('display','block');
        };
        if($('.people-input2>input').val().trim() == ''){
            $('.people-input2>input').css('border','1px solid red');
            $('.show1').css('display','block');
        };
        if($('.people-input1>input').val().trim() == ''){
            $('.people-input1>input').css('border','1px solid red');
            $('.show').css('display','block');
        };
    });
    $('.people-input>input').focus(function () {
        $(this).css('border','1px solid #03a9f4');
    }).blur(function () {
        if($(this).val().trim() == ''){
            $(this).css('border','1px solid red');
            $('.none').css('display','block');
            $(this).keyup(function () {
                if($(this).val().trim() != '') {
                    $('.none').css('display', 'none');
                }else {
                    $('.none').css('display', 'block');
                };
            });
        };
    });
    $('.people-input2>input').focus(function () {
        $(this).css('border','1px solid #03a9f4');
    }).blur(function () {
        if($(this).val().trim() == ''){
            $(this).css('border','1px solid red');
            $('.show1').css('display','block');

            $(this).keyup(function () {
                if($(this).val().trim() != '') {
                    $('.show1').css('display', 'none');
                }else {
                    $('.show1').css('display', 'block');
                };
            });
        }
    });
    $('.people-input1>input').focus(function () {
        $(this).css('border','1px solid #03a9f4');
    }).blur(function () {
        if($(this).val().trim() == ''){
            $(this).css('border','1px solid red');
            $('.show').css('display','block');
            $(this).keyup(function () {
                if($(this).val().trim() != '') {
                    $('.show').css('display', 'none');
                }else {
                    $('.show').css('display', 'block');
                };
            });
        };
    });
})

*/

$(function () {
    var tel = /^(13[0-9]|14[5|7]|15[0|1|2|3|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9])\d{8}$/;
    var email = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
    $("#telInput").focus(function () {
        console.log("进来了");
    }).blur(function () {
        var val = $(this).val();
        var r = tel.test(val);
        if(!r) {
            $('.show2').css('display', 'block');
        }else {
            $('.show2').css('display', 'none');
        }
    });
    $("#email").blur(function () {
        var val = $(this).val();
        var r = email.test(val);
        console.log(r);
        if(!r) {
            $('.show3').css('display', 'block');
        }else {
            $('.show3').css('display', 'none');
        }
    });
})
