
$(document).ready(function(){

  //=============================
    // Sticky Start
    //=============================

    $(window).on("scroll", function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 200) {
            $(".fixed-menu").removeClass("sticky");
        } else {
            $(".fixed-menu").addClass("sticky");
        }
    });
        //=============================
    // MOBILE Nav
    //=============================

    $(".navbar-toggler").on("click", function () {
        $(".main-nav").slideToggle(500);
    });

    $('.owl-carousel').owlCarousel({
        margin:10,
        loop:true,
        autoWidth:true,
        items:4
    });

    $(".search-icon-bar a").click(function(){
        $(".search-popup").toggle(500);
      });

  });
 