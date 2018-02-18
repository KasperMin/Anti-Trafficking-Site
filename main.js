// - If you are at the footer When the first image switch happens it automatically jump up to the head //
$(document).ready(function() {
  let cambodiaCounterEl = $("#cambodiaCounter");
  let documentEl = $(document);
  let counter = 0
  let scrollActivated = false;
  let breakActivated = false;
  let interval;

  documentEl.on("scroll", function() {
    if (documentEl.scrollTop() > 100 & scrollActivated === false) {
      scrollActivated = true;

      function startCounter() {
        cambodiaCounterEl.html(counter);
        if (counter < 15000) {
          counter++;
        } else {
          clearInterval(interval)
        }
      } // END OF START COUNTER FUNCTION //

      for (let i = 0; i < 100; i++) {
        interval = setInterval(startCounter, 1)
      }


     }; // END OF IF SCROLL STATEMENT //

  }); // END OF SCROLL FUNCITON //

}); // End of ready function //
