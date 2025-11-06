$(window).scroll(function() {
  $('[class^="l-chapter__section"]').each(function(){
    var TopDistance = $(window).scrollTop(),
        elementOffset = $(this).offset().top,
        elementHeight = $(this).height(),
        elementClass = $(this).attr('class'),
        elementId = elementClass.split('-')[2].charAt(0),
        DistanceFromTop = (elementOffset - TopDistance);
    
    if (DistanceFromTop < 0) {
      DistanceFromTop = DistanceFromTop * -1;

      if (DistanceFromTop < elementHeight) {
        var heightPercentage = (DistanceFromTop / elementHeight) * 100;
        var heightPercentage = (Math.round(heightPercentage * 100) / 100) + '%'

        console.log(elementId);

        $('.l-chapter__section-' + elementId).css('background-position', '50% ' + heightPercentage);
      }
    }
  });
});