
userview = {
    //Model Popup
    objUserViewBtn: ".UserView",
    objUserCloseBtn: ".overlay_user, .profile-select-box, .close__user",
    objUserDataBars: "data-user"
}  
$(userview.objUserViewBtn).bind("click", function () {
        if ($(this).attr(userview.objUserDataBars)) {

            var strDataUserName = $(this).attr(userview.objUserDataBars);

            
            //Fade In Modal Pop Up
            $(".overlay_user, #" + strDataUserName).fadeIn();

        }
    });

//On clicking the modal background
$(userview.objUserCloseBtn).bind("click", function () {
        $(".pb").fadeOut();
    });











$(document).ready(function(){
	
// Click on video thumbnail or link	    

$(".test-action").on("click", function(e){
	      $("body").addClass("show-action noscroll");
      });

  // Close and Reset the Video Modal

  function close_test() {
        // re-hide the video modal
        $("body").removeClass("show-action noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-test, .test-notif .overlay', function(event) {
          // call the close and
          close_test();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_test();
          }
      });
	}
	toggle_test();

function toggle_comment() {


// Click on video thumbnail or link	    
$(".call_comment").on("click", function(e){
	      $("body").addClass("show-comment noscroll");
      });

  // Close and Reset the Video Modal

  function close_comment() {
        // re-hide the video modal
        $("body").removeClass("show-comment noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.comment-close, .comment-bars .overlay', function(event) {
          // call the close and
          close_comment();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_comment();
          }
      });
	}
	toggle_comment();
  
  
function toggle_pen() {


// Click on video thumbnail or link	    
$(".pen-start").on("click", function(e){
	      $("body").addClass("pen-show noscroll");
      });

  // Close and Reset the Video Modal

  function close_pen() {
        // re-hide the video modal
        $("body").removeClass("pen-show noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-pen, .pen-main .overlay', function(event) {
          // call the close and
          close_pen();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_pen();
          }
      });
	}
	toggle_pen();
});
