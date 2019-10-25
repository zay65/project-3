
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
  



       

 $('#design').change ('click', function (e) {
    $('#color').children('option').eq(0).removeAttr('selected', 'selected');

    $('#color').children('option').eq(3).removeAttr('selected', 'selected');
    if($(this).val() == "") {  
		
	} 

	$('#selectTheme').remove();
		$('#color').removeAttr('disabled', true);

	$('#color option').each(function(any,option){
		$(option).hide(true);	
	});
    if ($('#design').val() === "js puns"){
        $('#colors-js-puns').show();

        $("option:contains('Please select a T-shirt theme')").attr('disabled', true);
        
        $("option:contains('Please select a T-shirt theme')").hide().removeAttr('selected', 'selected');

        $('#color option[value="cornflowerblue"]').show().prop('selected', 'selected');

        $('#color option[value="darkslategrey"]').show();
    
        $('#color option[value="gold"]').show();

        $('#color option[value="tomato"]').hide();

        $('#color option[value="steelblue"]').hide();
 
        $('#color option[value="dimgrey"]').hide();
       


    } else if  ($('#design').val() === "heart js") { 
  
         
        $('#color option[value="tomato"]').show().attr('selected', 'selected');

        $('#color option[value="steelblue"]').show();
    
        $('#color option[value="dimgrey"]').show();

        $('#color option[value="cornflowerblue"]').hide();

        $('#color option[value="darkslategrey"]').hide();
 
        $('#color option[value="gold"]').hide();
   
   
    
	}


});

let actElement = $('<div></div>');

$('.activities').append(actElement);
let divTotalActivityCost = 0;
 

 $('.activities').change('click', function(event){
  
  const actPut = (event.target);
  
  const theActivityCost = $('.activities input').eq(0).attr('data-cost');



  console.log(typeof actPut);
 });
