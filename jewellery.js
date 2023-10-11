//Fetching Jewelery

fetch("https://fakestoreapi.com/products/category/jewelery")

.then((response) => {

  if (response.ok) {

    return response.json();

  } else {

    throw new Error("NETWORK RESPONSE ERROR");

  }

})

.then((data) => {

  console.log(data);



  const mainContainer = document.getElementById("jewellery");

  const cardDeck = document.createElement("div");

  cardDeck.classList.add("card-deck");



  data.forEach((product) => {

    const card = document.createElement("div");

    card.classList.add("card");

    card.style.width = "18rem";

    card.style.margin = "1rem";



    const cardImage = document.createElement("img");

    cardImage.classList.add("card-img-top");

    cardImage.alt = "Product Image";

    cardImage.src = product.image;

    card.appendChild(cardImage);



    const cardBody = document.createElement("div");

    cardBody.classList.add("card-body", "d-flex", "flex-column");



    const cardTitle = document.createElement("h5");

    cardTitle.classList.add("card-title");

    cardTitle.textContent = product.title;

    cardBody.appendChild(cardTitle);



    const cardPrice = document.createElement("p");

    cardPrice.classList.add("card-price");

    cardPrice.textContent = product.price;

    cardPrice.textContent = `$ ${product.price}`;

    cardBody.appendChild(cardPrice);



    const cardButton = document.createElement("a");

    cardButton.classList.add(

      "btn",

      "btn-primary",

      "col-12",

      "mx-auto",

      "mt-auto"

    );

    cardButton.href = "productDetails.html";

    cardButton.textContent = "View More";

    cardBody.appendChild(cardButton);



    card.appendChild(cardBody);

    cardDeck.appendChild(card);

    cardButton.addEventListener('click',()=>{

      localStorage.setItem("CurrId",product.id)

    })

  });



  mainContainer.appendChild(cardDeck);

})

.catch((error) => console.error("FETCH ERROR:", error));

