//banner区域
var n = 0;
var s = 0;

auto()
function auto() {
    timer = setInterval(function () {
        n++;
        n = n % 4;
        s = -n * 18.75;
        tab()
    }, 3000)
}

function tab() {
    $('.banner_area')[0].style.transition = '0.5s';
    $('.banner_area')[0].style.transform = 'translateX(' + s + 'rem)';
    for (let i = 0; i < $('.tag').length; i++) {
        $('.tag')[i].style.opacity = 0.3;
    }
    $('.tag')[n].style.opacity = 1;
}

$('.banner')[0].addEventListener('touchstart', start);
$('.banner')[0].addEventListener('touchmove', move)
$('.banner')[0].addEventListener('touchend', end)

function start(ev) {
    $('.banner_area')[0].style.transition = 'none';
    clearInterval(timer);
    var ev = ev.changedTouches[0];
    Xold = ev.pageX / 40;
    //原图片位置
    picS = s;
}

function move(ev) {
    //阻止浏览器默认事件，否则轮播的移动会带着界面移动
    ev.preventDefault()
    var ev = ev.changedTouches[0];
    var discount = ev.pageX / 40 - Xold;

    //现图片位置
    s = picS + discount;
    if (s > 9.375) {
        s = 0
    } else if (s < -65.625) {
        s = -56.25
    }
    $('.banner_area')[0].style.transform = 'translateX(' + s + 'rem)';
}

function end(ev) {
    n = Math.abs(Math.round(s / 18.75));
    s = -n * 18.75;
    $('.banner_area')[0].style.transform = 'translateX(' + s + 'rem)';
    if (n < 0) {
        n = 0
    } else if (n > 4) {
        n = 4
    }
    //松开手后继续自动轮播
    auto()
    //滑动效果
    tab()
}
//点击对应的点=>banner图片
$(".tag").each(function (index,ele) {
    $(this).on('touchstart', (function (ev) {
        ev.preventDefault()
        clearInterval(timer);
         n = index;
         s = -n*18.75
        tab()
    }
));
});

//会员中心
$('.first_mem')[0].addEventListener('touchstart', function (e) {
    e.preventDefault();
    window.location.href = "member.html"
}, false)
//我的订单
$('.first_order')[0].addEventListener('touchstart', function (e) {
    e.preventDefault();
    window.location.href = "order_list.html"
}, false)
//财务明细
$('.first_cwmx')[0].addEventListener('touchstart', function (e) {
    e.preventDefault();
    window.location.href = "cwmx.html"
}, false)
