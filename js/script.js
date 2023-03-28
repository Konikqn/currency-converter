let courseElement = document.querySelector(".js-course");
let sumElement = document.querySelector(".js-sum");
let formElement = document.querySelector(".js-form");
let resultElement = document.querySelector(".js-result");

formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    let course = courseElement.value;
    let sum = sumElement.value;

    let result = sum / course;

    resultElement.value = `${sum} ZŁ = ${result.toFixed(2)} EURO`;
});

