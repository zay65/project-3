
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
    $("#color").prepend("<option>Please select a T-shirt theme</option>");
 };




$('#design').change (function () {

if ($('#design').val() === $("#design option:first")){
 $('#design').hide(); 




};

});
