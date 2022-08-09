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

    filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("filterDiv");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);     
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



    