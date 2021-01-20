$(document).ready(function () {
    var $faqList = $(".faq_list dt a");
    var $faqListdl = $(".faq_list dd");
    var $faqNav = $(".faq_nav li a")
    var $direction = $(".direction")

    $faqList.on("click", function (e) {
        e.preventDefault();

        var ison = $(this).hasClass("on");
        $faqList.removeClass("on")
        $faqListdl.slideUp();
        $direction.removeClass("on")

        if (ison) {
            $faqList.removeClass("on")
            $direction.removeClass("on")
            $faqListdl.slideUp();
        } else {
            $(this).addClass("on")
            $(this).find(".direction").addClass("on")
            $(this).parent().next("dd").slideDown();
        }
    })

    $faqNav.on("click", function (e) {
        e.preventDefault();

        $faqNav.removeClass("on");
        $(this).addClass("on");
    })
})