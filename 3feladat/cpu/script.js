document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Intel Core i3-12100F", type: "intel", shortDesc: "Belépő szint, megbízható", longDesc: "Ez a 4 magos, 8 szálas processzor kiváló választás belépő szintű játékokhoz és általános felhasználáshoz, köszönhetően a magas órajelsebességének és alacsony energiafogyasztásának. Stabil teljesítményt nyújt a mindennapi feladatokhoz, például böngészéshez, irodai munkához vagy médiatartalmak fogyasztásához.", image: "images/intel1.png", price: "31 899 Ft" },
        { id: 2, name: "Intel Core i5-12400F", type: "intel", shortDesc: "Kiváló ár-érték", longDesc: "A 6 magos és 12 szálas kialakításával a processzor remekül kezeli a modern játékokat és többfeladatos munkafolyamatokat. Nagyobb hatékonyságot biztosít intenzívebb programokhoz, és versenyképes teljesítményt nyújt kedvező ár-érték arány mellett.", image: "images/intel2.png", price: "46 999 Ft" },
        { id: 3, name: "Intel Core i7-12700K", type: "intel", shortDesc: "Erőteljes, többmagos", longDesc: "A 12 mag és 20 szál lehetővé teszi a kiváló többfeladatos teljesítményt, beleértve a nagy teljesítményű játékokat és a komolyabb tartalomkészítési munkákat. A processzor kiemelkedő grafikai és renderelési teljesítményt kínál, mely ideális a grafikus programok futtatásához és a nagy felbontású videók szerkesztéséhez.", image: "images/intel3.png", price: "106 199 Ft" },
        { id: 4, name: "Intel Core i9-12900KF", type: "intel", shortDesc: "Csúcs gaming teljesítmény", longDesc: "Ez a 16 magos, 24 szálas csúcskategóriás processzor lenyűgöző teljesítményt nyújt a legigényesebb alkalmazások és játékok futtatásához. Támogatja az intenzív többfeladatos munkavégzést, mint például a 4K videószerkesztés, komplex számítások és fejlett AI modellezés.", image: "images/intel4.png", price: "122 199 Ft" },
        { id: 5, name: "AMD Ryzen 3 4100", type: "amd", shortDesc: "Alap szint, költséghatékony", longDesc: "Az ideális választás a költségvetés-barát PC-khez, hiszen a 4 mag és 8 szál kiváló hatékonyságot biztosít a mindennapi számítógépes feladatokhoz és alacsony szintű játékokhoz. Az alacsony energiafogyasztásnak köszönhetően hűvös és csendes működést garantál.", image: "images/ryzen1.png", price: "25 899 Ft" },
        { id: 6, name: "AMD Ryzen 5 5600", type: "amd", shortDesc: "Nagy teljesítmény, megfizethető", longDesc: "A 6 magos, 12 szálas architektúrája biztosítja a kiváló játékélményt és a gyors reagálást a többfeladatos használat közben. Az optimalizált cache struktúra növeli a teljesítményt, ami különösen hasznos a nagy adatmennyiséget feldolgozó alkalmazásoknál.", image: "images/ryzen2.png", price: "47 499 Ft" },
        { id: 7, name: "AMD Ryzen 7 5800X", type: "amd", shortDesc: "Gamingre optimalizált", longDesc: "A 8 magos, 16 szálas kialakítása ideális a professzionális tartalomkészítők és játékosok számára, mivel könnyedén kezeli az erőforrás-igényes programokat. Kimagasló órajelsebessége garantálja a sima és gyors futtatást nagy teljesítményt igénylő feladatok során.", image: "images/ryzen3.png", price: "75 199 Ft" },
        { id: 8, name: "AMD Ryzen 9 5950X", type: "amd", shortDesc: "Professzionális munka, kimagasló", longDesc: "A 16 mag és 32 szál rendkívüli erőt ad a komoly felhasználók számára, különösen akkor, ha egyszerre több nagy igényű alkalmazás fut. Kiváló választás játékra, professzionális renderelésre és számítástechnikára, ahol a sebesség és a hatékonyság kulcsfontosságú.", image: "images/ryzen4.png", price: "132 698 Ft" }
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

                productCard.style.border = product.type === "intel" ? "2px solid #0071C5" : "2px solid #D73A31";
                target.appendChild(productCard);
                updateRemainingCards(productId);
            }
        });
    });
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

    const productPrice = document.createElement("h4");
    productPrice.textContent = product.price;
    productCard.appendChild(productPrice);

    const productDesc = document.createElement("p");
    productDesc.textContent = product.shortDesc;
    productCard.appendChild(productDesc);

    productCard.addEventListener("dragstart", (e) => {
        e.dataTransfer.setData("productId", product.id);
        productCard.classList.add("dragging");
    });

    productCard.addEventListener("dragend", () => productCard.classList.remove("dragging"));

    return productCard;
}

function updateRemainingCards(draggedProductId) {
    const remainingProducts = products.filter(product => product.id != draggedProductId);
    const productContainer = document.getElementById("alkatreszDoboz");
    productContainer.innerHTML = "";

    remainingProducts.forEach(product => productContainer.appendChild(createProductCard(product)));
}

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
