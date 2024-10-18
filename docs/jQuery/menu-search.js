$(document).ready(function(){
	function toggle_menu_search() {
	    // Click on video thumbnail or link
	    $(".parent-search-base").on("click", function(e){
	      $("body").addClass("show_search noscroll");
      });

	    // Close and Reset the Video Modal
      function close_menu_search() {
        // re-hide the video modal
        $("body").removeClass("show_search noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-contnavisearpare, .container_navigasi_search_parent .overlay', function(event) {
          // call the close and
          close_menu_search();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_menu_search();
          }
      });
	}
	toggle_menu_search();
    
  function viewshoot_artcat_top() {
	    // Click on video thumbnail or link
	    $(".shoot-view-artcat-top").on("click", function(e){
	      $("body").addClass("showshoot_artcat_top noscroll");
      });

	    // Close and Reset the Video Modal
      function close_artcat_top() {
        // re-hide the video modal
        $("body").removeClass("showshoot_artcat_top noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-artcat-top, .navigasi_shoot_artcat_top .overlay', function(event) {
          // call the close and
          close_artcat_top();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_artcat_top();
          }
      });
	}
	viewshoot_artcat_top();
  
  function viewshoot_artcat_hot() {
	    // Click on video thumbnail or link
	    $(".shoot-view-artcat-hot").on("click", function(e){
	      $("body").addClass("showshoot_artcat_hot noscroll");
      });

	    // Close and Reset the Video Modal
      function close_artcat_hot() {
        // re-hide the video modal
        $("body").removeClass("showshoot_artcat_hot noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-artcat-hot, .navigasi_shoot_artcat_hot .overlay', function(event) {
          // call the close and
          close_artcat_hot();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_artcat_hot();
          }
      });
	}
	viewshoot_artcat_hot();
  
  function viewshoot_artcat_post() {
	    // Click on video thumbnail or link
	    $(".shoot-view-artcat-post").on("click", function(e){
	      $("body").addClass("showshoot_artcat_post noscroll");
      });

	    // Close and Reset the Video Modal
      function close_artcat_post() {
        // re-hide the video modal
        $("body").removeClass("showshoot_artcat_post noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-artcat-post, .navigasi_shoot_artcat_post .overlay', function(event) {
          // call the close and
          close_artcat_post();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_artcat_post();
          }
      });
	}
	viewshoot_artcat_post();
  
    function viewshoot_search_label() {
	    // Click on video thumbnail or link
	    $(".shoot-view-label").on("click", function(e){
	      $("body").addClass("showshoot_label noscroll");
      });

	    // Close and Reset the Video Modal
      function close_search_label() {
        // re-hide the video modal
        $("body").removeClass("showshoot_label noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-label, .subnavigasi_quran_info .overlay', function(event) {
          // call the close and
          close_search_label();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_search_label();
          }
      });
	}
	viewshoot_search_label();
  
    function viewshoot_search_archive() {
	    // Click on video thumbnail or link
	    $(".shoot-view-archive").on("click", function(e){
	      $("body").addClass("showshoot_archive noscroll");
      });

	    // Close and Reset the Video Modal
      function close_search_archive() {
        // re-hide the video modal
        $("body").removeClass("showshoot_archive noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-archive, .subnavigasi_quran_info .overlay', function(event) {
          // call the close and
          close_search_archive();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_search_archive();
          }
      });
	}
	viewshoot_search_archive();
  
  function toggle_multi_setser() {
	    // Click on video thumbnail or link
	    $(".trigger-multi-setser").on("click", function(e){
	      $("body").addClass("show_setser noscroll");
      });

	    // Close and Reset the Video Modal
      function close_multi_setser() {
        // re-hide the video modal
        $("body").removeClass("show_setser noscroll");
}

      // if the 'close' button/element, or the overlay are clicked 
	    $('body').on('click', '.close-setser, .DateQori, .subnavigasi_quran_audio .overlay', function(event) {
          // call the close and
          close_multi_setser();
      });
      // if the ESC key is tapped
      $('body').keyup(function(e) {
          // ESC key maps to keycode `27`
          if (e.keyCode == 27) { 
            // call the close and reset function
            close_multi_setser();
          }
      });
	}
	toggle_multi_setser();
});
