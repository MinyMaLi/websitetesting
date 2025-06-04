let cart = [];

function addToCart(name, price) {
  const existingItem = cart.find(item => item.name === name);
  if (existingItem) {
    existingItem.quantity += 1;
  } else {
    cart.push({ name, price, quantity: 1 });
  }
  renderCart();
  renderCartModal();
}

function renderCart() {
  const cartItemsEl = document.getElementById("cart-items");
  if (!cartItemsEl) return;
  cartItemsEl.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.textContent = `${item.name} x ${item.quantity} = ${item.price * item.quantity} CZK`;
    cartItemsEl.appendChild(li);
  });

  const totalEl = document.getElementById("total");
  if (totalEl) totalEl.textContent = total;
}

// Render cart in modal
function renderCartModal() {
  const cartItemsModal = document.getElementById("cart-items-modal");
  if (!cartItemsModal) return;
  cartItemsModal.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    total += item.price * item.quantity;
    const li = document.createElement("li");
    li.textContent = `${item.name} x ${item.quantity} = ${item.price * item.quantity} CZK`;
    cartItemsModal.appendChild(li);
  });

  const totalModal = document.getElementById("total-modal");
  if (totalModal) totalModal.textContent = total;
}

// Modal open/close logic
document.addEventListener("DOMContentLoaded", function () {
  const cartBtn = document.getElementById("cart-btn");
  const cartModal = document.getElementById("cart-modal");
  const closeCartModal = document.getElementById("close-cart-modal");

  if (cartBtn && cartModal && closeCartModal) {
    cartBtn.onclick = function () {
      renderCartModal();
      cartModal.style.display = "block";
    };
    closeCartModal.onclick = function () {
      cartModal.style.display = "none";
    };
    window.onclick = function (event) {
      if (event.target === cartModal) {
        cartModal.style.display = "none";
      }
    };
  }
});

// Open customization modal for Poke Bowl and Salad
function openCustomModal(product) {
  const modal = document.getElementById("custom-modal");
  const closeBtn = document.getElementById("close-custom-modal");
  const form = document.getElementById("custom-form");
  const optionsDiv = document.getElementById("custom-options");
  const title = document.getElementById("custom-modal-title");

  // Set title and options based on product
  if (product === "Poke Bowl") {
    title.textContent = "Customize your Poke Bowl";
    optionsDiv.innerHTML = `
      <br><br>
      <label>Meat:<br>
    <input type="radio" name="meat" value="Chicken"> Chicken<br>
    <input type="radio" name="meat" value="Salmon"> Salmon<br>
    <input type="radio" name="meat" value="Shrimp"> Shrimp<br>
  </label>
    `;
  } else if (product === "Salad") {
    title.textContent = "Customize your Salad";
    optionsDiv.innerHTML = `
      <label>Meat:
        <select name="meat" required>
          <option value="">Select</option>
          <option value="Chicken">Chicken</option>
          <option value="Tuna">Tuna</option>
          <option value="No meat">No meat</option>
        </select>
      </label>
      <br><br>
      <label>Extras:<br>
    <input type="radio" name="extras" value="Cheese"> Cheese<br>
    <input type="radio" name="extras" value="Croutons"> Croutons<br>
    <input type="radio" name="extras" value="Egg"> Egg<br>
  </label>
    `;
  }

  modal.style.display = "block";

  closeBtn.onclick = function () {
    modal.style.display = "none";
  };
  window.onclick = function (event) {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  };

  form.onsubmit = function (e) {
    e.preventDefault();
    const formData = new FormData(form);
    const meat = formData.get("meat");
    const extras = formData.getAll("extras");
    let name = product;
    if (meat) name += ` (${meat})`;
    if (extras.length) name += ` + ${extras.join(", ")}`;
    let price = product === "Poke Bowl" ? 179 : 159; // Example prices
    addToCart(name, price);
    modal.style.display = "none";
    form.reset();
  };
}

// Attach to ADD buttons for Poke Bowl and Salad
document.addEventListener("DOMContentLoaded", function () {
  // Poke Bowl
  const pokeAddBtn = document.querySelector('#poke .hero-btn');
  if (pokeAddBtn) {
    pokeAddBtn.onclick = function (e) {
      e.preventDefault();
      openCustomModal("Poke Bowl");
    };
  }
  // Salad
  const saladAddBtn = document.querySelector('#salad .hero-btn');
  if (saladAddBtn) {
    saladAddBtn.onclick = function (e) {
      e.preventDefault();
      openCustomModal("Salad");
    };
  }
});
