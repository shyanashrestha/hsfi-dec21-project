/*
This function is fired when the webpage is loaded
*/
$(document).ready(function(){
   $('.all-content').hide(); 
});

/*
When someone clicks goals-button we should hide all-content 
and then show only goals-content
*/
$("#goals-button").click(function(){
    $('.all-content').hide();
    $('#goals-content').show();
});


/*
When someone clicks the info button we should hide all-content 
and then show only info-content
*/
$("#info-button").click(function(){
    $('.all-content').hide();
    $('#info-content').show();
});

$("#dark-button").click(function(){
    $('.all-content').hide();
    $('#dark-content').show();
    $('body').css("background-color","black");
    
});
$("#past-button").click(function(){
    $('.all-content').hide();
    $('#past-content').show();
});
$("#press-button").click(function(){
    alert("I told you not to press the button");
    $('.all-content').hide();
    });
    
$("#takeover-button").click(function(){
        $('.all-content').hide();
        $('#takeover-content').show();
         });
         
         $("#takeover-form-button").click(function() {
             $('#takeoverbody').html($('#takeover-input').val());
         });