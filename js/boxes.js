$(function() {
  setup();
  colorBoxOnClick();
});

times = function(n, iterator) {
  var accum = Array(Math.max(0, n));
  for (var i = 0; i < n; i++) accum[i] = iterator.call();
  return accum;
};

setup = function() {
  times(11, function() {
    $('#first-column .group-box:last').clone().appendTo('#first-column');
    $('#first-column .hour-box:last').text(function() {
      return parseInt($(this).text()) + 1;
    });
    $('#second-column .group-box:last').clone().appendTo('#second-column');
    $('#second-column .hour-box:last').text(function() {
      return parseInt($(this).text()) + 1;
    });
  });
};

colorBoxOnClick = function() {
  $('.hour-box, .minute-box').click(function() {
    $box = $(this);
    allColors = $('#js-fill-color option')
    fillColor = $('#js-fill-color option:selected').val();

    allColors.each(function() {
      $box.removeClass($(this).val());
    });
    $box.addClass(fillColor);
  });
};
