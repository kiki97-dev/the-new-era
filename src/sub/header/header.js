$(document).on("ready", function () {
    var $header = $("#header");
    var $gnb_li = $("#gnb>li");
    var $sub = $gnb_li.find(".gnb_2depth");
    var speed = 500;

    $gnb_li.on("mouseenter focusin", function () {
        openSub(this);
    });

    $gnb_li.on("mouseleave focusout", function () {
        closeSub(this);
    });

    function openSub(el) {

        $(el).children(".gnb_2depth").stop().slideDown(speed);
        $(".gnb_bg").stop().slideDown(speed);
        $(el).children("a").addClass("on");
        $(el).children(".gnb_2depth").find(".icon_box").addClass("on");
    }

    function closeSub(el) {
        $(el).children(".gnb_2depth").stop().slideUp(speed / 2);
        $(".gnb_bg").stop().slideUp(speed / 2, function () {
            $(this).slideUp(speed / 2);
        });
        $(el).children("a").removeClass("on");
        $(el).children(".gnb_2depth").find(".icon_box").removeClass("on");
    }

});