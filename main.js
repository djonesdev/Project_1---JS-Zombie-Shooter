 $(function() {
 	var overrun = 100;
	var score = 0;
	var button = $('#box')
	var elem = $('#message');
	var count = 0;
	var gunshot = $('#gunshot');
	var infectionLevel = 100;
	var infectionIncrament = 5;

 // INSTRUCTION PANEL// AUDIO// GAME START// INFECTION BAR 

	$('#box').click(function(e) {
 		$('#message').fadeToggle();
 	});

	$('#musicButton').click(function(e) {
 		$('audio').stop();
 	});

	$('#gameStart').click(function gameStart (e) {

function adjustInfection(total) {
	var infectionBar = $('#infectionBar'); 
  		infectionLevel += total;
  		infectionBar.css({
  			width: infectionLevel
  		});
}

  interval = setInterval(function(){
    adjustInfection(infectionIncrament);
    }, 1000)

// SHOT FUNCTIONS

	$('#gameStage').on('click', function (event) {
        var audio = new Audio('audio/shotgun-mossberg590-RA_The_Sun_God-451502290.mp3');

        audio.play();    
    });

	$(function() {
		var count = 0;
		$('#target').click(function(e) {
			count++;
			adjustInfection(-10);
			checkBossActivation()
				$('#gunshot').show();
				score += 10;
				$('#score').html(score);
				setTimeout(function() {
					$('#gunshot').hide();
				}, 3500);
		});

	});

	$(function() {
		$('#target2').click(function shotZombie2(e) {
			score += 10;
			adjustInfection(-10);
			checkBossActivation()
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
			adjustInfection(-10);
			checkBossActivation();
				$('#score').text(score);
				$('#gunshot3').show();
				setTimeout(function() {
					$('#gunshot3').hide();
				}, 2500);

		});
	});

	$('#target4').click(function (e) {
		score += 10;
		adjustInfection(-10);
		checkBossActivation();
			$('#score').text(score);
			$('#gunshot4').show();
			setTimeout(function (e) {
				$('#gunshot4').hide();
			}, 2500);
	});

	$('#target5').click(function (e) {
		score += 10;
		adjustInfection(-10);
		checkBossActivation();
			$('#score').text(score);
			$('#gunshot5').show();
			setTimeout(function (e) {
				$('#gunshot5').hide();
			}, 3000);
	});

	$('#bossTarget').click(function (e) {
		$('#gunshot6').show();
		count++;
		if (count === 3) {
			$('#gunshot7').show();
		}
		if (count === 5) {
			$('#gunshot8').show();
		}
		if (count === 10) {
			score += 1000;
			adjustInfection(-100);
			$('#score').text(score);
			$('#bossTarget').fadeOut();
		};
	});

	function checkBossActivation () {
	 if ($('#score').html() === '200') {
	 	$('#bossTarget').show()
	 };
	}

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
	 	}, 500)
	 	.animate({
	 		right: '20%',
	 	}, 2000);
	 	$('#target4').fadeOut().delay(1000);
	 	$('#target4').animate({
	 		right: '5%'
	 	});
	 	$('#target4').fadeIn().delay(500)
	 		$(function () {
	 			animateLoop4();
	 		});

	}); 

	setInterval(function animateLoop3(e) {
	 	$('#target3').delay(3000).fadeIn();
		$('#target3').delay(2500).fadeOut();
	}, 3000);

	setInterval(function (e) {
		$('#target5').delay(2000).fadeOut()
		$('#target5').delay(2000).slideDown();
	}, 2000);

	(function gameOver (e) {
		if (infectionLevel.total() >= 200) {
			$('#gameOver').show()
		};
	});

	// $('#playAgain').click(function playAgain (e) {
	// 	 	var overrun = 100;
	// 		var score = 0;
	// 		var button = $('#box')
	// 		var elem = $('#message');
	// 		var count = 0;
	// 		var gunshot = $('#gunshot');
	// 		infectionLevel = 100;
	// 		var infectionIncrament = 5;
	// 		gameStart();
	// 	};
	// });

});
});

