$('#dn').change(function(){
    if($('#dn').is(":checked")) {
        $('#header').addClass("header-white");
        $('#header').removeClass("header-black");
    }
    
    if($('#dn').not(":checked")) {
        $('#header').addClass("header-black");
        $('#header').removeClass("header-white");
    }
});