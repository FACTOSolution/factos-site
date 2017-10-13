var sld = document.getElementsByClassName('sld');
for (var i = 0; i < sld.length; i++) {
    sld_func(sld[i]);
}

function status() {
    this.flag = 0;
}

var status_arr = [];

function sld_func(element) {
    console.log(element)
    var itens = element.getElementsByClassName('sld-item');

    var nav_left = element.getElementsByClassName('nav_left')[0];
    var nav_right = element.getElementsByClassName('nav_right')[0];

    for (var i = 1; i < itens.length; i++) {
        //itens[i].style.opacity = '0';
        itens[i].style.display = 'none';
        itens[i].classList.remove('active');
    }

    itens[0].style.display = 'inline-block';
    //itens[i].style.opacity = '1';
    itens[0].classList.add('active');

    console.log(nav_left)

    function nav(direction) {
        console.log('ok')
        var active = element.getElementsByClassName('active')[0];
        for (var i = 0; i < itens.length; i++) {
            if (active == itens[i]) {
                current = i;
                break;
            }
        }
        next = (current + direction + itens.length) % itens.length;
        itens[current].style.display = 'none';
        itens[current].classList.remove('active');
        //itens[current].classList.add('desactive');
        itens[next].style.display = 'inline-block';
        //itens[current].classList.remove('desactive');
        itens[next].classList.add('active');
    }

    nav_left.onclick = function () {
        nav(-1);
    }
    nav_right.onclick = function () {
        nav(1);
    }

}

window.animationFrame = (function () {
    return window.requestAnimationFrame ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.oRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback, element) {
            window.setTimeout(callback, 1000 / 60);
        };
})();

window.cancelAnimation = (function() {
    return window.cancelAnimationFrame ||
        window.mozCancelAnimationFrame;
})();

var anim = null;

function anim_scroll(dest, tx){
    var orig = window.scrollY - tx;
    var a = orig, b = dest;
    if(tx > 0) {b = orig; a = dest;}
	var maxy = document.body.scrollHeight-screen.height;
    if(a > b || orig > maxy ){
        orig = dest;
        cancelAnimation(anim);
        window.scroll(0, orig);
    }else {
        window.scroll(0, orig);
        anim = animationFrame(function(){anim_scroll(dest, tx)})
    }
}

function scrolling() {
    var scroll_itens = document.getElementsByTagName('a');
    var hash = '';
    this.scroll = function () {
        for (var i = 0; i < scroll_itens.length; i++) {
            hash = scroll_itens[i].getAttribute('name');
            if (hash != null && hash[0] == '_') {
                scroll_itens[i].onclick = function () {
                    var head = document.getElementById('menu');
                    var hash = this.getAttribute('name');
                    var target = document.getElementsByName('' + hash.substring(1, hash.length))[0];
                    var tx = 50;
                    var dest = target.offsetTop - head.offsetHeight;
                    if(window.scrollY < dest) tx =-tx;
                    anim = animationFrame(
                        function(){
                            anim_scroll(dest, tx);
                        }
                    );
                }
            }
        }
    }
}

var sc = new scrolling();
sc.scroll();
