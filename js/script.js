{
    const showResult = (sum, result) => {
        const resultElement = document.querySelector(".js-result");
        resultElement.value = `${sum} ZŁ = ${result.toFixed(2)} EURO`;
    }

    const onFormSubmit = (event) => {
        event.preventDefault();

        const courseElement = document.querySelector(".js-course");
        const sumElement = document.querySelector(".js-sum");

        const course = courseElement.value;
        const sum = sumElement.value;

        let result = sum / course;
        showResult(sum, result);
    };

    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}
