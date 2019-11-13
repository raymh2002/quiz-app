// user stories

// index.html *************
// quiz App should start with the quizLaunch.html page
// selecting "Click to Begin!" (submit) button from the start page should render the quizQuestionPage.html (qQP)
function renderQuizLaunchPage() {
    console.log('`renderQuizLaunchPage` ran');
    quizQAObject.questionsRenderCount.resetCounter = 1;
    console.log((`counter = ${quizQAObject.questionsRenderCount.count}`));
    $("#js-replace-html-wrapper").html(quizLaunchPageHTML);
}

// quizQuestionPage.html (qQP) ************
// qQP should render the current question
// the qQP should allow user to select an answer and get immediate feedback
function renderQuizQuestionPage() {
    console.log(`'renderQuizQuestionPage ran'`);
    // console.log(`timer.timerValue = ${timer.getTimerValue}`)
    let counter = quizQAObject.questionsRenderCount.count;
    // clearTimeout(processQuestionTimer);
    // setTimeout(processQuestionTimer,1000);
    console.log(`PRIOR TO EVALUATION >> isTimerRunning === ${timer.getIsTimerRunning}`)
    if (timer.getIsTimerRunning === true){
        window.clearTimeout(timeoutID);
        timer.setIsTimerRunning = false;
        timer.resetTimerValue = 9;
        console.log(`AFTER IF EVALUATION "TRUE" >> isTimerRunning === ${timer.getIsTimerRunning}`);
        console.log(`AFTER EVALUATION IF STATEMENT !TRUE >> getTimerValue === ${timer.getTimerValue}`);
    }
    console.log(`AFTER EVALUATION IF STATEMENT !TRUE >> isTimerRunning === ${timer.getIsTimerRunning}`);
    console.log(`AFTER EVALUATION IF STATEMENT !TRUE >> getTimerValue === ${timer.getTimerValue}`);

    timeoutID=window.setTimeout("processQuestionTimer();",2000);
    timer.setIsTimerRunning = true;
    console.log(`AFTER CALLING setTimeout("processQuestionTimer();" & setter timer.setIsTimerRunning >> isTimerRunning === ${timer.getIsTimerRunning}`)

    if(counter === 10) {
        $( "#js-replace-html-wrapper" ).html(quizQuestionPageHTML);
        $("#next-question").val(updateSubmitValue);
    }else {
        $( "#js-replace-html-wrapper" ).html(quizQuestionPageHTML); // replace html in container on quizLaunchPage.html
    }
    $('#js-questionNumber').text(counter);
    quizQAObject.questionsRenderCount.count=1;
    /* when a user clicks on next question button */
    }
// question timer function vvvv

function processQuestionTimer() {
    let questionCountClock = timer.getTimerValue; // get timer.timerValue

    console.log(`processQuestionTimer() ran - startTime = ${questionCountClock}`);
    // console.log(`questionCountClock = ${questionCountClock}`);

    $("#js-questionClockCount").text(questionCountClock);
    if (questionCountClock === 0){
        // console.log(`questionClockCount === ${questionCountClock}`);
        // console.log(`autoAnswer() ran!!`);

        // clearTimeout(processQuestionTimer);
        window.clearTimeout(timeoutID);
        timer.setIsTimerRunning = false;
        timer.resetTimerValue = 7;
        console.log(`INSIDE processQuestionTimer() IF questionCountClock === 0 EVALUATION >> isTimerRunning === ${timer.getIsTimerRunning}`)
        console.log(`INSIDE processQuestionTimer() IF questionCountClock === 0 EVALUATION >> getTimerValue === ${timer.getTimerValue}`);
    } else {
        // setTimer--;
        // console.log(`questionClockCount === ${questionCountClock}`);
        timer.setTimerValue = 1; // decrement timer.timerValue by 1
        // setTimeout(processQuestionTimer,1000);
        timeoutID=window.setTimeout("processQuestionTimer();",2000);
    }
}
// vvv create object for let timerCount = 15 & create getter / setter for setTimer vvvv


let timer = {
    timerValue: 5,
    get getTimerValue() { return this.timerValue; },
    set setTimerValue(next) {
        this.timerValue -= next; // decrement counter
    },
    set resetTimerValue(reset){
        this.timerValue = reset; // reset counter to 10
    },
    isTimerRunning: false,
    get getIsTimerRunning() {return this.isTimerRunning;},
    set setIsTimerRunning(status) {
        this.isTimerRunning = status;
    }
}


// ^^^ create object for let timerCount = 15 & create getter / setter for setTimer ^^^^^


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
    $( "#js-replace-html-wrapper" ).html(quizResultPageHTML); // replace html in container on quizLaunchPage.html
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
            event.stopPropagation();
            console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
            // quizQAObject.questionsRenderCount.resetCounter = 1;
            console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
            console.log(`call renderQuizQuestionPage()`);
            renderQuizQuestionPage();
            handleNextQuestionSubmitButton();
        }
    );

// $('.js-form').on("submit", event => {
//     event.preventDefault();  // this stops the default form submission behavior
//         event.stopPropagation();
//     console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
//     quizQAObject.questionsRenderCount.resetCounter = 1;
//     console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
//     console.log(`call renderQuizQuestionPage()`);
// });
}

// function handleNextQuestionSubmitButton() {
//     console.log(`handleNextQuestionSubmitButton() ran!`);
//     $('#next-question').on("click", event => {
//         event.preventDefault();  // this stops the default form submission behavior
//         console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
//         quizQAObject.questionsRenderCount.count = 1;
//         console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
//         console.log(`call renderQuizQuestionPage()`);
//         renderQuizQuestionPage();
//     });
// }


function handleNextQuestionSubmitButton() {
    // console.log(`handleNextQuestionSubmitButton() ran!`);
    // $('#next-question').on("click", event => {
    //     event.preventDefault();  // this stops the default form submission behavior
    //     event.stopPropagation();
    //     console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
    //     quizQAObject.questionsRenderCount.count = 1;
    //     console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
    //     console.log(`call renderQuizQuestionPage()`);
    //     renderQuizQuestionPage();
    // });
    $('#js-replace-html-wrapper').on('click', '#next-question',function (event) {
        event.preventDefault();
        event.stopPropagation();
        // window.clearTimeout(timeoutID);
        // clearTimeout(processQuestionTimer);
        if (quizQAObject.questionsRenderCount.count <= 10) {
            // clearTimeout(processQuestionTimer);
            renderQuizQuestionPage();
        } else{
            // quizQAObject.questionsRenderCount.countReset = 1;
            renderQuizResultPage();
        }
});
}

// ^^^^ event handlers ^^^^^


function handleQuizApp() {
    renderQuizLaunchPage();
    // renderQuizQuestionPage();
    // renderQuizResultPage();
    // renderQuizReviewPage();
    handleStartQuizSubmitButton();
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