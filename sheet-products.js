const SHEET_CSV_URL = "PASTE_YOUR_CSV_LINK_HERE"; // ⚠️ Replace this

async function loadSheetProducts() {
  const res = await fetch(SHEET_CSV_URL);
  const text = await res.text();
  const rows = text.trim().split("\n").slice(1); // Skip header row

  const container = document.getElementById("product-list");

  rows.forEach(row => {
    const [name, price, image, link, brand] = row.split(",");

    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <img src="${image}" alt="${name}">
      <h3>${name}</h3>
      <p>Brand: ${brand}</p>
      <p>Price: ₹${price}</p>
      <a href="${link}" target="_blank">Buy Now</a>
    `;
    container.appendChild(card);
  });
}

loadSheetProducts();
