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

$('#gameStage').on('click', function (event) {
        var audio = new Audio('audio/shotgun-mossberg590-RA_The_Sun_God-451502290.mp3');

        audio.play();    
    });

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

$('#target4').click(function (e) {
	score += 10;
		$('#score').text(score);
		$('#gunshot4').show();
		setTimeout(function (e) {
			$('#gunshot4').hide();
		}, 2500);
});

$('#target5').click(function (e) {
	score += 10;
		$('#score').text(score);
		$('#gunshot5').show();
		setTimeout(function (e) {
			$('#gunshot5').hide();
		}, 3000);
});

// ANIMATION LOOPS

 $(function animateLoop1() {
	$('#target2').animate({
		bottom: '15%',
		left: '15%'
	}, 2000).delay(2000);
	$('#target2').fadeOut();
	$('#target2').fadeOut()
	.animate({
		bottom: '0%'
	})
	.fadeIn()
	$(function() {
		$('#target2').delay(6000)
		animateLoop1();
	});
});


setInterval(function (e) {
	$('#target').animate({
		bottom: '20%'
	}, 4000)
		.animate({
			bottom: '0%'
		});
}, 7000);

 $(function animateLoop4(e) {
 	$('#target4').animate({
 		bottom: '20%'
 	}, 2000)
 	.animate({
 		right: '20%',
 	}, 2000);
 	$('#target4').fadeOut().delay(2000);
 	$('#target4').animate({
 		right: '5%'
 	})
 	$('#target4').fadeIn().delay(2000)
 		$(function () {
 			animateLoop4();
 		});

 }); 

 $(function animateLoop3(e) {
 	$('#target3').delay(8000).fadeIn();
 	$('#target3').delay(2500).fadeOut();
 });

 setInterval(function (e) {
 	$('#target5').delay(2000).fadeOut()
 	$('#target5').delay(2000).slideDown();
 }, 2000);
});
});
// });
