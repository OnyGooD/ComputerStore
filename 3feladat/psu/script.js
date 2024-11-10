document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Cooler Master MWE 450W", type: "Cooler Master", shortDesc: "Belépő szint, csendes", longDesc: "A Cooler Master MWE 450W tápegység csendes és stabil áramellátást biztosít, ideális irodai és alap gépekhez. Alacsony zajszintű ventilátorral felszerelve a halk működésért.", image: "images/coolermaster1.png", price: "12 500 Ft" },
        { id: 2, name: "Cooler Master MWE 550W", type: "Cooler Master", shortDesc: "Megbízható teljesítmény", longDesc: "A Cooler Master MWE 550W kiváló választás középkategóriás számítógépekhez, stabil áramellátással és hosszú élettartammal. A hatékony hűtési rendszer biztosítja a csendes működést.", image: "images/coolermaster2.png", price: "15 900 Ft" },
        { id: 3, name: "Corsair CV Series 450W", type: "Corsair", shortDesc: "Hatékony és megfizethető", longDesc: "A Corsair CV Series 450W hatékony energiaellátást kínál irodai és alap szintű rendszerekhez. Megfizethető megoldás, amely stabil teljesítményt és csendes működést biztosít.", image: "images/corsair1.png", price: "13 200 Ft" },
        { id: 4, name: "Corsair RM750 750W", type: "Corsair", shortDesc: "Nagy teljesítményű", longDesc: "A Corsair RM750 egy megbízható 750W-os tápegység, amely tökéletes választás játékosok és teljesítményigényes felhasználók számára. Prémium minőséget és tartós áramellátást biztosít.", image: "images/corsair2.png", price: "32 500 Ft" },
        { id: 5, name: "Seasonic S12III 500W", type: "Seasonic", shortDesc: "Megbízható és tartós", longDesc: "A Seasonic S12III 500W tápegység stabil és megbízható energiaellátást nyújt mindennapi használatra. Tartós kialakítása biztosítja a hosszú élettartamot és a zavartalan működést.", image: "images/seasonic1.png", price: "17 300 Ft" },
        { id: 6, name: "Seasonic Focus GX 650W", type: "Seasonic", shortDesc: "Hatékony és halk", longDesc: "A Seasonic Focus GX 650W egy nagy hatékonyságú, moduláris tápegység, amely csúcsteljesítményt nyújt játékosoknak és kreatív szakembereknek. Halk működése és energiatakarékossága ideális választássá teszi.", image: "images/seasonic2.png", price: "29 900 Ft" },
        { id: 7, name: "Cooler Master V850 850W", type: "Cooler Master", shortDesc: "Prémium teljesítmény", longDesc: "A Cooler Master V850 850W tápegység prémium kategóriás választás nagy teljesítményű rendszerekhez. Moduláris kábelezése és hatékony hűtése kiválóan alkalmassá teszi komoly felhasználásra.", image: "images/coolermaster3.png", price: "42 800 Ft" },
        { id: 8, name: "Corsair HX1200 1200W", type: "Corsair", shortDesc: "Extrém teljesítmény", longDesc: "A Corsair HX1200 ideális választás extrém igénybevételhez és több GPU-val rendelkező rendszerekhez. Kiemelkedő teljesítményt és stabilitást nyújt a legnagyobb terhelés mellett is.", image: "images/corsair3.png", price: "72 000 Ft" },
        { id: 9, name: "Cooler Master MWE Gold 650W", type: "Cooler Master", shortDesc: "Energiatakarékos", longDesc: "A Cooler Master MWE Gold 650W tápegység magas hatékonysággal és energiatakarékossággal szolgál, ideális otthoni és irodai használatra.", image: "images/coolermaster4.png", price: "26 500 Ft" },
        { id: 10, name: "Corsair RM850x 850W", type: "Corsair", shortDesc: "Csendes és hatékony", longDesc: "A Corsair RM850x egy megbízható, nagy teljesítményű tápegység, amely csendes működést biztosít a legmagasabb terhelés mellett is.", image: "images/corsair4.png", price: "41 200 Ft" },
        { id: 11, name: "Seasonic PRIME TX-750 750W", type: "Seasonic", shortDesc: "Csúcskategória", longDesc: "A Seasonic PRIME TX-750 750W csúcskategóriás teljesítményt és megbízhatóságot nyújt a komoly felhasználók számára, moduláris kialakítással.", image: "images/seasonic3.png", price: "45 700 Ft" },
        { id: 12, name: "Seasonic CORE GM 500W", type: "Seasonic", shortDesc: "Költséghatékony és hatékony", longDesc: "A Seasonic CORE GM 500W ideális választás belépő szintű és középkategóriás számítógépekhez, alacsony zajszint mellett biztosít stabil áramellátást.", image: "images/seasonic4.png", price: "21 300 Ft" }
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
            
                if (product.type === "Cooler Master") {
                    productCard.style.border = "2px solid #800080";
                } else if (product.type === "Corsair") {
                    productCard.style.border = "2px solid #FFD700"; 
                } else if (product.type === "Seasonic") {
                    productCard.style.border = "2px solid #1E90FF";
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