
userview = {
    //Model Popup
    objUserViewBtn: ".UserView",
    objUserCloseBtn: ".overlay, .profile-select-box, .close__user",
    objUserDataBars: "data-user"
}  
$(userview.objUserViewBtn).bind("click", function () {
        if ($(this).attr(userview.objUserDataBars)) {

            var strDataUserName = $(this).attr(userview.objUserDataBars);

            
            //Fade In Modal Pop Up
            $(".overlay, #" + strDataUserName).fadeIn();

        }
    });

//On clicking the modal background
$(userview.objUserCloseBtn).bind("click", function () {
        $(".pb").fadeOut();
    });
