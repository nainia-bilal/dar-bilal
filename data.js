// script.js

// 1. DOM Elements
const grid = document.getElementById("products-grid");
const modal = document.getElementById("product-modal");
const modalContent = document.getElementById("modal-content");
const cartSidebar = document.getElementById("cart-sidebar");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const cartCountEl = document.getElementById("cart-count");

let cart = [];

// 2. Initialize (Load all products)
document.addEventListener("DOMContentLoaded", () => {
  renderProducts("all");

  // GSAP Intro Animation
  gsap.from("#hero h1", { opacity: 0, y: 50, duration: 1, delay: 0.5 });
});

// 3. Render Products Function
function renderProducts(category) {
  grid.innerHTML = "";

  const filtered =
    category === "all"
      ? products
      : products.filter((p) => p.category === category);

  if (filtered.length === 0) {
    grid.innerHTML =
      '<p class="text-center col-span-3 text-gray-400">No dishes found in this category.</p>';
    return;
  }

  filtered.forEach((p, index) => {
    const card = document.createElement("div");
    // Add animation class
    card.className =
      "group cursor-pointer opacity-0 translate-y-4 animate-card";

    card.innerHTML = `
            <div class="moroccan-arch h-[400px] bg-white shadow-lg relative" onclick="openModal(${
              p.id
            })">
                <img src="${p.img}" alt="${
      p.name
    }" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110">
                <div class="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all"></div>
                <div class="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-terra opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
                    View Details
                </div>
            </div>
            <div class="text-center mt-6">
                <span class="text-xs text-gold uppercase tracking-widest block mb-1">${
                  p.category === "maleh" ? "Savory" : "Sweet"
                }</span>
                <h3 class="font-serif text-2xl text-royal group-hover:text-terra transition-colors">${
                  p.name
                }</h3>
                <div class="flex justify-center items-center gap-4 mt-2">
                    <span class="font-bold text-gray-600">${p.price} MAD</span>
                    <button onclick="addToCart(${
                      p.id
                    })" class="text-xs border border-terra text-terra px-3 py-1 rounded-full hover:bg-terra hover:text-white transition-colors">ADD +</button>
                </div>
            </div>
        `;
    grid.appendChild(card);

    // Stagger Animation with GSAP
    gsap.to(card, { opacity: 1, y: 0, duration: 0.5, delay: index * 0.1 });
  });
}

// 4. Filtering Logic
function filterMenu(category) {
  // Update active button
  document.querySelectorAll(".filter-btn").forEach((btn) => {
    btn.classList.remove("active", "bg-terra", "text-white");
    if (btn.dataset.filter === category) {
      btn.classList.add("active", "bg-terra", "text-white");
    }
  });

  renderProducts(category);
}

// 5. Modal Logic
function openModal(id) {
  const product = products.find((p) => p.id === id);
  if (!product) return;

  document.getElementById("modal-img").src = product.img;
  document.getElementById("modal-category").innerText =
    product.category === "maleh" ? "Savory Dish" : "Sweet Delight";
  document.getElementById("modal-title").innerText = product.name;
  document.getElementById("modal-desc").innerText = product.desc;
  document.getElementById("modal-ingredients").innerText = product.ingredients;
  document.getElementById("modal-price").innerText = product.price + " MAD";

  modal.classList.remove("hidden");
  modal.classList.add("flex");
  setTimeout(() => {
    modalContent.classList.remove("scale-95", "opacity-0");
    modalContent.classList.add("scale-100", "opacity-100");
  }, 10);
}

function closeModal() {
  modalContent.classList.remove("scale-100", "opacity-100");
  modalContent.classList.add("scale-95", "opacity-0");
  setTimeout(() => {
    modal.classList.add("hidden");
    modal.classList.remove("flex");
  }, 300);
}

// 6. Cart Logic
function toggleCart() {
  cartSidebar.classList.toggle("translate-x-full");
}

function addToCart(id) {
  const product = products.find((p) => p.id === id);
  cart.push(product);
  updateCartUI();
  // Open cart
  if (cartSidebar.classList.contains("translate-x-full")) {
    toggleCart();
  }
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartUI();
}

function updateCartUI() {
  cartCountEl.innerText = cart.length;

  if (cart.length === 0) {
    cartItemsContainer.innerHTML =
      '<p class="text-center text-gray-400 text-sm mt-10">Your tray is empty.</p>';
    cartTotalEl.innerText = "0 MAD";
    return;
  }

  cartItemsContainer.innerHTML = cart
    .map(
      (item, index) => `
        <div class="flex justify-between items-center border-b border-gray-100 pb-3">
            <div class="flex items-center gap-3">
                <img src="${item.img}" class="w-12 h-12 object-cover rounded-full border border-terra/20">
                <div>
                    <h4 class="font-serif text-royal">${item.name}</h4>
                    <span class="text-xs text-gold font-bold">${item.price} MAD</span>
                </div>
            </div>
            <button onclick="removeFromCart(${index})" class="text-red-400 hover:text-red-600 text-xs uppercase">Remove</button>
        </div>
    `
    )
    .join("");

  const total = cart.reduce((sum, item) => sum + item.price, 0);
  cartTotalEl.innerText = total + " MAD";
}

// 7. Mobile menu (responsive hamburger + slide-in panel)
function toggleMobileMenu() {
  const menu = document.getElementById("mobile-menu");
  const backdrop = document.getElementById("mobile-menu-backdrop");
  const btn = document.getElementById("mobile-menu-btn");
  const hamburger = document.getElementById("mobile-hamburger");
  const closeIcon = document.getElementById("mobile-close");

  if (!menu || !backdrop || !btn) return;

  const isOpen = menu.classList.toggle("open");

  if (isOpen) {
    backdrop.classList.remove("opacity-0", "pointer-events-none");
    backdrop.classList.add("opacity-100");
    btn.setAttribute("aria-expanded", "true");
    if (hamburger) hamburger.classList.add("hidden");
    if (closeIcon) closeIcon.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  } else {
    backdrop.classList.remove("opacity-100");
    backdrop.classList.add("opacity-0", "pointer-events-none");
    btn.setAttribute("aria-expanded", "false");
    if (hamburger) hamburger.classList.remove("hidden");
    if (closeIcon) closeIcon.classList.add("hidden");
    document.body.style.overflow = "";
  }
}

// Close mobile menu when backdrop clicked or Escape pressed
(function attachMobileMenuHandlers() {
  const backdrop = document.getElementById("mobile-menu-backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", () => {
      const menu = document.getElementById("mobile-menu");
      if (menu && menu.classList.contains("open")) toggleMobileMenu();
    });
  }

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const menu = document.getElementById("mobile-menu");
      if (menu && menu.classList.contains("open")) toggleMobileMenu();
    }
  });
})();
