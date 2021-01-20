$(document).ready(function () {
    /* collection */
    $("#collection .inner #tab dt a").on("click focusin", function (e) {
        e.preventDefault();
        var target = $(this).attr("href");

        $("#collection .inner #tab dt a").removeClass("on");
        $("#collection .inner #tab dd").hide();
        $(this).addClass("on");
        $(target).show();
    })
})