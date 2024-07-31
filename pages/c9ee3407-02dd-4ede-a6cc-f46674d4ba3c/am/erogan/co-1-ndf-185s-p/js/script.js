var resultWrapper = document.querySelector('.spin-result-wrapper');
var wheel = document.querySelector('.wheel-img');
var params = window.location.search.replace('?', '').split('&').reduce(function (p, e) {
    var par = e.split('=');
    p[decodeURIComponent(par[0])] = decodeURIComponent(par[1]);
    return p;
}, {});

function spin() {
    if (!wheel.classList.contains('rotated')) {
        wheel.classList.add('super-rotation');
        setTimeout(function () {
            resultWrapper.style.display = "block";
        }, 2000);
        setTimeout(function () {
            $('.spin-wrapper').slideUp();
            $('.order_block').slideDown();
            //start_timer();
            $('#timer-countdown').timeTo({
                displayHours: false,
                seconds: 601,
                theme: "black",
                fontSize: 30
            });
        }, 6000);
        wheel.classList.add('rotated');
    }
}

document.querySelector('.cursor-text').addEventListener('click', spin);

var closePopup = document.querySelector('.close-popup');
$('.close-popup, .pop-up-button').click(function (e) {
    $('html, body').stop().animate({
        scrollTop: $('#frm').offset().top
    }, 777);
    e.preventDefault();
    $('.spin-result-wrapper').fadeOut();
});
/*
var time = 600;
var intr;

function start_timer() {
    intr = setInterval(tick, 1000);
}

function tick() {
    time = time - 1;
    var mins = Math.floor(time / 60);
    var secs = time - mins * 60;
    if (mins == 0 && secs == 0) {
        clearInterval(intr);
    }
    secs = secs >= 10 ? secs : "0" + secs;
    $("#min").html("0" + mins);
    $("#sec").html(secs);
}*/