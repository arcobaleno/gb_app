// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require bootstrap
//= require_tree .

$(function(){
  $('#myCarousel').carousel();
});

$(function(){ //Document ready shorthand
	var $search = $('#search');//Cache the element for faster DOM searching since we are using it more than once
	original_val = $search.val(); //Get the original value to test against. We use .val() to grab value="Search"
	$search.focus(function(){ //When the user tabs/clicks the search box.
		if($(this).val()===original_val){ //If the value is still the default, in this case, "Search"
			$(this).val('');//If it is, set it to blank
		}
	})
	.blur(function(){//When the user tabs/clicks out of the input
		if($(this).val()===''){//If the value is blank (such as the user clicking in it and clicking out)...
			$(this).val(original_val); //... set back to the original value
		}
	});
});