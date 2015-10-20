/*global $*/
$(document).ready(function () {
    
    // Home
    $('#home-btn').click(function () {
        $('#about').animate({ opacity: 0 });
        $('#experience').animate({ opacity: 0 });
        $('#contact').animate({ opacity: 0 });
        
        $('#home').animate({ opacity: 1 });
        
        $('#about-btn').css('border', '2px solid #67a2b6');
        $('#experience-btn').css('border', '2px solid #67a2b6');
        $('#contact-btn').css('border', '2px solid #67a2b6');
        
        $(this).css('border', '2px solid white');
    });

    // About
    $('#about-btn').click(function () {
        $('#home').animate({ opacity: 0 });
        $('#experience').animate({ opacity: 0 });
        $('#contact').animate({ opacity: 0 });
        
        $('#about').animate({ opacity: 1 });
        
        $('#home-btn').css('border', '2px solid #67a2b6');
        $('#experience-btn').css('border', '2px solid #67a2b6');
        $('#contact-btn').css('border', '2px solid #67a2b6');
        
        $(this).css('border', '2px solid white');
    });
    
    // Experience
    $('#experience-btn').click(function () {
        $('#home').animate({ opacity: 0 });
        $('#about').animate({ opacity: 0 });
        $('#contact').animate({ opacity: 0 });
         
        $('#experience').animate({ opacity: 1 });
         
        $('#about-btn').css('border', '2px solid #67a2b6');
        $('#home-btn').css('border', '2px solid #67a2b6');
        $('#contact-btn').css('border', '2px solid #67a2b6');
        
        $(this).css('border', '2px solid white');
    });
    
    // Contact
    $('#contact-btn').click(function () {
        $('#home').animate({ opacity: 0 });
        $('#experience').animate({ opacity: 0 });
        $('#about').animate({ opacity: 0 });
         
        $('#contact').animate({ opacity: 1 });
        $('#contact-links').animate({ opacity: 1 });
         
        $('#about-btn').css('border', '2px solid #67a2b6');
        $('#experience-btn').css('border', '2px solid #67a2b6');
        $('#home-btn').css('border', '2px solid #67a2b6');
        
        $(this).css('border', '2px solid white');
    });
    
    // Resume
    $("#resume-btn").click(function () {
        $("#resume").dialog({
            modal: true,
            title: 'Resume',
            width: 825,
            height: 1050       
        });
    });
    
    $('#resume-btn').mouseleave(function () {
        $(this).css('border', '2px solid #67a2b6');
    });
    
    // Menu 
    $('td').mouseup(function () {
        $(this).css('border', '2px solid white');
    });
    
});