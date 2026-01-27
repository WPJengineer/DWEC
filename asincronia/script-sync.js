// Simulacion de un servidor con tiempo de espera.
function fetchProductSync() {
  
  const start = Date.now();

  while(Date.now() - start < 10000) {
    console.log("Cargando...");
  }

  return [
    { id:1, name:'Pelota de futbol', price:20},
    { id:2, name:'Raqueta d tenis', price:50}
  ];
}

// funcion mostrar los productos SIN asincronia.
function displayProducts () {
  const products = document.getElementById('products');
  products.innerHTML = "<p>Cargando productos...</p>";

  // llamanda bloqueante.
  const productsFunction = fetchProductSync();

  products.innerHTML = productsFunction
    .map((p) => 
      `<p>${p.name}  - ${p.price}€</p>`
    )
    .join("");
}

document.getElementById('addProductForm').addEventListener('submit', (e) => {
  e.preventDefault();
  console.log("No se pueden añadir productos mientras se cargan los existentes");
});

// Ejecutar
displayProducts();