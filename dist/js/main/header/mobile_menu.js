$(document).on("ready", function () {
    var btn = $(".btncall");
    var menu_mo = $(".menu_mo");

    btn.on("click", function (e) {
        e.preventDefault();
        $(".bar").toggleClass("on");
        $(".mobile_menu").toggleClass("on");

    })

    window.onresize = function () {
        var wid = window.innerWidth;
        if (wid > 1179) { 
            $(".mobile_menu").removeClass("on"); 
            $(".bar").removeClass("on");
        }
    }
});