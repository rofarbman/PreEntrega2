function totalQuantity(array = []) {
  return array.length != 0 ? array.length : " ";
}

function addToCart(id, productsArray = [], cartArray = []) {
  if (id.includes("btn-2022")) {
    let productId = id.slice(4, 12);
    let index = productsArray.findIndex((item) => productId == item.id);
    cartArray.push(productsArray[index]);
    sessionStorage.setItem("cart", JSON.stringify(cartArray));
  }
}

function btnAddToCartDisabled(id) {
  if (id.includes("btn-2022")) {
    const button = document.getElementById(id);
    button.setAttribute("disabled", "disabled");
    button.innerText = "AGREGADO AL CARRITO";
  }
}

function checkCart(array = []) {
  array
    .map((item) => item.id)
    .forEach((item) => {
      let button = document.getElementById(`btn-${item}`);
      if (button) {
        button.setAttribute("disabled", "disabled");
        button.innerText = "AGREGADO AL CARRITO";
      }
    });
}

function checkQuantity(array) {
  const quantity = document.getElementById("totalQuantity");
  quantity.innerHTML = `${totalQuantity(array)}`;
}

function productQuantity(product, array = []) {
  let quantity = 0;
  array.forEach((item) => {
    if (item.id == product.id) {
      return (quantity += 1);
    }
  });
  return quantity;
}

function subtotal(product = [], array = []) {
  let total = 0;
  array.forEach((item) => {
    if (item.id == product.id) {
      total += item.price;
    }
  });
  return total;
}

function addButtonTriangle(id, productsArray = [], cartArray = []) {
  if (id.includes("add-2022")) {
    let itemIdInCart = id.slice(4, 12);
    let quantity = document.getElementById(`q-${itemIdInCart}`);
    quantity.value = Number(quantity.value) + 1;
    let indexProducts = productsArray.findIndex((item) => {
      return itemIdInCart == item.id;
    });
    let indexCart = cartArray.findIndex((item) => {
      return itemIdInCart == item.id;
    });
    cartArray.push(productsArray[indexProducts]);
    sessionStorage.setItem("cart", JSON.stringify(cartArray));
    let subtotalId = document.getElementById(`subtotal-${itemIdInCart}`);
    subtotalId.innerHTML = `<span id="subtotal-${itemIdInCart}">${subtotal(
      cartArray[indexCart],
      cartArray
    )}</span>`;
  }
  totalCart(cartArray);
}

function subButtonTriangle(id, productsArray = [], cartArray = []) {
  if (id.includes("sub-2022")) {
    let itemIdInCart = id.slice(4, 12);
    let quantity = document.getElementById(`q-${itemIdInCart}`);
    quantity.value = Number(quantity.value) - 1;
    let indexProducts = productsArray.findIndex((item) => {
      return itemIdInCart == item.id;
    });
    let indexCart = cartArray.findIndex((item) => {
      return itemIdInCart == item.id;
    });
    cartArray.shift(productsArray[indexProducts]);
    sessionStorage.setItem("cart", JSON.stringify(cartArray));
    if (quantity.value < 1) {
      let dropTableRow = document.getElementById(`tr-${itemIdInCart}`);
      tbody.removeChild(dropTableRow);
      let indexCart = cartArray.findIndex((item) => {
        return id.id == item.id;
      });
    }
    let subtotalId = document.getElementById(`subtotal-${itemIdInCart}`);
    subtotalId.innerHTML = `<span id="subtotal-${itemIdInCart}">${subtotal(
      cartArray[indexCart],
      cartArray
    )}</span>`;
  }
}

function totalCart(array) {
  let number = array.reduce((total, value) => {
    return total + value.price;
  }, 0);
  return number;
}

export {
  totalQuantity,
  addToCart,
  btnAddToCartDisabled,
  checkCart,
  checkQuantity,
  productQuantity,
  subtotal,
  addButtonTriangle,
  subButtonTriangle,
  totalCart,
};
