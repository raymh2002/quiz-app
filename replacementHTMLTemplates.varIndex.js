const quizLaunchPageHTML = $(`
<div class="home-page-container">
<header>
    <h1 class="home-page-header-title"> HTML QUIZ APP toad stool</h1>
</header>

<div class="form-start-container">
    <form class="js-form">
        <fieldset>
            <legend class="home-legend"><h2>Test Your HTML Knowledge</h2></legend>
            <input type="submit" id="start-quiz-submit" class="start-quiz-submit" value="Click to Begin!">
        </fieldset>
    </form>
</div>
</div>
`)


const quizQuestionPageHTML = $(`
<div class="quiz-progress-page-container">
<header>
    <div class="quiz-status-container">
        <ul class="quiz-status-display">
            <li class="quiz-status-item">Question Number<div id="js-questionNumber"></div></li>
            <li class="quiz-status-item">Time Count Down<div id="js-questionClockCount"></div></li>
            <li class="quiz-status-item">Score</li>
        </ul>
    </div>
</header>

<div class="question-answer-container">
    <form id="js-questionInProgress">
    <div class="question">Question: ${quizQAObject.questionList[quizQAObject.questionsRenderCount.count].htmlQuestion}</div>
    <ul id="answers-list" class="answers-list">
        <li class="answer-item js-correct-answer">
<!--            li-Answer1-->
<!--            <div>-->
                <input type="radio" id="answer1" name="answer1" value=${quizQAObject.questionList[quizQAObject.questionsRenderCount.count].htmlAnswers[0].isCorrect}  selected=true>
                <label for="answer1">Answer1: ${quizQAObject.questionList[quizQAObject.questionsRenderCount.count].htmlAnswers[0].text}</label>
<!--            </div>-->
        </li>
        <li class="answer-item js-incorrect-answer">
<!--            li-Answer2-->
<!--            <div>-->
                <input type="radio" id="answer2" name="answer2" value=${quizQAObject.questionList[quizQAObject.questionsRenderCount.count].htmlAnswers[1].isCorrect} >
                <label for="answer2">Answer2: ${quizQAObject.questionList[quizQAObject.questionsRenderCount.count].htmlAnswers[1].text}</label>
<!--            </div>-->
        </li>
        <li class="answer-item results-correct-response-item">
<!--            li-Answer3-->
<!--            <div>-->
                <input type="radio" id="answer3" name="answer3" value=${quizQAObject.questionList[quizQAObject.questionsRenderCount.count].htmlAnswers[2].isCorrect} >
                <label for="answer3">Answer3: ${quizQAObject.questionList[quizQAObject.questionsRenderCount.count].htmlAnswers[2].text}</label>
<!--            </div>-->
        </li>
        <li class="answer-item">
<!--            li-Answer4-->
<!--            <div>-->
                <input type="radio" id="answer4" name="answer4" value=${quizQAObject.questionList[quizQAObject.questionsRenderCount.count].htmlAnswers[3].isCorrect} >
                <label for="answer4">Answer4: ${quizQAObject.questionList[quizQAObject.questionsRenderCount.count].htmlAnswers[3].text}</label>
<!--            </div>-->
        </li>
        <li class="next-question">
            <div>
                <input type="submit" id="next-question" name="next-question" value="Next Question">
            </div>
        </li>
    </ul>
    </form>
<footer >
    <div>progress bar</div>
    <div class="quiz-footer-progress-display-container">
    <ul class="quiz-footer-progress-display">
        <li class="quiz-footer-progress-display-item js-correct-answer"></li>
        <li class="quiz-footer-progress-display-item js-incorrect-answer"></li>
        <li class="quiz-footer-progress-display-item"></li>
        <li class="quiz-footer-progress-display-item"></li>
        <li class="quiz-footer-progress-display-item"></li>
        <li class="quiz-footer-progress-display-item"></li>
        <li class="quiz-footer-progress-display-item"></li>
        <li class="quiz-footer-progress-display-item"></li>
        <li class="quiz-footer-progress-display-item"></li>
        <li class="quiz-footer-progress-display-item"></li>
    </ul>
    </div>
</footer>    
</div>
`);

const quizQAPageHeader = $(`
<header>
    <div class="quiz-status-container">
        <ul class="quiz-status-display">
            <li class="quiz-status-item">Question Number<div id="js-questionNumber"></div></li>
            <li class="quiz-status-item">Time Count Down<div id="js-questionClockCount"></div></li>
            <li class="quiz-status-item">Score</li>
        </ul>
    </div>
</header>
`);

const quizQAAnswers = $(`
        <li class="answer-item js-correct-answer">
<!--            li-Answer1-->
<!--            <div>-->
                <input type="radio" id="answer1" name="answer1" value=${quizQAObject.questionList[0].htmlAnswers[0].isCorrect}  selected=true>
                <label for="answer1">Answer1: ${quizQAObject.questionList[0].htmlAnswers[0].text}</label>
<!--            </div>-->
        </li>
`);

const quizResultPageHTML = $(`
<div class="quiz-results-container">
    <h1>Quiz Results</h1>
    <div class="quiz-score">QUIZ SCORE</div>
    <input type="submit" class="retake-quiz" value="Retake Quiz">
    <input type="submit" class="quiz-answer-review" value="Review Answers">
</div>
`);

const quizReviewPageHTML = $(`
<div class="review-container">
    <h1>Quiz Answers Review</h1>
    <input type="submit" class="retake-quiz" id="retake-quiz" value="Retake Quiz">
    <div class="review-items-container">
        <ul class="review-question-response-item">
            <li class="results-question-item">HTML Question</li>
            <li class="results-correct-response-item">Correct Response</li>
            <li class="results-user-response-item js-incorrect-answer">User Response</li>
        </ul>
    </div>
</div>
`);

// const updateSubmitValue = `<input id="next-question" name="next-question" type="submit" value="Finish Quiz">`;
const updateSubmitValue = `Finish Quiz`;