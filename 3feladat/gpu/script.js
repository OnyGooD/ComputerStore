document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "ASUS Dual RTX 3060 12GB OC", type: "nvidia", shortDesc: "Belépő szintű grafika", longDesc: "Az ASUS Dual RTX 3060 12GB OC ideális választás kezdő játékosoknak és általános felhasználásra, kiegyensúlyozott teljesítményt nyújtva. Könnyedén megbirkózik a hétköznapi feladatokkal, miközben stabil grafikai élményt biztosít.", image: "images/nvidia1.png", price: "124 699 Ft" },
        { id: 2, name: "ASUS Dual RTX 3070 8GB OC", type: "nvidia", shortDesc: "Kiváló ár-érték arány", longDesc: "Az ASUS Dual RTX 3070 8GB OC jó választás modern játékokhoz és multitaskinghoz. Hatékony teljesítményt nyújt középkategóriás játékélményhez, remek áron.", image: "images/nvidia2.png", price: "209 900 Ft" },
        { id: 3, name: "ASUS Dual RTX 4060 Ti 16GB OC", type: "nvidia", shortDesc: "Erőteljes többmagos", longDesc: "A 4060 Ti kártya nagy teljesítményt nyújt grafikai és többfeladatos munkákhoz, ideális játékokhoz és médiatartalmak szerkesztéséhez. Erős grafikai kapacitása támogatja a különféle kreatív munkafolyamatokat is.", image: "images/nvidia3.png", price: "211 299 Ft" },
        { id: 4, name: "GIGABYTE RTX 4070 SUPER 12GB OC", type: "nvidia", shortDesc: "Csúcskategóriás játék", longDesc: "A GIGABYTE RTX 4070 SUPER rendkívüli teljesítményt kínál a legigényesebb játékok és alkalmazások futtatására. Ideális választás profi felhasználóknak, akiknek fontos a gyors renderelés és a kiváló multitasking.", image: "images/nvidia4.png", price: "249 399 Ft" },
        { id: 5, name: "ASRock Intel Arc A380 Challenger ITX 6GB OC", type: "intel", shortDesc: "Alap szint, költséghatékony", longDesc: "Az Intel Arc A380 költségvetésbarát választás alap szintű PC-khez. Kis energiaigénye és megfelelő teljesítménye ideális hétköznapi használathoz és kisebb játékokhoz.", image: "images/intel1.png", price: "54 399 Ft" },
        { id: 6, name: "ASRock Intel ARC A580 Challenger 8GB OC", type: "intel", shortDesc: "Erős és megfizethető", longDesc: "Az Intel ARC A580 többfeladatos teljesítménye és gyors válaszideje különösen kedvező, modern játékok és alkalmazások futtatására. Kedvező ára mellett jó választás a nagyobb igénybevételhez is.", image: "images/intel2.png", price: "87 399 Ft" },
        { id: 7, name: "ASUS Dual Radeon RX 7600 XT 16GB OC", type: "amd", shortDesc: "Kiváló játékhoz", longDesc: "A Radeon RX 7600 XT kártya kimagasló játékélményt biztosít professzionális és hobbi játékosok számára is. Erős grafikai kapacitása lehetővé teszi a sima és gyors játékmenetet.", image: "images/amd1.png", price: "146 900 Ft" },
        { id: 8, name: "ASUS Dual Radeon RX 7800 XT 16GB OC", type: "amd", shortDesc: "Professzionális teljesítmény", longDesc: "A Radeon RX 7800 XT ideális választás professzionális munkákhoz és nagy igényű játékokhoz. Hatalmas teljesítménye támogatja a komoly renderelést és az intenzív alkalmazásokat.", image: "images/amd2.png", price: "132 698 Ft" },
        { id: 9, name: "ASUS ROG Strix RTX 3080 10GB OC", type: "nvidia", shortDesc: "Magas szintű grafika", longDesc: "Az ASUS ROG Strix RTX 3080 10GB OC hatalmas grafikai teljesítményt nyújt, tökéletes a modern játékokhoz és VR-élményhez.", image: "images/nvidia5.png", price: "295 499 Ft" },
        { id: 10, name: "GIGABYTE RTX 4080 Gaming OC 16GB", type: "nvidia", shortDesc: "Profi szintű játék", longDesc: "A GIGABYTE RTX 4080 Gaming OC egy csúcskategóriás kártya, amely ideális nagy felbontású játékhoz és intenzív grafikai munkákhoz.", image: "images/nvidia6.png", price: "499 900 Ft" },
        { id: 11, name: "ASRock Radeon RX 7900 XT 20GB", type: "amd", shortDesc: "Maximális teljesítmény", longDesc: "Az ASRock Radeon RX 7900 XT 20GB kártya nagy teljesítménnyel támogatja a zökkenőmentes játékélményt és gyors renderelést.", image: "images/amd3.png", price: "315 999 Ft" },
        { id: 12, name: "ASUS TUF Gaming Intel ARC A770 16GB", type: "intel", shortDesc: "Intel grafikai csúcsteljesítmény", longDesc: "Az ASUS TUF Gaming Intel ARC A770 16GB kártya erőteljes teljesítményt nyújt kiváló hűtési hatékonysággal és hosszú élettartammal.", image: "images/intel3.png", price: "122 399 Ft" }
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
            
                if (product.type === "intel") {
                    productCard.style.border = "2px solid #0071C5";
                } else if (product.type === "amd") {
                    productCard.style.border = "2px solid #D73A31"; 
                } else if (product.type === "nvidia") {
                    productCard.style.border = "2px solid #76B900";
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
    productImage.addEventListener("click", () => openModal(product));
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