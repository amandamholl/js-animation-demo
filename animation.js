var animationTimeline = new TimelineLite({ paused: true });

expandButton = function () {
  return TweenMax.to('.submit', 0.15, { transform: "scale(1.15)", transformOrigin: "center center", boxShadow: "0 0 4px 0 rgba(0, 0, 0, 0, 0.08)", ease: Power0.easeInOut });
}

displayLoader = function () {
  return TweenMax.staggerTo('.loader circle', 0.5, { attr: { "fill-opacity": 1 }, repeat: 5, yoyo: true, ease: Power0.easeNone }, 0.25);
};

hideButtonText = function () {
  return TweenMax.to('.button-text', 0.1, { opacity: 0 });
};

triggerAnimation = function (e) {
  e.preventDefault();

  if (animationTimeline.duration() == 0) {
    var expand = expandButton();
    var hide = hideButtonText();

    animationTimeline.set('svg', { visibility: 'visible' });    // Change the visibility, without animation
    animationTimeline.add(expand, 0);                           // Add the Tween to the timeline at the specified time
    animationTimeline.add(hide, 0);
    animationTimeline.add(displayLoader(), 0);
    animationTimeline.add(expand.reverse(), 4.2);               // Insert the reveresed animation at the specified time
    animationTimeline.add(hide.reverse(), 4.6);
  }

  animationTimeline.seek(0).play();
}

$('.submit').on('click', triggerAnimation);
