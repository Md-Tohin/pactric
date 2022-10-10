
const loadMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`;
    fetch(url)
        .then(resp => resp.json())
        .then(data => displayMeals(data.meals));
}

const displayMeals = (meals) => {
    const mealContainer = document.getElementById('meal-container');
    mealContainer.innerHTML = '';
    meals.forEach(meal => {
        const mealItem = document.createElement('div');
        mealItem.innerHTML = `
            <div class="col">
                <div onclick="displayMealDetails(${meal.idMeal})" class="card h-100">
                    <a data-bs-toggle="modal" href="#exampleModalToggle" >
                        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                    </a>
                    <div class="card-body">
                        <h5 class="card-title">${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 150)}...</p>
                    </div>
                </div>
            </div>
        `;
        mealContainer.appendChild(mealItem);
    })
}

const displayDetails = (meal) => {
    const displayMealDetailsArea = document.getElementById('display-meal-details-area');
    displayMealDetailsArea.innerHTML = ``;
    displayMealDetailsArea.innerHTML = `
    <div class="col">
        <div class="card h-100">           
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p class="card-text">${meal.strInstructions}</p>
            </div>
        </div>
    </div>
    `;
}

const displayMealDetails = (mealId) => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then(resp => resp.json())
    .then(data => displayDetails(data.meals[0]));
}

const searchLoadMeals = () => {
    const searchArea = document.getElementById('searchField');
    const searchValue = searchArea.value;
    loadMeals(searchValue);
    searchArea.value = '';
};

loadMeals('');