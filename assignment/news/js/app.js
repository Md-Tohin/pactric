//   Get all categories 
try {
    fetch('https://openapi.programming-hero.com/api/news/categories')
        .then(resp => resp.json())
        .then(data => displayCategories(data.data.news_category));
}
catch (error) {
    console.log(error);
}


//   Display all categories 
const displayCategories = (categories) => {
    const categoryContainer = document.getElementById('category-container');
    categories.forEach(category => {
        const categoryItem = document.createElement('div');
        categoryItem.innerHTML = `
            <div onclick="loadCategoryNews(${category.category_id}, '${category.category_name}')" id="${category.category_name}" class="p-2" style="cursor: pointer;">${category.category_name}</div>
        `;
        categoryContainer.appendChild(categoryItem);
    });
}

//   Spinner Loader
const spinnerLoder = (isSpinner) => {
    const spinner = document.getElementById('loder');
    if (isSpinner) {
        spinner.classList.remove('d-none');
    } else {
        spinner.classList.add('d-none');
    }
}

//   Get all category News
const loadCategoryNews = (category_id, category_name) => {
    spinnerLoder(true);
    const url = `https://openapi.programming-hero.com/api/news/category/0${category_id}`;
    try {
        fetch(url)
            .then(resp => resp.json())
            .then(data => displayCategoryNews(data.data, category_id, category_name));
    }
    catch (error) {
        console.log(error);
    }
}

loadCategoryNews(8, 'All News');

//   Date formatting
function getFormattedDate(datetime) {
    var date = new Date(datetime);
    return date.toDateString();
}

//   Display all category News
const displayCategoryNews = (news, category_id, category_name) => {
    console.log(news);
    const categoryNewsContainer = document.getElementById('news-container');
    categoryNewsContainer.innerHTML = ``;
    const categoryMessage = document.getElementById('category-message');
    if (news.length > 0) {
        categoryMessage.innerHTML = `
            ${news.length} items found for category ${category_name}
        `;
        categoryMessage.classList.remove('text-danger');
    } else {
        spinnerLoder(false);
        categoryMessage.innerHTML = ` ${category_name} category news not found`;
        categoryMessage.classList.add('text-danger');
    }

    for (const catNews of news) {
        const newsItem = document.createElement('div');
        newsItem.classList.add('row');
        newsItem.innerHTML = `
        <div class="col-md-12">
            <div class="card mb-3 border-0">
                <div class="row g-0">
                    <div class="col-md-3 p-3">
                        <img src="${catNews.thumbnail_url}" class="img-fluid rounded-start" alt="...">
                    </div>
                    <div class="col-md-9 p-3">
                        <div class="card-body">
                            <h4 class="card-title fw-bold mb-4">${catNews.title}</h4>
                            <p class="card-text text-muted">${catNews.details.slice(0, 180)}</p>
                            <p class="card-text text-muted">
                                ${catNews.details.slice(181, 380)} ...
                            </p>

                            <div class="row pt-3">
                                <div class="col-lg-3 col-md-6 col-sm-12 cols-12">
                                    <div class="d-flex flex-row">
                                        <img src="${catNews.author.img}" class="img-fluid rounded-circle"
                                            style="width: 45px; height: 45px;" alt="">

                                        <div class="px-3" style="line-height: 6px;">
                                            <p class="fs-6 fw-semibold text-nowrap">${catNews.author.name ? catNews.author.name : 'Name not found'}</p>
                                            <p class="fs-6 text-sm text-muted text-nowrap">${catNews.author.published_date ? getFormattedDate(catNews.author.published_date) : 'Not date found'}</p>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 cols-12 text-center pt-3">
                                    <span>
                                        <i class="fa-solid fa-eye"></i>
                                    </span>
                                    <span>${catNews.total_view ? catNews.total_view + ' M' : '0'}</span>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 cols-12 pt-3 text-center">
                                    <span><i class="fa-regular fa-star-half-stroke"></i></span>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                    <i class="fa-regular fa-star"></i>
                                </div>
                                <div class="col-lg-3 col-md-6 col-sm-12 cols-12 text-end pt-3 text-primary">
                                    <span  onclick="loadNewsDetails('${catNews._id}')" data-bs-toggle="modal" href="#newsDetalis" ><i class="fa-solid fa-arrow-right"></i></span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        `;
        categoryNewsContainer.appendChild(newsItem);
        spinnerLoder(false);
        // console.log(`${catNews._id}`);
    }

}

//   display news details in Model
const displayNewsDetails = (news) => {
    console.log(news);
    const displayNewsDetailsArea = document.getElementById('display-news-details-area');
    displayNewsDetailsArea.innerHTML = ``;
    displayNewsDetailsArea.innerHTML = `
    <div class="col">
        <div class="card h-100">
            <img src="${news.thumbnail_url}" class="card-img-top" alt="..." style="height: 300px;">
            <div class="card-body">
                <h5 class="card-title">${news.title}</h5>
                <br>
                <p class="card-text">${news.details}</p>
                <div class="row pt-3">
                    <div class="col-lg-6 col-md-6 col-sm-6 cols-6">
                        <div class="d-flex flex-row">
                            <img src="${news.author.img}" class="img-fluid rounded-circle"
                                style="width: 45px; height: 45px;" alt="">

                            <div class="px-3" style="line-height: 6px;">
                                <p class="fs-6 fw-semibold text-nowrap">${news.author.name ? news.author.name : 'Name not found'}</p>
                                <p class="fs-6 text-sm text-muted text-nowrap">${news.author.published_date ?
                                    getFormattedDate(news.author.published_date) : 'Not date found'}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6 col-md-6 col-sm-6 cols-6 me-auto text-end pt-3 ">
                        <span>
                            <i class="fa-solid fa-eye"></i>
                            ${news.total_view ? news.total_view + ' M' : '0'}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
    `;
}

//   Load News details
const loadNewsDetails = (newsId) => {
    try {
        fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
            .then(resp => resp.json())
            .then(data => displayNewsDetails(data.data[0]));
    }
    catch (error) {
        console.log(error);
    }
}
