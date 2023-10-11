document.addEventListener('DOMContentLoaded', function() {

  renderCartItems();

 

  function renderCartItems() {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    let totalPrice = 0;

    document.getElementById("cart").innerHTML = "";

    cart.forEach(product => {

      const productDetails = document.createElement('div');

      productDetails.classList.add('prodDetails');

 

      const img = document.createElement('img');

      img.classList.add("checkout-img");

      img.setAttribute('src', product.image);
      img.classList.add("custom-image");

      productDetails.appendChild(img);

 

      const h5 = document.createElement('h5');

      h5.innerHTML = product.title;
      h5.classList.add("tit");
      productDetails.appendChild(h5);

 

      const h6 = document.createElement('h6');

      if (typeof product.price === "number") {

        h6.innerHTML = ` Price $${product.price.toFixed(2)}`;

        totalPrice += product.price * (product.quantity || 1);

      } else {

        h6.innerHTML = ` Price: $${0}`;

      }

      productDetails.appendChild(h6);

 

      //! Quantity handling

      const quantityContainer = document.createElement('div');

      quantityContainer.classList.add('quantity-container');

 

      const minusButton = createButton('-', () => updateQuantity(product, -1));

      quantityContainer.appendChild(minusButton);


      const quantityElement = document.createElement('span');

      quantityElement.textContent = product.quantity || 1; 

      quantityContainer.appendChild(quantityElement);

 

      const plusButton = createButton('+', () => updateQuantity(product, 1));

      quantityContainer.appendChild(plusButton);

 

      productDetails.appendChild(quantityContainer);


      const removeButton = createButton('Remove', () => removeFromCart(product));
      removeButton.classList.add("custom-cardButton");

      productDetails.appendChild(removeButton);

 

      const cartContainer = document.getElementById('cart');

      cartContainer.appendChild(productDetails);

    });


    const cartContainer = document.getElementById('cart');

    const totalPriceElement = document.createElement('div');

    totalPriceElement.classList.add('total-price');

    totalPriceElement.textContent = `Total Price: $${totalPrice.toFixed(2)}`;

    cartContainer.appendChild(totalPriceElement);


    localStorage.setItem("totalPrice", totalPrice.toFixed(2));

    const placeOrder= createButton('Place Order', () => payment());
    placeOrder.classList.add("custom-cardButton");

    cartContainer.appendChild(placeOrder);

  }

  function payment(){

    window.location.href = "checkout.html";

  }

 

  function createButton(text, onClick) {

    const button = document.createElement('button');

    button.textContent = text;

    button.addEventListener('click', onClick);

    return button;

  }

 

  function updateQuantity(product, change) {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updatedCart = cart.map(item => {

      if (item.id === product.id) {

        item.quantity = (item.quantity || 1) + change;

      }

      return item;

    });

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    renderCartItems();

  }

 

  function removeFromCart(product) {

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    const updatedCart = cart.filter(item => item.id !== product.id);

    localStorage.setItem('cart', JSON.stringify(updatedCart));

    renderCartItems();

  }

 

});