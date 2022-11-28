const cart = JSON.parse(sessionStorage.getItem("cart")) || undefined;
const products = JSON.parse(localStorage.getItem("products")) || undefined;

let viewCart = document.createElement("section");
viewCart.innerHTML = "<h1>HOLA</h1>";

export default viewCart;
