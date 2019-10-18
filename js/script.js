
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
 




 



 if($("#design").val($("#design option:first").attr('hidden', true))) {
    $('#color').prepend(theTheme);
    $('#color option[value="Tomato"]').hide().attr('selected', true);

    $('#color option[value="Steelblue"]').hide();

 $('#color option[value="Dimgrey"]').hide();

  }









 $('#design').change (function (e) {

    if ($('#design option').val() === "Theme - JS Puns"){
        
        $('#color option[value="Cornflowerblue"]').show();

        $('#color option[value="Darkslategrey"]').show();
    
     $('#color option[value="Gold"]').show();

     $('#color option[value="Tomato"]').hide();

     $('#color option[value="Steelblue"]').hide();
 
  $('#color option[value="Dimgrey"]').hide();


    } else if  ($('design option').val === "Theme - I &#9829; JS ") { 
        
         
        $('#color option[value="Tomato"]').show();

        $('#color option[value="Steelblue"]').show();
    
     $('#color option[value="Dimgrey"]').show();

     $('#color option[value="Cornflowerblue"]').hide();

     $('#color option[value="Darkslategrey"]').hide();
 
  $('#color option[value="Gold"]').hide();
    }

});



