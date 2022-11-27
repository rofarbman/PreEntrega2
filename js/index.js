const productos = [
  {
    tipo: "Crema Antiage",
    precio: 1050,
    descripcion: "Crema Antiage",
    thumbnail: "https://www.bioexel.com/f/203-g.jpg",
  },
  {
    tipo: "Agua Micelar",
    precio: 950,
    descripcion: "Agua Micelar",
    thumbnail: "https://www.bioexel.com/f/458g.jpg",
  },
  {
    tipo: "Gel Cream",
    precio: 890,
    descripcion: "Gel Cream",
    thumbnail: "https://www.bioexel.com/f/22322615-1.jpg",
  },
  {
    tipo: "Instant Shine",
    precio: 1260,
    descripcion: "Insant Shine",
    thumbnail: "https://www.bioexel.com/f/22322615-1.jpg",
  },
  {
    tipo: "Gel Hidratante",
    precio: 1000,
    descripcion: "Gel Hidratante",
    thumbnail: "https://www.bioexel.com/f/863-g.jpg",
  },

  {
    tipo: "Locion",
    precio: 1450,
    descripcion: "Locion",
    thumbnail: "https://www.bioexel.com/f/87086023-1.jpeg",
  },
];

const carrito = [];

const cantidadTotal = () => {
  return carrito.length;
};

const total = () => {
  let i = 0;
  let total = 0;
  for (i; i < carrito.length; i++) {
    total += carrito[i].precio;
  }
  console.log(`El total es: $${total}`);
  return total;
};

const botonAgregar = (producto) => {
  if (carrito.includes(producto)) {
    return carrito;
  }
  carrito.push(producto);
  return carrito;
};

const subtotal = (producto) => {
  let subtotal = 0;
  carrito.forEach((item) => {
    if (item == producto) {
      subtotal += productos.precio;
    }
  });
  console.log(`Subtotal producto ${productos.tipo} es: $${subtotal}`);
  return subtotal;
};

const eliminar = (producto) => {
  carrito.splice(producto, 1);
  console.log(`Se elimino el producto: $(producto.tipo)`);
  return carrito;
};

const cantidadProducto = (producto) => {
  let cantidad = 0;
  carrito.forEach((item) => {
    if (item == producto) {
      cantidad += 1;
    }
  });
  console.log(`Cantidad de ${productos.tipo}: ${cantidad}`);
  return cantidad;
};

const restar = (producto) => {
  if (cantidadProducto(producto) > 1) {
    let ultimo = carrito.lastIndexOf(producto);
    carrito.splice(carrito.indexOf(ultimo, 1));
    return carrito;
  } else {
    eliminar(producto);
    console.log(`Se elimino el producto: ${producto.tipo}`);
    return carrito;
  }
};

const carritoVacio = () => {
  let main = document.getElementById("main");
  if (carrito.length == 0) {
    main.innerHTML = `
    <h3>Tu carrito esta vacio</h3>
    <a href="../index.html" class="btn btn--mina"> Volver a la tienda </a>`;
  }
};

// Descomentar para agregar los productos al carrito
/* carrito.push(productos[0]);
carrito.push(productos[1]);
carrito.push(productos[2]);
carrito.push(productos[3]);
carrito.push(productos[4]);
carrito.push(productos[5]);
console.log(carrito); */

//Agregar 1 unidad al producto del carrito

//sumar(productos[0]);
//sumar(productos[1]);
//sumar(productos[2]);
//sumar(productos[3]);
//sumar(productos[4]);
//sumar(productos[5]);

//Restar 1 unidad al producto del carrito y si este es igual a 1 eliminarlo

//restar(productos[1]);
//restar(productos[2]);

//Eliminar un producto del carrito

//eliminar (productos[0]);

//Cantidad por producto

//cantidadProducto(productos[0]);
//cantidadProducto(productos[1]);
//cantidadProducto(productos[2]);
//cantidadProducto(productos[3]);
//cantidadProducto(productos[4]);
//cantidadProducto(productos[5]);

//Subtotal por producto

// subtotal(productos[0]);
// subtotal(productos[1]);
// subtotal(productos[2]);
// subtotal(productos[3]);
// subtotal(productos[4]);
// subtotal(productos[5]);

//Total de la compra

// total();

let addCarrito = parseInt(
  prompt(`Que producto desea comprar: \n
0 - Crema Antiage \n
1 - Agua Micelar \n
2 - Gel Cream \n
3 - Instant Shine \n
4 - Gel Hidratante \n
5 - Locion \n
`)
);
console.log(addCarrito);
switch (addCarrito) {
  case 0:
    carrito.push(productos[0]);
    console.log(`Se agrego ${productos[0].tipo} al carrito`);
    break;
  case 1:
    carrito.push(productos[1]);
    console.log(`Se agrego ${productos[1].tipo} al carrito`);
    break;
  case 2:
    carrito.push(productos[2]);
    console.log(`Se agrego ${productos[2].tipo} al carrito`);
    break;
  case 3:
    carrito.push(productos[3]);
    console.log(`Se agrego ${productos[3].tipo} al carrito`);
    break;
  case 4:
    carrito.push(productos[4]);
    console.log(`Se agrego ${productos[4].tipo} al carrito`);
    break;
  case 5:
    carrito.push(productos[5]);
    console.log(`Se agrego ${productos[5].tipo} al carrito`);
    break;
  default:
    console.log(carrito);
    break;
}

let cantidad = document.getElementById("cantidadTotal");
cantidad.innerHTML = `${cantidadTotal()}`;
