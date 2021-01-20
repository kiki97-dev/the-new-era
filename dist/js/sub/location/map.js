window.onload = function (){
//표시할 지역의 경도, 위도, 줌레벨 설정하여 인스턴스 생성
var mapContainer = document.querySelector('.showBox');
var branch_btns = document.querySelectorAll(".shop_list li");
var mapOption = {
    center: new kakao.maps.LatLng(37.561102, 126.983803),
    level: 4
};

//좌표값과 마커이미지 갯수만큼 반복을 돌며 마커생성하고 버튼 이벤트 연결
var markerOptions = [
    {
        title: '명동점',
        latlng: new kakao.maps.LatLng(37.561102, 126.983803),
        imgSrc: 'img/marker1.png',
        imgSize: new kakao.maps.Size(41, 52),
        imgPos: { offset: new kakao.maps.Point(20, 51) },
        button: branch_btns[0]
    },
    {
        title: '신세계백화점 강남점',
        latlng: new kakao.maps.LatLng(37.5084704, 126.9997726),
        imgSrc: 'img/marker1.png',
        imgSize: new kakao.maps.Size(41, 52),
        imgPos: { offset: new kakao.maps.Point(20, 51) },
        button: branch_btns[1]
    },
    {
        title: '현대백화점 목동점',
        latlng: new kakao.maps.LatLng(37.526814, 126.875021),
        imgSrc: 'img/marker1.png',
        imgSize: new kakao.maps.Size(41, 52),
        imgPos: { offset: new kakao.maps.Point(20, 51) },
        button: branch_btns[2]
    },
    {
        title: '현대백화점 중동점(키즈)',
        latlng: new kakao.maps.LatLng(37.504481, 126.760952),
        imgSrc: 'img/marker1.png',
        imgSize: new kakao.maps.Size(41, 52),
        imgPos: { offset: new kakao.maps.Point(20, 51) },
        button: branch_btns[3]
    },
    {
        title: '현대백화점 중동점',
        latlng: new kakao.maps.LatLng(37.504427, 126.760854),
        imgSrc: 'img/marker1.png',
        imgSize: new kakao.maps.Size(41, 52),
        imgPos: { offset: new kakao.maps.Point(20, 51) },
        button: branch_btns[4]
    },
    {
        title: '인천 스퀘어원점',
        latlng: new kakao.maps.LatLng(37.406106, 126.683724),
        imgSrc: 'img/marker1.png',
        imgSize: new kakao.maps.Size(41, 52),
        imgPos: { offset: new kakao.maps.Point(20, 51) },
        button: branch_btns[5]
    },
    {
        title: '부평점',
        latlng: new kakao.maps.LatLng(37.493233, 126.723801),
        imgSrc: 'img/marker1.png',
        imgSize: new kakao.maps.Size(41, 52),
        imgPos: { offset: new kakao.maps.Point(20, 51) },
        button: branch_btns[6]
    },


];


//초기 화면 맵 생성
var map = new kakao.maps.Map(mapContainer, mapOption);


//스카이뷰 컨트롤 표시
var mapTypeControl = new kakao.maps.MapTypeControl();
map.addControl(mapTypeControl, daum.maps.ControlPosition.BOTTOMRIGHT);


//줌 컨트롤 표시
var zoomControl = new kakao.maps.ZoomControl();
map.addControl(zoomControl, daum.maps.ControlPosition.TOPRIGHT);


//버튼클릭시 교통정보 표시  
var t_on = document.querySelectorAll('.traffic li')[0];
var t_off = document.querySelectorAll('.traffic li')[1];

t_on.onclick = function () {
    map.removeOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC);
    map.addOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC);
    return false;
}
t_off.onclick = function () {
    map.removeOverlayMapTypeId(daum.maps.MapTypeId.TRAFFIC);
    return false;
}



var drag = true; //드래그 가능
var zoom = true; //휠로 zoom가능



//마커옵션의 갯수만큼 반복을 돌며 지점 보기 버튼 이벤트 연결

for (var i = 0; i < markerOptions.length; i++) {
    new kakao.maps.Marker({
        map: map,
        position: markerOptions[i].latlng,
        title: markerOptions[i].title,
        image: new kakao.maps.MarkerImage(markerOptions[i].imgSrc, markerOptions[i].imgSize, markerOptions[i].imgPos)
    });

    (function (index) {
        markerOptions[index].button.onclick = function (e) {
            e.preventDefault();
            for (var k = 0; k < markerOptions.length; k++) {
                markerOptions[k].button.classList.remove("on");
            }
            markerOptions[index].button.classList.add("on");
            
            moveTo(markerOptions[index].latlng);
        }
    })(i);


}

//브라우저 리사이즈 시 -이벤트는 addEventListener버전으로 변경
window.addEventListener("resize", function () {
    var active_btn = document.querySelector(".shop_list li.on");

    var active_index = parseInt(active_btn.getAttribute("data-index")) - 1;
    map.setCenter(markerOptions[active_index].latlng);
})



//지점으로 맵 이동 함수 정의
function moveTo(target) {
    var moveLatLan = target;
    map.setCenter(moveLatLan);
    return false;
}


//드래그기능 활성화 
setDraggable(drag);
function setDraggable(draggable) {
    map.setDraggable(draggable);
}


//줌기능 활성화
setZoomable(zoom);
function setZoomable(zoomable) {
    map.setZoomable(zoomable);
}







}