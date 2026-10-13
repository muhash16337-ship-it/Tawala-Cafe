const CONFIG = Object.freeze({
  whatsappNumber: "254703789777",
  address: "[ADDRESS]",
  mapEmbedUrl: "[MAP EMBED URL]",
  instagram: "[HANDLE]",
  tiktok: "[HANDLE]",
  services: ["Dine in", "Pickup", "Delivery"],
  payment: "At the counter or on delivery only",
  timeZone: "Africa/Nairobi",
  deliveryFee: "[FEE or 'varies']",
  deliveryAreas: "[AREAS]",
  openingHours: {
    Monday: "[HOURS]",
    Tuesday: "[HOURS]",
    Wednesday: "[HOURS]",
    Thursday: "[HOURS]",
    Friday: "[HOURS]",
    Saturday: "[HOURS]",
    Sunday: "[HOURS]"
  }
});

const menuItems = [
  { id: "mandazi", name: "Mandazi", description: "", category: "Breakfast & Pastry", price: 25, options: null, image: null, popular: false, available: true },
  { id: "samosa", name: "Samosa", description: "", category: "Breakfast & Pastry", price: 50, options: null, image: null, popular: false, available: true },
  { id: "donut", name: "Donut", description: "", category: "Breakfast & Pastry", price: 40, options: null, image: null, popular: false, available: true },
  { id: "vermicelli-donut", name: "Vermicelli Donut", description: "", category: "Breakfast & Pastry", price: 60, options: null, image: null, popular: false, available: true },
  { id: "meat-pie", name: "Meat Pie", description: "", category: "Breakfast & Pastry", price: 150, options: null, image: null, popular: false, available: true },
  { id: "tea-scone", name: "Tea Scone", description: "", category: "Breakfast & Pastry", price: 75, options: null, image: null, popular: false, available: true },
  { id: "rock-bun", name: "Rock Bun", description: "", category: "Breakfast & Pastry", price: 80, options: null, image: null, popular: false, available: true },
  { id: "coconut-scone", name: "Coconut Scone", description: "", category: "Breakfast & Pastry", price: 75, options: null, image: null, popular: false, available: true },
  { id: "plain-croissant", name: "Plain Croissant", description: "", category: "Breakfast & Pastry", price: 100, options: null, image: null, popular: false, available: true },
  { id: "hot-dog", name: "Hot Dog", description: "", category: "Breakfast & Pastry", price: 130, options: null, image: null, popular: false, available: true },
  { id: "spanish-omelette-with-toast", name: "Spanish Omelette with Toast", description: "", category: "Breakfast & Pastry", price: 150, options: null, image: null, popular: false, available: true },
  { id: "sausages", name: "Sausages", description: "", category: "Breakfast & Pastry", price: 100, options: null, image: null, popular: false, available: true },
  { id: "breakfast-chapati-roll", name: "Breakfast Chapati Roll", description: "", category: "Breakfast & Pastry", price: 130, options: null, image: null, popular: false, available: true },
  { id: "plain-omelette", name: "Plain Omelette", description: "", category: "Breakfast & Pastry", price: 100, options: null, image: null, popular: false, available: true },
  { id: "tawala-breakfast", name: "Tawala Breakfast", description: "Spanish omelette, sausage and bacon with juice or tea", category: "Breakfast & Pastry", price: 500, options: null, image: null, popular: false, available: true },

  { id: "african-tea", name: "African Tea", description: "", category: "Hot Drinks", price: 100, options: null, image: null, popular: false, available: true },
  { id: "black-tea", name: "Black Tea", description: "", category: "Hot Drinks", price: 80, options: null, image: null, popular: false, available: true },
  { id: "masala-tea", name: "Masala Tea", description: "", category: "Hot Drinks", price: 120, options: null, image: null, popular: false, available: true },
  { id: "lemon-tea", name: "Lemon Tea", description: "", category: "Hot Drinks", price: 110, options: null, image: null, popular: false, available: true },
  { id: "dawa", name: "Dawa", description: "", category: "Hot Drinks", price: 150, options: null, image: null, popular: false, available: true },
  { id: "espresso", name: "Espresso", description: "", category: "Hot Drinks", price: 150, options: [{ label: "Single", price: 150 }, { label: "Double", price: 200 }], image: null, popular: false, available: true },
  { id: "cappuccino", name: "Cappuccino", description: "", category: "Hot Drinks", price: 200, options: [{ label: "Single", price: 200 }, { label: "Double", price: 250 }], image: null, popular: false, available: true },
  { id: "latte", name: "Latte", description: "", category: "Hot Drinks", price: 200, options: [{ label: "Single", price: 200 }, { label: "Double", price: 250 }], image: null, popular: false, available: true },
  { id: "mocha", name: "Mocha", description: "", category: "Hot Drinks", price: 200, options: null, image: null, popular: false, available: true },
  { id: "hot-chocolate", name: "Hot Chocolate", description: "", category: "Hot Drinks", price: 150, options: null, image: null, popular: false, available: true },
  { id: "hot-milk", name: "Hot Milk", description: "", category: "Hot Drinks", price: 100, options: null, image: null, popular: false, available: true },

  { id: "shawarma", name: "Shawarma", description: "", category: "Lunch & Dinner", price: 200, options: [{ label: "Regular", price: 200 }, { label: "Large", price: 250 }], image: null, popular: true, available: true },
  { id: "shawarma-chips", name: "Shawarma Chips", description: "", category: "Lunch & Dinner", price: 300, options: null, image: null, popular: false, available: true },
  { id: "shawarma-bhajia", name: "Shawarma Bhajia", description: "", category: "Lunch & Dinner", price: 400, options: null, image: null, popular: false, available: true },
  { id: "shawarma-combo", name: "Shawarma Combo", description: "Shawarma, chips and a soda", category: "Lunch & Dinner", price: 450, options: null, image: null, popular: false, available: true },
  { id: "fries", name: "Fries", description: "", category: "Lunch & Dinner", price: 100, options: [{ label: "Regular", price: 100 }, { label: "Large", price: 200 }], image: null, popular: false, available: true },
  { id: "cheesy-loaded-fries", name: "Cheesy Loaded Fries", description: "", category: "Lunch & Dinner", price: 400, options: [{ label: "Chicken", price: 400 }, { label: "Beef", price: 450 }], image: null, popular: true, available: true },
  { id: "masala-chips", name: "Masala Chips", description: "", category: "Lunch & Dinner", price: 200, options: null, image: null, popular: false, available: true },
  { id: "bhajia", name: "Bhajia", description: "", category: "Lunch & Dinner", price: 150, options: null, image: null, popular: false, available: true },
  { id: "bbq-wings-6-pcs", name: "BBQ Wings (6 pcs)", description: "", category: "Lunch & Dinner", price: 400, options: null, image: null, popular: true, available: true },
  { id: "peri-peri-wings", name: "Peri Peri Wings", description: "", category: "Lunch & Dinner", price: 450, options: null, image: null, popular: false, available: true },
  { id: "wings-and-fries", name: "Wings & Fries", description: "", category: "Lunch & Dinner", price: 550, options: null, image: null, popular: false, available: true },
  { id: "wings-combo", name: "Wings Combo", description: "Wings, chips and a soda", category: "Lunch & Dinner", price: 650, options: null, image: null, popular: false, available: true },
  { id: "12-pcs-wings", name: "12 pcs Wings", description: "", category: "Lunch & Dinner", price: 900, options: [{ label: "Wings only", price: 900 }, { label: "With chips", price: 1050 }], image: null, popular: false, available: true },
  { id: "juicy-chicken-burger", name: "Juicy Chicken Burger", description: "", category: "Lunch & Dinner", price: 400, options: null, image: null, popular: false, available: true },
  { id: "cheese-burger", name: "Cheese Burger", description: "", category: "Lunch & Dinner", price: 550, options: null, image: null, popular: false, available: true },
  { id: "beef-burger", name: "Beef Burger", description: "", category: "Lunch & Dinner", price: 500, options: null, image: null, popular: true, available: true },
  { id: "veggie-burger", name: "Veggie Burger", description: "", category: "Lunch & Dinner", price: 400, options: null, image: null, popular: false, available: true },
  { id: "grilled-chicken", name: "Grilled Chicken", description: "Served with chips, ugali or rice", category: "Lunch & Dinner", price: 550, options: null, image: null, popular: false, available: true },
  { id: "grilled-beef-steak", name: "Grilled Beef Steak", description: "Served with chips, ugali or rice", category: "Lunch & Dinner", price: 600, options: null, image: null, popular: false, available: true },
  { id: "beef-casserole", name: "Beef Casserole", description: "Served with chips, ugali or rice", category: "Lunch & Dinner", price: 400, options: null, image: null, popular: false, available: true },
  { id: "shawarma-platter", name: "Shawarma Platter", description: "2 shawarmas, wings, fries and a soda", category: "Lunch & Dinner", price: 900, options: null, image: null, popular: false, available: true },
  { id: "tawala-platter", name: "Tawala Platter", description: "Steak, chicken, shawarma, chips and a soda", category: "Lunch & Dinner", price: 2000, options: null, image: null, popular: false, available: true },
  { id: "pilau", name: "Pilau", description: "", category: "Lunch & Dinner", price: 300, options: null, image: null, popular: false, available: true },

  { id: "fruit-platter", name: "Fruit Platter", description: "", category: "Desserts", price: 350, options: null, image: null, popular: false, available: true },
  { id: "ice-cream-scoop", name: "Ice Cream Scoop", description: "", category: "Desserts", price: 300, options: null, image: null, popular: false, available: true },
  { id: "cakes-on-display", name: "Cakes on Display", description: "Ask which cakes are in today", category: "Desserts", price: 300, options: null, image: null, popular: false, available: true },

  { id: "fresh-mango-juice", name: "Fresh Mango Juice", description: "", category: "Juices & Mocktails", price: 180, options: null, image: null, popular: false, available: true },
  { id: "fresh-passion-juice", name: "Fresh Passion Juice", description: "", category: "Juices & Mocktails", price: 180, options: null, image: null, popular: false, available: true },
  { id: "fresh-pineapple-juice", name: "Fresh Pineapple Juice", description: "", category: "Juices & Mocktails", price: 180, options: null, image: null, popular: false, available: true },
  { id: "fresh-cocktail-juice", name: "Fresh Cocktail Juice", description: "", category: "Juices & Mocktails", price: 180, options: null, image: null, popular: false, available: true },
  { id: "apple-ginger-juice", name: "Apple Ginger Juice", description: "", category: "Juices & Mocktails", price: 200, options: null, image: null, popular: false, available: true },
  { id: "strawberry-milkshake", name: "Strawberry Milkshake", description: "", category: "Juices & Mocktails", price: 300, options: null, image: null, popular: false, available: true },
  { id: "chocolate-milkshake", name: "Chocolate Milkshake", description: "", category: "Juices & Mocktails", price: 300, options: null, image: null, popular: false, available: true },
  { id: "vanilla-milkshake", name: "Vanilla Milkshake", description: "", category: "Juices & Mocktails", price: 300, options: null, image: null, popular: false, available: true },
  { id: "mango-mint-milkshake", name: "Mango Mint Milkshake", description: "", category: "Juices & Mocktails", price: 350, options: null, image: null, popular: false, available: true },
  { id: "salted-caramel-milkshake", name: "Salted Caramel Milkshake", description: "", category: "Juices & Mocktails", price: 350, options: null, image: null, popular: false, available: true },
  { id: "strawberry-mojito", name: "Strawberry Mojito", description: "", category: "Juices & Mocktails", price: 250, options: null, image: null, popular: false, available: true },
  { id: "ginger-lemonade", name: "Ginger Lemonade", description: "", category: "Juices & Mocktails", price: 250, options: null, image: null, popular: false, available: true },
  { id: "mint-lemonade", name: "Mint Lemonade", description: "", category: "Juices & Mocktails", price: 250, options: null, image: null, popular: false, available: true },
  { id: "passion-mojito", name: "Passion Mojito", description: "", category: "Juices & Mocktails", price: 300, options: null, image: null, popular: false, available: true },
  { id: "dawa-mocktail", name: "Dawa Mocktail", description: "", category: "Juices & Mocktails", price: 300, options: null, image: null, popular: false, available: true },

  { id: "soda-350ml", name: "Soda", description: "", category: "Soda & Water", price: 70, options: [{ label: "350ml", price: 70 }, { label: "500ml", price: 100 }], image: null, popular: false, available: true },
  { id: "water", name: "Water", description: "", category: "Soda & Water", price: 70, options: [{ label: "500ml", price: 70 }, { label: "1L", price: 120 }], image: null, popular: false, available: true }
];

