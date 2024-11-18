document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Logitech G213 Prodigy", type: "Logitech", shortDesc: "Kezdő játékosoknak", longDesc: "A Logitech G213 Prodigy strapabíró membrános billentyűzete gyors válaszidőt és RGB világítást kínál. Ideális választás belépő szintű játékosoknak.", image: "images/logitech1.png", price: "15 000 Ft" },
        { id: 2, name: "Logitech G Pro X", type: "Logitech", shortDesc: "Cserélhető kapcsolók", longDesc: "A Logitech G Pro X mechanikus billentyűzet cserélhető kapcsolókkal és RGB világítással rendelkezik. Kompakt kialakítása miatt ideális versenyzőknek és haladó játékosoknak.", image: "images/logitech2.png", price: "39 000 Ft" },
        { id: 3, name: "Logitech MX Keys", type: "Logitech", shortDesc: "Produktív munka", longDesc: "A Logitech MX Keys billentyűzet kényelmes, alacsony profilú gombokkal és háttérvilágítással, ideális irodai munkához és kreatív feladatokhoz. Kiváló választás hosszú munkanapokra.", image: "images/logitech3.png", price: "34 000 Ft" },
        { id: 4, name: "Razer Cynosa V2", type: "Razer", shortDesc: "Alap gamer választás", longDesc: "A Razer Cynosa V2 membrános billentyűzete sima és csendes működést kínál, ideális kezdő játékosok számára. Teljesen testreszabható RGB világítással rendelkezik.", image: "images/razer1.png", price: "18 000 Ft" },
        { id: 5, name: "Razer Huntsman Mini", type: "Razer", shortDesc: "Kompakt és gyors", longDesc: "A Razer Huntsman Mini optikai kapcsolói gyors válaszidőt és pontos billentyűleütést biztosítanak. Kompakt mérete miatt ideális kisebb asztalokhoz és mobilis játékosoknak.", image: "images/razer2.png", price: "42 000 Ft" },
        { id: 6, name: "Razer BlackWidow Elite", type: "Razer", shortDesc: "Professzionális gaming", longDesc: "A Razer BlackWidow Elite mechanikus billentyűzete tartós és gyors válaszidőt kínál, beépített multimédia vezérlőkkel. Kifejezetten versenyzők számára készült.", image: "images/razer3.png", price: "50 000 Ft" },
        { id: 7, name: "Corsair K55 RGB PRO", type: "Corsair", shortDesc: "Megfizethető RGB", longDesc: "A Corsair K55 RGB PRO vízálló membrános billentyűzete halk működést biztosít, és testreszabható világítást kínál. Költséghatékony választás alkalmi játékosoknak.", image: "images/corsair1.png", price: "20 000 Ft" },
        { id: 8, name: "Corsair K70 RGB MK.2", type: "Corsair", shortDesc: "Játékra optimalizált", longDesc: "A Corsair K70 RGB MK.2 mechanikus billentyűzete gyors kapcsolókkal és prémium kivitelezéssel ideális választás játékosoknak. Tartós, és több világítási profillal rendelkezik.", image: "images/corsair2.png", price: "55 000 Ft" },
        { id: 9, name: "Corsair K95 RGB Platinum", type: "Corsair", shortDesc: "Prémium minőség", longDesc: "A Corsair K95 RGB Platinum kiváló minőségű anyagokból és programozható gombokkal készült, így a profi játékosok és tartalomgyártók kedvence. A testreszabható világítási effektek fokozzák az élményt.", image: "images/corsair3.png", price: "75 000 Ft" },
        { id: 10, name: "Logitech G915 TKL", type: "Logitech", shortDesc: "Vezeték nélküli és kompakt", longDesc: "A Logitech G915 TKL mechanikus billentyűzet vezeték nélküli kapcsolatot és alacsony profilú kapcsolókat kínál. Ideális azoknak, akik csúcsteljesítményt keresnek kompakt kivitelben.", image: "images/logitech4.png", price: "68 000 Ft" },
        { id: 11, name: "Razer Ornata Chroma", type: "Razer", shortDesc: "Mecha-membrános érzés", longDesc: "A Razer Ornata Chroma mecha-membrán technológiával egyesíti a mechanikus és membrános billentyűk előnyeit. Kényelmes és érzékeny, ideális hosszabb játékhoz.", image: "images/razer4.png", price: "30 000 Ft" },
        { id: 12, name: "Corsair K60 RGB PRO", type: "Corsair", shortDesc: "Tartós és elegáns", longDesc: "A Corsair K60 RGB PRO alumínium felépítéssel és gyors Cherry VIOLA kapcsolókkal készült, így tartósságot és stílust nyújt a mindennapi használatban. Teljes RGB háttérvilágítással rendelkezik.", image: "images/corsair4.png", price: "35 000 Ft" }
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
                } else if (product.type === "Corsair") {
                    productCard.style.border = "2px solid #FFD700";
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