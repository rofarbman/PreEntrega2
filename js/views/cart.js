import { productQuantity, totalQuantity } from "../utils.js";
import viewProducts from "./products.js";

const cart = JSON.parse(sessionStorage.getItem("cart")) || undefined;
const products = JSON.parse(localStorage.getItem("products")) || undefined;

const quantity = document.getElementById("totalQuantity");
quantity.innerHTML = `${totalQuantity(cart)}`;

const shop = document.createElement("section");
shop.id = "shop";
shop.classList =
  "shop container-fluid mb-5 d-flex flex-column align-items-center justify-content-center text-center";

let cartLength = cart.length;

let table = document.createElement("table");

if (shop) {
  if (cartLength < 1) {
    shop.innerHTML = `<h2>TU CARRITO ESTA VACIO</h2>
    <button id="btnToProducts" type="button" class="btn btn--mina">Volver a la tienda</button>`;
  } else {
    shop.classList =
      "vh-auto container d-flex flex-column align-items-center justify-content-evenly mb-4";
    table.id = "table";
    table.classList = "table table-striped";
    table.innerHTML = `<thead id="thead">
    <tr>
      <th scope="col">PRODUCTO</th>
      <th scope="col">PRECIO</th>
      <th scope="col">CANTIDAD</th>
      <th scope="col">SUBTOTAL</th>
    </tr>
    </thead><tbody id="tbody"></tbody>`;

    shop.append(table);
  }
}

let tbody = document.createElement("tbody");

let cartUniqueProduct = [
  ...cart
    .reduce((products, item) => products.set(item.id, item), new Map())
    .values(),
];

cartUniqueProduct.forEach((item) => {
  return (tbody.innerHTML += `<tr id="tr-${item.id}" class="align-middle">
      <td class="text-start"><button id="drop-${
        item.id
      }" type="button" class="btn btn--mina ms-2">&times;</button><img src="${
    item.thumbnail
  }" alt="${item.name}" height="150px" class="rounded-3 ms-4"><span>${
    item.name
  }</span></td>
      <td><span>$${item.price}</span></td>
      <td><button id="sub-${
        item.id
      }" class="btn btn--mina">&bigtriangledown;</button><input id="q-${
    item.id
  }" class="inputQuantity" type="text" placeholder="0"><button id="add-${
    item.id
  }" class="btn btn--mina">&bigtriangleup;</button></td>
      <td>${productQuantity(item, cart)}</td>
    </tr>`);
});

if (table) {
  table.append(tbody);
}

document.addEventListener("click", (e) => {
  e.target.id == "btnToProducts"
    ? root.replaceChild(viewProducts, viewCart)
    : undefined;
});

let viewCart = document.createElement("section");
viewCart.append(shop);

export { viewCart };
