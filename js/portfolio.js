$(document).ready(function() {

    /*//query mobile styles
    adjustStyle($(this).width());
    	$(window).resize(function() {
    	adjustStyle($(this).width());
    });*/

    $("#beach_filters_container").show("slow");

    // side nav
    $("#left_beach_filters").click(function() {

        if($(".left_item_active").removeClass("left_item_active")) {
        	 $(this).addClass("left_item_active", 700, "easeOutBounce");
        }
        if ($("#beach_filters_container").hasClass("activeGalleryContainer") == false) {
            $('.activeGalleryContainer').hide("slow").removeClass("activeGalleryContainer");
            $("#beach_filters_container").addClass("activeGalleryContainer").show("slow");
        }
    });

    $("#left_ahdc").click(function() {
    	if($(".left_item_active").removeClass("left_item_active")) {
        	 $(this).addClass("left_item_active", 700, "easeOutBounce");
        }
        if ($("#ahdc_container").hasClass("activeGalleryContainer") == false) {
            $('.activeGalleryContainer').hide("slow").removeClass("activeGalleryContainer");
            $("#ahdc_container").addClass("activeGalleryContainer").show("slow");
        }
    });

    $("#left_restaurantstore").click(function() {
    	if($(".left_item_active").removeClass("left_item_active")) {
        	 $(this).addClass("left_item_active", 700, "easeOutBounce");
        }
        if ($("#restaurantstore_container").hasClass("activeGalleryContainer") == false) {
            $('.activeGalleryContainer').hide("slow").removeClass("activeGalleryContainer");
            $("#restaurantstore_container").addClass("activeGalleryContainer").show("slow");
        }
    });

    $("#left_radiate").click(function() {
    	if($(".left_item_active").removeClass("left_item_active")) {
        	 $(this).addClass("left_item_active", 700, "easeOutBounce");
        }
        if ($("#radiate_container").hasClass("activeGalleryContainer") == false) {
            $('.activeGalleryContainer').hide("slow").removeClass("activeGalleryContainer");
            $("#radiate_container").addClass("activeGalleryContainer").show("slow");
        }
    });


    //mobile nav
    $("#left_beach_filters_mobile").click(function() {

        if($(".left_item_active").removeClass("left_item_active")) {
        	 $(this).addClass("left_item_active", 700, "easeOutBounce");
        }
        if ($("#beach_filters_container").hasClass("activeGalleryContainer") == false) {
            $('.activeGalleryContainer').hide("slow").removeClass("activeGalleryContainer");
            $("#beach_filters_container").addClass("activeGalleryContainer").show("slow");
        }
    });

    $("#left_ahdc_mobile").click(function() {
    	if($(".left_item_active").removeClass("left_item_active")) {
        	 $(this).addClass("left_item_active", 700, "easeOutBounce");
        }
        if ($("#ahdc_container").hasClass("activeGalleryContainer") == false) {
            $('.activeGalleryContainer').hide("slow").removeClass("activeGalleryContainer");
            $("#ahdc_container").addClass("activeGalleryContainer").show("slow");
        }
    });

    $("#left_restaurantstore_mobile").click(function() {
    	if($(".left_item_active").removeClass("left_item_active")) {
        	 $(this).addClass("left_item_active", 700, "easeOutBounce");
        }
        if ($("#restaurantstore_container").hasClass("activeGalleryContainer") == false) {
            $('.activeGalleryContainer').hide("slow").removeClass("activeGalleryContainer");
            $("#restaurantstore_container").addClass("activeGalleryContainer").show("slow");
        }
    });

    $("#left_radiate_mobile").click(function() {
    	if($(".left_item_active").removeClass("left_item_active")) {
        	 $(this).addClass("left_item_active", 700, "easeOutBounce");
        }
        if ($("#radiate_container").hasClass("activeGalleryContainer") == false) {
            $('.activeGalleryContainer').hide("slow").removeClass("activeGalleryContainer");
            $("#radiate_container").addClass("activeGalleryContainer").show("slow");
        }
    });

   /* $("#left_leauge_of_death").click(function() {
        $('.activeGalleryContainer').hide("slow").removeClass("activeGalleryContainer");
        $("#radiate_container").addClass("activeGalleryContainer").show("slow");
    });*/

    $(".gallery_close").click(function() {
        $(".popup_background").fadeOut("slow");
        $(".popup").fadeOut("slow");
    });

    //thumbnails
    $(".beach_filters_gallery_thumb_photo").click(function() {

         if($(".beach_filters_gallery_thumb_photo.active").removeClass("active")) {
        	 $(this).addClass("active", 700, "easeOutBounce");
        }

        var display = $(this).attr('id');

        switch (display) {
            case "1":
                $(".beach_filters_display1").show("slow");
                $(".beach_filters_display2").hide("fast");
                $(".beach_filters_display3").hide("fast");
                $(".beach_filters_display4").hide("fast");
                $(".beach_filters_display5").hide("fast");
                break;
            case "2":
                $(".beach_filters_display1").hide("fast");
                $(".beach_filters_display2").show("slow");
                $(".beach_filters_display3").hide("fast");
                $(".beach_filters_display4").hide("fast");
                $(".beach_filters_display5").hide("fast");
                break;
            case "3":
                $(".beach_filters_display1").hide("fast");
                $(".beach_filters_display2").hide("fast");
                $(".beach_filters_display3").show("slow");
                $(".beach_filters_display4").hide("fast");
                $(".beach_filters_display5").hide("fast");
                break;
            case "4":
                $(".beach_filters_display1").hide("fast");
                $(".beach_filters_display2").hide("fast");
                $(".beach_filters_display3").hide("fast");
                $(".beach_filters_display4").show("slow");
                $(".beach_filters_display5").hide("fast");
                break;

            case "5":
                $(".beach_filters_display1").hide("fast");
                $(".beach_filters_display2").hide("fast");
                $(".beach_filters_display3").hide("fast");
                $(".beach_filters_display4").hide("fast");
                $(".beach_filters_display5").show("slow");
                break;
            default:
                alert('Error');
                break;
        }


    });

    /********************************************************
    ahdc functions
    *********************************************************/
    $(".ahdc_gallery_thumb_photo").click(function() {

        $(".ahdc_gallery_thumb_photo.active").removeClass("active");
        $(this).addClass("active", 700, "easeOutBounce");


        var display = $(this).attr('id');

        switch (display) {
            case "1":
                $(".ahdc_display1").show("slow");
                $(".ahdc_display2").hide("fast");
                $(".ahdc_display3").hide("fast");
                $(".ahdc_display4").hide("fast");
                break;
            case "2":
                $(".ahdc_display1").hide("fast");
                $(".ahdc_display2").show("slow");
                $(".ahdc_display3").hide("fast");
                $(".ahdc_display4").hide("fast");
                break;
            case "3":
                $(".ahdc_display1").hide("fast");
                $(".ahdc_display2").hide("fast");
                $(".ahdc_display3").show("slow");
                $(".ahdc_display4").hide("fast");
                break;
            case "4":
                $(".ahdc_display1").hide("fast");
                $(".ahdc_display2").hide("fast");
                $(".ahdc_display3").hide("fast");
                $(".ahdc_display4").show("slow");
                break;
            default:
                alert('Error');
                break;
        }


    });

    /********************************************************
    restaurantstore functions
    *********************************************************/

    $(".restaurantstore_gallery_thumb_photo").click(function() {

        $(".restaurantstore_gallery_thumb_photo.active").removeClass("active");
        $(this).addClass("active", 700, "easeOutBounce");


        var display = $(this).attr('id');

        switch (display) {
            case "1":
                $(".restaurantstore_display1").show("slow");
                $(".restaurantstore_display2").hide("fast");
                break;
            case "2":
                $(".restaurantstore_display1").hide("fast");
                $(".restaurantstore_display2").show("slow");
                break;
            default:
                alert('Error');
                break;
        }


    });

    $(".radiate_gallery_thumb_photo").click(function() {

        if($(".radiate_gallery_thumb_photo.active").removeClass("active")) {
        	 $(this).addClass("active", 700, "easeOutBounce");
        }
       


        var display = $(this).attr('id');

        switch (display) {
            case "1":
                $(".radiate_display1").show("slow");
                $(".radiate_display2").hide("fast");
                $(".radiate_display3").hide("fast");
                $(".radiate_display4").hide("fast");
                break;
            case "2":
                $(".radiate_display1").hide("fast");
                $(".radiate_display2").show("slow");
                $(".radiate_display3").hide("fast");
                $(".radiate_display4").hide("fast");
                break;
            case "3":
                $(".radiate_display1").hide("fast");
                $(".radiate_display2").hide("fast");
                $(".radiate_display3").show("slow");
                $(".radiate_display4").hide("fast");
                break;
            case "4":
                $(".radiate_display1").hide("fast");
                $(".radiate_display2").hide("fast");
                $(".radiate_display3").hide("fast");
                $(".radiate_display4").show("slow");
                break;
            default:
                alert('Error');
                break;
        }


    });


    $("#radiate_display1_more").click(function() {
        $(".popup_background").fadeIn("fast");
        $("#radiate_popup").fadeIn("slow");
        gallery_popup_status = 1;
    });


    $("#linked_in_icon").click(function() {
        window.open("http://www.linkedin.com/pub/nicholas-bechtold/7b/820/656");
    });

    $(".resume").click(function() {
        $(".popup_background").fadeIn("fast");
        $("#resume_popup").fadeIn("slow");
        gallery_popup_status = 1;

    });

    $("#submit").click(function() {
        if ($('#email').val() == '' || $('#name').val() == '' || $('#message').val() == '') {
            $('#warning').show();
        } else {
            $(".popup_background").fadeIn("fast");
            $("div.loader").show();
            $('#email').val("");
            $('#name').val("");
            $('#message').val("");

            setTimeout(function() {
                $("#thank_you").fadeIn("slow"); // then show popup, deley in .5 second
                $("div.loader").hide();
            }, 600);
        }
    });




    $(".proposal").click(function(event) {
        var currentId = $(this).attr('id');
        loading(); // loading
        setTimeout(function() { // then show popup, deley in .5 second
            loadPopup(currentId); // function show popup
        }, 500); // .5 second
        return false;
    });


    $("div.close").hover(
        function() {
            $('span.ecs_tooltip').show();
        },
        function() {
            $('span.ecs_tooltip').hide();
        }
    );

    $("div.close").click(function() {
        var currentId = $(this).parent().attr("id");
        disablePopup(currentId); // function close pop up
    });

    $(this).keyup(function(event) {
        if (event.which == 27) { // 27 is 'Ecs' in the keyboard
            disablePopup(); // function close pop up
            $(".popup").fadeOut("slow");
            $(".popup_background").fadeOut("slow");
            gallery_popup_status = 0;

        }
    });

    $("div#backgroundPopup").click(function() {
        disablePopup(); // function close pop up
    });


    /************** start: functions. **************/
    function loading() {
        $("div.loader").show();
    }

    function closeloading() {
        $("div.loader").fadeOut('normal');
    }

    var popupStatus = 0; // set value

    function loadPopup(id) {
        if (popupStatus == 0) { // if value is 0, show popup
            closeloading(); // fadeout loading
            $("#" + id + "popup").fadeIn(0500); // fadein popup div
            $("#backgroundPopup").css("opacity", "0.7"); // css opacity, supports IE7, IE8
            $("#backgroundPopup").fadeIn(0001);
            popupStatus = 1; // and set value to 1
        }
    }

    function disablePopup(id) {
        if (popupStatus == 1) { // if value is 1, close popup
            $("#" + id).fadeOut("normal");
            $(".proposal_popup").fadeOut("normal");
            $("#backgroundPopup").fadeOut("normal");
            popupStatus = 0; // and set value to 0
        }
    }

    /*function adjustStyle(width) {
      width = parseInt(width);
      if (width < 701) {
        $("#size-stylesheet").attr("href", "css/narrow.css");
      } else if (width < 900) {
        $("#size-stylesheet").attr("href", "css/medium.css");
      } else {
         $("#size-stylesheet").attr("href", "css/wide.css"); 
      }
    }*/
});