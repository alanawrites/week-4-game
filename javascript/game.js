$( document ).ready(function() {

    var numberToGuess = 53;

    var counter = 0;

    var numbers = [10, 5, 3, 7];

    $('#number').text(numberToGuess);

    for (var i=0; i< numbers.length; i++){

      var imageCrystal = $('<img>');
      
      imageCrystal.attr('data-num', numbers[i]);

      imageCrystal.attr('src', 
        'http://pngimg.com/upload/diamond_PNG6692.png');

      imageCrystal.attr('alt', 'crystals');

      imageCrystal.addClass('crystalImage');

      $('#crystals').append(imageCrystal);
    }
    
    $('.crystalImage').on('click', function(){
      counter = counter + parseInt($(this).data('num'));
      
      $('#yourNumber').text(counter);

      if (counter == numberToGuess){
        alert('heigh ho!!!!');
      }else if( counter > numberToGuess){
        alert('You lost!');
      }
    });

  });