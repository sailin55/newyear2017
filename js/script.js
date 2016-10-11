/**
 * Created by wanghao on 2016/10/11.
 */
window.onload =function(){
    //获取元素
    var page1=document.getElementById('page1');
    var page2=document.getElementById('page2');
    var page3=document.getElementById('page3');
    var music=document.getElementById('music');
    var audio=document.getElementsByTagName('audio')[0];
    //音乐停止，碟片动画停止
    audio.addEventListener("ended",function(event){
        music.setAttribute("class","");
        //music.style.animationPlayState="paused";  /*兼容性很差*/
        //music.style.webkitAnimationPlayState="paused";
    },false);
    //点击碟片图标，控制音乐播放
//    music.onclick=function(){
//        if(audio.paused){
//            audio.play();
//            this.setAttribute("class","play");
//            //this.style.animationPlayState="running";
//            //this.style.webkitAnimationPlayState="running";
//        }else{
//            audio.pause();
//            this.setAttribute("class","");  /*暂停会跳回原始位置*/
//            //this.style.animationPlayState="paused";  /*兼容性很差*/
//            //this.style.webkitAnimationPlayState="paused";
//        }
//    }
    music.addEventListener("touchstart",function(event){
        if(audio.paused){
            audio.play();
            this.setAttribute("class","play");
            //this.style.animationPlayState="running";
            //this.style.webkitAnimationPlayState="running";
        }else{
            audio.pause();
            this.setAttribute("class","");  /*暂停会跳回原始位置*/
            //this.style.animationPlayState="paused";  /*兼容性很差*/
            //this.style.webkitAnimationPlayState="paused";
        }
    },false);
    //点击屏幕。开启好运2016
    page1.addEventListener("touchstart",function(event){
        page1.style.display="none";
        page2.style.display="block";
        page3.style.display="block";
        page3.style.top="100%";
        setTimeout(function(){
            page2.setAttribute("class","page fadeOut");
            page3.setAttribute("class","page fadeIn");
        },5500);
    },false);
};