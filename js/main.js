var $banner = $('.banner');
var $addStars;
var $width = $banner.outerWidth();
var $height = $banner.outerHeight();

for (i = 0; i < 75; i++) {
  $rotateNum = Math.random() * 1000;
  $scaleNum = Math.random() * 2;
  $animateNum = Math.random() * 10;
  $addStars = $('<div>');
  $addStars.addClass('star');
  $addStars.css({
    left: Math.random() * $width,
    top: Math.random() * $height,
    opacity: Math.random() * 10,
    width: Math.random() * 100,
    transform: 'rotate(' + $rotateNum + 'deg) scale(' + $scaleNum + ')',
    animation: 'growstars ' + $animateNum + 's alternate infinite'
  });

  $banner.append($addStars);
};
