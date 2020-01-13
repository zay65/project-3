
//creates a variable that will later prompt users to select a theme for shirts




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
















//This will hide the 'Select theme' button from users and stop it from being selected


//all colors are hidden at first glance


  $("option:contains('Select Theme')").attr('disabled', true);







  $('#color option[value="tomato"]').hide();







  $('#color option[value="steelblue"]').hide();







  $('#color option[value="dimgrey"]').hide();







  $('#color option[value="cornflowerblue"]').hide();







  $('#color option[value="darkslategrey"]').hide();







  $('#color option[value="gold"]').hide();
















//Please select a T-shirt theme variable is prepended and appears


  $('#color').prepend(theTheme);





















     


//Resets the drop down menu to the first color of each theme


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


   //only makes colors appropriate to js puns appear and hides i heart js colors


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






      //shows all colors appropriate to heart js and hides js pun colors. 


       $('#color option[value="tomato"]').show().attr('selected', 'selected');







       $('#color option[value="steelblue"]').show();


  


       $('#color option[value="dimgrey"]').show();







       $('#color option[value="cornflowerblue"]').hide();







       $('#color option[value="darkslategrey"]').hide();






       $('#color option[value="gold"]').hide();


 


 


  


	}












});


//creates a dom element to display total activity cost


let actElement = $('<div></div>');


//stores in a global variable and appends it to the '.activity section so it can be shown function from the console.


$('.activities').append(actElement);


let divTotalActivityCost = 0;






//event listener to make the site watch out for and respond to user action


$('.activities').change('click', function(event){






     const actPut = $(event.target);


     console.log(actPut);


      const activityCost = parseInt($(event.target).eq(0).attr('data-cost').slice(1));


     console.log(activityCost);










     if (event.target.checked) {


      divTotalActivityCost  += parseInt (activityCost);







     }  else divTotalActivityCost  -= parseInt (activityCost);


     $('.activities div').text('Total: $' + divTotalActivityCost);







    //stops and dsiables the activities that conflict during the same day and time


     const checkingActivity = actPut.attr('data-day-and-time');


     console.log(checkingActivity);







      //conflicting activities


      $('.activities input').on(function(input,[i]){


      const checkBox = $('.activities input').attr('data-day-and-time');


      console.log(checkBox);


      });


     {


        

















       $('.activities div').text('Total: $' + divTotalActivityCost);







//stops and dsiables the activities that conflict during the same day and time


const checkingActivity = actPut.attr('data-day-and-time');


console.log(checkingActivity);


const $activities = $('.activities div');


for(let i=0;i <= $activities.length; i++) {


  


 


   let $loo = $('.activities div');







   let $actPut = $(event.target);


          if ($(actPut).attr('data-day-and-time') == $loo.attr('data-day-and-time') &&


         $(actPut) !== $loo) {


     


      if ($(actPut).attr("checked")) {


         $loo.attr('disabled', true);


         $($clicked).attr('disabled', false);


      } else


      $loo.attr('disabled', true);


     


   };


 







}}});
