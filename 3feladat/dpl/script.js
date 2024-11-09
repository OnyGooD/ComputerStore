document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Samsung Odyssey G3 24\"", type: "Samsung", shortDesc: "Belépő szint, gyors", longDesc: "A Samsung Odyssey G3 24\" monitor 144Hz-es frissítési gyakorisággal kiváló választás kezdő játékosoknak. Full HD felbontása és gyors válaszideje zökkenőmentes játékélményt nyújt.", image: "images/samsung1.png", price: "54 900 Ft" },
        { id: 2, name: "Samsung Odyssey G5 27\"", type: "Samsung", shortDesc: "Középkategóriás, ívelt", longDesc: "A Samsung Odyssey G5 27\" monitor 1440p felbontással és ívelt kijelzővel fokozza a játékélményt. Ideális választás azoknak, akik elmerülnének a látványban.", image: "images/samsung2.png", price: "98 500 Ft" },
        { id: 3, name: "LG UltraGear 24GN650", type: "LG", shortDesc: "Gyors, alacsony késleltetés", longDesc: "Az LG UltraGear 24GN650 monitor 144Hz-es képfrissítéssel és 1ms válaszidővel rendelkezik, így optimális gyors mozgásokhoz. Full HD felbontású, éles képekkel támogatja a játékmenetet.", image: "images/lg1.png", price: "62 000 Ft" },
        { id: 4, name: "LG UltraFine 27UN850-W", type: "LG", shortDesc: "4K felbontás, professzionális", longDesc: "Az LG UltraFine 27UN850-W 4K felbontással és széles színtérrel a profi felhasználók igényeit elégíti ki. Kiváló választás grafikai munkához és tartalomkészítéshez.", image: "images/lg2.png", price: "148 900 Ft" },
        { id: 5, name: "Acer Nitro VG240Y", type: "Acer", shortDesc: "Kedvező ár, jó képminőség", longDesc: "Az Acer Nitro VG240Y 24\" monitor 75Hz-es frissítéssel és Full HD felbontással rendelkezik. Kiváló képminőséget biztosít kedvező áron, mindennapi használatra és játékra is alkalmas.", image: "images/acer1.png", price: "47 200 Ft" },
        { id: 6, name: "Acer Predator XB271HU", type: "Acer", shortDesc: "Gamer, nagy teljesítmény", longDesc: "Az Acer Predator XB271HU monitor 165Hz-es képfrissítéssel és G-SYNC támogatással felszerelt, ideális választás a hardcore játékosok számára. Tökéletesen sima látványvilágot biztosít.", image: "images/acer2.png", price: "129 500 Ft" },
        { id: 7, name: "Samsung Odyssey G7 32\"", type: "Samsung", shortDesc: "Csúcs ívelt monitor", longDesc: "A Samsung Odyssey G7 32\" egy nagy teljesítményű ívelt monitor, 240Hz-es frissítéssel és 1ms válaszidővel. Az ívelt kijelző és a QHD felbontás maximális játékélményt nyújt.", image: "images/samsung3.png", price: "189 900 Ft" },
        { id: 8, name: "LG UltraGear 38GN950", type: "LG", shortDesc: "Ultrawide, prémium", longDesc: "Az LG UltraGear 38GN950 ultrawide monitor 160Hz-es frissítéssel és 3840x1600 felbontással rendelkezik. Kiváló látvány és teljesítmény egy prémium kategóriás kijelzőn.", image: "images/lg3.png", price: "349 900 Ft" }
    ];
    
    
    
    

    const productContainer = document.getElementById("alkatreszDoboz");
    const compareProduct1 = document.getElementById("osszeT1");
    const compareProduct2 = document.getElementById("osszeT2");

    products.forEach(product => productContainer.appendChild(createProductCard(product)));

    [compareProduct1, compareProduct2].forEach(target => {
        target.addEventListener("dragover", (e) => {
            e.preventDefault();
            target.classList.add("highlight");
        });

        target.addEventListener("dragleave", () => target.classList.remove("highlight"));

        target.addEventListener("drop", (e) => {
            e.preventDefault();
            target.classList.remove("highlight");

            const productId = e.dataTransfer.getData("productId");
            const product = products.find(p => p.id == productId);

            if (product) {
                target.innerHTML = "";
                const productCard = createProductCard(product);
                productCard.draggable = false;
            
                if (product.type === "Samsung") {
                    productCard.style.border = "2px solid #1428A0";
                } else if (product.type === "LG") {
                    productCard.style.border = "2px solid #A50034"; 
                } else if (product.type === "Acer") {
                    productCard.style.border = "2px solid #83B81A";
                }
            
                target.appendChild(productCard);
                updateRemainingCards(productId);
            }
        });
    });
});

