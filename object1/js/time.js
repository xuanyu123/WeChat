let timer = null;

function displayClock(num){//num是传入的startClock中的动态值
    if(num<10){
        return "0"+num;
    }
    else{
        return num;
    }
}
//停止计时
function stopClock(){
    clearTimeout(timer);
}
//开始计时
function startClock(){
    let time = new Date();
    let hours = displayClock(time.getHours()) + ":";
    let minutes = displayClock(time.getMinutes()) + ":";
    let seconds = displayClock(time.getSeconds());
    //显示时间
    show.innerHTML=hours+minutes+seconds;//在id为show的块区域显示
    timer=setTimeout("startClock()",1000);//延时器
}