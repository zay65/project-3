
//Select the "Name" input element
$('#name').focus();

//This will hide "other" input field until user clicks on the "Other" option

 $('#title').change (function () {
     if ($('#title').val() === 'other'){
         $('#other-title').show();
     } else {
         $('#other-title').hide();
     }
 });
 








//Theme is selected and 
$('colors-js-puns').on('click', function() {
$('color').show();
});

$('option[value="Select Theme"]').attr("hidden", "hidden");