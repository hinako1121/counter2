(() => {
  const $counter = document.getElementById("js-counter");

  const clickHandler = (e) => {
      const $targetButton = e.currentTarget;
      let currentCount = parseInt($counter.textContent);
      if($targetButton.textContent === "-10"){
          $counter.textContent = currentCount - 10;
      } else if($targetButton.textContent === "-"){
        $counter.textContent = currentCount - 1;
    } else if($targetButton.textContent === "+"){
      $counter.textContent = currentCount + 1;
  } else if($targetButton.textContent === "+10"){
    $counter.textContent = currentCount + 10;
}
  }

  for (let index = 0; index < document.getElementsByClassName("js-button").length; index++) {
      document.getElementsByClassName("js-button")[index].addEventListener("click", (e) => clickHandler(e))
  }
})();