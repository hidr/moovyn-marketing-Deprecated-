'use strict';

(function () {

  $('[data-full-screen-video]').each(function() {
    var videoId = $(this).data('full-screen-video');
    $(this).on('click', function(e) {
      e.preventDefault();
      $('body').addClass('Full-screen-video__body');
      $('body').append(
        '<div class="Full-screen-video">' +
          '<div class="Full-screen-video__close"><i class="fa fa-close"></i></div>' +
          '<iframe src="https://player.vimeo.com/video/' + videoId + '?autoplay=1&color=00b991&byline=0&portrait=0" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' +
        '</div>'
      );

      $('.Full-screen-video__close').on('click', function() {
        $('body').removeClass('Full-screen-video__body');
        $('.Full-screen-video').remove();
      });
    });
  });

})();
