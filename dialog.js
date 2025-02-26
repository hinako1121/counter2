(() => {
  const $counter = document.getElementById("js-counter");
  let hasReached100 = false;

  const checkCounter = () => {
    const currentCount = parseInt($counter.textContent);
    if (currentCount >= 100 && !hasReached100) {
      alert("Congratulations! You've reached 100 points!");
      hasReached100 = true;
    }
  };

  // Add event listener to monitor counter changes
  const observer = new MutationObserver(() => {
    checkCounter();
  });

  observer.observe($counter, { 
    characterData: true, 
    childList: true, 
    subtree: true 
  });
})();