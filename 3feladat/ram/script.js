document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Kingston FURY Beast 8GB DDR4", type: "Kingston", shortDesc: "Megbízható alap RAM", longDesc: "A Kingston FURY Beast 8GB RAM kiváló választás alapfelhasználásra és általános célokra. Megbízhatóságával stabil teljesítményt nyújt mindennapi feladatokhoz.", image: "images/kingston1.png", price: "9 999 Ft" },
        { id: 2, name: "Kingston FURY Beast 16GB DDR4", type: "Kingston", shortDesc: "Kiegyensúlyozott teljesítmény", longDesc: "Ez a 16GB-os Kingston RAM ideális középkategóriás felhasználóknak, akik gyorsabb rendszerreakcióra vágynak. Megbízható teljesítményével támogatja a multitaskingot és játékokat.", image: "images/kingston2.png", price: "18 299 Ft" },
        { id: 3, name: "Corsair Vengeance LPX 16GB DDR4", type: "Corsair", shortDesc: "Nagy teljesítmény játékhoz", longDesc: "A Corsair Vengeance LPX 16GB RAM kiváló választás játékosok számára, akik stabil és gyors memóriára vágynak. Alacsony profilú kialakításával könnyen telepíthető és megbízható.", image: "images/corsair1.png", price: "21 399 Ft" },
        { id: 4, name: "Corsair Dominator Platinum RGB 32GB DDR4", type: "Corsair", shortDesc: "Stílusos és gyors", longDesc: "A Corsair Dominator Platinum RGB 32GB nemcsak a teljesítményével, hanem a látványos RGB világításával is kiemelkedik. Ideális választás kreatív munkákhoz és játékhoz.", image: "images/corsair2.png", price: "38 999 Ft" },
        { id: 5, name: "G.SKILL Ripjaws V 16GB DDR4", type: "G.SKILL", shortDesc: "Megbízható és gyors", longDesc: "A G.SKILL Ripjaws V 16GB RAM gyors órajelével és stabilitásával ideális választás mindennapi feladatokhoz és játékhoz is. Kiváló teljesítményt biztosít középkategóriás rendszerekhez.", image: "images/gskill1.png", price: "18 799 Ft" },
        { id: 6, name: "G.SKILL Trident Z RGB 32GB DDR4", type: "G.SKILL", shortDesc: "Elegáns, RGB világítás", longDesc: "A G.SKILL Trident Z 32GB RAM a teljesítmény és a látványos RGB világítás tökéletes kombinációja. Professzionális felhasználásra, valamint többfeladatos munkákra alkalmas.", image: "images/gskill2.png", price: "39 799 Ft" },
        { id: 7, name: "Corsair Vengeance RGB Pro 64GB DDR4", type: "Corsair", shortDesc: "Prémium teljesítmény", longDesc: "A Corsair Vengeance RGB Pro 64GB prémium teljesítményt és lenyűgöző RGB megvilágítást kínál. Ideális azok számára, akik intenzív feladatokkal és nagy igényű programokkal dolgoznak.", image: "images/corsair3.png", price: "69 999 Ft" },
        { id: 8, name: "Kingston FURY Renegade 64GB DDR4", type: "Kingston", shortDesc: "Masszív kapacitás, megbízható", longDesc: "A Kingston FURY Renegade 64GB RAM ideális választás nagy teljesítményigényű alkalmazásokhoz és multitaskinghoz. Kiemelkedő kapacitása megbízható választás a professzionális felhasználóknak.", image: "images/kingston3.png", price: "67 499 Ft" }
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
            
                if (product.type === "Kingston") {
                    productCard.style.border = "2px solid #0055A5";
                } else if (product.type === "Corsair") {
                    productCard.style.border = "2px solid #FFD700"; 
                } else if (product.type === "G.SKILL") {
                    productCard.style.border = "2px solid #BC002D";
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