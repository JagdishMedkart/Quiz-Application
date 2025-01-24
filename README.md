# Quiz-Application
Quiz application using normal HTML, CSS, JS

## Quiz Masters
- Quiz Masters is a quiz platform created for conducting a maths quiz.
- It is created using `HTML`, `CSS` and `Javascript`.

## Project Installation
- create a clone of this project on your system using this command:
```
git clone https://github.com/JagdishMedkart/Quiz-Application.git
```

- Now, open the folder, You can see a file called `index.html`, Just click on that file and the project will open in your default browser.
- If you are not able to open it on browser directly by click, then copy the file path and paste it into browser URL.
- Now, you can see the starting page.

## Project Flow

1. index.html
- First you will be able to see starting page with beautiful Gamified UI.
- Click on the button, "Let's Start the Quiz".

2. start.html
- Now, you can see a prompt asking to set timer limit per question.
- You can set any one of the given values as timer limit.

3. start2.html
- Once you do that, your quiz will start instantly with each question having time limit as per your selection.
- On top of question, you can see a progress bar, too.
- It will keep moving as you go to next questions.
- If your selected answer is correct, then it will turn green, Otherwise red.
- If timer reaches 0, then it will automatically go to next question.
- In case before timer reaches 0, you had selected any answer, that will be considered as your answer for that question and progress bar will also reflect it accordingly.
- If you hadn't selected any answer, then it is wrong and go to next.
- When you reach last question, You can see `SUBMIT` button below, click on it (or it will be triggered automatically when timer runs out anyway).

4. result.html
- you can see your number of correct answers and Percentage Score in a circular progress bar.
- If you score 100%, then congratulations!!!
- Otherwise, you can see a button `Check Corrected Answers...`, It will show you all the questions and their corrected answers which you were not able to answer.
- You can click on `Go Home`, and you will be redirected to `index.html`.