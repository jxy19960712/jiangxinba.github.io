/**
 * Created by JXY on 2017/5/31.
 */
$(function () {
    var currentY=0;
    var maxTop = 0;
    var minTop = ($('.cover-box').height()) - ($('.cp-list').height())
    touchCilck.tap($('.cp-list')[0], function (e) {
        var targetmove = -($(e.target).parent().index() * $(e.target).height())

        console.log(targetmove);
        targetmove = targetmove > maxTop ? maxTop : targetmove;
        targetmove = targetmove < minTop ? minTop : targetmove;
        console.log(targetmove);
        currentY=targetmove;
        $('.cp-list').css({
            'transform': 'translateY(' + targetmove + 'px)',
            'transition': 'transform 0.3s'
        }).find('li').removeClass('current');
        e.target.parentNode.classList.add('current');
    })





    var startY=0;
    var moveY=0;
    var resultY=0;
    $('.cp-list').on('touchstart',function (e) {
        startY=e.targetTouches[0].clientY
    })
        .on('touchmove',function (e) {
            moveY=e.targetTouches[0].clientY
            resultY=moveY-startY
            $('.cp-list').css({'transform':'translateY('+(resultY+currentY)+'px)','transition':'none'})
        })
        .on('touchend',function () {
            currentY=resultY+currentY;
            console.log(currentY);
            if(currentY<minTop){
                $('.cp-list').css({
                    'transform': 'translateY(' + minTop + 'px)',
                    'transition': 'transform 0.3s'
                })
                currentY=minTop
            }
            else if(currentY>maxTop){
                $('.cp-list').css({
                    'transform': 'translateY(' + maxTop + 'px)',
                    'transition': 'transform 0.3s'
                })
                currentY=maxTop
            }
        })

// ------------------------左侧tab滑动结束---------------





    var RcurrentY=0;
    var RstartY=0;
    var RmoveY=0;
    var RresultY=0;
    var RmaxTop=0;
    var RminTop=($('.sp-main').height()) - ($('.cover-box-2').height());

    $('.cover-box-2').on('touchstart',function (e) {
        RstartY=e.targetTouches[0].clientY
    })
        .on('touchmove',function (e) {
            RmoveY=e.targetTouches[0].clientY
            RresultY=RmoveY-RstartY
            $('.cover-box-2').css({'transform':'translateY('+(RresultY+RcurrentY)+'px)','transition':'none'})
        })
        .on('touchend',function () {
            RcurrentY=RresultY+RcurrentY;
            console.log(RcurrentY);
            if(RcurrentY<RminTop){
                $('.cover-box-2').css({
                    'transform': 'translateY(' + RminTop + 'px)',
                    'transition': 'transform 0.3s'
                })
                RcurrentY=RminTop
            }
            else if(RcurrentY>RmaxTop){
                $('.cover-box-2').css({
                    'transform': 'translateY(' + RmaxTop + 'px)',
                    'transition': 'transform 0.3s'
                })
                RcurrentY=RmaxTop
            }
        })
})
// ------------------------右侧tab滑动结束---------------