function igenyLead() {
    const requestInput = document.getElementById("igenyMezo");
    const requestList = document.getElementById("igenyLista");

    if (requestInput.value.trim() !== "") {
        if (!document.getElementById("igenyCim")) {
            const title = document.createElement("h3");
            title.id = "igenyCim";
            title.textContent = "Igényelt termékek:";
            requestList.appendChild(title);
        }

        const newRequest = document.createElement("p");
        newRequest.textContent = requestInput.value;
        requestList.appendChild(newRequest);
        requestInput.value = "";
    }
}

document.getElementById("osszehasonlitasGomb").addEventListener("click", osszehasonlitas);

function osszehasonlitas() {
    const product1Container = document.getElementById("osszeT1");
    const product2Container = document.getElementById("osszeT2");
    const uzenetElem = document.getElementById("uzenet");

    if (product1Container.children.length === 0 || product2Container.children.length === 0) {
        uzenetElem.textContent = "Két terméket kell választanod az összehasonlításhoz!";
        return;
    }

    const price1 = extractPrice(product1Container);
    const price2 = extractPrice(product2Container);

    product1Container.style.backgroundColor = "";
    product2Container.style.backgroundColor = "";

    if (price1 > price2) {
        product1Container.style.backgroundColor = "lightgreen";
        uzenetElem.textContent = " ";
    } else if (price2 > price1) {
        product2Container.style.backgroundColor = "lightgreen";
        uzenetElem.textContent = " ";
    } else {
        uzenetElem.textContent = "A két termék ára megegyezik.";
    }
}

function extractPrice(container) {
    const priceText = container.querySelector("h4").textContent;
    return parseInt(priceText.replace(" Ft", "").replace(" ", ""));
}


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

    const productPrice = document.createElement("h4");
    productPrice.textContent = product.price;
    productCard.appendChild(productPrice);

    const productDesc = document.createElement("p");
    productDesc.textContent = product.shortDesc;
    productCard.appendChild(productDesc);

    const moreInfoButton = document.createElement("button");
    moreInfoButton.classList.add("gomb-tobb");
    moreInfoButton.textContent = "Részletek";
    moreInfoButton.addEventListener("click", () => openModal(product));
    productCard.appendChild(moreInfoButton);

    productCard.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("productId", product.id);
        productCard.classList.add("dragging");
    });

    productCard.addEventListener("dragend", () => productCard.classList.remove("dragging"));

    return productCard;
}

function openModal(product) {
    const modal = document.getElementById("modal");
    const modalImage = document.getElementById("modalImage");
    const modalName = document.getElementById("modalName");
    const modalPrice = document.getElementById("modalPrice");
    const modalDesc = document.getElementById("modalDesc");

    modalImage.src = product.image;
    modalName.textContent = product.name;
    modalPrice.textContent = product.price;
    modalDesc.textContent = product.longDesc;

    modal.style.display = "block";
}

document.querySelector(".close").addEventListener("click", () => {
    document.getElementById("modal").style.display = "none";
});

window.addEventListener("click", (event) => {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});