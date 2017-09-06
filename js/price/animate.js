function animate(element,target,step){
  // if(step){
  //   step = step;
  // }else{
  //   step = 40;
  // }
  // step = step ? step : 40;
  
  //判断用户是否自定义了每一次移动的距离
  //如果没有自定义，就让它每次执行时移动40px
  step = step || 40;  //或运算做取值，取第一个为true的值
  
  //如果已经有定时器了，就把之前的定时器给清除掉
  if(element.timer){
    console.log("有定时器了，清空");
    clearInterval(element.timer);
  }
  element.timer = setInterval(function () {
    //1.先拿到box与左边的间距
    var leader = element.offsetLeft;
    
    if(leader > target){
      step = - Math.abs(step);
    }
    
    //2.把拿到的值添加一个距离
    if (Math.abs(target - leader) > Math.abs(step)) {
      //看一下现在的位置与目标还有多远
      //如果现在的位置距离目标还够一步，就直接加一步
      leader += step;
    }else{
      //如果现在的位置离目标已经不够一步，直接到目标
      leader = target;
      //到目标以后，直接清除定时器
      clearInterval(element.timer);
    }
    //3.把修改后的值重新设置给box
    element.style.left = leader + "px";
  }, 15);
}