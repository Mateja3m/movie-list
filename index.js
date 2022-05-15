let sumAll = 0;

function watchMovie(element) {
  let mainEl = element.closest(".single-items");

  let output = document.querySelector(".output");
  let price = mainEl.querySelector(".price").innerText;

  price = parseInt(price);
  sumAll += price;
  element.setAttribute("disabled", "true");

  element.innerText = "Watched";
  mainEl.classList.add("watched");
  output.innerHTML = `$${sumAll}`;
}

