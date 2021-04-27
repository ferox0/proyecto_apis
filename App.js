import { Product } from "./Product.js";
import { UI } from "./UI.js";


document
  .getElementById("product-form")
  .addEventListener("submit", function (e) {

    e.preventDefault();


    const name = document.getElementById("name").value,
      price = document.getElementById("price").value,
      year = document.getElementById("year").value,
      nameemployed = document.getElementById("nameemployed").value;

  
    const product = new Product(name, price, year, nameemployed);

 
    const ui = new UI();

  
    if (name === "" || price === "" || year === ""|| nameemployed === "") {
      ui.showMessage("NO HAS INGRESADO DATOS", "danger");
    }

  
    ui.addProduct(product);
    ui.showMessage("PRODUCTO AGREGADO CON EXITO", "success");
    ui.resetForm();
  });

document.getElementById("product-list").addEventListener("click", (e) => {
  const ui = new UI();
  ui.deleteProduct(e.target);
  e.preventDefault();
});
