/*
* @Author: Marte
* @Date:   2017-08-31 08:31:18
* @Last Modified by:   Marte
* @Last Modified time: 2017-08-31 10:44:27
*/

(function(window){
    var adress = document.getElementById('adress');
    var mapDes = document.getElementById('mapDes');
    var data = [
        {
            city:"上海",
            dec:"上海市浦东新区碧波路 888 号 畅星大楼（圆楼）2楼",
        },
        {
            city:"北京",
            dec:"北京市海淀区上地东路35号院颐泉汇2号楼512",
        },
        {
            city:"深圳",
            dec:"深圳南山区金鸡路翡翠明珠商业广场3栋2401",
        },
        {
            city:"广州",
            dec:"广州市海珠区新港中路397号T.I.T创意园创意大道6号CCIC"
        },
        {
            city:"成都",
            dec:"四川省成都市高新区天府三街219号腾讯大厦B座8F"
        },
        {
            city:"杭州",
            dec:"浙江省杭州市西湖区万塘路262号万塘汇南楼5层氪空间"
        },
        {
            city:"南京",
            dec:"南京市秦淮区公园路38号创智汇301室"
        },
        {
            city:"重庆",
            dec:"重庆市市辖区渝中区中山四路15号3-1（3W空间）"
        }
    ]
    function Adress( option ){
        this.id = option.id;
        this.dec = option.dec;
        this.position = option.position;
        this.data = option.data;
        this.init();
    }
    Adress.prototype = {
        init:function(){
            this.bindDom()
        },
        bindDom:function(){
            var mapBoxUls = this.id.getElementsByTagName("ul");
            // 获取h4和p标签
            var h4 = this.dec.children[0];
            var p = this.dec.children[1];
            console.log(h4);
            //生成li
            for(var i=0;i<this.data.length;i++) {
                var li = document.createElement("li");
                li.innerHTML = this.data[i].city;
                mapBoxUls[0].appendChild(li);
            }
            var ulLis = mapBoxUls[0].children;
            ulLis[0].className = "active";
            //排他，设样式active
            var that = this;
            for(var j=0;j<ulLis.length;j++) {
                ulLis[j].onclick = function(){
                    for(var i=0;i<ulLis.length;i++) {
                        ulLis[i].index = i;
                        ulLis[i].className = "";
                        h4.innerHTML = "";
                        p.innerHTML = "";
                    }
                    this.className = "active";
                    h4.innerHTML = that.data[this.index].city;
                    p.innerHTML = that.data[this.index].dec;
                }
            }
        }
    }
    var adress = new Adress( {
        id:adress,
        dec:mapDes,
        data:data
    } );
})(window)