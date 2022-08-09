$("#dn").change(function() {
    if(this.checked) {//Noite
        $("#header").addClass("header-black");
        $("#header").removeClass("header-white");
        $("li, a").addClass("white-font");
        $("li, a").removeClass("black-font");
        $(".img-circle").removeClass("img-circle-black");
        $(".img-circle").addClass("img-circle-white");
        $("#main-background").addClass("background-main-black");
        $("#main-background").removeClass("background-main-white");
        $("#main-background").addClass("white-font");
        $("#main-background").removeClass("black-font");
    }else{//Dia
        $("#header").addClass("header-white");
        $("#header").removeClass("header-black");
        $("li, a").addClass("black-font");
        $("li, a").removeClass("white-font");
        $(".img-circle").removeClass("img-circle-white");
        $(".img-circle").addClass("img-circle-black");
        $("#main-background").removeClass("background-main-black");
        $("#main-background").addClass("background-main-white");
        $("#main-background").removeClass("white-font");
        $("#main-background").addClass("black-font");
    }
});

window.onscroll = function() {
        scroll();
    }

    function scroll() {
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            
            document.getElementById("header").style.width = "100%";
            document.getElementById("header").style.borderRadius = "0";
            document.getElementById("header").style.position = "fixed";
            document.getElementById("header").style.marginTop = "6.5rem";
            document.getElementById("header").style.padding = ".3rem 2rem";
            document.getElementById("header").style.zIndex = "999";
            document.getElementById("bannerpage").style.marginTop = "17rem";
            
        }
        else {
            
            document.getElementById("header").style.width = "80%";
            document.getElementById("header").style.borderRadius = "70px";
            document.getElementById("header").style.position = "relative";
            document.getElementById("header").style.marginTop = "2rem";
            document.getElementById("header").style.padding = "1rem 2rem";
            document.getElementById("bannerpage").style.marginTop = "6rem";
            
        }
    }

    var myVar;
    var bodybg = document.getElementById("bodybg");

    function loaderpage() {
        myVar = setTimeout(showPage, 0);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        bodybg.classList.remove("bg-black");
        document.getElementById("myDiv").style.display = "block";
    }

    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            nav: true,
            dots:false,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            navText:["<div class='nav-btn prev-slide'></div>","<div class='nav-btn next-slide'></div>"],
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 3
                },
                1000: {
                    items: 3
                }
            }         
            
        })
    });