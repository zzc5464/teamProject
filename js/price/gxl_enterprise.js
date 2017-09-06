$(function () {

    //轮播图
    var slideShow = $('.slideShow2');
    var slideShow1 = slideShow.find('div');
    var imaWidth = slideShow1.find('ul').eq(0).width();
    var index = $('.slideShow1 ul').index();
    $('.rightArrow').click(function () {
        if(index == slideShow1.find('ul').length - 1){
            slideShow1.css('left','0');
            index = 0;
        }
        index ++;
        console.log(index);
        slideShow1.stop().animate({'left':-imaWidth*index});
    });
    $('.leftArrow').click(function () {
        if(index == 0){
            slideShow1.css('left',-(slideShow1.find('ul').length - 1) * imaWidth);
            index = slideShow1.find('ul').length - 1;
        }
        index --;
        console.log(index);
        slideShow1.stop().animate({'left':-imaWidth*index});
    });
});

