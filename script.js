document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("product-list");

  // List of product sources
  const sources = [
    { file: "data/flipkart-products.json", brand: "Flipkart" },
    { file: "data/amazon-products.json", brand: "Amazon" },
    { file: "data/meesho-products.json", brand: "Meesho" },
    { file: "data/myntra-products.json", brand: "Myntra" },
    { file: "data/earnkaro-products.json", brand: "EarnKaro" },
    { file: "data/inrdeals-products.json", brand: "Inrdeals" }
  ];

  // Load all product JSONs
  sources.forEach(source => {
    fetch(source.file)
      .then(response => response.json())
      .then(data => {
        data.forEach(product => {
          const card = document.createElement("div");
          card.className = "product-card";
          card.innerHTML = `
            <h3>${product.title}</h3>
            <p>Price: ₹${product.price}</p>
            <p>From: ${source.brand}</p>
            <a href="${product.link}" target="_blank">Buy Now</a>
          `;
          productList.appendChild(card);
        });
      })
      .catch(error => {
        console.error(`Error loading ${source.file}:`, error);
      });
  });

  // Seller Form Upload (Mock)
  const form = document.getElementById("uploadForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("seller-name").value;
    const product = document.getElementById("product-name").value;
    const price = document.getElementById("product-price").value;
    const link = document.getElementById("product-link").value;

    alert(`Thank you ${name}, your product "${product}" was submitted.`);

    form.reset(); // clear form
  });
});
