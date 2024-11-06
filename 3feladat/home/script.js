document.addEventListener("DOMContentLoaded", () => {
    const products = [
        { id: 1, name: "Intel Core i3-12100F", shortDesc: "Gyors, megbízható processzor.", longDesc: "Részletes leírás: Nagy teljesítményű processzor.", image: "images/intel1.png", price: "31 899 Ft" },
        { id: 2, name: "Intel Core i5-12400F", shortDesc: "Erős processzor.", longDesc: "Részletes leírás: Erőteljes, energiahatékony processzor.", image: "images/intel2.png", price: "46 999 Ft" },
        { id: 3, name: "Intel Core i7-12700K", shortDesc: "Gyors grafikus teljesítmény.", longDesc: "Részletes leírás: Kiváló grafikai teljesítmény nagy felbontásban.", image: "images/intel3.png", price: "106 199 Ft"  },
        { id: 4, name: "Intel Core i9-12900KF", shortDesc: "Nagy kapacitású memória.", longDesc: "Részletes leírás: Gyors memória nagy kapacitással.", image: "images/intel4.png", price: "122 199 Ft"  },
        { id: 5, name: "AMD Ryzen 3 4100", shortDesc: "Nagy tárhelyű merevlemez.", longDesc: "Részletes leírás: Magas kapacitású, megbízható tárolás.", image: "images/ryzen1.png", price: "25 899 Ft"  },
        { id: 6, name: "AMD Ryzen 5 5600", shortDesc: "Nagy tárhelyű merevlemez.", longDesc: "Részletes leírás: Magas kapacitású, megbízható tárolás.", image: "images/ryzen2.png", price: "47 499 Ft"  },
        { id: 7, name: "AMD Ryzen 7 5800X", shortDesc: "Nagy tárhelyű merevlemez.", longDesc: "Részletes leírás: Magas kapacitású, megbízható tárolás.", image: "images/ryzen3.png", price: "75 199 Ft"  },
        { id: 8, name: "AMD Ryzen 9 5950X", shortDesc: "Nagy tárhelyű merevlemez.", longDesc: "Részletes leírás: Magas kapacitású, megbízható tárolás.", image: "images/ryzen4.png", price: "132 698 Ft"  }
    ];

    const productContainer = document.getElementById("alkatreszDoboz");

    products.forEach(product => {
        const productCard = document.createElement("div");
        productCard.classList.add("doboz");

        // Kép létrehozása és hozzáadása
        const productImage = document.createElement("img");
        productImage.src = product.image;
        productImage.alt = product.name;
        productCard.appendChild(productImage);
        
        const productName = document.createElement("h3");
        productName.textContent = product.name;

        const productPrice = document.createElement("h4");
        productPrice.textContent = product.price;

        const productDesc = document.createElement("p");
        productDesc.textContent = product.shortDesc;

        const showMoreButton = document.createElement("button");
        showMoreButton.classList.add("gomb-tobb");
        showMoreButton.textContent = "Részletek";
        showMoreButton.onclick = () => alert(product.longDesc);

        productCard.appendChild(productName);
        productCard.appendChild(productDesc);
        productCard.appendChild(productPrice);
        productCard.appendChild(showMoreButton);

        productCard.onclick = () => addToComparison(product);

        productContainer.appendChild(productCard);
    });
});

let comparisonList = [];

function addToComparison(product) {
    if (comparisonList.length < 2 && !comparisonList.includes(product)) {
        comparisonList.push(product);
    }
    if (comparisonList.length === 2) {
        displayComparison();
    }
}

function displayComparison() {
    const compareProduct1 = document.getElementById("osszeT1");
    const compareProduct2 = document.getElementById("osszeT2");
    compareProduct1.textContent = comparisonList[0].longDesc;
    compareProduct2.textContent = comparisonList[1].longDesc;
}

function submitRequest() {
    const requestInput = document.getElementById("igenyMezo");
    const requestList = document.getElementById("igenyLista");
    if (requestInput.value.trim() !== "") {
        const newRequest = document.createElement("p");
        newRequest.textContent = `Igényelt termék: ${requestInput.value}`;
        requestList.appendChild(newRequest);
        requestInput.value = "";
    }
}
l