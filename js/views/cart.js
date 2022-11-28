import { totalQuantity } from "../utils.js";

const cart = JSON.parse(sessionStorage.getItem("cart")) || undefined;
const products = JSON.parse(localStorage.getItem("products")) || undefined;

const quantity = document.getElementById("totalQuantity");
quantity.innerHTML = `${totalQuantity(cart)}`;

const shop = document.createElement("div");
shop.classList =
  "shop container-fluid mb-5 d-flex flex-column align-items-center justify-content-center text-center";

if (cart.length == 0) {
  shop.innerHTML = `<h2>TU CARRITO ESTA VACIO</h2>
  <button id="btnToProducts" type="button" class="btn btn--mina">Volver a la tienda</button>`;
} else {
  shop.classList =
    "vh-auto container d-flex flex-column align-items-center justify-content-evenly text-center mb-4";
  let table = document.createElement("table");
  table.classList = "table table-striped";
  table.innerHTML = `<thead>
  <tr>
    <th scope="col">PRODUCTO</th>
    <th scope="col">PRECIO</th>
    <th scope="col">CANTIDAD</th>
    <th scope="col">SUBTOTAL</th>
  </tr>
  </thead>
  <tbody id="tbody">
  </tbody>
  `;
  shop.append(table);
}

let viewCart = document.createElement("section");
viewCart.append(shop);

export default viewCart;
