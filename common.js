/**
 * Created by JXY on 2017/4/22.
 */
function i$(id) {
    return document.getElementById(id)
};

// 获取第一个元素的兼容代码---------------------------------------------------
function getFirstChildren(element) {
    if(typeof element.firstElementChild!="undefined"){
        return element.firstElementChild;
    }
    else{
        var fstND=element.firstChild;
        while(fstND.nodeType!=1){
            fstND=fstND.nextSibling;
        }
        return fstND;
    };
};
// 匀速移动动画封装函数---------------------------------------------------
function animate(element,attr,fn) {
    clearInterval(element.timeid)
    element.timeid=setInterval(function () {
        var flag=true;
        for (var i in attr){
            if(i=="opacity"){
                var now =getComputedStyleAttr(element,i)*100;
                var step=attr[i]*100-now>0?1:-1;
                if(Math.abs(attr[i]*100-now)>Math.abs(step)){
                    element.style[i]=(now+=step)/100
                    flag=false
                }
            }
            else if(i=="zIndex"){
                element.style[i]=attr[i]
                flag=false
            }
            else{
                var now = parseInt(getComputedStyleAttr(element,i));
                var step=attr[i]-now>0?1:-1;
                if(Math.abs(attr[i]-now)>Math.abs(step)){
                    element.style[i]=(now+=step)+"px";
                    flag=false
                }
            }
        }
        if(flag==true){
        clearInterval(element.timeid)
            if(fn){
            fn()
            }
        }
    },1)
};
// 终级缓速动画封装函数---------------------------------------------------
function animateSlow(element,attr,fn) {
    clearInterval(element.timeid)
    element.timeid=setInterval(function () {
        var flag=true;      //这里引用一个变量来作为所有条件达成的标记
        for( var i in attr){    //这里使用for in 遍历json里所有的数据  i为下标  i即为属性名
            if(i=="opacity"){
                var now =getComputedStyleAttr(element,i)*100;
                var step = (attr[i]*100 - now) / 10;
                step=step>0?Math.ceil(step):Math.floor(step)
                if(now!==attr[i]*100){
                    element.style[i]=(now+=step)/100;
                    flag=false;
                }
            }
            else if(i=="zIndex"){
                element.style[i]=attr[i];
            }
            else{
                var now =parseInt(getComputedStyleAttr(element,i));
                var step=(attr[i]-now)/10;
                step=step>0?Math.ceil(step):Math.floor(step)
                if(now!==attr[i]){
                    element.style[i]=(now+=step)+"px";
                    flag=false;
                }
            }
        }
        if(flag){
            clearInterval(element.timeid);
            if(fn){
                fn()
            }
        }
    },20)
};
// 获取任意元素的任意计算后的任意属性值---------------------------------------------------
function getComputedStyleAttr(element,attr) {
    return window.getComputedStyle?window.getComputedStyle(element,null)[attr]:element.currentStyle[attr]
};
//clinet兼容函数
function getclinet() {
    return{
        width:window.innerWidth||document.body.clientWidth||document.documentElement.clientWidth,
        height:window.innerHeight||document.body.clientHeight||document.documentElement.clientHeight
    }
}
// 获取滚轮卷曲上边距和左边距的封装函数---------------------------------------------------
function getScroll() {
    return{
        left:document.body.scrollLeft||document.documentElement.scrollLeft||window.pageXOffset||0,
        top:document.body.scrollTop||document.documentElement.scrollTop||window.pageYOffset||0
    }
}

// 让文件选择表单使用文本格式读取文件   JQ--------------------------------------------------------
// $(function (input,target) {
//     input.on('change',function () {
//         var fileObj=new FileReader();
//         fileObj.readAsText(this.files[0],'gbk')
//         fileObj.onload=function () {
//             target.innerHTML=fileObj.result
//         }
//     })
// })



// 让文件选择表单使用路径格式读取文件   JQ--------------------------------------------------------
// $(function (input,target) {
//     input.on('change',function () {
//         var fileObj=new FileReader();
//         fileObj.readAsDataURL(this.files[0])
//         fileObj.onload=function () {
//             target.innerHTML=fileObj.result
//         }
//     })
// })





// ----------------------------------触屏点击插件-------------------------------
var touchCilck={
    tap:function (obj,callback) {
        var timestart=0;
        var move=false;
        obj.addEventListener('touchstart',function () {
            timestart=Date.now()
        })
        obj.addEventListener('touchmove',function () {
            move=true;
        })
        obj.addEventListener('touchend',function (e) {
            if(!move&&Date.now()-timestart<150){
                callback&&callback(e);
            }
            timestart=0;
            move=false;
        })
    }
}


