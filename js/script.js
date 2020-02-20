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
$('#payment option[value="select method"]').hide(true);
//variables to access the options in the payment dropdown menu
const $paymentSelection = $('#payment')
const creditCard = $('#credit-card')
const bitCoin = $('#bitcoin')
const payPal = $('#paypal')
$('#bitcoin').hide();
$('#paypal').hide();
//event listener that updates the payment info section to change based on what the user selects to pay with
$paymentSelection.on('change', function() {
	//shows credit card info and hides bitcoin and paypal info
	if ($paymentSelection.val() === 'Credit Card') {
		$('#credit-card').show();
		$('#bitcoin').hide();
		$('#paypal').hide();
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
const form = document.querySelector("form");
const email = document.querySelector("#email");
const name = document.querySelector("#name");

function checkName() {
if (name.value === '') {
return false

}else{ 
	return true;
}



};







