$(".search-btn").click(function(){
    $(".wrapper").addClass("active");
    $(this).css("display", "none");
    $(".search-data").fadeIn(500);
    // $(".close-btn").fadeIn(200);
    $(".search-data .line").addClass("active");
    $(".v-center").addClass("active");
    $(".v-center").fadeOut(300);
    $(".banner-section").fadeOut(300);
    $(".banner-section").addClass("active");
    $(".section-p1").fadeOut(300);
    $(".section-p1").addClass("active");
    $(".close-btn").addClass("active");
    setTimeout(function(){
        $("input").focus();
        $(".search-data label").fadeIn(500);
        $(".search-data span").fadeIn(500);
    }, 800);
});
$(".close-btn").click(function(){
    $(".wrapper").removeClass("active");
    // $(this).css("display", "none");
    $(".search-btn").fadeIn(800);
    $(".search-data").fadeOut(500);
    // $(".close-btn").fadeOut(100);
    $(".search-data .line").removeClass("active");
    $(".v-center").removeClass("active");
    $(".close-btn").removeClass("active");
    $(".v-center").fadeIn(400);
    $(".banner-section").removeClass("active");
    $(".banner-section").fadeIn(400);
    $(".section-p1").removeClass("active");
    $(".section-p1").fadeIn(400);
    // onclick empty textarea
        $("input").focus();
    $("input").val("");
    // 
    $(".search-data label").fadeOut(500);
    $(".search-data span").fadeOut(500);
});