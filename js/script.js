// JavaScript
// wow js 
wow = new WOW(
    {
        boxClass: 'wow',      // default
        animateClass: 'animated', // default
        offset: 0,          // default
        mobile: true,       // default
        live: true        // default
    }
)
wow.init();




// jQuery

$(document).ready(function () {
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    var countdown = $("#countdown").countdown360({
        radius: 60,
        seconds: 10,
        fontColor: '#FFFFFF',
        autostart: false,
        onComplete: function () { console.log('done') }

    });

    countdown.start();
});