const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const navToggle = document.querySelector(".nav__toggle");
const navLinks = document.querySelectorAll(".nav a[href^='#']");
const copyrightYear = document.querySelector("#copyright-year");
const mobileNavQuery = window.matchMedia("(max-width: 767px)");
const hero = document.querySelector(".hero");
const heroPrimaryButton = document.querySelector(".hero__actions .btn:first-child");
const finePointerQuery = window.matchMedia("(hover: hover) and (pointer: fine)");
const reduceMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

function isConfigured(value) {
  return typeof value === "string" && value.trim() !== "" && !/^\[.*\]$/.test(value.trim());
}

function cleanWhatsAppNumber(value) {
  let digits = String(value ?? "").replace(/\D/g, "");
  if (digits.startsWith("0")) {
    digits = digits.slice(1);
  }
  if (digits.length === 9) {
    digits = `254${digits}`;
  }
  return digits;
}

function formatMenuPrice(price) {
  return `KSh ${new Intl.NumberFormat("en-KE").format(price)}`;
}

function buildOrderMessage(items, details = {}) {
  if (!Array.isArray(items) || items.length === 0) {
    throw new Error("Cannot build an order message without any items.");
  }

  const orderType = String(details.orderType ?? "").trim();
  const tableNumber = String(details.tableNumber ?? "").trim();
  const location = String(details.location ?? "").trim();
  const pickupTime = String(details.pickupTime ?? "").trim();
  const name = String(details.name ?? "").trim();
  const instructions = String(details.specialInstructions ?? "").trim();
  const lines = [];
  let total = 0;

  const orderedItems = [];
  items.forEach((item) => {
    const quantity = Math.max(1, Math.floor(Number(item.quantity) || 1));
    const price = Number(item.price);
    const itemName = String(item.name ?? "").trim();
    const option = String(item.option ?? "").trim();
    if (!Number.isFinite(price) || price < 0) {
      throw new Error(`Invalid order price for ${itemName || "menu item"}.`);
    }
    if (!itemName) {
      throw new Error("An order item is missing its name.");
    }

    const lineTotal = price * quantity;
    total += lineTotal;
    const displayName = option ? `${itemName} (${option})` : itemName;
    orderedItems.push(quantity > 1 ? `${displayName} (${quantity})` : displayName);
  });

  lines.push(`Hi Tawala Café, I wish to order ${orderedItems.join(", ")}.`);
  lines.push(`Total: ${formatMenuPrice(total)}`);

  if (orderType) {
    const normalizedType = orderType.toLowerCase();
    lines.push(`Order type: ${orderType}`);
    if (normalizedType === "delivery" && location) {
      lines.push(`Delivery location: ${location}`);
    }
    if (normalizedType === "pickup" && pickupTime) {
      lines.push(`Pickup time: ${pickupTime}`);
    }
    if (normalizedType === "dine in" && tableNumber) {
      lines.push(`Table: ${tableNumber}`);
    }
  }
  if (name) {
    lines.push(`Name: ${name}`);
  }
  if (instructions) {
    lines.push(`Notes: ${instructions}`);
  }

  const payment = !orderType
    ? "at the counter or on delivery"
    : orderType.toLowerCase() === "delivery"
      ? "on delivery"
      : "at the counter";
  lines.push(`Payment: ${payment}`);
  return lines.join("\n");
}

