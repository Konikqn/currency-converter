{
    const onFormSubmit = (event) => {
            event.preventDefault();
            
            const courseElement = document.querySelector(".js-course");
            const sumElement = document.querySelector(".js-sum");
            const resultElement = document.querySelector(".js-result");

            const course = courseElement.value;
            const sum = sumElement.value;

            let result = sum / course;

            resultElement.value = `${sum} ZŁ = ${result.toFixed(2)} EURO`;
        };
    
    const init = () => {
        const formElement = document.querySelector(".js-form");

        formElement.addEventListener("submit", onFormSubmit);
    }
    init();
}
