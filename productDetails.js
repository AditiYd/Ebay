fetch('https://fakestoreapi.com/products/'.concat(localStorage.getItem('CurrId')))

.then(res => res.json())

.then(data => { console.log(data)

let productDetails = document.getElementById('productDetails')

 

let img = document.createElement('img')

img.setAttribute('src', data.image)

img.classList.add("prod-img", "custom-img");

productDetails.appendChild(img)

 

let h5 = document.createElement('h5')

h5.innerHTML = data.title;

productDetails.appendChild(h5)

 

let h6 = document.createElement('h6')

h6.innerHTML = `$ ${data.price}`;

productDetails.appendChild(h6)

 

let p = document.createElement('p')

p.innerHTML = data.description;

productDetails.appendChild(p)

 

const cardButton = document.createElement("a");

cardButton.classList.add(

  "btn",

  "btn-primary",

  "col-12",

  "mx-auto",

  "mt-auto",

  "pink-btn"

);
cardButton.textContent = "Add to Cart"; 
cardButton.classList.add("custom-cardButton");
productDetails.appendChild(cardButton);

cardButton.addEventListener('click', () => {
  let cart = JSON.parse(localStorage.getItem('cart')) || [];
  const productId = data.id;

  // Check if the product is already in the cart
  const productIndex = cart.findIndex(item => item.id === productId);

  if (productIndex === -1) {
    // Product is not in the cart, add it
    cart.push(data);
    localStorage.setItem('cart', JSON.stringify(cart));
    console.log("Product added to cart:", data);
  } else {
    console.log("Product already in the cart.");
  }
});

const Contain = document.createElement('div');
Contain.classList.add("product-container");
Contain.appendChild(img);
document.body.appendChild(Contain);

const Contain2 = document.createElement('div');
Contain2.classList.add("product-container");
Contain2.appendChild(h5);
document.body.appendChild(Contain2);

const Contain3 = document.createElement('div');
Contain3.classList.add("product-container");
Contain3.appendChild(h6);
document.body.appendChild(Contain3);

const Contain4 = document.createElement('div');
Contain4.classList.add("product-container");
Contain4.appendChild(p);
document.body.appendChild(Contain4);

const Contain5 = document.createElement('div');
Contain5.classList.add("product-container");
Contain5.appendChild(cardButton);
document.body.appendChild(Contain5);
})