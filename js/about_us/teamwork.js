/*
* @Author: Marte
* @Date:   2017-08-31 00:22:36
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-31 01:33:29
*/

(function(window){
    var data = [
        {
            img1:"hezuo1.png",
            img2:"hezuo10.png"
        },
        {
            img1:"hezuo2.png",
            img2:"hezuo9.png"
        },
        {
            img1:"hezuo3.png",
            img2:"hezuo8.png"
        },
        {
            img1:"hezuo4.png",
            img2:"hezuo7.png"
        },
        {
            img1:"hezuo5.png",
            img2:"hezuo6.png"
        },

    ];
    // var company = document.getElementById('company');
    // var community = document.getElementById('community');
    var tab = document.getElementsByClassName('tab');
    var tabBox = document.getElementById('tabBox');
    var uls = tabBox.children;
    function ZzcTab( option ){
        this.data = option.data;
        this.uls = option.uls;
        this.tab = option.tab;
        this.init();
    }
    ZzcTab.prototype = {
        init:function(){
            this.bindDom();
            this.toggleTab();
        },
        bindDom:function(){
            for(var i=0;i<this.data.length;i++) {
                var li1 = document.createElement("li");
                var li2 = document.createElement("li");
                var str1 = "";
                str1+= "<a href='#'>";
                    str1+= "<img src='../images/about_usImg/teamwork/"+ this.data[i].img1 +"'>";
                str1+= "</a>";
                li1.innerHTML += str1;
                var str2 = "";
                str2+= "<a href='#'>";
                    str2+= "<img src='../images/about_usImg/teamwork/"+ this.data[i].img2 +"'>";
                str2+= "</a>";
                li2.innerHTML += str2;

                this.uls[0].appendChild(li1);
                this.uls[1].appendChild(li2);
            }
            console.log(this.uls[0]);
        },
        toggleTab:function(){
            for(var i=0;i<this.tab.length;i++) {
                tab[i].index = i;
                var that = this;
                tab[i].onclick = function(){
                    for(var j=0;j<that.tab.length;j++) {
                        that.tab[j].className = "tab";
                        that.uls[j].style.display = "none";
                    }
                    this.className = "tab click";
                    that.uls[this.index].style.display = "block";
                }
            }
        }
    };
    var tab = new ZzcTab({
        data:data,
        uls:uls,
        tab:tab
    });
})(window)