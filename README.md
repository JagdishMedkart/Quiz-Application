### Quiz-Application
Quiz application using normal HTML, CSS, JS.

### Quiz Masters
- Quiz Masters is a quiz platform created for conducting a maths quiz.
- It is created using `HTML`, `CSS` and `Javascript`.

### Project Installation
create a clone of this project on your system using this command:

```
git clone https://github.com/JagdishMedkart/Quiz-Application.git
```

- Now, open the folder, You can see a file called `index.html`, Just click on that file and the project will open in your default browser.
- If you are not able to open it on browser directly by click, then copy the file path and paste it into browser URL.
- Now, you can see the starting page.

### Project Flow

## index.html
2. First you will be able to see starting page with beautiful Gamified UI.
3. Click on the button, "Let's Start the Quiz".

## start.html
1. Now, you can see a prompt asking to set timer limit per question.
2. You can set any one of the given values as timer limit.

## start2.html
1. Once you do that, your quiz will start instantly with each question having time limit as per your selection.
2. On top of question, you can see a progress bar, too.
3. It will keep moving as you go to next questions.
4. If your selected answer is correct, then it will turn green, Otherwise red.
5. If timer reaches 0, then it will automatically go to next question.
6. In case before timer reaches 0, you had selected any answer, that will be considered as your answer for that question and progress bar will also reflect it accordingly.
7. If you hadn't selected any answer, then it is wrong and go to next.
8. When you reach last question, You can see `SUBMIT` button below, click on it (or it will be triggered automatically when timer runs out anyway).

## result.html
1. You can see your number of correct answers and Percentage Score in a circular progress bar.
2. If you scored 100%, then congratulations!!!
3. Otherwise, you can see a button `Check Corrected Answers...`, It will show you all the questions and their corrected answers which you were not able to answer.
4. You can click on `Go Home`, and you will be redirected to `index.html`.

### Javascript Logic
1. **`setTimer`**: sets the timer value to user selected time.
2. **`startingQuiz`**: Initializes different elements and variables, Then it calls showNewQuestion().
3. **`showNewQuestion()`**: Shows the questions and its options below. Also, starts the timer. It calls goNext().
4. **`goNext()`**: Checks selected answer, matches with correct answer and moves next. If timer runs out then also it is triggered. It updates upper progress bar, too.
5. **`tick()`**: It unticks the previously selected options.
6. **`populateResult()`**: It shows full result view with circular progress bar animation. 
7. **`checkAnswers()`**: It manages the view of final correct answers where user made mistake.
8. **`wrongAnswers()`**: It checks if user had any wrong answers, if yes then it creates a button for checking correct answers.
8. **`doCleaning()`**: It clears the localStorage and moves back to home page.