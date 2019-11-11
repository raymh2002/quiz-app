// user stories

// index.html *************
// quiz App should start with the quizLaunch.html page
// selecting "Click to Begin!" (submit) button from the start page should render the quizQuestionPage.html (qQP)
function renderQuizLaunchPage() {
    console.log('`renderQuizLaunchPage` ran');
}

// quizQuestionPage.html (qQP) ************
// qQP should render the current question
// the qQP should allow user to select an answer and get immediate feedback
function renderQuizQuestionPage() {
    console.log('`renderQuizQuestionPage` ran');
    $( "#js-replace-html-wrapper" ).html(quizQuestionPageHTML); // replace html in container on quizLaunchPage.html
    /* when a user clicks on start quiz button */
    }


//      when an answer is selected:
// the qQP should mark the answer selection with a check-mark for correct or x-mark for incorrect
// the qQP should background color the correct answer green and red if incorrect answer
// the qQP should disable all other inputs and enable the "Next Question" (submit) button

//      when "Next Question" (submit) button selected:
// the array question object should be updated with the user selection (selected: true/false)
// the next question should be rendered in the qQP
// when the final question is reached the "Next Question" (submit) button should be replaced with "Complete Quiz" (submit) button and the quizResultPage.html (qRP) page should be rendered


// quizResultPage.html (qRP) ************
// qRP should display the quiz score summary
// qRP should include a "Review Answers" submit button which will render the quizAnswerReview.html (qAR) page
// qRP should include a "Retake Quiz" submit button  >> OR change to ONLY >> "Review Answers" ????
function renderQuizResultPage() {
    console.log('`renderQuizResultPage` ran');
}


// quizReviewPage.html (qRP) ************
// quizReviewPage.html (qRP) page should render 1) HTML Question, 2) Correct Response, 3) User Response
// the User Response should be background color green and check-mark if correct
// the User Response should be background color red and x-mark if incorrect
// the qRP page should include a "Retake Quiz" submit button
// the qRP "Retake Quiz" submit button should:
// reset the user selection (selected: true) to false
// render the qQP page beginning with question 1


function renderQuizReviewPage() {
    console.log('`renderQuizReviewPage` ran');
}



// ^^^^^render pages ^^^^^^

// vvvv event handlers vvvvv

// function handleStartQuizSubmitButton(){ // handles submit button from quizLaunchPage
//     console.log(`handleStartQuizSubmitButton() ran!`)
//     $('#start-quiz-submit').on('click', function(event){
//         event.preventDefault();  // this stops the default form submission behavior
//         console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
//         quizQAObject.questionsRenderCount.resetCounter = 1;
//         console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
//         console.log(`call renderQuizQuestionPage()`);
//         renderQuizQuestionPage();
//         }
//     );

function handleStartQuizSubmitButton(){ // handles submit button from quizLaunchPage
    console.log(`handleStartQuizSubmitButton() ran!`)
    $('#js-replace-html-wrapper').on('click', '#start-quiz-submit', function(event){
            event.preventDefault();  // this stops the default form submission behavior
            console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
            quizQAObject.questionsRenderCount.resetCounter = 1;
            console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
            console.log(`call renderQuizQuestionPage()`);
            renderQuizQuestionPage();
        }
    );

// $('.js-form').on("submit", event => {
//     event.preventDefault();  // this stops the default form submission behavior
//     console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
//     quizQAObject.questionsRenderCount.resetCounter = 1;
//     console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
//     console.log(`call renderQuizQuestionPage()`);
// });
}

function handleNextQuestionSubmitButton() {
    console.log(`handleNextQuestionSubmitButton() ran!`);
    $('#next-question').on("click", event => {
        event.preventDefault();  // this stops the default form submission behavior
        console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
        quizQAObject.questionsRenderCount.count = 1;
        console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
        console.log(`call renderQuizQuestionPage()`);
        renderQuizQuestionPage();
    });
}
// ^^^^ event handlers ^^^^^


function handleQuizApp() {
    renderQuizLaunchPage();
    // renderQuizQuestionPage();
    // renderQuizResultPage();
    // renderQuizReviewPage();
    handleStartQuizSubmitButton();
    handleNextQuestionSubmitButton();
}


$(handleQuizApp);


// $(function () {
//     $('.js-form').submit(event => {
//         event.preventDefault();  // this stops the default form submission behavior
//         console.log(`${quizQAObject.questionsRenderCount.counter}`);
//         quizQAObject.questionsRenderCount.resetCounter = 1;
//         console.log(`${quizQAObject.questionsRenderCount.counter}`);
//     });
// })