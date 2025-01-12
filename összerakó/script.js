const selectedComponents = {};

function selectComponent(button, name, type, price) {
    const componentDiv = button.parentElement;
    const key = `${name} (${type})`;

    if (selectedComponents[key]) {
        delete selectedComponents[key];
        componentDiv.classList.remove('selected');
    } else {
       
        for (const existingKey in selectedComponents) {
            if (existingKey.startsWith(name)) {
                delete selectedComponents[existingKey];
                const allComponents = document.querySelectorAll(`.component[data-name='${name}']`);
                allComponents.forEach(comp => comp.classList.remove('selected'));
            }
        }
        selectedComponents[key] = price;
        componentDiv.classList.add('selected');
    }

    updateSelectedComponents();
    updateTotalPrice();
}

function updateSelectedComponents() {
    const selectedList = document.getElementById('selected-list');
    selectedList.innerHTML = '';

    for (const [key, price] of Object.entries(selectedComponents)) {
        const listItem = document.createElement('li');
        listItem.textContent = `${key} - ${price} Ft`;
        selectedList.appendChild(listItem);
    }
}

function updateTotalPrice() {
    const totalPrice = Object.values(selectedComponents).reduce((sum, price) => sum + price, 0);
    document.getElementById('total-price').textContent = totalPrice;
}

function placeOrder() {
    const requiredComponents = ['CPU', 'Memória',   'Videókártya', 'Tápegység', 'Alaplap'];
    const missingComponents = requiredComponents.filter(component => !Object.keys(selectedComponents).some(key => key.startsWith(component)));

    if (missingComponents.length > 0) {
        alert(`Hiányzó alkatrészek: ${missingComponents.join(', ')}`);
    } else {
        alert('Megrendelés sikeresen leadva!');
    }
}