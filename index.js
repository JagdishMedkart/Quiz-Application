let count;
let selectedAnswers;
let correctAnswers;
let que = questions;
let bar;
let options;
let ans;
let progressBar;
let ticked;
let pencil;
let timing;
let timer;
let flag = 0;
let selected = 0;
let check = false;


function starting() {
    count = 0;
    selectedAnswers = [];
    correctAnswers = [];
    que = questions;
    if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
        alert("You just reloaded the page, your score is 0 now!");
        window.location.href = "result.html";
    }

    // progress bar container
    bar = document.querySelector(".progress-container").querySelectorAll("li");
    // console.log(bar);

    // option labels
    options = document.getElementById("options").querySelectorAll("label");

    // radio inputs
    ans = document.getElementsByName("ans");
    // console.log(ans);

    // progress bar
    progressbar = document.querySelector(".progress-container .progress-bar").querySelectorAll("div");
    // console.log(progressbar);

    // options div
    ticked = document.getElementById("options").querySelectorAll(".opt");

    // pencil svg
    pencil = document.getElementById("pencil");

    f();
}

function f() {
    const progressBar = document.getElementById("circular-progress");
    // console.log("progress bar = ", progressBar);
    let progressValue = progressBar.querySelector(".percentage");
    // console.log("progress Value = ", progressValue);
    let innerCircle = progressBar.querySelector(".inner-circle");
    // console.log("inner circle = ", innerCircle);
    let startValue = 10;
    let endValue = 0;
    let progressConstant = 360 / (Math.abs(startValue - endValue));
    let speed = 1000;
    let progressColor = progressBar.getAttribute("data-progress-color");

    progressValue.textContent = startValue;
    progressValue.style.color = progressColor;
    progressBar.style.background = `conic-gradient(${progressColor} ${Math.abs(startValue - endValue) * progressConstant}deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;

    timing = setInterval(() => {
        if (startValue !== endValue) {
            startValue--;
            progressValue.textContent = startValue;
            progressBar.style.background = `conic-gradient(${progressColor} ${Math.abs(startValue - endValue) * progressConstant}deg,${progressBar.getAttribute("data-bg-color")} 0deg)`;
        }
        else {
            flag = 1;
            selected = null;
            goNext();
        }
    }, speed);

    localStorage.removeItem("correctAnswers");
    document.getElementById("question").innerHTML = que[count].question;
    for (let i = 0; i < options.length; i++) {
        options[i].innerText = que[count].options[i];
    }
    if (count < 10) {
        bar[count].style.background = "white";
        bar[count].style.border = "1px solid #444";
        bar[count].style.top = "-5px";
    }
}


function goNext() {
    check = false;
    selected = null;
    flag = 1;
    if (count < 10) {
        for (let i = 0; i < ans.length; i++) {
            if (ans[i].checked) {
                selectedAnswers.push(ans[i].value);
                check = ans[i].value === que[count].correct_answer;
                correctAnswers.push(check);
                // console.log(que[count]);
                // console.log("correct = ", que[count].correct_answer);
                // console.log("your answer = ", ans[i].value);
                flag = 1;
                selected = i;
                break;
            }
        }
        if (!flag) {
            alert("please select one option!");
        }
        else {
            if (selected !== null)
                ans[selected].checked = false;
            else {
                correctAnswers.push(check);
                selectedAnswers.push(null);
            }
            if (check) {
                if (count < 9) {
                    bar[count].style.background = "#34eb4c";
                    progressbar[count].style.background = "#34eb4c";
                }
            }
            else {
                bar[count].style.background = "#eb3434";
                if (count < 9)
                    progressbar[count].style.background = "#eb3434";
            }
            if (count < 9) {
                // console.log(pencil);
                progressbar[count].style.width += "11%";
                // console.log(pencil.style.marginLeft);
                pencil.style.marginLeft = `${9 * (count + 1)}%`;
                // console.log(`${Number(10 * count)}%`);
                // console.log(pencil.style.marginLeft);
            }
            count++;
            // console.log(selectedAnswers);
            // console.log(correctAnswers);
            if (count < 10) {
                clearInterval(timing);
                f();
                for (let i = 0; i < ticked.length; i++) {
                    ticked[i].style.background = "white";
                    ticked[i].style.color = "black";
                }
            }
            else {
                let correctCount = 0;
                for (let item of correctAnswers) {
                    correctCount += (item == true);
                    // console.log(correctCount);
                }
                localStorage.correctAnswers = correctCount;
                localStorage.selectedAnswers = selectedAnswers;
                localStorage.correct = Array(correctAnswers);
                window.location.href = "result.html";
            }
        }
    }
}

function tick(num) {
    for (let i = 0; i < ticked.length; i++) {
        ticked[i].style.background = "white";
        ticked[i].style.color = "black";
    }
    ticked[num - 1].style.background = "green";
    ticked[num - 1].style.color = "white";
    ans[num - 1].checked = true;
}


function f1() {
    let correctCount = document.getElementById("correct");
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
    wrongAnswers();
}

let arr = [];

function checkAnswers() {
    for (let i = 0; i < arr.length; i++) {
        let div = document.createElement("div");
        div.className = "que";
        let text = document.createElement("h3");
        text.innerHTML = `${arr[i] + 1}. ` + que[arr[i]].question;
        div.appendChild(text);

        let correct_ans = document.createElement("div");
        correct_ans.className = "opt2";
        let actual_ans = document.createElement("h3");

        let chars = ["a", "b", "c", "d"];
        let ind = -1;

        for (let j = 0; j < chars.length; j++) {
            if (que[arr[i]].correct_answer === chars[j]) {
                ind = j;
                break;
            }
        }

        actual_ans.style.textAlign = "center";

        actual_ans.innerHTML = que[arr[i]].options[ind];
        correct_ans.appendChild(actual_ans);
        answers.appendChild(div);
        answers.appendChild(correct_ans);
    }
}

function wrongAnswers() {
    console.log("correct answers = ", localStorage.correct);
    let correct = localStorage.correct.split(",");
    console.log("my array = ", correct);
    for (let i = 0; i < correct.length; i++) {
        console.log(correct[i]);
        console.log(correct[i] === "true");
        if (correct[i] !== "true") {
            arr.push(i);
        }
    }
    console.log(arr);
    if (arr.length > 0) {
        let answers = document.getElementById("answers");
        // let wrong = document.createElement("h2");
        // wrong.innerHTML = "See Corrected Answers of Your Mistakes...";
        // wrong.style.color = "white";
        // wrong.style.textAlign = "center";
        let wrong = document.createElement("button");
        wrong.className = "btn";
        wrong.onclick = checkAnswers;
        answers.appendChild(wrong);
        wrong.innerText = "See Correct Answers..."
        console.log(answers);
        // for (let i = 0; i < arr.length; i++) {
        //     let div = document.createElement("div");
        //     div.className = "que";
        //     let text = document.createElement("h3");
        //     text.innerHTML = `${arr[i] + 1}. ` + que[arr[i]].question;
        //     div.appendChild(text);

        //     let correct_ans = document.createElement("div");
        //     correct_ans.className = "opt2";
        //     let actual_ans = document.createElement("h3");

        //     let chars = ["a", "b", "c", "d"];
        //     let ind = -1;

        //     for (let j = 0; j < chars.length; j++) {
        //         if (que[arr[i]].correct_answer === chars[j]) {
        //             ind = j;
        //             break;
        //         }
        //     }

        //     actual_ans.style.textAlign = "center";

        //     actual_ans.innerHTML = que[arr[i]].options[ind];
        //     correct_ans.appendChild(actual_ans);
        //     answers.appendChild(div);
        //     answers.appendChild(correct_ans);
        // }
    }
}
