const buttonContainer = document.querySelector(".button-container");
let adviceText = document.querySelector(".advice");
let loadingText = document.querySelector(".loading");
let adviceNumberText = document.querySelector(".advice-number");

buttonContainer.addEventListener("click", () => {
     buttonContainer.style.pointerEvents = "none";
     loadingText.style.visibility = "visible";

    fetch('https://api.adviceslip.com/advice')
        .then(response => {
            if (!response.ok) {
                throw new Error('Something went wrong');
            }
            let advice = response.json();
            
            
            return  advice;
        })
        .then(data => {
            adviceText.textContent = `"${data.slip.advice}"`
            adviceNumberText.textContent = `ADVICE #${data.slip.id}`
            console.log(data.slip.advice);
        })
        .catch(error => {
            console.error(error);
        })
        .finally(() => {
            loadingText.style.visibility = "hidden";
            buttonContainer.style.pointerEvents = "auto"; 
        });
})

