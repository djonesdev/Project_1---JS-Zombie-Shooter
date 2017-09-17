 $(function() {

var score = 0;

   var button = $('#box')
   var elem = $('#message');
   var count = 0;
   var gunshot = $('#gunshot');

 // INSTRUCTION PANEL 

// $(function() {
//   var count = 0;
  
//   $('#box').click(function(e) {
//     count++;
    
//     if(count == 5) {
//       $('#message').show();
//     }
//   });
// });

 $('#box').click(function(e) {
 	$('#message').fadeToggle();
 });

 $('#musicButton').click(function(e) {
 	$('audio').stop();
 });

$('#gameStart').click(function (e) {

// SHOT FUNCTIONS

$(function() {
	var count = 0;
	$('#target').click(function(e) {
		count++;
			$('#gunshot').show();
			score += 10;
			$('#score').text(score);
			setTimeout(function() {
				$('#gunshot').hide();
			}, 3500);
	});

});

$(function() {
	$('#target2').click(function shotZombie2(e) {
		score += 10;
			$('#score').text(score);
			$('#gunshot2').show();
			setTimeout(function() {
				$('#gunshot2').hide();
			},2500);
	});
});

$(function() {
	$('#target3').click(function(e) {
		score += 10;
			$('#score').text(score);
			$('#gunshot3').show();
			setTimeout(function() {
				$('#gunshot3').hide();
			}, 2500);

	});
});

// ANIMATION LOOPS

 $(function animateLoop1() {
	$('#target2').animate({
		bottom: '25%',
		left: '15%'
	}, 2000)
	.animate({
		bottom: '0%',
		right: '20%'
	}, 2000);
	$(function() {
		animateLoop1();
	});
});

var $target = $('#target')
$(function animateLoop2(e) { 
 $target.animate({
 	bottom: '35%',
 	right: '13%'
 }, 3000)
  $('#target').delay(1000)
  .fadeOut()
  .animate({
  	bottom: '0%'
  })
  .fadeIn()
  $(function() {
  	$('#target').delay(2000);
  	animateLoop2();
  });

 $(function animateLoop3(e) {
 	$('#target4').animate({
 		bottom: '30%'
 	}, 2000)
 	.animate({
 		left: '20%',
 	}, 7000)
 	.fadeOut();

 }); 
});
});
});
