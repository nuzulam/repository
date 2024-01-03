
setting = {
    //Model Popup
    objModalTafsirBtn: ".link-ayat",
    objModalCloseBtn: ".overlay__tafsir, .close-tafsir",
    objModalTafsirAttr: "data-tafsir"
}  
$(setting.objModalTafsirBtn).bind("click", function () {
        if ($(this).attr(setting.objModalTafsirAttr)) {

            var strDataTafsirName = $(this).attr(setting.objModalTafsirAttr);

            
            //Fade In Modal Pop Up
            $(".overlay__tafsir, #" + strDataTafsirName).fadeIn();

        }
    });

//On clicking the modal background
$(setting.objModalCloseBtn).bind("click", function () {
        $(".Tafsir").fadeOut();
    });
