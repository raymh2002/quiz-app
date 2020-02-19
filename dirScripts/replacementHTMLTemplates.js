// Note: using constants to define the path to quizQAObject entries



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
`);


let quizQuestionPageHTML = function () {
    const question = quizQAObject.questionList[quizQAObject.questionsRenderCount.nextQuestionNumber]; //using count getter to pull counter value
    const answer1 = question.htmlAnswers[0];
    const answer2 = question.htmlAnswers[1];
    const answer3 = question.htmlAnswers[2];
    const answer4 = question.htmlAnswers[3];
    // define variable to return to calling function renderQuizQuestionPage() vvvvvv
const returnHTML = $(`                       
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
    <div class="question">Question: ${question.htmlQuestion}</div>
    <ul id="answers-list" class="answers-list">
        <li tabindex="1" class="answer-item hover-answer" id="li-answer1">  <!--js-correct-answer css class (removed & commented out for js css manipulation)-->
<!--            li-Answer1-->
<!--            <div>-->
                <input   type="radio" id="answer1" name="answer" value=${answer1.isCorrect} required class="js-input hover-answer"> 
                <label for="answer1" class="hover-answer">Answer1: ${answer1.text}</label>
<!--            </div>-->
        </li>
        <li tabindex="2" class="answer-item hover-answer" id="li-answer2"> <!--  js-incorrect-answer css class (removed & commented out for js css manipulation)-->
<!--            li-Answer2-->
<!--            <div>-->
                <input   type="radio" id="answer2" name="answer" value=${answer2.isCorrect} class="js-input hover-answer">
                <label for="answer2" class="hover-answer">Answer2: ${answer2.text}</label>
<!--            </div>-->
        </li>
        <li tabindex="3" class="answer-item hover-answer" id="li-answer3"> <!-- results-correct-response-item css class (removed & commented out for js css manipulation)--> 
<!--            li-Answer3-->
<!--            <div>-->
                <input   type="radio" id="answer3" name="answer" value=${answer3.isCorrect} class="js-input hover-answer">
                <label for="answer3" class="hover-answer">Answer3: ${answer3.text}</label>
<!--            </div>-->
        </li>
        <li tabindex="4" class="answer-item hover-answer" id="li-answer4">
<!--            li-Answer4-->
<!--            <div>-->
                <input   type="radio" id="answer4" name="answer" value=${answer4.isCorrect} class="js-input hover-answer">
                <label for="answer4" class="hover-answer">Answer4: ${answer4.text}</label>
<!--            </div>-->
        </li>
        <li id="js-formSubmitButton-container" class="next-question">
            <div>
                <input type="submit" id="submit-answer" name="submit-answer" value="Submit Answer" >
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
    return returnHTML;
};


const submitAnswerButton = $(`
            <div>
                <input type="submit" id="submit-answer" name="submit-answer" value="submit-answer">
            </div>
`);

const submitNextQuestion = $(`
            <div>
                <input type="submit" id="next-question" class="hover-submit" name="next-question" value="Next Question">
            </div>
`);

// const updateSubmitValue = `<input id="next-question" name="next-question" type="submit" value="Finish Quiz">`;
const updateSubmitValue = `Finish Quiz`;




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

