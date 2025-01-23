function f1() {
    let correctCount = document.getElementById("correct")
    if (localStorage.getItem("correctAnswers")) {
        correctCount.innerHTML += localStorage.correctAnswers;
    }
    else correctCount.innerHTML += 0;

    const progressBar = document.getElementById("circular-progress");
    console.log("progress bar = ", progressBar);
    let progressValue = progressBar.querySelector(".percentage");
    console.log("progress Value = ", progressValue);
    let innerCircle = progressBar.querySelector(".inner-circle");
    console.log("inner circle = ", innerCircle);
    let startValue = 0;
    let endValue = 0;

    if (localStorage.getItem("correctAnswers"))
        endValue = (parseInt(localStorage.correctAnswers) * 10);
    if (endValue == undefined) {
        endValue = 0;
    }
    console.log(endValue);

    let speed = 50;
    let progressColor = progressBar.getAttribute("data-progress-color");
    progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6}deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
    progressValue.textContent = `${startValue}%`;
    progressValue.style.color = "#6b5b95";
    progressValue.style.fontSize = "1.5rem";
    progressBar.style.width = "10rem";
    progressBar.style.height = "10rem";
    innerCircle.style.width = "8rem";
    innerCircle.style.height = "8rem";

    let timer = setInterval(() => {
        if (startValue !== endValue) {
            startValue++;
            progressValue.textContent = `${startValue}%`;
            progressBar.style.background = `conic-gradient(${progressColor} ${startValue * 3.6}deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
        }
        else {
            clearInterval(timer);
        }
    }, speed);
}