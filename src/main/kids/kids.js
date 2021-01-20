$(document).ready(function () {
    var index = 0;
    var isdone = true;
    var i = 1;
    var brandimg = $("#brand .inner .brand_left .pic")


    //슬라이드 순서 초기화
    $("#kids .inner .fugure_visual .frame ul").children("li").last().prependTo("#kids .inner .fugure_visual .frame ul");


    /* kids */
    $("#kids .inner .slider_nav .next").on("click", function (e) {
        e.preventDefault();

        if (isdone) {
            isdone = false;
            //텍스트슬라이드
            if (index >= 3) { index = -1; }
            index++;
            $("#kids .inner .left_box ul li").eq(index - 1).addClass("down");
            setTimeout(function () {
                $("#kids .inner .left_box ul li").removeClass("down");
                $("#kids .inner .left_box ul li").removeClass("on");
                $("#kids .inner .left_box ul li").addClass("hidden");
                var li_txt = $("#kids .inner .left_box ul li").eq(index);
                li_txt.removeClass("hidden");
                li_txt.addClass("on");
                setTimeout(function () {
                    isdone = true
                }, 800);
            }, 500);

            //비쥬얼 슬라이드 
            $("#kids .inner .fugure_visual .frame ul").animate({ "margin-left": "-200%" }, 1000, function () {
                $("#kids .inner .fugure_visual .frame ul").children("li").first().appendTo("#kids .inner .fugure_visual .frame ul");
                $("#kids .inner .fugure_visual .frame ul").css({ "margin-left": "-100%" });
            })

            //네비 숫자, 라인네비
            if (i >= 4) i = 0;
            i++;
            $("#kids .inner .slider_nav p span").text(i);
            $("#kids .inner .line_nav .line_nav_cl").css({ "height": (25 * i) + "%" });
            brandimg.css({ background: "url(../img/brand" + (i) + ".jpg) no-repeat top/cover" });

        }




    })

    $("#kids .inner .slider_nav .prev").on("click", function (e) {
        e.preventDefault();

        if (isdone) {
            isdone = false;

            //텍스트슬라이드
            if (index <= -4) { index = 0; }
            index--;
            $("#kids .inner .left_box ul li").eq(index + 1).addClass("down");
            setTimeout(function () {
                $("#kids .inner .left_box ul li").removeClass("down");
                $("#kids .inner .left_box ul li").removeClass("on");
                $("#kids .inner .left_box ul li").addClass("hidden");
                var li_txt = $("#kids .inner .left_box ul li").eq(index);
                li_txt.removeClass("hidden");
                li_txt.addClass("on");
                setTimeout(function () {
                    isdone = true
                }, 800);
            }, 500);

            //비쥬얼 슬라이드
            $("#kids .inner .fugure_visual .frame ul").animate({ "margin-left": "0%" }, 1000, function () {
                $("#kids .inner .fugure_visual .frame ul").children("li").last().prependTo("#kids .inner .fugure_visual .frame ul");
                $("#kids .inner .fugure_visual .frame ul").css({ "margin-left": "-100%" });
            })

            //네비 숫자
            if (i <= 1) i = 5;
            i--;
            $("#kids .inner .slider_nav p span").text(i);
            $("#kids .inner .line_nav .line_nav_cl").css({ "height": (25 * i) + "%" });
            brandimg.css({ background: "url(../img/brand" + (i) + ".jpg) no-repeat top/cover" });

        }
    })
    
})