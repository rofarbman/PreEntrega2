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

export { totalQuantity, addToCart };
