(function ($) {
    $.fn.typewriter = function () {
        this.each(function () {
            var $ele = $(this),
                str = $ele.html(),
                progress = 0;
            $ele.html("");
            var timer = setInterval(function () {
                var current = str.substr(progress, 1);
                progress++;
                $ele.html(str.substring(0, progress) + (progress & 1 ? "_" : ""));
                if (progress >= str.length) {
                    clearInterval(timer);
                }
            }, 75);
        });
        return this;
    };
})(jQuery);

function timeElapse(date) {
    var current = new Date();
    var seconds = (current - date) / 1000;
    var days = Math.floor(seconds / (3600 * 24));
    seconds %= 3600 * 24;
    var hours = Math.floor(seconds / 3600);
    seconds %= 3600;
    var minutes = Math.floor(seconds / 60);

    $("#clock").html(
        "Days <span class='digit'>" + days +
        "</span> Hours <span class='digit'>" + hours +
        "</span> Minutes <span class='digit'>" + minutes + "</span>"
    );
}
