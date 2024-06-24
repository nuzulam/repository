$(document).ready(function(){

function toggle_setting() {


$(".trigger_quran_setting").on("click", function(e){
	      $("body").addClass("q-sett-show noscroll");
      });

    // Close and Reset the Video Modal
	function close_setting() {
        // re-hide the video modal
        $("body").removeClass("q-sett-show noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-setting, .setting-link, .quran-navbars-setting .overlay_sett', function(event) {
          // call the close and
          close_setting();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_setting();
          }
      });
	}
	toggle_category();

});
