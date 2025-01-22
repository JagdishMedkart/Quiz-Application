// let count = 0;
// let selectedAnswers = [];
// let correctAnswers = [];
// let que = questions;
// console.log(que);
// console.log(count);

// let options = document.getElementById("options").querySelectorAll("label");
// let ans = document.getElementsByName("ans");
// console.log(ans);
function f() {
    document.getElementById("question").innerHTML = que[count].question;
    for (let i = 0; i < options.length; i++) {
        options[i].innerHTML = que[count].options[i];
    }
}
function goNext() {
    let flag = 0;
    let selected = 0;
    if (count < 10) {
        for (let i = 0; i < ans.length; i++) {
            if (ans[i].checked) {
                selectedAnswers.push(ans[i].value);
                correctAnswers.push(ans[i].value === que[count].correct_answer);
                console.log(que[count]);
                console.log("correct = ", que[count].correct_answer);
                console.log("your answer = ", ans[i].value);
                flag = 1;
                selected = i;
                break;
            }
        }
        if (!flag) {
            alert("please select one option!");
        }
        else {
            ans[selected].checked = false;
            count++;
            console.log(selectedAnswers);
            console.log(correctAnswers);
            if (count < 10)
                f();
            else {
                window.location = "";
            }
        }
    }
}