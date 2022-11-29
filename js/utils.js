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

function productQuantity(product, array) {
  let quantity = 0;
  array.forEach((item) => {
    if (item.id == product.id) {
      return (quantity += 1);
    }
  });
  return quantity;
}

export {
  totalQuantity,
  addToCart,
  btnAddToCartDisabled,
  checkCart,
  checkQuantity,
  productQuantity,
};
