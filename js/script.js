$("#dn").change(function() {
    if(this.checked) {//Noite
        $("#header").addClass("header-black");
        $("#header").removeClass("header-white");
        $("li, a").addClass("white-font");
        $("li, a").removeClass("black-font");
        $(".img-circleblack").removeClass(".img-circleblack");
        $(".img-circleblack").addClass(".img-circlewhite");

    }else{//Dia
        $("#header").addClass("header-white");
        $("#header").removeClass("header-black");
        $("li, a").addClass("black-font");
        $("li, a").removeClass("white-font");
        $(".img-circleblack").removeClass(".img-circlewhite");
        $(".img-circleblack").addClass(".img-circleblack");
    }
});