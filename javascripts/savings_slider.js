'use strict';

(function () {

  var input = $('.Slider');

  var agentsFees = 0.018; // 1.8% typical agentā€™s fees
  var moovynBasePrice = 780;
  var vat = 1.2;

  var housePriceRanges = [
    50000, 60000, 70000, 80000, 90000, 100000, 110000, 120000, 125000, 130000,
    140000, 150000, 160000, 170000, 175000, 180000, 190000, 200000, 210000, 220000,
    230000, 240000, 250000, 260000, 270000, 280000, 290000, 300000, 325000, 350000,
    375000, 400000, 425000, 450000, 475000, 500000, 550000, 600000, 650000, 700000,
    800000, 900000, 1000000, 1250000, 1500000, 1750000, 2000000, 2500000, 3000000,
    4000000, 5000000, 7500000, 10000000, 15000000, 20000000
  ];

  // Display when js loads successfully
  $('.Savings-slider').find('.hide').each(function() {
    $(this).removeClass('hide');
  });

  // Hide default
  $('.Savings-slider__default').addClass('hide');

  // Push fake array to slider to allow us to use custom steps
  var lowEnd = 0;
  var highEnd = housePriceRanges.length - 1;
  var fake_prices_array = [];
  while(lowEnd <= highEnd){
     fake_prices_array.push(lowEnd++);
  }

  $(input).slider({
    ticks: fake_prices_array,
    formatter: function(value) {
      return 'Ā£' + housePriceRanges[value].toLocaleString();
    }
  }).on('change', function(data) {
    var savingValue = Math.round(housePriceRanges[data.value.newValue] * agentsFees * vat - moovynBasePrice);
    $('.Savings-slider__update-text').text(savingValue.toLocaleString());
  });

  // housePriceRanges[16] is the value for 190,000 needs to also be updated in the view
  var savingValue = Math.round(housePriceRanges[16] * agentsFees * vat - moovynBasePrice);
  $('.Savings-slider__update-text').text(savingValue.toLocaleString());
})();
