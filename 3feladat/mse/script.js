document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Logitech G102 LIGHTSYNC", type: "Logitech", shortDesc: "Alap gamer egér", longDesc: "A Logitech G102 LIGHTSYNC kompakt és könnyű egér, amely 8000 DPI érzékenységgel ideális kezdő játékosoknak. RGB világítása lehetőséget ad az egyéni stílus kialakítására.", image: "images/logitech1.png", price: "8 500 Ft" },
        { id: 2, name: "Logitech G502 HERO", type: "Logitech", shortDesc: "Prémium játékosoknak", longDesc: "A Logitech G502 HERO 16 000 DPI érzékenységet kínál, pontos mozgáskövetéssel és testreszabható gombokkal. Ideális választás a komoly játékosok számára, akik megbízható teljesítményt keresnek.", image: "images/logitech2.png", price: "22 900 Ft" },
        { id: 3, name: "Razer DeathAdder Essential", type: "Razer", shortDesc: "Klasszikus kialakítás", longDesc: "A Razer DeathAdder Essential ergonomikus kialakítással és 6400 DPI érzékenységgel rendelkezik, így kényelmes és gyors választás mindennapi játékhoz. Tartós kapcsolóival hosszú élettartamot garantál.", image: "images/razer1.png", price: "11 000 Ft" },
        { id: 4, name: "Razer Viper Ultimate", type: "Razer", shortDesc: "Vezeték nélküli profi", longDesc: "A Razer Viper Ultimate egy vezeték nélküli, ultrakönnyű egér, 20 000 DPI érzékenységgel és optikai szenzorral. Ideális a profi játékosoknak, akik a szabadságot és a teljesítményt keresik.", image: "images/razer2.png", price: "48 500 Ft" },
        { id: 5, name: "SteelSeries Rival 3", type: "SteelSeries", shortDesc: "Költséghatékony választás", longDesc: "A SteelSeries Rival 3 precíz mozgáskövetést és 8500 DPI érzékenységet kínál, megfizethető áron. Könnyű és strapabíró, mindennapos használatra és alkalmi játékra is megfelelő.", image: "images/steelseries1.png", price: "9 000 Ft" },
        { id: 6, name: "SteelSeries Aerox 3 Wireless", type: "SteelSeries", shortDesc: "Vezeték nélküli, könnyű", longDesc: "A SteelSeries Aerox 3 Wireless vezeték nélküli kapcsolattal és 18 000 DPI érzékenységgel, ideális választás a mobilis játékosoknak. Könnyű és vízálló kialakítása fokozza a tartósságot.", image: "images/steelseries2.png", price: "34 000 Ft" },
        { id: 7, name: "Logitech MX Master 3", type: "Logitech", shortDesc: "Produktivitás csúcsán", longDesc: "A Logitech MX Master 3 ideális irodai felhasználásra és kreatív munkára, nagy precizitással és ergonomikus kialakítással. Programozható gombokkal segíti a gyorsabb munkavégzést.", image: "images/logitech3.png", price: "32 000 Ft" },
        { id: 8, name: "Razer Naga Trinity", type: "Razer", shortDesc: "MMO játékosoknak", longDesc: "A Razer Naga Trinity 16 000 DPI érzékenységgel és cserélhető oldalpanelekkel kifejezetten MMO játékosoknak készült. Személyre szabható gombjai gyors hozzáférést biztosítanak minden játékfunkcióhoz.", image: "images/razer3.png", price: "29 500 Ft" },
        { id: 9, name: "Logitech G Pro Wireless", type: "Logitech", shortDesc: "Professzionális választás", longDesc: "A Logitech G Pro Wireless ultraérzékeny szenzorral és vezeték nélküli technológiával készült a legjobb teljesítmény érdekében. Könnyű és gyors, ideális kompetitív játékokhoz.", image: "images/logitech4.png", price: "42 000 Ft" },
        { id: 10, name: "Razer Basilisk X Hyperspeed", type: "Razer", shortDesc: "Vezeték nélküli élmény", longDesc: "A Razer Basilisk X Hyperspeed gyors válaszidejű, vezeték nélküli egér 16 000 DPI érzékenységgel. Ideális választás azoknak, akik vezeték nélküli szabadságot és magas teljesítményt keresnek.", image: "images/razer4.png", price: "18 000 Ft" },
        { id: 11, name: "SteelSeries Sensei Ten", type: "SteelSeries", shortDesc: "Profiknak készült", longDesc: "A SteelSeries Sensei Ten egy kiemelkedő teljesítményű egér TrueMove Pro szenzorral és 18 000 DPI érzékenységgel. Az ergonómikus kialakítás hosszú távú kényelmet biztosít minden stílusú játékhoz.", image: "images/steelseries3.png", price: "24 500 Ft" },
        { id: 12, name: "Razer Orochi V2", type: "Razer", shortDesc: "Hordozható gamer egér", longDesc: "A Razer Orochi V2 kompakt és könnyű kialakítással, valamint 18 000 DPI érzékenységgel rendelkezik. Ideális választás mobilis játékosoknak, akik utazás közben is a legjobbat keresik.", image: "images/razer5.png", price: "22 500 Ft" }
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
            
                if (product.type === "Logitech") {
                    productCard.style.border = "2px solid #0062A3";
                } else if (product.type === "Razer") {
                    productCard.style.border = "2px solid #00FF00"; 
                } else if (product.type === "SteelSeries") {
                    productCard.style.border = "2px solid #FFA500";
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