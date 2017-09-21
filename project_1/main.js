 $(function() {
 	var overrun = 100;
	var score = 0;
	var button = $('#box')
	var elem = $('#message');
	var count = 0;
	var gunshot = $('#gunshot');
	var overrun = 100;
	var overrunIncrament = 6;
	var ammo = 6;
	var $shell = $('.shell')
	shotCount = 0

 // INSTRUCTION PANEL// AUDIO// GAME START// INFECTION BAR 

	$('#box').click(function(e) {
 		$('#message').fadeToggle();
 	});

	$('#musicButton').click(function(e) {
 		$('audio').stop();
 	});

	$('#gameStart').click(function gameStart (e) {
		$('#message').fadeOut();

	function adjustOverrun(total) {
		var overrunBar = $('#overrunBar'); 
  			overrun += total;
  			overrunBar.css({
  				width: overrun
  			});
};

  interval = setInterval(function(){
    adjustOverrun(overrunIncrament);
    }, 1000)

// SHOT FUNCTIONS

	$('#gameStage').on('click', function (event) {
        var audio = new Audio('audio/shotgun-mossberg590-RA_The_Sun_God-451502290.mp3');
        ammo --;
        shellHide();
        reloadCount();
        audio.play(); 
    });

    function shellHide (e) {
    	shotCount++;

        if (shotCount === 1) {
        	$('#shell1').hide();
        }
        else if (shotCount === 2) {
        	$('#shell2').hide();
        }
        else if (shotCount === 3) {
        	$('#shell3').hide();
        }
        else if (shotCount === 4) {
        	$('#shell4').hide();
        }
        else if (shotCount === 5) {
        	$('#shell5').hide();
        }
        else if (shotCount === 6) {
        	$('#shell6').hide();
        	shotCount = 0;
        }
    };

	function reloadCount (e) {
		if (ammo === 0) {
			ammo = 6;
			$('#gameStage').css({
				pointerEvents: 'none'
			});
			setTimeout(function reload2 (e) {
			$('#gameStage').css({
				pointerEvents: ''
			});
			$('.shell').fadeIn()

		}, 2500);
		};
	};


	$(function() {
		var count = 0;
		$('#target').click(function shotZombie1(e) {
			count++;
			adjustOverrun(-10);
			checkBossActivation();
			levelUp();
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
			adjustOverrun(-10);
			checkBossActivation();
			levelUp();
				$('#score').text(score);
				$('#gunshot2').show();
				setTimeout(function() {
					$('#gunshot2').hide();
				}, 3000);
		});
	});

	$(function() {
		$('#target3').click(function shotZombie3(e) {
			score += 10;
			adjustOverrun(-10);
			checkBossActivation();
			levelUp();
				$('#score').text(score);
				$('#gunshot3').show();
				setTimeout(function() {
					$('#gunshot3').hide();
				}, 2500);

		});
	});

	$('#target4').click(function shotZombie4(e) {
		score += 10;
		adjustOverrun(-10);
		checkBossActivation();
		levelUp();
			$('#score').text(score);
			$('#gunshot4').show();
			setTimeout(function (e) {
				$('#gunshot4').hide();
			}, 2500);
	});

	$('#target5').click(function shotZombie5(e) {
		score += 10;
		adjustOverrun(-10);
		checkBossActivation();
		levelUp();
			$('#score').text(score);
			$('#gunshot5').show();
			setTimeout(function (e) {
				$('#gunshot5').hide();
			}, 2200);
	});

	$('#bossTarget').click(function shotZombie6(e) {
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
			adjustOverrun(-100);
			$('#score').text(score);
			$('#bossTarget').fadeOut();
		};
	});

	$('#bossTarget2').click(function (e) {
		$('#gunshot9').show();
		count++;
		console.log(count)
		if (count === 2) {
			$('#gunshot10').show();
			console.log('2')
		}
		if (count === 3) {
			$('#gunshot11').show();
			console.log('3')
		}
		if (count === 5) {
			$('#gunshot12').show();
			console.log('5')
		}
		if (count === 7) {
			score += 1000
			adjustOverrun(-200);
			$('#score').text(score);
			$('#bossTarget2').fadeOut();
		};
	});

	function checkBossActivation () {
	 if ($('#score').html() === '200') {
	 	overrun += 30;
	 	$('#bossTarget').fadeIn()
	 };
	 if ($('#score').html() === '200') {
	 	$('#bossTarget2').fadeIn()
	 };
	};


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


	setInterval(function animateLoop2(e) {
		$('#target').animate({
			bottom: '20%'
		}, 4000)
			.animate({
				bottom: '0%'
			});
	}, 7000);

	setInterval(function animateLoop4(e) {
		$('#target4').animate({
			bottom: '20%'
		}, 4000)
			.animate({
				right: '20%',
				bottom: '0%'
			});
	}, 3000);

	setInterval(function animateLoop3(e) {
	 	$('#target3').delay(3000).fadeIn();
		$('#target3').delay(2500).fadeOut();
	}, 10000);

	setInterval(function (e) {
		$('#target5').delay(2000).fadeOut()
		$('#target5').delay(2000).slideDown();
	}, 2000);

	setInterval(function checkOverrun (e) {
		if (overrun >= 200) {
			$('#gameOver').show()
		};
		if (overrun <= 0) {
			$('#winScreen').show()
		};
	}, 1000);

	$('.playAgain').click(function playAgain (e) {

			$('#gameOver').hide();
			$('#winScreen').hide()
			overrun = 100;
			var overrunIncrament = 5;
			$('#score').html(0)
			score = 0;
			animateLoop1();
			animateLoop2();		
			animateLoop3();
			animateLoop4();

		});

	function levelUp(e) {
		if ($('#score').html() === '500') {
			overrunIncrament = 10;
		}
		if ($('#score').html() === '1500') {
			window.overrunIncrament = 15;
		}
	}
	});

});