function buildWhatsAppLink(orderItems, customerDetails = {}) {
  const number = cleanWhatsAppNumber(CONFIG.whatsappNumber);
  if (!number) {
    throw new Error("The WhatsApp number is missing or invalid.");
  }
  if (!Array.isArray(orderItems) || orderItems.length === 0) {
    return null;
  }

  const message = buildOrderMessage(orderItems, customerDetails);
  return {
    number,
    message,
    url: `https://wa.me/${number}?text=${encodeURIComponent(message)}`
  };
}

document.querySelectorAll("[data-whatsapp-link]").forEach((link) => {
  const message = link.dataset.whatsappMessage ?? "";
  const number = cleanWhatsAppNumber(CONFIG.whatsappNumber);
  link.href = `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
});

document.querySelectorAll("[data-config-value]").forEach((element) => {
  const value = CONFIG[element.dataset.configValue];
  if (!isConfigured(value)) {
    element.hidden = true;
    return;
  }

  element.textContent = value;
  element.hidden = false;
});

document.querySelectorAll("[data-social-link]").forEach((link) => {
  const platform = link.dataset.socialLink;
  const handle = CONFIG[platform];
  if (!isConfigured(handle)) {
    link.hidden = true;
    return;
  }

  const username = handle.trim().replace(/^@/, "");
  const baseUrl = platform === "instagram" ? "https://www.instagram.com/" : "https://www.tiktok.com/@";
  link.href = `${baseUrl}${encodeURIComponent(username)}`;
  link.hidden = false;
});

function setMenuOpen(isOpen, returnFocus = false) {
  navToggle.setAttribute("aria-expanded", String(isOpen));
  navToggle.setAttribute("aria-label", isOpen ? "Close navigation menu" : "Open navigation menu");
  nav.setAttribute("aria-hidden", String(mobileNavQuery.matches && !isOpen));
  nav.classList.toggle("nav--open", isOpen);

  if (returnFocus) {
    navToggle.focus();
  }
}

function updateHeader() {
  header.classList.toggle("header--scrolled", window.scrollY > 40);
}

navToggle.addEventListener("click", () => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  setMenuOpen(!isOpen);
});

nav.addEventListener("click", (event) => {
  if (event.target.closest("a") && mobileNavQuery.matches) {
    setMenuOpen(false);
  }
});

document.addEventListener("click", (event) => {
  const isOpen = navToggle.getAttribute("aria-expanded") === "true";
  if (isOpen && !nav.contains(event.target) && !navToggle.contains(event.target)) {
    setMenuOpen(false);
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navToggle.getAttribute("aria-expanded") === "true") {
    setMenuOpen(false, true);
  }
});

function handleNavViewportChange() {
  setMenuOpen(false);
  nav.setAttribute("aria-hidden", String(mobileNavQuery.matches));
}

mobileNavQuery.addEventListener("change", handleNavViewportChange);
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();
handleNavViewportChange();

if (hero && !reduceMotionQuery.matches) {
  if (finePointerQuery.matches) {
    hero.addEventListener("pointermove", (event) => {
      const bounds = hero.getBoundingClientRect();
      const x = ((event.clientX - bounds.left) / bounds.width) * 100;
      const y = ((event.clientY - bounds.top) / bounds.height) * 100;
      hero.style.setProperty("--spotlight-x", `${x}%`);
      hero.style.setProperty("--spotlight-y", `${y}%`);
    });

    hero.addEventListener("pointerleave", () => {
      hero.style.setProperty("--spotlight-x", "50%");
      hero.style.setProperty("--spotlight-y", "38%");
    });

    if (heroPrimaryButton) {
      heroPrimaryButton.addEventListener("pointermove", (event) => {
        const bounds = heroPrimaryButton.getBoundingClientRect();
        const offsetX = (event.clientX - bounds.left - bounds.width / 2) * 0.12;
        const offsetY = (event.clientY - bounds.top - bounds.height / 2) * 0.12;
        heroPrimaryButton.style.setProperty("--magnet-x", `${offsetX}px`);
        heroPrimaryButton.style.setProperty("--magnet-y", `${offsetY}px`);
      });

      heroPrimaryButton.addEventListener("pointerleave", () => {
        heroPrimaryButton.style.setProperty("--magnet-x", "0px");
        heroPrimaryButton.style.setProperty("--magnet-y", "0px");
      });
    }
  }
}

if ("IntersectionObserver" in window) {
  const sectionObserver = new IntersectionObserver((entries) => {
    for (const entry of entries) {
      if (!entry.isIntersecting) {
        continue;
      }

      const currentLink = document.querySelector(`.nav a[href="#${entry.target.id}"]`);
      if (!currentLink) {
        continue;
      }

      navLinks.forEach((link) => link.removeAttribute("aria-current"));
      currentLink.setAttribute("aria-current", "location");
    }
  }, {
    rootMargin: "-25% 0px -60% 0px",
    threshold: 0
  });

  document.querySelectorAll("main > section[id]").forEach((section) => {
    sectionObserver.observe(section);
  });
}

copyrightYear.textContent = String(new Date().getFullYear());

const menuTabs = document.querySelectorAll(".menu__tab");
const menuSearch = document.querySelector("#menu-search");
const menuSearchClear = document.querySelector(".menu__search-clear");
const menuResultCount = document.querySelector("#menu-result-count");
const menuResults = document.querySelector("#menu-results");
let selectedMenuCategory = "All";
const menuCategories = [
  "Breakfast & Pastry",
  "Hot Drinks",
  "Lunch & Dinner",
  "Desserts",
  "Juices & Mocktails",
  "Soda & Water"
];

function createMenuItem(item) {
  const listItem = document.createElement("li");
  listItem.className = "menu__item";
  listItem.dataset.menuItem = item.id;
  listItem.dataset.orderItem = item.id;
  listItem.setAttribute("role", "button");
  listItem.setAttribute("tabindex", "0");
  listItem.setAttribute("aria-label", `Order ${item.name}`);
  if (item.available === false) {
    listItem.classList.add("menu__item--unavailable");
  }

  if (item.image) {
    const media = document.createElement("span");
    media.className = "menu__item-media";

    const image = document.createElement("img");
    image.className = "menu__item-image";
    image.src = item.image;
    image.alt = "";
    image.width = 64;
    image.height = 64;
    image.loading = "lazy";
    const placeholder = document.createElement("span");
    placeholder.className = "menu__item-image-placeholder";
    placeholder.textContent = item.name.charAt(0);
    placeholder.hidden = true;
    image.addEventListener("error", () => {
      image.hidden = true;
      placeholder.hidden = false;
    }, { once: true });
    media.append(image, placeholder);
    listItem.append(media);
  }

  const details = document.createElement("div");
  details.className = "menu__item-details";

  const title = document.createElement("div");
  title.className = "menu__item-title";

  const name = document.createElement("h4");
  name.className = "menu__item-name";
  name.textContent = item.name;
  title.append(name);

  if (item.popular) {
    const badge = document.createElement("span");
    badge.className = "menu__item-badge";
    badge.textContent = "Popular";
    title.append(badge);
  }
  details.append(title);

  if (item.description) {
    const description = document.createElement("p");
    description.className = "menu__item-description";
    description.textContent = item.description;
    details.append(description);
  }

  const optionPrice = document.createElement("p");
  optionPrice.className = "menu__item-price";
  optionPrice.textContent = `KSh ${new Intl.NumberFormat("en-KE").format(item.price)}`;

  if (item.options?.length) {
    const options = document.createElement("div");
    options.className = "menu__item-options";
    options.setAttribute("role", "group");
    options.setAttribute("aria-label", `${item.name} options`);

    item.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.className = "menu__item-option";
      optionButton.type = "button";
      optionButton.textContent = option.label;
      optionButton.setAttribute("aria-pressed", String(index === 0));
      optionButton.addEventListener("click", () => {
        options.querySelectorAll(".menu__item-option").forEach((button) => {
          button.setAttribute("aria-pressed", String(button === optionButton));
        });
        optionPrice.textContent = `KSh ${new Intl.NumberFormat("en-KE").format(option.price)}`;
      });
      options.append(optionButton);
    });

    details.append(options);
  }

  const priceRow = document.createElement("div");
  priceRow.className = "menu__item-price-row";
  priceRow.append(optionPrice);
  listItem.append(details, priceRow);
  return listItem;
}

function renderMenuItems(items) {
  menuResults.replaceChildren();

  if (items.length === 0) {
    const emptyState = document.createElement("p");
    emptyState.className = "menu__empty";
    emptyState.textContent = "No dishes match that search.";
    menuResults.append(emptyState);
    return;
  }

  menuCategories.forEach((category) => {
    const categoryItems = items.filter((item) => item.category === category);
    if (categoryItems.length === 0) {
      return;
    }

    const categorySection = document.createElement("section");
    categorySection.className = "menu__category";
    categorySection.setAttribute("aria-label", category);

    const heading = document.createElement("h3");
    heading.className = "menu__category-heading";
    heading.textContent = category;

    const list = document.createElement("ul");
    list.className = "menu__items";
    categoryItems.forEach((item) => list.append(createMenuItem(item)));
    categorySection.append(heading, list);
    menuResults.append(categorySection);
  });
}

function updateMenuResultCount() {
  const query = menuSearch.value.trim().toLocaleLowerCase();
  const matchingItems = menuItems.filter((item) => {
    const matchesCategory = selectedMenuCategory === "All" || item.category === selectedMenuCategory;
    const matchesSearch = `${item.name} ${item.description} ${item.category}`.toLocaleLowerCase().includes(query);
    return matchesCategory && matchesSearch;
  });
  const count = matchingItems.length;

  menuResultCount.textContent = `${count} ${count === 1 ? "dish" : "dishes"}`;
  menuSearchClear.hidden = menuSearch.value.length === 0;
  renderMenuItems(matchingItems);
}

menuTabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    selectedMenuCategory = tab.dataset.menuCategory;
    menuTabs.forEach((menuTab) => {
      const isActive = menuTab === tab;
      menuTab.setAttribute("aria-pressed", String(isActive));
      menuTab.classList.toggle("is-active", isActive);
    });
    tab.scrollIntoView({
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
      block: "nearest",
      inline: "center"
    });
    updateMenuResultCount();
  });
});

const dishDialog = document.querySelector("#dish-dialog");
const dishDialogPanel = document.querySelector(".dish-dialog__panel");
const dishDialogMedia = document.querySelector("#dish-dialog-media");
const dishDialogTitle = document.querySelector("#dish-dialog-title");
const dishDialogDescription = document.querySelector("#dish-dialog-description");
const dishDialogOptions = document.querySelector("#dish-dialog-options");
const dishDialogPrice = document.querySelector("#dish-dialog-price");
const dishDialogUnavailable = document.querySelector("#dish-dialog-unavailable");
const dishDialogQuantity = document.querySelector("#dish-quantity");
const dishDialogTotal = document.querySelector("#dish-dialog-total");
const dishDialogOrder = document.querySelector("#dish-dialog-order");
const dishDialogAdd = document.querySelector("#dish-dialog-add");
const dishDialogOrderEmpty = document.querySelector("#dish-dialog-order-empty");
const dishDialogFallback = document.querySelector("#dish-dialog-whatsapp-fallback");
const dishDialogFallbackLink = document.querySelector("#dish-dialog-fallback-link");
const dishDialogCopy = document.querySelector("#dish-dialog-copy");
const dishDialogCopied = document.querySelector("#dish-dialog-copied");
const dishQuantityMinus = document.querySelector("#dish-quantity-minus");
const dishQuantityPlus = document.querySelector("#dish-quantity-plus");
let activeDish = null;
let activeDishOption = null;
let activeDishPrice = 0;
let activeDishQuantity = 1;
let dishDialogOpener = null;
let activeWhatsAppMessage = "";
const orderDialog = document.querySelector("#order-dialog");
const orderDialogPanel = orderDialog.querySelector(".order-dialog__panel");
const orderBar = document.querySelector("#order-bar");
const orderBarCount = document.querySelector("#order-bar-count");
const orderBarTotal = document.querySelector("#order-bar-total");
const orderDialogItems = document.querySelector("#order-dialog-items");
const orderDialogEmpty = document.querySelector("#order-dialog-empty");
const orderDialogTotal = document.querySelector("#order-dialog-total");
const orderCustomerName = document.querySelector("#order-customer-name");
const orderType = document.querySelector("#order-type");
const orderTableField = document.querySelector("#order-table-field");
const orderTableNumber = document.querySelector("#order-table-number");
const orderLocationField = document.querySelector("#order-location-field");
const orderLocation = document.querySelector("#order-location");
const orderInstructions = document.querySelector("#order-instructions");
const orderSendWhatsApp = document.querySelector("#order-send-whatsapp");
const orderEmptyMessage = document.querySelector("#order-empty-message");
const orderWhatsAppFallback = document.querySelector("#order-whatsapp-fallback");
const orderFallbackLink = document.querySelector("#order-fallback-link");
const orderCopy = document.querySelector("#order-copy");
const orderCopied = document.querySelector("#order-copied");
const orderClear = document.querySelector("#order-clear");
const orderNew = document.querySelector("#order-new");
const orderStorageKey = "tawala-cafe-order";
let orderItems = [];
let orderWhatsAppMessage = "";

try {
  const storedOrder = JSON.parse(localStorage.getItem(orderStorageKey) ?? "[]");
  if (Array.isArray(storedOrder)) {
    orderItems = storedOrder.flatMap((storedLine) => {
      const item = menuItems.find((menuItem) => menuItem.id === storedLine.id);
      const quantity = Number(storedLine.quantity);
      const option = String(storedLine.option ?? "");
      const validOption = !option || item?.options?.some((itemOption) => itemOption.label === option);
      return item && Number.isInteger(quantity) && quantity >= 1 && quantity <= 20 && validOption
        ? [{ id: item.id, option, quantity }]
        : [];
    });
  }
} catch (error) {
  console.warn("Unable to restore the saved Tawala Café order.", error);
}

function getOrderLineDetails(line) {
  const item = menuItems.find((menuItem) => menuItem.id === line.id);
  if (!item) {
    throw new Error(`Menu item ${line.id} is no longer available.`);
  }
  const option = item.options?.find((itemOption) => itemOption.label === line.option) ?? null;
  return {
    name: item.name,
    option: option?.label ?? "",
    quantity: line.quantity,
    price: option?.price ?? item.price
  };
}

function saveOrder() {
  try {
    localStorage.setItem(orderStorageKey, JSON.stringify(orderItems));
  } catch (error) {
    console.warn("Unable to save the Tawala Café order in this browser.", error);
  }
}

function renderOrder() {
  const lines = orderItems.map(getOrderLineDetails);
  const total = lines.reduce((sum, line) => sum + line.price * line.quantity, 0);
  const quantity = lines.reduce((sum, line) => sum + line.quantity, 0);
  orderBar.hidden = lines.length === 0;
  orderBarCount.textContent = `${quantity} ${quantity === 1 ? "dish" : "dishes"}`;
  orderBarTotal.textContent = formatMenuPrice(total);
  orderDialogTotal.textContent = formatMenuPrice(total);
  orderDialogEmpty.hidden = lines.length !== 0;
  orderSendWhatsApp.disabled = lines.length === 0;
  orderClear.disabled = lines.length === 0;
  orderDialogItems.replaceChildren();

  lines.forEach((line, index) => {
    const listItem = document.createElement("li");
    listItem.className = "order-dialog__item";
    const description = document.createElement("div");
    description.className = "order-dialog__item-description";
    const title = document.createElement("strong");
    title.textContent = line.option ? `${line.name}, ${line.option}` : line.name;
    const price = document.createElement("span");
    price.textContent = `${line.quantity} x ${formatMenuPrice(line.price)} = ${formatMenuPrice(line.price * line.quantity)}`;
    description.append(title, price);

    const controls = document.createElement("div");
    controls.className = "order-dialog__item-controls";
    const decrease = document.createElement("button");
    decrease.type = "button";
    decrease.textContent = "−";
    decrease.setAttribute("aria-label", `Decrease ${line.name} quantity`);
    decrease.dataset.orderAction = "decrease";
    decrease.dataset.orderIndex = String(index);
    decrease.disabled = line.quantity <= 1;
    const quantityOutput = document.createElement("output");
    quantityOutput.textContent = String(line.quantity);
    const increase = document.createElement("button");
    increase.type = "button";
    increase.textContent = "+";
    increase.setAttribute("aria-label", `Increase ${line.name} quantity`);
    increase.dataset.orderAction = "increase";
    increase.dataset.orderIndex = String(index);
    increase.disabled = line.quantity >= 20;
    const remove = document.createElement("button");
    remove.type = "button";
    remove.textContent = "Remove";
    remove.setAttribute("aria-label", `Remove ${line.name} from order`);
    remove.dataset.orderAction = "remove";
    remove.dataset.orderIndex = String(index);
    controls.append(decrease, quantityOutput, increase, remove);
    listItem.append(description, controls);
    orderDialogItems.append(listItem);
  });
}

function addActiveDishToOrder(closeDialog = true) {
  if (!activeDish || activeDish.available === false) {
    return;
  }
  const option = activeDishOption?.label ?? "";
  const existingLine = orderItems.find((line) => line.id === activeDish.id && line.option === option);
  if (existingLine) {
    existingLine.quantity = Math.min(20, existingLine.quantity + activeDishQuantity);
  } else {
    orderItems.push({ id: activeDish.id, option, quantity: activeDishQuantity });
  }
  saveOrder();
  renderOrder();
  if (closeDialog) {
    dishDialog.close();
  }
}

function openWhatsAppLink(url, fallback, fallbackLink) {
  console.log("Tawala Café WhatsApp order link:", url);
  fallbackLink.href = url;
  fallback.hidden = false;
  if (window.matchMedia("(max-width: 767px), (pointer: coarse)").matches) {
    window.location.href = url;
    return;
  }

  const openedWindow = window.open(url, "_blank", "noopener");
  if (!openedWindow) {
    window.location.href = url;
  }
}

function readOrderDetails() {
  const type = orderType.value;
  return {
    orderType: type,
    name: orderCustomerName.value,
    tableNumber: type === "Dine in" ? orderTableNumber.value : "",
    location: type === "Delivery" ? orderLocation.value : "",
    specialInstructions: orderInstructions.value
  };
}

function getWhatsAppOrder(orderLines, customerDetails = {}) {
  const lines = orderLines.map(getOrderLineDetails);
  return buildWhatsAppLink(lines, customerDetails);
}

async function copyWhatsAppMessage(message, feedback) {
  try {
    if (navigator.clipboard?.writeText) {
      try {
        await navigator.clipboard.writeText(message);
        feedback.textContent = "Copied";
        feedback.hidden = false;
        return;
      } catch {
        // Use the legacy clipboard path for browsers that deny the async API.
      }
    }
    const temporaryInput = document.createElement("textarea");
    temporaryInput.value = message;
    temporaryInput.setAttribute("readonly", "");
    temporaryInput.className = "order-copy-buffer";
    document.body.append(temporaryInput);
    temporaryInput.select();
    const copied = document.execCommand("copy");
    temporaryInput.remove();
    if (!copied) {
      throw new Error("The browser did not allow copying the order text.");
    }
    feedback.textContent = "Copied";
    feedback.hidden = false;
  } catch (error) {
    feedback.textContent = "Copy failed. Try again or use the WhatsApp link.";
    feedback.hidden = false;
    console.error("Unable to copy WhatsApp order text.", error);
  }
}

function updateDishDialogPrice() {
  dishDialogPrice.textContent = formatMenuPrice(activeDishPrice);
  dishDialogTotal.textContent = formatMenuPrice(activeDishPrice * activeDishQuantity);
  dishDialogQuantity.textContent = String(activeDishQuantity);
  dishQuantityMinus.disabled = activeDishQuantity <= 1;
  dishQuantityPlus.disabled = activeDishQuantity >= 20;
}

function renderDishDialogMedia(item) {
  dishDialogMedia.replaceChildren();
  if (!item.image) {
    const placeholder = document.createElement("span");
    placeholder.className = "dish-dialog__placeholder";
    placeholder.textContent = item.name.charAt(0);
    placeholder.setAttribute("aria-hidden", "true");
    dishDialogMedia.append(placeholder);
    return;
  }

  const image = document.createElement("img");
  image.src = item.image;
  image.alt = "";
  image.width = 120;
  image.height = 120;
  image.addEventListener("error", () => {
    const placeholder = document.createElement("span");
    placeholder.className = "dish-dialog__placeholder";
    placeholder.textContent = item.name.charAt(0);
    placeholder.setAttribute("aria-hidden", "true");
    image.replaceWith(placeholder);
  }, { once: true });
  dishDialogMedia.append(image);
}

function openDishDialog(item, opener) {
  activeDish = item;
  activeDishOption = item.options?.[0] ?? null;
  activeDishPrice = activeDishOption?.price ?? item.price;
  activeDishQuantity = 1;
  dishDialogOpener = opener;
  dishDialogFallback.hidden = true;
  dishDialogCopied.hidden = true;
  dishDialogOrderEmpty.hidden = true;
  dishDialogOrderEmpty.textContent = "Your order is empty. Pick a dish first.";
  activeWhatsAppMessage = "";

  dishDialogTitle.textContent = item.name;
  dishDialogDescription.textContent = item.description;
  dishDialogDescription.hidden = !item.description;
  renderDishDialogMedia(item);
  dishDialogOptions.replaceChildren();
  dishDialogOptions.hidden = !item.options?.length;
  dishDialogUnavailable.hidden = item.available !== false;
  dishDialogOrder.disabled = item.available === false;
  dishDialogAdd.disabled = item.available === false;

  if (item.options?.length) {
    const groupLabel = document.createElement("span");
    groupLabel.className = "dish-dialog__options-label";
    groupLabel.textContent = "Choose an option";
    const group = document.createElement("div");
    group.className = "dish-dialog__option-list";
    group.setAttribute("role", "group");
    group.setAttribute("aria-label", `${item.name} options`);

    item.options.forEach((option, index) => {
      const optionButton = document.createElement("button");
      optionButton.type = "button";
      optionButton.className = "dish-dialog__option";
      optionButton.textContent = option.label;
      optionButton.setAttribute("aria-pressed", String(index === 0));
      optionButton.addEventListener("click", () => {
        activeDishOption = option;
        activeDishPrice = option.price;
        group.querySelectorAll(".dish-dialog__option").forEach((button) => {
          button.setAttribute("aria-pressed", String(button === optionButton));
        });
        updateDishDialogPrice();
      });
      group.append(optionButton);
    });
    dishDialogOptions.append(groupLabel, group);
  }

  updateDishDialogPrice();
  dishDialog.showModal();
  dishDialog.querySelector(".dish-dialog__close").focus();
}

menuResults.addEventListener("click", (event) => {
  const itemElement = event.target.closest("[data-order-item]");
  if (!itemElement || event.target.closest("button, a, input, select")) {
    return;
  }
  const item = menuItems.find((menuItem) => menuItem.id === itemElement.dataset.orderItem);
  if (item) {
    openDishDialog(item, itemElement);
  }
});

menuResults.addEventListener("keydown", (event) => {
  if (!["Enter", " "].includes(event.key) || event.target !== event.target.closest("[data-order-item]")) {
    return;
  }
  event.preventDefault();
  const itemElement = event.target.closest("[data-order-item]");
  const item = menuItems.find((menuItem) => menuItem.id === itemElement.dataset.orderItem);
  if (item) {
    openDishDialog(item, itemElement);
  }
});

document.querySelector(".dish-dialog__close").addEventListener("click", () => {
  dishDialog.close();
});

dishDialog.addEventListener("click", (event) => {
  if (event.target === dishDialog || event.target.classList.contains("dish-dialog__backdrop")) {
    dishDialog.close();
  }
});

dishDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    dishDialog.close();
  }
});

dishDialog.addEventListener("close", () => {
  dishDialogOpener?.focus();
  dishDialogOpener = null;
});

dishQuantityMinus.addEventListener("click", () => {
  activeDishQuantity = Math.max(1, activeDishQuantity - 1);
  updateDishDialogPrice();
});

dishQuantityPlus.addEventListener("click", () => {
  activeDishQuantity = Math.min(20, activeDishQuantity + 1);
  updateDishDialogPrice();
});

dishDialogOrder.addEventListener("click", () => {
  if (!activeDish || activeDish.available === false) {
    return;
  }

  let lines = [{
    id: activeDish.id,
    option: activeDishOption?.label ?? "",
    quantity: activeDishQuantity
  }];
  if (orderItems.length > 0) {
    const addAndSendEverything = window.confirm("Your order already has items. Choose OK to add this dish and send everything, or Cancel to send just this dish.");
    if (addAndSendEverything) {
      addActiveDishToOrder(false);
      lines = orderItems;
    }
  }

  try {
    const order = getWhatsAppOrder(lines, lines === orderItems ? readOrderDetails() : {});
    activeWhatsAppMessage = order.message;
    dishDialogOrderEmpty.hidden = true;
    openWhatsAppLink(order.url, dishDialogFallback, dishDialogFallbackLink);
  } catch (error) {
    dishDialogOrderEmpty.textContent = "Unable to prepare this order. Please try again.";
    dishDialogOrderEmpty.hidden = false;
    console.error("Unable to build the WhatsApp order link.", error);
  }
});

dishDialogAdd.addEventListener("click", addActiveDishToOrder);

dishDialogFallbackLink.addEventListener("click", (event) => {
  event.preventDefault();
  if (dishDialogFallbackLink.href) {
    openWhatsAppLink(dishDialogFallbackLink.href, dishDialogFallback, dishDialogFallbackLink);
  }
});

dishDialogCopy.addEventListener("click", () => {
  if (!activeWhatsAppMessage) {
    return;
  }
  copyWhatsAppMessage(activeWhatsAppMessage, dishDialogCopied);
});

document.querySelector("#order-review-open").addEventListener("click", () => {
  renderOrder();
  orderWhatsAppFallback.hidden = true;
  orderEmptyMessage.hidden = true;
  orderNew.hidden = true;
  orderDialog.showModal();
  document.querySelector("#order-dialog-close").focus();
});

document.querySelector("#order-dialog-close").addEventListener("click", () => orderDialog.close());
orderDialog.addEventListener("click", (event) => {
  if (event.target === orderDialog || event.target.classList.contains("dish-dialog__backdrop")) {
    orderDialog.close();
  }
});
orderDialog.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    event.preventDefault();
    orderDialog.close();
  }
});
orderDialog.addEventListener("close", () => {
  if (!orderBar.hidden) {
    document.querySelector("#order-review-open").focus();
  } else {
    menuSearch.focus();
  }
});

orderDialogItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-order-action]");
  if (!button) {
    return;
  }
  const index = Number(button.dataset.orderIndex);
  const line = orderItems[index];
  if (!line) {
    return;
  }
  if (button.dataset.orderAction === "remove") {
    orderItems.splice(index, 1);
  } else if (button.dataset.orderAction === "decrease") {
    line.quantity = Math.max(1, line.quantity - 1);
  } else if (button.dataset.orderAction === "increase") {
    line.quantity = Math.min(20, line.quantity + 1);
  }
  saveOrder();
  renderOrder();
});

orderType.addEventListener("change", () => {
  orderTableField.hidden = orderType.value !== "Dine in";
  orderLocationField.hidden = orderType.value !== "Delivery";
});

orderSendWhatsApp.addEventListener("click", () => {
  if (!orderItems.length) {
    orderEmptyMessage.textContent = "Your order is empty. Pick a dish first.";
    orderEmptyMessage.hidden = false;
    return;
  }
  if (orderType.value === "Delivery" && !orderLocation.value.trim()) {
    orderEmptyMessage.textContent = "Enter your delivery location to continue.";
    orderEmptyMessage.hidden = false;
    orderLocation.focus();
    return;
  }
  try {
    const order = getWhatsAppOrder(orderItems, readOrderDetails());
    orderWhatsAppMessage = order.message;
    orderFallbackLink.href = order.url;
    orderWhatsAppFallback.hidden = false;
    orderCopied.hidden = true;
    orderNew.hidden = false;
    openWhatsAppLink(order.url, orderWhatsAppFallback, orderFallbackLink);
  } catch (error) {
    orderEmptyMessage.textContent = "Unable to prepare this order. Please try again.";
    orderEmptyMessage.hidden = false;
    console.error("Unable to build the WhatsApp order link.", error);
  }
});

orderFallbackLink.addEventListener("click", (event) => {
  event.preventDefault();
  if (orderFallbackLink.href) {
    openWhatsAppLink(orderFallbackLink.href, orderWhatsAppFallback, orderFallbackLink);
  }
});

orderCopy.addEventListener("click", () => {
  if (orderWhatsAppMessage) {
    copyWhatsAppMessage(orderWhatsAppMessage, orderCopied);
  }
});

orderClear.addEventListener("click", () => {
  orderItems = [];
  saveOrder();
  renderOrder();
  orderWhatsAppFallback.hidden = true;
  orderNew.hidden = true;
});

orderNew.addEventListener("click", () => {
  orderItems = [];
  saveOrder();
  renderOrder();
  orderWhatsAppFallback.hidden = true;
  orderNew.hidden = true;
  orderCustomerName.value = "";
  orderType.value = "Dine in";
  orderTableNumber.value = "";
  orderLocation.value = "";
  orderInstructions.value = "";
  orderTableField.hidden = false;
  orderLocationField.hidden = true;
});

let dishTouchStartY = null;
dishDialogPanel.addEventListener("touchstart", (event) => {
  dishTouchStartY = event.changedTouches[0].clientY;
}, { passive: true });

dishDialogPanel.addEventListener("touchend", (event) => {
  if (dishTouchStartY === null) {
    return;
  }
  const swipeDistance = event.changedTouches[0].clientY - dishTouchStartY;
  if (swipeDistance > 100 && window.matchMedia("(max-width: 767px)").matches) {
    dishDialog.close();
  }
  dishTouchStartY = null;
}, { passive: true });

let orderTouchStartY = null;
orderDialogPanel.addEventListener("touchstart", (event) => {
  orderTouchStartY = event.changedTouches[0].clientY;
}, { passive: true });
orderDialogPanel.addEventListener("touchend", (event) => {
  if (orderTouchStartY !== null && event.changedTouches[0].clientY - orderTouchStartY > 100 && window.matchMedia("(max-width: 767px)").matches) {
    orderDialog.close();
  }
  orderTouchStartY = null;
}, { passive: true });

menuSearch.addEventListener("input", updateMenuResultCount);
menuSearchClear.addEventListener("click", () => {
  menuSearch.value = "";
  updateMenuResultCount();
  menuSearch.focus();
});
updateMenuResultCount();
renderOrder();
