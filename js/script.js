console.log($('Name') );
console.log($( "#clickme" ));

//Select the "Name" input element
$('#name').focus();



//display "Other" input field during javascript disabled

$('Your job role').hide();
$('Your job role').show(function (e) {
   $("Other").click();



});
