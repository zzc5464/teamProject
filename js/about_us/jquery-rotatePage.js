/*
* @Author: Zzc
* @Date:   2017-08-31 18:54:46
* @Last Modified by:   Zzc
* @Last Modified time: 2017-09-05 13:22:03
*/
/*(function(window){

function Person( option ){
        this.data = option.data;
        this.index = option.index;
        this.that = option.that;
        this.init();
    };
    Person.prototype = {
        init:function(){
            this.bindEvent();
        },
        getthat: function () {

        },
        bindEvent:function(){
            var that = this;
            document.onmousemove = function(e){
                var posiX = e.pageX;
                var posiY = e.pageY;

                var myLeft = that.that.offsetLeft + that.that.offsetwidth/2; //鼠标距离盒子圆点的X
                var myTop = that.that.offsetTop  + that.that.offsetheight/2; //鼠标距离盒子圆点的y
                var resultX = myLeft - posiX;
                var resultY = myTop - posiY;
                console.log(resultX);
                var lt,t,rt,r,rb,b,lb,l,center;
                lt = resultX > that.that.offsetwidth/4 && resultY >that.that.offsetwidth/4;
                t = resultX < that.that.offsetwidth/4 && resultX > -that.that.offsetwidth/4 && resultY >that.that.offsetwidth/4;
                rt = resultX < -that.that.offsetwidth/4 && resultY >that.that.offsetwidth/4;
                r =  resultX < -that.that.offsetwidth/4 && resultY < that.that.offsetwidth/4 && resultY > -that.that.offsetwidth/4;
                rb = resultX < -that.that.offsetwidth/4 && resultY < -that.that.offsetwidth/4;
                b = resultX < that.that.offsetwidth/4 && resultX > -that.that.offsetwidth/4 && resultY < -that.that.offsetwidth/4;
                lb = resultX > that.that.offsetwidth/4 && resultY < -that.that.offsetwidth/4;
                l = resultX > that.that.offsetwidth/4 && resultY > -that.that.offsetwidth/4 && resultY < that.that.offsetwidth/4;
                if(lt) {
                    that.that.css = "url("+ that.data[that.index].lt +")";
                }else if(t){
                    that.that.css = "url("+ that.data[that.index].t +")";
                }else if(rt) {
                    that.that.css = "url("+ that.data[that.index].rt +")";
                }else if(r) {
                    that.that.css = "url("+ that.data[that.index].r +")";
                }else if(rb) {
                    that.that.css = "url("+ that.data[that.index].rb +")";
                }else if(b){
                    that.that.css = "url("+ that.data[that.index].b +")";
                }else if(lb) {
                    that.that.css = "url("+ that.data[that.index].lb +")";
                }else if(l){
                    that.that.css = "url("+ that.data[that.index].l +")";
                }else {
                    that.that.css = "url("+ that.data[that.index].center +")";
                }
            }
        }
    };
    window.Person = Person;
})(window);*/

/*(function (window) {
    function Person1( option ){
        this.data = option.data;
        this.index = option.index;
        this.that = option.that;
        this.init();
    };
    Person1.prototype = {
        init:function(){
            this.bindEvent();
        },
        getthat: function () {

        },
        bindEvent:function(){
            var that = this;
            document.onmousemove = function(e){
                var posiX = e.pageX;
                var posiY = e.pageY;

                var myLeft = that.that.offsetLeft + that.that.offsetwidth/2; //鼠标距离盒子圆点的X
                var myTop = that.that.offsetTop  + that.that.offsetheight/2; //鼠标距离盒子圆点的y
                var resultX = myLeft - posiX;
                var resultY = myTop - posiY;
                console.log(resultX);
                var lt,t,rt,r,rb,b,lb,l,center;
                lt = resultX > that.that.offsetwidth/4 && resultY >that.that.offsetwidth/4;
                t = resultX < that.that.offsetwidth/4 && resultX > -that.that.offsetwidth/4 && resultY >that.that.offsetwidth/4;
                rt = resultX < -that.that.offsetwidth/4 && resultY >that.that.offsetwidth/4;
                r =  resultX < -that.that.offsetwidth/4 && resultY < that.that.offsetwidth/4 && resultY > -that.that.offsetwidth/4;
                rb = resultX < -that.that.offsetwidth/4 && resultY < -that.that.offsetwidth/4;
                b = resultX < that.that.offsetwidth/4 && resultX > -that.that.offsetwidth/4 && resultY < -that.that.offsetwidth/4;
                lb = resultX > that.that.offsetwidth/4 && resultY < -that.that.offsetwidth/4;
                l = resultX > that.that.offsetwidth/4 && resultY > -that.that.offsetwidth/4 && resultY < that.that.offsetwidth/4;
                if(lt) {
                    that.that.css = "url("+ that.data[that.index].lt +")";
                }else if(t){
                    that.that.css = "url("+ that.data[that.index].t +")";
                }else if(rt) {
                    that.that.css = "url("+ that.data[that.index].rt +")";
                }else if(r) {
                    that.that.css = "url("+ that.data[that.index].r +")";
                }else if(rb) {
                    that.that.css = "url("+ that.data[that.index].rb +")";
                }else if(b){
                    that.that.css = "url("+ that.data[that.index].b +")";
                }else if(lb) {
                    that.that.css = "url("+ that.data[that.index].lb +")";
                }else if(l){
                    that.that.css = "url("+ that.data[that.index].l +")";
                }else {
                    that.that.css = "url("+ that.data[that.index].center +")";
                }
            }
        }
    };

    window.Person1 = Person1;
})(window);*/


