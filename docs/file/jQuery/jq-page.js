
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

function toggle_category() {


$(".action-category").on("click", function(e){
	      $("body").addClass("artshow noscroll");
      });

    // Close and Reset the Video Modal
	function close_category() {
        // re-hide the video modal
        $("body").removeClass("artshow noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-category, .artcat-link, .select-category .overlay_artcat', function(event) {
          // call the close and
          close_category();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_category();
          }
      });
	}
	toggle_category();
	
function toggle_rellbars1() {


$(".action-rellbars1").on("click", function(e){
	      $("body").addClass("rellshow1 noscroll");
      });

    // Close and Reset the Video Modal
	function close_rell1() {
        // re-hide the video modal
        $("body").removeClass("rellshow1 noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-rell1, .rell-bars-1 .overlay_rellbars1', function(event) {
          // call the close and
          close_rell1();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_rell1();
          }
      });
	}
	toggle_rellbars1();

function toggle_rellbars2() {

$(".action-rellbars2").on("click", function(e){
	      $("body").addClass("rellshow2 noscroll");
      });

    // Close and Reset the Video Modal
	function close_rell2() {
        // re-hide the video modal
        $("body").removeClass("rellshow2 noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-rell2, .rell-bars-2 .overlay_rellbars2', function(event) {
          // call the close and
          close_rell2();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_rell2();
          }
      });
	}
	toggle_rellbars2();

function toggle_rellbars3() {

$(".action-rellbars3").on("click", function(e){
	      $("body").addClass("rellshow3 noscroll");
      });

    // Close and Reset the Video Modal
	function close_rell3() {
        // re-hide the video modal
        $("body").removeClass("rellshow3 noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-rell3, .rell-bars-3 .overlay_rellbars3', function(event) {
          // call the close and
          close_rell3();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_rell3();
          }
      });
	}
	toggle_rellbars3();

function toggle_rellbars4() {


$(".action-rellbars4").on("click", function(e){
	      $("body").addClass("rellshow4 noscroll");
      });

    // Close and Reset the Video Modal
	function close_rell4() {
        // re-hide the video modal
        $("body").removeClass("rellshow4 noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-rell4, .rell-bars-4 .overlay_rellbars4', function(event) {
          // call the close and
          close_rell4();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_rell4();
          }
      });
	}
	toggle_rellbars4();

function toggle_rellbars5() {


$(".action-rellbars5").on("click", function(e){
	      $("body").addClass("rellshow5 noscroll");
      });

    // Close and Reset the Video Modal
	function close_rell5() {
        // re-hide the video modal
        $("body").removeClass("rellshow5 noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-rell5, .rell-bars-5 .overlay_rellbars5', function(event) {
          // call the close and
          close_rell5();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_rell5();
          }
      });
	}
	toggle_rellbars5();

function toggle_rellbars6() {


$(".action-rellbars6").on("click", function(e){
	      $("body").addClass("rellshow6 noscroll");
      });

    // Close and Reset the Video Modal
	function close_rell6() {
        // re-hide the video modal
        $("body").removeClass("rellshow6 noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-rell6, .rell-bars-6 .overlay_rellbars6', function(event) {
          // call the close and
          close_rell6();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_rell6();
          }
      });
	}
	toggle_rellbars6();
	

function toggle_murottal() {


$(".quran-action").on("click", function(e){
	      $("body").addClass("qori-action noscroll");
      });

    // Close and Reset the Video Modal
	function close_qori() {
        // re-hide the video modal
        $("body").removeClass("qori-action noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-qori, .main-qoriview .overlay_murottal', function(event) {
          // call the close and
          close_qori();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_qori();
          }
      });
	}
	toggle_murottal();
	

function toggle_test() {


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

	
	// Click on video thumbnail
});
