//creates a variable that will later prompt users to select a theme for shirts
const theTheme = '<option selected="selected" id="selectTheme">Please select a T-shirt theme</option>';
//Select the "Name" input element
$('#name').focus();
//This will hide "other" input field until user clicks on the "Other" option
$('#other-title').hide();
$('#title').change(function() {
	if ($('#title').val() === 'other') {
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
$('#design').change('click', function(e) {
	$('#color').children('option').eq(0).removeAttr('selected', 'selected');
	$('#color').children('option').eq(3).removeAttr('selected', 'selected');
	if ($(this).val() == "") {}
	$('#selectTheme').remove();
	$('#color').removeAttr('disabled', true);
	$('#color option').each(function(any, option) {
		$(option).hide(true);
	});
	//only makes colors appropriate to js puns appear and hides i heart js colors
	if ($('#design').val() === "js puns") {
		$('#colors-js-puns').show();
		$("option:contains('Please select a T-shirt theme')").attr('disabled', true);
		$("option:contains('Please select a T-shirt theme')").hide().removeAttr('selected', 'selected');
		$('#color option[value="cornflowerblue"]').show().prop('selected', 'selected');
		$('#color option[value="darkslategrey"]').show();
		$('#color option[value="gold"]').show();
		$('#color option[value="tomato"]').hide();
		$('#color option[value="steelblue"]').hide();
		$('#color option[value="dimgrey"]').hide();
	} else if ($('#design').val() === "heart js") {
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
$('.activities').change('click', function(event) {
	let actPut = $(event.target);
	const activityCost = parseInt($(event.target).eq(0).attr('data-cost').slice(1));
	console.log(activityCost);
	if (event.target.checked) {
		divTotalActivityCost += parseInt(activityCost);
	} else {
		divTotalActivityCost -= parseInt(activityCost);
	}
	$('.activities div').text('Total: $' + divTotalActivityCost);
	// get list of activities & data day/time value for current element
	let $activities = $('.activities input');
	//makes code repeat in a loop
	for (let i = 0; i <= $activities.length; i++) {
		console.log('test');
		//helps target each individual activity in the for loop
		let $loo = $activities.eq(i);
		//helps disable specific activity from being clicked if its opposite activity will conflict at same time and is checked and vice versa
		if ($(actPut).attr('data-day-and-time') == $loo.attr('data-day-and-time') && $(actPut).attr('name') !== $loo.attr('name')) {
			if ($(actPut).prop("checked")) {
				$loo.attr('disabled', true);
			} else {
				$loo.attr('disabled', false);
			}
		}
	}
});
//disables the user from being able to select "Select Payment Method" on payment info dropdown menu and selects the "Credit Card" option by default in the payment info dropdown menu
$('#payment option[value="select method"]').remove(true);
//variables to access the options in the payment dropdown menu
const $paymentSelection = $('#credit-card')
const creditCard = $('#credit-card')
const bitCoin = $('#bitcoin')
const payPal = $('#paypal')
$('#bitcoin').hide();
$('#paypal').hide();
$("#SelectMenu").val('credit-card');
//event listener that updates the payment info section to change based on what the user selects to pay with
$paymentSelection.on('change', function() {
	//shows credit card info and hides bitcoin and paypal info
	if ($paymentSelection.val() === 'Credit Card') {
		$('#credit-card').show();
		$('#bitcoin').hide();
        $('#paypal').hide();
        $('#select method').prop('disabled' ,true);
		//shows paypal info and hides credit card and bitcoin info
	} else if ($paymentSelection.val() === 'PayPal') {
		$('#paypal').show();
		$('#credit-card').hide();
		$('#bitcoin').hide();
		//shows bitcoin info and hides credit card  and paypal info   
	} else if ($paymentSelection.val() === 'Bitcoin') {
		$('#bitcoin').show();
		$('#paypal').hide();
		$('#credit-card').hide();
	}
}); 
//variables to store form inputs
$('.container').submit( (e) => {

	let errorFlag = false;
  
	let name = $('#name').val();
	let email = $('#mail').val();
	let checkedWorkshop = $('input:checked')
	let ccNum = $('#cc-num').val();
	let zipCode = $('#zip').val();
	let cvv = $('#cvv').val();
  
	$('.error').remove();
  
	if (name.length < 1) {
	  $('#name').after('<span class="error">Must put a name</span>');
	} else {
	  let regexName = /^[a-zA-Z ]{3,16}$/;
	  let validName = regexName.test(name);
		if (!validName) {
		  $('#name').after('<span class="error">Please put in a valid name</span>')
		  errorFlag = true;
	  }
	};
  
	if (email.length < 1) {
	  $('#mail').after('<span class="error">An email must be put in</span>');
	} else {
	  let regexEmail = /\w.+@[a-zA-Z_-]+\.[a-zA-Z]{2,3}$/;
	  let validEmail = regexEmail.test(email);
	  if (!validEmail) {
		$('#mail').after('<span class="error">Please put in a valid email</span>')
		errorFlag = true;
	  }
  
	};
  
	if (!$('input[type=checkbox]').is(':checked')) {
	  $('.activities').after('<span class="error">Please check off at the least, 1 activity</span>')
	   errorFlag = true;
	};
  
	if ($('select option[value="credit card"]').attr('selected', true)) {
	  if (ccNum.length < 1) {
		$('#cc-num').after('<span class="error">Credit Card required</span>');
	  } else {
		let regexCredit = /^\d{13,16}$/;
		let validCredit = regexCredit.test(ccNum);
		if (!validCredit) {
		  $('#cc-num').after('<span class="error">Please put a valid credit card</span>')
		  errorFlag = true;
		}
  
	  };
  
	  if (zipCode.length < 1) {
		$('#zip').after('<span class="error">A working zipcode is needed</span>');
	  } else {
		let regexZip = /^\d{5}$/;
		let validZip = regexZip.test(zipCode);
		if (!validZip) {
		  $('#zip').after('<span class="error">Enter valid zipcode</span>')
		  errorFlag = true;
		}
	  };
  
	  if (cvv.length < 1) {
		$('#cvv').after('<span class="error">A cvv number is needed</span>');
	  } else {
		let regexCVV = /^\d{3,4}$/;
		let validCVV = regexCVV.test(cvv);
		if (!validCVV) {
		  $('#cvv').after('<span class="error">please put in a cvv</span>')
		  errorFlag = true;
		}
  
	  };
  
	} else {
	  ($('select option[value="paypal"]').attr('selected', true)) || ($('select option[value="bitcoin"]').attr('selected', true))
  
	};
  
	if (errorFlag === true){
	  e.preventDefault();
	}
  });


//    return /^[a-z]+$/.test(name) &&
//   /^[A-Z]+$/.test(name) &&
//    /^[0-9]+$/.test(name);











 



 




