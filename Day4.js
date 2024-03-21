// ========================================= Assignment =================================


// 1. Create a function `saveToLocalStorage` that stores user preferences (e.g., theme and language) using `localStorage`.

function saveToLocalStorage(preferences) {
    localStorage.setItem('userPreferences', JSON.stringify(preferences));
}
// 2. Implement a function `loadFromSessionStorage` that retrieves user session data (e.g., cart items) using `sessionStorage`.

function loadFromSessionStorage() {
    return JSON.parse(sessionStorage.getItem('userSessionData'));
}


// ================================= Practice code from SkillCaptain ============================================

//  storing data in memory

localStorage.setItem("username","himanshu");

// retieving the data

const name = localStorage.getItem("username");
console.log('username:',usename);

// remove the item

localStorage.removeItem("usename");

// sessionStorage  in JS

sessionStorage.setItem("email","himanshupandey1708@gmail.com");
// retrieving the data from sessionStorage

const store = sessionStorage.getItem("email");
console.log('email:',store);

// clear r remove the data from the sessionStorage

sessionStorage.clear()

// web storage api method

// storing the data in storage memory 
localStorage.setItem('language','JavaScript');

// retieving the data from storage

let languages = localStorage.getItem('languages');

console.log(languages);

// remove 

localStorage.removeItem();

// handling data types and JSON

const userDetail = {
    'name':'himanshu',
    'age':'23',
    'email':'himanshupandeybhu4@gmail.com'
};

// store the object as a JSON string

localStorage.setItem('user',JSON.stringify(userDetail));

// Retrieving and parsing JSON string

const storeDetail = JSON.parse(localStorage.getItem('user'))

console.log('userData:',storeDetail);

// remove the element

localStorage.removeItem(userDetail);








