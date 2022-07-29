$(document).ready(function () {

    //전역 변수 설정
    var $boxs = $(".myScroll");
    var len = $boxs.length;
    var posArr;
    var baseLine = -500;

    //처음 로딩시 해당 박스의 세로 위치값을 구해는 함수 호출
    setPos();

    //브라우저 리사이즈시 다시 세로 위치값 갱신
    $(window).on("resize", setPos);

    //브라우저 스크롤시 해당 스크롤값과 박스의 위치값을 비교해서
    //자동으로 버튼 활성화 해주는 함수 호출
    $(window).on("scroll", function () {
        var scroll = $(this).scrollTop();
        activateBtn(scroll);
    });

    //박스 갯수만큼 반복을 돌면서 전역변수  posArr에 세로 위치값을 저장하는 함수
    function setPos() {
        posArr = [];
        for (var i = 0; i < len; i++) {
            posArr.push($boxs.eq(i).offset().top);
        }
    }

    //현재 스크롤 위치값을 인수로 받아서
    //스크롤 값과 박스의 위치를 비교해서 해당하는 버튼만 활성화 시키는 함수
    function activateBtn(scroll) {
        for (var i = 0; i < len; i++) {
            if (scroll >= posArr[i] + baseLine) {
                $boxs.eq(i).addClass("on");
            }
        }
    }



});