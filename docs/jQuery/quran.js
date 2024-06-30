
$(document).ready(function(){
	function toggle_quran_setting() {
	    // Click on video thumbnail or link
	    $(".trigger-quran-setting").on("click", function(e){
	      $("body").addClass("show_sett noscroll");
      });

	    // Close and Reset the Video Modal
      function close_quran_setting() {
        // re-hide the video modal
        $("body").removeClass("show_sett noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-setting, .subnavigasi_quran_setting .overlay', function(event) {
          // call the close and
          close_quran_setting();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_quran_setting();
          }
      });
	}
	toggle_quran_setting();
    
    function toggle_quran_info() {
	    // Click on video thumbnail or link
	    $(".trigger-quran-info").on("click", function(e){
	      $("body").addClass("show_info noscroll");
      });

	    // Close and Reset the Video Modal
      function close_quran_info() {
        // re-hide the video modal
        $("body").removeClass("show_info noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-info, .subnavigasi_quran_info .overlay', function(event) {
          // call the close and
          close_quran_info();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_quran_info();
          }
      });
	}
	toggle_quran_info();
  
  function toggle_quran_audio() {
	    // Click on video thumbnail or link
	    $(".trigger-quran-audio").on("click", function(e){
	      $("body").addClass("show_audio noscroll");
      });

	    // Close and Reset the Video Modal
      function close_quran_audio() {
        // re-hide the video modal
        $("body").removeClass("show_audio noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-audio, .DateQori, .subnavigasi_quran_audio .overlay', function(event) {
          // call the close and
          close_quran_audio();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_quran_audio();
          }
      });
	}
	toggle_quran_audio();
});
