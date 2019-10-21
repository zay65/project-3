
const theTheme = '<option selected="selected" id="selectTheme">Please select a T-shirt theme</option>';


//Select the "Name" input element
$('#name').focus();

//This will hide "other" input field until user clicks on the "Other" option
$('#other-title').hide();

 $('#title').change (function () {
     if ($('#title').val() === 'other'){
         $('#other-title').show();
     } else {
         $('#other-title').hide();
     }
 });
 




   $("option:contains('Select Theme')").attr('disabled', true);

   $('#color option[value="tomato"]').hide();

   $('#color option[value="steelblue"]').hide();

   $('#color option[value="dimgrey"]').hide();

   $('#color option[value="cornflowerblue"]').hide();

   $('#color option[value="darkslategrey"]').hide();

   $('#color option[value="gold"]').hide();


 
 
   $('#color').prepend(theTheme);
  









 $('#design').change (function (e) {

    if ($('#design').val() === "js puns"){
      
        $("option:contains('Please select a T-shirt theme')").attr('disabled', true);
        
        $("option:contains('Please select a T-shirt theme')").hide().removeAttr('selected');

        $('#color option[value="cornflowerblue"]').show();

        $('#color option[value="darkslategrey"]').show();
    
        $('#color option[value="gold"]').show();

        $('#color option[value="tomato"]').hide();

        $('#color option[value="steelblue"]').hide();
 
        $('#color option[value="dimgrey"]').hide();
       


    } else if  ($('#design').val() === "heart js") { 
        
         
        $('#color option[value="tomato"]').show().attr('selected', true);

        $('#color option[value="steelblue"]').show();
    
        $('#color option[value="dimgrey"]').show();

        $('#color option[value="cornflowerblue"]').hide();

        $('#color option[value="darkslategrey"]').hide();
 
        $('#color option[value="gold"]').hide();
  
}

});

var divTotActCost = $('<div></div>');
 totalActCost = 0;
 $('.activity').append(divTotActCost);
