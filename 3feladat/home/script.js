document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Processzorok", shortDesc: "Gyors és megbízható teljesítmény", image: "images/cpu.png", url: "../cpu/index.html" },
        { id: 2, name: "Videókártyák", shortDesc: "Éles grafika, zökkenőmentes játék", image: "images/gpu.png", url: "../gpu/index.html" },
        { id: 3, name: "Memóriák", shortDesc: "Gyors és megbízható RAM modulok", image: "images/ram.png", url: "../ram/index.html" },
        { id: 4, name: "Tápegységek", shortDesc: "Stabil és biztonságos energiaellátás", image: "images/psu.png", url: "../psu/index.html" },
        { id: 5, name: "Alaplapok",  shortDesc: "Alapvető komponensek minden PC-hez",  image: "images/vrm.png", url: "../vrm/index.html" },
        { id: 6, name: "Monitorok",  shortDesc: "Éles képminőség és nagyszerű színek", image: "images/dpl.png", url: "../dpl/index.html" },
        { id: 7, name: "Egerek", shortDesc: "Ergonomikus és pontos vezérlés",image: "images/mse.png", url: "../mse/index.html" },
        { id: 8, name: "Billenyűzetek", shortDesc: "Kényelmes gépelés és tartósság", image: "images/kyb.png", url: "../kyb/index.html" }
    ];

    const productContainer = document.getElementById("alkatreszDoboz");
    products.forEach(product => productContainer.appendChild(createProductCard(product)));
});

function createProductCard(product) {
    const productCard = document.createElement("div");
    productCard.classList.add("doboz");
    productCard.draggable = true;
    productCard.dataset.productId = product.id;

    const productImage = document.createElement("img");
    productImage.src = product.image;
    productImage.alt = product.name;
    productCard.appendChild(productImage);

    const productName = document.createElement("h3");
    productName.textContent = product.name;
    productCard.appendChild(productName);

    const productDesc = document.createElement("p");
    productDesc.textContent = product.shortDesc;
    productCard.appendChild(productDesc);

    const moreInfoButton = document.createElement("button");
    moreInfoButton.classList.add("gomb-tobb");
    moreInfoButton.textContent = "Részletek";
    
    moreInfoButton.addEventListener("click", () => {
        window.location.href = product.url;
    });

    productCard.addEventListener("click", () => {
        window.location.href = product.url;
    });

    productCard.appendChild(moreInfoButton);

    return productCard;
}
