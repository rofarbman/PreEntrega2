import viewCart from "./views/cart.js";
import viewProducts from "./views/products.js";

let root = document.getElementById("root");

root.append(viewProducts);

document.addEventListener("click", (e) => {
  e.target.id == "basket"
    ? root.replaceChild(viewCart, viewProducts)
    : undefined;
  e.target.id == "home" ? root.replaceChild(viewProducts, viewCart) : undefined;
});
