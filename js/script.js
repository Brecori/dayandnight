// Inicio esquema dia e noite
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
        $("#market").addClass("white-font");
        $("#market").removeClass("black-font");
        $("#market").addClass("background-main-black");
        $("#market").removeClass("background-main-white");
        $("#all, #a, #b, #c, #d").removeClass("btn-primary");
        $("#all, #a, #b, #c, #d").addClass("btn-secondary");


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
        $("#market").addClass("black-font");
        $("#market").removeClass("white-font");
        $("#market").addClass("background-main-white");
        $("#market").removeClass("background-main-black");
        $("#all, #a, #b, #c, #d").addClass("btn-primary");
        $("#all, #a, #b, #c, #d").removeClass("btn-secondary");
    }
});

// Fim esquema dia e noite

// Inicio função scroll
window.onscroll = function() {
        scroll();
    }

    function scroll() {

        if (window.matchMedia("(min-width:992px)").matches){
        if(document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {

            document.getElementById("header").style.width = "100%";
            document.getElementById("header").style.borderRadius = "0";
            document.getElementById("header").style.position = "fixed";
            document.getElementById("header").style.marginTop = "6.5rem";
            document.getElementById("header").style.padding = ".3rem 2rem";
            document.getElementById("header").style.zIndex = "999";
            
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
        else if (window.matchMedia("(min-width:765px)").matches) {
          
            document.getElementById("header").style.width = "100%";
            document.getElementById("header").style.borderRadius = "0";
            document.getElementById("header").style.position = "fixed";
            document.getElementById("header").style.marginTop = "6.5rem";
            document.getElementById("header").style.padding = ".3rem 2rem";
            document.getElementById("header").style.zIndex = "999";
            
        
        }
        else if (window.matchMedia("(min-width:573px)").matches) {
          
            document.getElementById("header").style.width = "100%";
            document.getElementById("header").style.borderRadius = "0";
            document.getElementById("header").style.position = "fixed";
            document.getElementById("header").style.marginTop = "7rem";
            document.getElementById("header").style.padding = ".3rem 2rem";
            document.getElementById("header").style.zIndex = "999";
            
        
        }
    }
// Fim Função Scroll

    
// Inicio loader page 
    function loaderpage() {
        myVar = setTimeout(showPage, 500);
    }

    function showPage() {
        document.getElementById("loader").style.display = "none";
        bodybg.classList.remove("bg-black");
        document.getElementById("myDiv").style.display = "block";
    }
// Fim loader page


// Inicio Owl Carrossel
    $(document).ready(function () {
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 30,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            responsive: {
                0: {
                    items: 1
                },
                700: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }         
            
        })
    });
// Fim Owl Carrossel 


// Inicio Filter Div
$(document).ready(function(){
    var $btns = $('.btn').click(function() {
        if (this.id == 'all') {
          $('#parent > div').fadeIn(450);
        } else {
          var $el = $('.' + this.id).fadeIn(450);
          $('#parent > div').not($el).hide();
        }
        $btns.removeClass('active-btn');
        $(this).addClass('active-btn');
      })
})
// Fim Filter Div


// Inicio Scroll To Top BTN
function scrollToTop() {

window.scrollTo({top: 0, behavior: 'smooth'});

}
// Fim Scroll To Top BTN