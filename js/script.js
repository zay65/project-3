//Select the "Name" input element
$('Name').focus('click', function(){
    $( 'this' ).next( "span" ).css( "display", "inline" ).fadeOut( 2000 );  

});



//display "Other" input field during javascript disabled
$( "#clickme" ).click(function() {
    $( "#Other" ).hide( "slow", function() {
      alert( "Animation complete." );
   
  });

