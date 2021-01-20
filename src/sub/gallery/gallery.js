$(document).ready(function () {

    /*-------------------전역변수------------------------- */
    var url = 'https://www.flickr.com/services/rest/?method=flickr.interestingness.getList';
    var url_search = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
    var key = 'b1a35c8b5b88c65f2ae4f3b3c20f96d5';

    var target = document.querySelector(".gallery_con_list");


    /* -------------------이벤트 연결---------------------- */
    //브라우저 로딩시 Flickr 데이터 호출
    getFlickr(url, key, 30);

    //리스트의 썸네일 클릭시
    $("body").on("click", ".gallery_con ul li a", function (e) {
        e.preventDefault();
        var imgSrc = $(this).attr("href");
        createPop(imgSrc);
        $("body").css({ overflow: "hidden" });
    });

    //검색버튼 클릭시
    $(".gallery_con form fieldset button").on("click", function (e) {
        e.preventDefault();
        $(".gallery_con_list").removeClass("on");
        var tags = $(this).prev().val();
        console.log(tags);
        getFlickr(url_search, key, 30, tags);
    });


    /* ----------------------함수 정의부------------------------------ */

    //데이터 호출 함수 정의
    function getFlickr(url, key, num, tags) {
        $.ajax({
            url: url,
            dataType: "json",
            data: {
                api_key: key,
                per_page: num,
                format: "json",
                nojsoncallback: 1,
                tags: tags,
                tagmode: "any",
                privacy_filter: 5
            }
        })
            .success(function (data) {
                console.log(data.photos.photo);
                var item = data.photos.photo;

                //"https://live.staticflickr.com//"+서버아이디+"/"+이이미아이디+"_"+이미지비번+"_b.jpg"

                $(".gallery_con ul").empty();

                $(item).each(function (index, data) {

                    var text = this.title;
                    if (!this.title) text = "Default text";
                    $(".gallery_con_list")
                        .append(
                            $("<li>")
                                .append(
                                    $("<div class='gallery_con_listbox'>")
                                        .append(
                                            $("<a>")
                                                .attr({
                                                    href: "https://live.staticflickr.com/" + this.server + "/" + this.id + "_" + this.secret + "_b.jpg"
                                                })
                                                .append(
                                                    $("<img>")
                                                        .attr({
                                                            src: "https://live.staticflickr.com/" + this.server + "/" + this.id + "_" + this.secret + "_m.jpg",
                                                            onerror: "javascript:this.parentNode.parentNode.style='display:none;'"
                                                            //onerror : "javascript:this.src = 'img/defualt.png'"
                                                        })
                                                ),
                                            $("<h3>").text(text),
                                            $("<p>").text(this.id),
                                            $("<p>").text(this.owner),

                                        )

                                )
                        )
                });

                setTimeout(function () {
                    iso = new Isotope(target, {
                        itemSelector: '.gallery_con_list>li',
                        columnWidth: '.gallery_con_list>li',
                        transitionDuration: '0.8s',
                        percentPosition: true
                    });

                    $(".gallery_con_list").addClass("on");
                }, 500);
            })
            .error(function (err) {
                console.error(err);
            })
    }

    //팝업 생성 함수 정의
    function createPop(imgSrc) {
        $("body").append(
            $("<aside class='pop'>")
                .append(
                    $("<a href='#' class='close'>"),
                    $("<img>").attr("src", imgSrc),
                )
        );
        $(".pop").fadeIn();
    }
});