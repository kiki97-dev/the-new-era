$(document).ready(function () {

    callData({
        target: "#vidGallery",
        count: 4,
        key: "AIzaSyDW49x89g7dpoHzKKWt45oD7sFqwesYXDE",
        playList: "PLtl3DHC8svH-Hl3sFLfnilMR9actrdmlH",
        Location: ".youtube1"
    });

    callData({
        target: "#vidGallery",
        count: 4,
        key: "AIzaSyDW49x89g7dpoHzKKWt45oD7sFqwesYXDE",
        playList: "PLtl3DHC8svH92o5N-a_xKP4EBAda21IS3",
        Location: ".youtube2"
    });

    callData({
        target: "#vidGallery",
        count: 4,
        key: "AIzaSyDW49x89g7dpoHzKKWt45oD7sFqwesYXDE",
        playList: "PLtl3DHC8svH-YXlT02syP3b2K7nA3okW_",
        Location: ".youtube3"
    });

    //리스트 썸네일 클릭시 팝업호출및 유튜브 영상호출
    $("body").on("click", ".youtube ul li a", function (e) {
        e.preventDefault();

        var vidId = $(this).attr("href");

        createPop({
            width: "100%",
            height: "100vh",
            bg: "rgba(0,0,0,0.9)",
            vidId: vidId
        });

        $("body").css({ overflow: "hidden" });
    });


    //팝업 닫기버튼 클릭시 레이어 팝업 제거
    $("body").on("click", ".pop .close", function (e) {
        e.preventDefault();

        $(this).parent(".pop").remove();
        $("body").css({ overflow: "auto" });
    })

    function callData(opt) {
        $.ajax({
            url: 'https://www.googleapis.com/youtube/v3/playlistItems',
            dataType: "jsonp",
            data: {
                part: 'snippet',
                key: opt.key,
                maxResults: opt.count,
                playlistId: opt.playList
            }
        })
            .success(function (data) {
                console.log(data.items);
                var item = data.items;

                $(item).each(function (index, data) {
                    $(opt.Location)
                        .append(
                            $("<li>")
                                .append(
                                    $("<a>").attr({ href: data.snippet.resourceId.videoId })
                                        .append(
                                            $("<img>").attr({ src: data.snippet.thumbnails.high.url })
                                        ),
                                    $("<h3>").text(data.snippet.title),
                                    $("<span>").text(data.snippet.publishedAt.slice(0, -10))
                                )
                        )
                })
            })
            .error(function (err) {
                console.error(err);
            })


    }

    function createPop(opt) {
        $("body")
            .append(
                $("<aside class='pop'>")
                    .append(
                        $("<a href='#' class='close'>"),
                        //$("<img src='img/loading.gif'>"),
                        $("<div class='con'>")
                            .append(
                                $("<iframe>")
                                    .attr({
                                        src: "https://www.youtube.com/embed/" + opt.vidId,
                                        width: "100%", height: "100%", frameborder: 0,
                                        allowfullscreen: true
                                    })
                            )
                    )
            )//append ends

        /* 이미지로딩없애주는거
        setTimeout(function () {
            $(".pop .con").fadeIn(500, function () {
                $(this).prev().remove();
            });
        }, 1000);
        */

       $(".pop").fadeIn();

    }
});