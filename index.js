// user stories

// index.html *************
// quiz App should start with the quizLaunch.html page
// selecting "Click to Begin!" (submit) button from the start page should render the quizQuestionPage.html (qQP)
function renderQuizLaunchPage() {
    console.log('`renderQuizLaunchPage` ran');
    quizQAObject.questionsRenderCount.resetCounter = 0;
    console.log((`page counter = ${quizQAObject.questionsRenderCount.count + 1}`));
    $("#js-replace-html-wrapper").html(quizLaunchPageHTML);
}

// quizQuestionPage.html (qQP) ************
// qQP should render the current question
// the qQP should allow user to select an answer and get immediate feedback
function renderQuizQuestionPage() {
    console.log(`'renderQuizQuestionPage ran'`);
    // console.log(`timer.timerValue = ${timer.getTimerValue}`)
    let counter = quizQAObject.questionsRenderCount.count + 1; //define variable counter using getter and add 1 to getter value
    // clearTimeout(processQuestionTimer);
    // setTimeout(processQuestionTimer,1000);
    console.log(`PRIOR TO EVALUATION >> isTimerRunning === ${timer.getIsTimerRunning}`)
    if (timer.getIsTimerRunning === true){ // use getter to pull status flag value to evaluate if there is a timer instance running
        window.clearTimeout(timeoutID); // if timer instance currently running as per flag value then kill current timer instance
        timer.setIsTimerRunning = false; // use setter to set timer status flag to false to indicate timeoutID process not running
        timer.resetTimerValue = 10; //use setter to set timer value to 10
        console.log(`AFTER IF EVALUATION "TRUE" >> isTimerRunning === ${timer.getIsTimerRunning}`);
        console.log(`AFTER EVALUATION IF STATEMENT !TRUE >> getTimerValue === ${timer.getTimerValue}`);
    }
    console.log(`AFTER EVALUATION IF STATEMENT !TRUE >> isTimerRunning === ${timer.getIsTimerRunning}`);
    console.log(`AFTER EVALUATION IF STATEMENT !TRUE >> getTimerValue === ${timer.getTimerValue}`);

    timeoutID=window.setTimeout("processQuestionTimer();",1000); // call .setTimeout() method and assign process ID to timeoutID
    timer.setIsTimerRunning = true; // use setter to set isTimer running status flag to true to indicate timer is running
    console.log(`AFTER CALLING setTimeout("processQuestionTimer();" & setter timer.setIsTimerRunning >> isTimerRunning === ${timer.getIsTimerRunning}`)

    if(counter === 10) {
        $( "#js-replace-html-wrapper" ).html(quizQuestionPageHTML());
        $("#next-question").val(updateSubmitValue);
    }else {
        console.log(quizQuestionPageHTML());
        $( "#js-replace-html-wrapper" ).html(quizQuestionPageHTML()); // replace html in container on quizLaunchPage.html
    }
    $('#js-questionNumber').text(counter);
    quizQAObject.questionsRenderCount.count=1; // getter increments the counter by 1
    /* when a user clicks on next question button */
    }
// question timer function vvvv

function processQuestionTimer() {  //this function gets/sets the value for the question clock
    let questionCountClock = timer.getTimerValue; // use getter timer.timerValue to get timerValue for the countdown

    console.log(`processQuestionTimer() ran - startTime = ${questionCountClock}`);
    // console.log(`questionCountClock = ${questionCountClock}`);

    $("#js-questionClockCount").text(questionCountClock); //update clock counter on question page
    if (questionCountClock === 0){
        // console.log(`questionClockCount === ${questionCountClock}`);
        // console.log(`autoAnswer() ran!!`);

        // clearTimeout(processQuestionTimer);
        window.clearTimeout(timeoutID);
        timer.setIsTimerRunning = false;
        timer.resetTimerValue = 10;
        console.log(`INSIDE processQuestionTimer() IF questionCountClock === 0 EVALUATION >> isTimerRunning === ${timer.getIsTimerRunning}`);
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
        this.timerValue = reset; // reset counter to value passed in default ===10
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
    // handleNextQuestionSubmitButton(); // uncomment this when the handleSelectAnswer() function is complete and new submit button html created
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

// commenting this code to create submit to handle checked and correct answer logic
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
        if (quizQAObject.questionsRenderCount.count <= 10) { // uncomment when code to create submit to handle checked and correct answer logic completed
            renderQuizQuestionPage();   // uncomment when code to create submit to handle checked and correct answer logic completed
        } else{   // uncomment when code to create submit to handle checked and correct answer logic completed
            renderQuizResultPage();   // uncomment when code to create submit to handle checked and correct answer logic completed
        }   // uncomment when code to create submit to handle checked and correct answer logic completed
});
}

function handleSelectAnswer() {

    // $('#js-replace-html-wrapper').on('click','.js-input',function (event) {  // comment this targeting .js-input to create target submit event
    // $('#js-replace-html-wrapper').on('submit','#js-questionInProgress',function (event) {
    $('#js-replace-html-wrapper').on('submit','#js-questionInProgress',function (event) {
            event.preventDefault();  //prevent default submit action but needs to be commented for .on('click') event
            event.stopPropagation();
            const radioListInputs = $("li"); // create const containing all list items in container
            const isCorrectAnswer = radioListInputs.has("input[value='true']"); // create const containing the correct answer list item
            const isSelected = radioListInputs.has($("input:checked")); //create const containing the input:checked list item

        if ($(isCorrectAnswer).attr("id") === $(isSelected).attr("id")) {
            console.log($(isCorrectAnswer).prop("id"));
            console.log($(isSelected).prop("id"));
            isCorrectAnswer.css("background-color", "purple"); // change background color of correct answer list item
        } else {
            isCorrectAnswer.css("background-color", "blue"); // change background color of selected list item
            isSelected.css("background-color", "gray"); // change background color of selected list item
        }



        })
}

// ^^^^ event handlers ^^^^^


function handleQuizApp() {
    renderQuizLaunchPage();
    // renderQuizQuestionPage();
    // renderQuizResultPage();
    // renderQuizReviewPage();
    handleStartQuizSubmitButton(); //loads first question page and calls handleNextQuestionSubmitButton();
    handleSelectAnswer();
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