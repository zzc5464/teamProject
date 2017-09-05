/*
* @Author: Marte
* @Date:   2017-08-31 18:54:46
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-31 19:15:03
*/
(function(window){
    var zzc = document.getElementById('zzc');
    var lmf = document.getElementById("lmf");
    var className = document.getElementsByClassName("photo");
    var data = [
    {
        lt:"../images/download-android@2x.png",
        t:"../images/download-dingtalk.png",
        rt:"../images/download-ios@2x.png",
        r:"../images/download-qr.png",
        rb:"../images/download-web222.png",
        b:"../images/download-wechat.jpg",
        lb:"../images/qiqiu.jpg",
        l:"../images/狗1.jpg",
        center:"../images/center.jpg"
    },
        {
            lt:"../images/download-android@2x.png",
            t:"../images/download-dingtalk.png",
            rt:"../images/download-ios@2x.png",
            r:"../images/download-qr.png",
            rb:"../images/download-web222.png",
            b:"../images/download-wechat.jpg",
            lb:"../images/qiqiu.jpg",
            l:"../images/狗1.jpg",
            center:"../images/center.jpg"
        }
]
function Person( option ){
        this.data = option.data;
        this.index = option.index;
        this.id = option.className[this.index];
        this.init();
    };
    Person.prototype = {
        init:function(){
            this.bindEvent();
        },
        getid: function () {

        },
        bindEvent:function(){
            var that = this;
            document.onmousemove = function(e){
                var posiX = e.pageX;
                var posiY = e.pageY;

                var myLeft = that.id.offsetLeft + that.id.offsetWidth/2; //鼠标距离盒子圆点的X
                var myTop = that.id.offsetTop  + that.id.offsetHeight/2; //鼠标距离盒子圆点的y
                var resultX = myLeft - posiX;
                var resultY = myTop - posiY;
                var lt,t,rt,r,rb,b,lb,l,center;
                lt = resultX > that.id.offsetWidth/4 && resultY >that.id.offsetWidth/4;
                t = resultX < that.id.offsetWidth/4 && resultX > -that.id.offsetWidth/4 && resultY >that.id.offsetWidth/4;
                rt = resultX < -that.id.offsetWidth/4 && resultY >that.id.offsetWidth/4;
                r =  resultX < -that.id.offsetWidth/4 && resultY < that.id.offsetWidth/4 && resultY > -that.id.offsetWidth/4;
                rb = resultX < -that.id.offsetWidth/4 && resultY < -that.id.offsetWidth/4;
                b = resultX < that.id.offsetWidth/4 && resultX > -that.id.offsetWidth/4 && resultY < -that.id.offsetWidth/4;
                lb = resultX > that.id.offsetWidth/4 && resultY < -that.id.offsetWidth/4;
                l = resultX > that.id.offsetWidth/4 && resultY > -that.id.offsetWidth/4 && resultY < that.id.offsetWidth/4;
                if(lt) {
                    that.id.style.backgroundImage = "url("+ that.data[that.index].lt +")";
                }else if(t){
                    that.id.style.backgroundImage = "url("+ that.data[that.index].t +")";
                }else if(rt) {
                    that.id.style.backgroundImage = "url("+ that.data[that.index].rt +")";
                }else if(r) {
                    that.id.style.backgroundImage = "url("+ that.data[that.index].r +")";
                }else if(rb) {
                    that.id.style.backgroundImage = "url("+ that.data[that.index].rb +")";
                }else if(b){
                    that.id.style.backgroundImage = "url("+ that.data[that.index].b +")";
                }else if(lb) {
                    that.id.style.backgroundImage = "url("+ that.data[that.index].lb +")";
                }else if(l){
                    that.id.style.backgroundImage = "url("+ that.data[that.index].l +")";
                }else {
                    that.id.style.backgroundImage = "url("+ that.data[that.index].center +")";
                }
            }
        }
    };
    window.Person = Person;
    var zzc = new Person({
        id:zzc,
        data:data,
        index:0,
        className:className
    });
    var lmf = new Person({
        id:lmf,
        data:data,
        index:0,
        className:className
    })

})(window)
