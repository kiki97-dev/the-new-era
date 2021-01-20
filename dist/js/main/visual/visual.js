$(document).ready(function () {
    var $txtli = $("#visual .wrap .txt_box .inner li");
    var $txtprev = $("#visual .wrap .txt_box .txt_box_btns .prev");
    var $txtnext = $("#visual .wrap .txt_box .txt_box_btns .next");
    var $productli = $("#visual .wrap .product ul li")
    var i = 0;
    var index = 0;
    var isDone = false;
    var num = 0;
    var navi = $("#visual .wrap .product .navi span")

    $txtnext.on("click", function (e) {
        e.preventDefault();

        if (!isDone) {
            isDone = true;
            txtnext(2); // li의 개수
            productnext(2) //li의 개수

            //숫자네비
            if (num >= 2) { num = -1; }
            num++;
            navi.text("0" + (num + 1) + "/");

        }
    })

    $txtprev.on("click", function (e) {
        e.preventDefault();

        if (!isDone) {
            isDone = true;
            txtprev(2); // li의 개수
            productprev(2); //li의 개수

            //숫자네비
            if (num <= 0) { num = 3; }
            num--;
            navi.text("0" + (num + 1) + "/");
        }
    })

    function txtnext(el) {
        i++;
        if (i > el) {
            i = 0;
        }
        //[0,1,2]
        $txtli.removeClass("on");
        $txtli.eq(i).addClass("next_down");
        $txtli.eq(i - 1).addClass("next_up");
        setTimeout(function () {
            $txtli.eq(i).removeClass("next_down");
            $txtli.eq(i - 1).removeClass("next_up");
            $txtli.eq(i).addClass("on");
            setTimeout(function () {
                isDone = false;
            }, 400)
        }, 300)


    }

    function txtprev(el) {
        i--;
        if (i < -el) {
            i = 0;
        }
        //[-2,-1,0]
        $txtli.removeClass("on");
        $txtli.eq(i).addClass("prev_up");
        $txtli.eq(i + 1).addClass("prev_down");
        setTimeout(function () {
            $txtli.eq(i).removeClass("prev_up");
            $txtli.eq(i + 1).removeClass("prev_down");
            $txtli.eq(i).addClass("on");
            setTimeout(function () {
                isDone = false;
            }, 400)
        }, 300)
    }

    function productnext(el) {
        index++;
        if (index >= el) {
            index = -1;
        }
        //[-1,0,1]
        $productli.removeClass("on_next");
        $productli.removeClass("on");
        $productli.eq(index).addClass("on");
        $productli.eq(index + 1).addClass("on_next");
        $productli.eq(index - 1).addClass("on_prev");
        setTimeout(function () {
            $productli.removeClass("on_prev");
        }, 500)
    }

    function productprev(el) {
        index--;
        if (index < -el) {
            index = 0;
        }
        // [-2,-1,0]
        $productli.eq(index).addClass("on_prev_base");
        $productli.removeClass("on_next");
        $productli.removeClass("on");
        $productli.eq(index + 1).addClass("on_next");
        setTimeout(function () {
            $productli.removeClass("on_prev_base");
            $productli.eq(index).addClass("on");
        }, 100)
    }



})