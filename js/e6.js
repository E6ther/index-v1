function Type() {
    var str = 'SKJI';
    var st = 0;
    var en = 0;

    function typing() {
        var divTyping = document.getElementById('h1');
        if (en <= str.length) {
            /*if(str[en] === 'x') {

            }*/
            divTyping.innerHTML = str.slice(0, en++) + '_';
            setTimeout('typing()', 200);//递归调用
        }
        else {
            divTyping.innerHTML = str;//结束打字,移除 _ 光标
        }
    }

    typing();
}

window.onload = function () {
    var oDiv = document.getElementById('div1');//获取div的DOM对象
    oDiv.onmouseover = function () //鼠标移入方法
    {
        startMove(100);
    };
    oDiv.onmouseout = function () //鼠标移出方法
    {
        startMove(30);
    };
}
var timer = null;//时间对象
var alpha = 30;//透明度初始值
function startMove(iTarget) {
    var oDiv = document.getElementById('div1');
    clearInterval(timer);//清空时间对象
    timer = setInterval(function () {
        var speed = 0;
        if (alpha < iTarget) {
            speed = 5;
        }
        else {
            speed = -5;
        }
        if (alpha == iTarget) {
            clearInterval(timer);
        }
        else {
            alpha += speed; //透明度值增加效果
            oDiv.style.filter = 'alpha(opacity:' + alpha + ')'; //设置IE透明度
            oDiv.style.opacity = alpha / 100; //设置其他浏览器
        }
    }, 30);
}