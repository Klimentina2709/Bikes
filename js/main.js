const cardsContainer = document.querySelector("#cards");
const sidebar = document.querySelector("#sidebar");
const sidebarElements = sidebar.querySelectorAll("li");

function fetchData() {
  fetch(`https://challenges.brainster.tech/ajax_data/data.json`)
    .then((response) => response.json())
    .then((data) => {
      renderCards(data.products);
      attachClickHandlers(data.products);

      const first = document.querySelector("label");
      first.click();

      productCounts = countProductsByCategory(data.products);
      renderNumbers();
    })
    .catch((error) => {
      console.error("the data couldn't be fetched", error);
    });
}

fetchData();

function renderCards(products) {
  products.forEach((product) => {
    //The card
    const divCard = document.createElement("div");
    divCard.classList.add("cardsParent");

    const innerDiv = document.createElement("div");
    innerDiv.classList.add("innerItem");

    const img = document.createElement("img");
    img.src = `./img/${product.image}.png`;
    img.classList.add("imageCard");
    divCard.appendChild(innerDiv);
    innerDiv.appendChild(img);

    const productName = document.createElement("h5");
    productName.classList.add("text");
    productName.innerText = product.name;

    const price = document.createElement("p");
    price.classList.add("text");
    price.style.fontSize = "smaller";
    price.innerText = `${product.price} $`;

    const btn = document.createElement("button");
    btn.innerText = "Learn more";
    btn.classList.add("button");

    divCard.appendChild(productName);
    divCard.appendChild(price);
    divCard.appendChild(btn);

    cardsContainer.appendChild(divCard);
  });
}

function handleClick(event, products) {
  cardsContainer.innerHTML = "";

  const selectedLi = event.target.closest("li");
  const selectedLabel = selectedLi.querySelector("label");
  const selected = selectedLabel.textContent.trim().toUpperCase();

  sidebarElements.forEach((li) => {
    li.classList.remove("clicked");
    const span = li.querySelector("span");
    if (span) {
      span.classList.remove("clickedSpan");
    }
  });

  selectedLi.classList.add("clicked");
  const spanNextToLi = selectedLi.querySelector("span");
  if (spanNextToLi) {
    spanNextToLi.classList.add("clickedSpan");
  }

  if (selected === "SHOW ALL") {
    renderCards(products);
    return;
  }

  const filteredProducts = products.filter(
    (product) =>
      product.gender.toUpperCase() === selected ||
      product.brand.toUpperCase() === selected
  );
  renderCards(filteredProducts);
}

function attachClickHandlers(products) {
  sidebarElements.forEach((li) => {
    li.addEventListener("click", (event) => {
      handleClick(event, products);
    });
  });
}

function renderNumbers() {
  sidebarElements.forEach((li) => {
    const elementText = li
      .querySelector("label")
      .textContent.trim()
      .toUpperCase();
    const spanNext = li.querySelector("span");

    if (spanNext && spanNext.tagName === "SPAN") {
      let count;
      if (elementText === "SHOW ALL") {
        count = productCounts.showAll;
      } else {
        if (elementText in productCounts.gender) {
          count = productCounts.gender[elementText];
        } else if (elementText in productCounts.brand) {
          count = productCounts.brand[elementText];
        } else {
          count = 0;
        }
      }
      spanNext.textContent = ` ${count}`;
    }
  });
}

function countProductsByCategory(products) {
  const productCounts = {
    gender: {},
    brand: {},
    showAll: 0,
  };

  products.forEach((product) => {
    const gender = product.gender.trim().toUpperCase();
    if (gender in productCounts.gender) {
      productCounts.gender[gender]++;
    } else {
      productCounts.gender[gender] = 1;
    }

    const brand = product.brand.trim().toUpperCase();
    if (brand in productCounts.brand) {
      productCounts.brand[brand]++;
    } else {
      productCounts.brand[brand] = 1;
    }

    productCounts.showAll++;
  });

  return productCounts;
}
