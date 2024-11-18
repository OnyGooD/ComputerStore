document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "ASUS PRIME B450M-A", type: "ASUS", shortDesc: "Alap szint, stabil", longDesc: "Az ASUS PRIME B450M-A alaplap ideális választás kezdő és középkategóriás PC-khez, stabil teljesítményt biztosítva. Kompakt méretének köszönhetően könnyen illeszthető kisebb házakba is.", image: "images/asus1.png", price: "27 000 Ft" },
        { id: 2, name: "ASUS TUF GAMING B550-PLUS", type: "ASUS", shortDesc: "Erős és megbízható", longDesc: "Az ASUS TUF GAMING B550-PLUS tartós felépítése révén tökéletes választás játékosoknak. Kimagasló hűtési rendszere biztosítja a stabil teljesítményt intenzív terhelés alatt is.", image: "images/asus2.png", price: "45 500 Ft" },
        { id: 3, name: "MSI MAG B560 TOMAHAWK WIFI", type: "MSI", shortDesc: "Megbízható középkategória", longDesc: "Az MSI MAG B560 TOMAHAWK WIFI kiváló stabilitást és teljesítményt nyújt középkategóriás felhasználók számára. Beépített Wi-Fi modullal rendelkezik, amely gyors és stabil hálózati kapcsolatot biztosít.", image: "images/msi1.png", price: "51 300 Ft" },
        { id: 4, name: "MSI MPG Z590 GAMING EDGE WIFI", type: "MSI", shortDesc: "Prémium játékosoknak", longDesc: "Az MSI MPG Z590 GAMING EDGE WIFI alaplap nagy teljesítményt kínál a gamereknek, fejlett hűtéssel és stabil túlhajtási lehetőségekkel. Ideális választás a komoly játékosok számára.", image: "images/msi2.png", price: "79 000 Ft" },
        { id: 5, name: "Gigabyte B460M DS3H", type: "Gigabyte", shortDesc: "Költséghatékony és stabil", longDesc: "A Gigabyte B460M DS3H egy megbízható alaplap, amely stabil teljesítményt kínál a mindennapi feladatokhoz. Kiváló választás ár-érték arány szempontjából, középkategóriás gépekhez.", image: "images/gigabyte1.png", price: "32 800 Ft" },
        { id: 6, name: "Gigabyte Z690 AORUS ELITE", type: "Gigabyte", shortDesc: "Csúcskategóriás", longDesc: "A Gigabyte Z690 AORUS ELITE prémium kategóriás alaplap, kimagasló teljesítményt és kompatibilitást kínál a legújabb hardverekkel. Ideális választás nagy igénybevételhez és fejlett játékhoz.", image: "images/gigabyte2.png", price: "95 400 Ft" },
        { id: 7, name: "ASUS ROG STRIX Z490-E GAMING", type: "ASUS", shortDesc: "Gaming és túlhajtás", longDesc: "Az ASUS ROG STRIX Z490-E GAMING alaplap optimális választás a játékosok számára, magas minőséget és stabil túlhajtási lehetőségeket kínálva. Erőteljes hűtési rendszerrel rendelkezik.", image: "images/asus3.png", price: "87 000 Ft" },
        { id: 8, name: "Gigabyte X570 AORUS ULTRA", type: "Gigabyte", shortDesc: "Extrém teljesítmény", longDesc: "A Gigabyte X570 AORUS ULTRA kiváló teljesítményt és hűtési rendszert kínál a professzionális felhasználóknak. Tökéletes választás nagy igényű alkalmazásokhoz és erőforrás-igényes játékokhoz.", image: "images/gigabyte3.png", price: "102 300 Ft" },
        { id: 9, name: "ASUS TUF Z690-PLUS WIFI", type: "ASUS", shortDesc: "Robusztus és stabil", longDesc: "Az ASUS TUF Z690-PLUS WIFI kimagasló tartóssággal és teljesítménnyel rendelkezik. Kifejezetten játékosoknak és intenzív felhasználóknak ajánlott.", image: "images/asus4.png", price: "112 000 Ft" },
        { id: 10, name: "MSI MEG Z490 GODLIKE", type: "MSI", shortDesc: "Extrém teljesítmény, prémium", longDesc: "Az MSI MEG Z490 GODLIKE a legjobb teljesítményt és extrém túlhajtási lehetőségeket kínálja. Tökéletes választás a maximalisták számára.", image: "images/msi3.png", price: "159 000 Ft" },
        { id: 11, name: "Gigabyte Z490 AORUS PRO AX", type: "Gigabyte", shortDesc: "Prémium játékos alaplap", longDesc: "A Gigabyte Z490 AORUS PRO AX magas szintű hűtést és gyors hálózati kapcsolatokat biztosít, ideális választás gamereknek és nagy teljesítményhez.", image: "images/gigabyte4.png", price: "122 500 Ft" },
        { id: 12, name: "MSI MPG B550 GAMING CARBON WIFI", type: "MSI", shortDesc: "Középkategória, játékhoz", longDesc: "Az MSI MPG B550 GAMING CARBON WIFI alaplap kiváló teljesítményt nyújt kedvező áron, ideális választás középkategóriás gaming gépekhez.", image: "images/msi4.png", price: "64 800 Ft" }
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
            
                if (product.type === "ASUS") {
                    productCard.style.border = "2px solid #00539F";
                } else if (product.type === "MSI") {
                    productCard.style.border = "2px solid #D32E2F"; 
                } else if (product.type === "Gigabyte") {
                    productCard.style.border = "2px solid #E8830A";
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