(function ($) {
    $.fn.rotatePage = function( option ){
        var data = option.data;
        var i = option.i;
        console.log(that);
        var that = $(this);
        var posiX,posiY,myLeft,myTop,resultX,resultY,lt,t,rt,r,rb,b,lb,l,center;
        $("body").mousemove(function (e) {
            posiX = e.pageX;
            posiY = e.pageY;
            myLeft = that.offset().left + that.width()/2;
            myTop = that.offset().top + that.height()/2;
            resultX = myLeft - posiX;
            resultY = myTop - posiY;
            console.log(resultX);
            lt = resultX > that.width()/4 && resultY >that.height()/4;
            t = resultX < that.width()/4 && resultX > -that.width()/4 && resultY >that.height()/4;
            rt = resultX < -that.width()/4 && resultY >that.height()/4;
            r =  resultX < -that.width()/4 && resultY < that.height()/4 && resultY > -that.height()/4
            rb = resultX < -that.width()/4 && resultY < -that.height()/4;
            b = resultX < that.width()/4 && resultX > -that.width()/4 && resultY < -that.height()/4;
            lb = resultX > that.width()/4 && resultY < -that.height()/4;
            l = resultX > that.width()/4 && resultY > -that.height()/4 && resultY < that.height()/4;

            if(lt) {
                that.css("backgroundImage","url("+ data[i].lt +")");
            }else if(t){
                that.css("backgroundImage","url("+ data[i].t +")");
            }else if(rt) {
                that.css("backgroundImage","url("+ data[i].rt +")");
            }else if(r) {
                that.css("backgroundImage","url("+ data[i].r +")");
            }else if(rb) {
                that.css("backgroundImage","url("+ data[i].rb +")");
            }else if(b){
                that.css("backgroundImage","url("+ data[i].b +")");
            }else if(lb) {
                that.css("backgroundImage","url("+ data[i].lb +")");
            }else if(l){
                that.css("backgroundImage","url("+ data[i].l +")");
            }else {
                that.css("backgroundImage","url("+ data[i].center +")");
            }
        });
       /* document.body.onmousemove = function(e){
            
            lt = resultX > that.offsetwidth/4 && resultY >that.offsetwidth/4;
            t = resultX < that.offsetwidth/4 && resultX > -that.offsetwidth/4 && resultY >that.offsetwidth/4;
            rt = resultX < -that.offsetwidth/4 && resultY >that.offsetwidth/4;
            r =  resultX < -that.offsetwidth/4 && resultY < that.offsetwidth/4 && resultY > -that.offsetwidth/4;
            rb = resultX < -that.offsetwidth/4 && resultY < -that.offsetwidth/4;
            b = resultX < that.offsetwidth/4 && resultX > -that.offsetwidth/4 && resultY < -that.offsetwidth/4;
            lb = resultX > that.offsetwidth/4 && resultY < -that.offsetwidth/4;
            l = resultX > that.offsetwidth/4 && resultY > -that.offsetwidth/4 && resultY < that.offsetwidth/4;
            if(lt) {
                that.css = "url("+ data[index].lt +")";
            }else if(t){
                that.css = "url("+ data[index].t +")";
            }else if(rt) {
                that.css = "url("+ data[index].rt +")";
            }else if(r) {
                that.css = "url("+ data[index].r +")";
            }else if(rb) {
                that.css = "url("+ data[index].rb +")";
            }else if(b){
                that.css = "url("+ data[index].b +")";
            }else if(lb) {
                that.css = "url("+ data[index].lb +")";
            }else if(l){
                that.css = "url("+ data[index].l +")";
            }else {
                that.css = "url("+ data[index].center +")";
            }
        }*/
    }
})(window.jQuery);