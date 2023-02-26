$(function () {
  $('[data-toggle="tooltip"]').tooltip();
});

// Get all h2 elements with a "data-count" attribute
const counters = document.querySelectorAll("h2[data-count]");

// Loop through each counter and animate the count up to the final value
counters.forEach((counter) => {
  const finalCount = parseInt(counter.getAttribute("data-count"));
  const duration = 500; // Duration of the animation in milliseconds
  const step = (finalCount / duration) * 10; // Calculate the amount to increment the count by each frame

  let count = 0;

  const timer = setInterval(() => {
    count += step;
    counter.innerText = Math.round(count);

    if (count >= finalCount) {
      clearInterval(timer);
      counter.innerText = finalCount;
    }
  }, 10);
});
