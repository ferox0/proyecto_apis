export class UI {
  addProduct(product) {
    const productList = document.getElementById("product-list");
    const element = document.createElement("div");
    element.innerHTML = `
            <div class="card text-center mb-4">
                <div class="card-body">
                    <strong>Licor 🥃</strong>: ${product.name} -
                    <strong>Precio 💲</strong>: ${product.price} - 
                    <strong>Año Elaboración 🏭</strong>: ${product.year}
                    <strong>Empleado 😎</strong>: ${product.nameemployed}
                    <a href="#" class="btn btn-danger" name="delete">Eliminar❌</a>
                </div>
            </div>
        `;
    productList.appendChild(element);
  }

  resetForm() {
    document.getElementById("product-form").reset();
  }

  deleteProduct(element) {
    if (element.name === "delete") {
      element.parentElement.parentElement.remove();
      this.showMessage("REGISTRO BORRADO ❌", "success");
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));


    const container = document.querySelector(".container");
    const app = document.querySelector("#App");


    container.insertBefore(div, app);

    setTimeout(function () {
      document.querySelector(".alert").remove();
    }, 3000);
  }
}
