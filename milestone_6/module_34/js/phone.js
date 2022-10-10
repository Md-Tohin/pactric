
const loadData = (searchItem, limitData) => {
    fetch(`https://openapi.programming-hero.com/api/phones?search=${searchItem}`)
        .then(resp => resp.json())
        .then(phones => displayData(phones.data, limitData));
}

const displayProductDetails = (item) => {
    console.log(item);
    const titleName = document.getElementById('productDetailsLabel');
    titleName.innerText = item.name;   
    const modelBody = document.getElementById('product-details-modal-body');
    modelBody.innerText = 'd';    
}

const showDetails = (slug) => {
    fetch(`https://openapi.programming-hero.com/api/phone/${slug}`)
    .then(resp => resp.json())
    .then(data => displayProductDetails(data.data));
}


const displayData = (phones, limitData) => {
    const notFoundId = document.getElementById('notFound');
    if (phones.length === 0) {
        notFoundId.classList.remove('d-none');
    } else {
        notFoundId.classList.add('d-none');
    }

    const showAllArea = document.getElementById('show-all-area');
    if (limitData && phones.length > 12) {
        phones = phones.slice(0, 12);
        showAllArea.classList.remove('d-none');
    } else {
        showAllArea.classList.add('d-none');
    }

    const phoneArea = document.getElementById('phone-container');
    phoneArea.textContent = '';
    phones.forEach(phone => {
        const phoneItem = document.createElement('div');
        phoneItem.classList.add('col');
        phoneItem.innerHTML = `
            <div class="card h-100">
                <img src="${phone.image}" class="card-img-top p-4" height="400" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${phone.phone_name}</h5>
                    <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                    <button onclick="showDetails('${phone.slug}')" id="show-details" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#productDetails">Show Details</button>
                </div>
            </div>
        `;
        phoneArea.appendChild(phoneItem);
    });
    spinnerLoder(false);
}

const spinnerLoder = (isSpinner) => {
    const spinner = document.getElementById('loder');
    if (isSpinner) {
        spinner.classList.remove('d-none');
    } else {
        spinner.classList.add('d-none');
    }
}

const showAllProduct = (limitData) => {
    spinnerLoder(true);
    const searchField = document.getElementById('search-field');
    searchValue = searchField.value;
    loadData(searchValue, limitData);
}

document.getElementById('search-field').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        showAllProduct(12);
    }
});

document.getElementById('searchBtn').addEventListener('click', function () {
    showAllProduct(12);
});

document.getElementById('show-all-product').addEventListener('click', function () {
    showAllProduct();
});

loadData('a');