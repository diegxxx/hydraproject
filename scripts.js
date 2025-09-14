function showLoginPopup() {
    document.getElementById('login-popup').style.display = 'block';
}

function showDownloadPopup() {
    document.getElementById('download-popup').style.display = 'block';
}

function showDiscordPopup() {
    document.getElementById('discord-popup').style.display = 'block';
}

function showProductPopup() {
    document.getElementById('product-popup').style.display = 'block';
}

function hidePopup(id) {
    document.getElementById(id).style.display = 'none';
}

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'hydra' && password === 'hydra123') {
        alert('¡Inicio de sesión exitoso!');
        hidePopup('login-popup');
    } else {
        alert('Usuario o contraseña incorrectos. Por favor, inténtalo de nuevo.');
    }
});

const products = [
    {
        id: 1,
        name: 'MegaPack Hydra',
        price: '€49.99',
        description: 'Todo en un solo paquete.',
        image: 'https://img.freepik.com/fotos-premium/hydra-o-monstro-mitologico-imortal-1_1107970-2202.jpg' 
    },
    {
        id: 2,
        name: 'Sunscripcion Hydra',
        price: '€8.00/mes',
        description: 'Acceso completo y exclusivo.',
        image: 'https://img.freepik.com/premium-photo/hydra-greek-mythology-generative-ai_656174-7382.jpg'
    },
    {
        id: 3,
        name: 'Subscripcion Hydra+',
        price: '€12.00/mes',
        description: 'Mejor alternativa para no gastar tanto.',
        image: 'https://img.freepik.com/premium-photo/hydra-greek-mythology-generative-ai_656174-7370.jpg'
    },
    {
        id: 4,
        name: 'Mega Hydra',
        price: '€17.99',
        description: 'Todo lo que podemos ofrecerte.',
        image: 'https://images6.alphacoders.com/107/1076107.jpg'
    }
];

function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = ''; 

    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        productItem.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p class="product-price">${product.price}</p>
            <button class="buy-btn" onclick="buyProduct(${product.id})">COMPRAR</button>
        `;
        productGrid.appendChild(productItem);
    });
}

function buyProduct(productId) {
    alert(`Producto con ID ${productId} comprado. ¡Gracias por tu compra!`);
}

document.querySelector('.sections .section:nth-child(4)').addEventListener('click', renderProducts);