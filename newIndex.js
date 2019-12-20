// user stories

// index.html *************
// quiz App should start with the quizLaunch.html page
// selecting "Click to Begin!" (submit) button from the start page should render the quizQuestionPage.html (qQP)
function renderQuizLaunchPage() {
    // console.log('`renderQuizLaunchPage` ran'); //console function run check
    quizQAObject.questionsRenderCount.resetCounter = 0; // setter to reset the counter to zero
    $("#js-replace-html-wrapper").html(quizLaunchPageHTML); //insert html defined in replacementHTMLTemplates.js file
}

// quizQuestionPage.html (qQP) ************
// qQP should render the current question
// the qQP should allow user to select an answer and get immediate feedback


function renderQuizQuestionPage() {
    console.log(`'renderQuizQuestionPage ran'`); // console function run check
    // console.log(`timer.timerValue = ${timer.getTimerValue}`)
    let counter = quizQAObject.questionsRenderCount.count + 1; //define variable counter using getter and add 1 to getter value
    // console.log(`PRIOR TO EVALUATION >> isTimerRunning === ${timer.getIsTimerRunning}`)
    // if (timer.getIsTimerRunning === true){ // use getter to pull status flag value to evaluate if there is a timer instance running in processQuestionTimer()
    //     window.clearTimeout(timeoutID); // if timer instance currently running as per flag value then kill current timer instance
    //     timer.setIsTimerRunning = false; // use setter to set timer status flag to false to indicate timeoutID process not running
    //     timer.resetTimerValue = 5; //use setter to set timer value to 10
    // }
    // console.log(`AFTER EVALUATION IF STATEMENT !TRUE >> isTimerRunning === ${timer.getIsTimerRunning}`);
    // console.log(`AFTER EVALUATION IF STATEMENT !TRUE >> getTimerValue === ${timer.getTimerValue}`);

    // timeoutID=window.setTimeout("processQuestionTimer();",1000); // call .setTimeout() method and assign process ID to timeoutID
    // timer.setIsTimerRunning = true; // use setter to set isTimer running status flag to true to indicate timer is running
    // console.log(`AFTER CALLING setTimeout("processQuestionTimer();" & setter timer.setIsTimerRunning >> isTimerRunning === ${timer.getIsTimerRunning}`)

    $( "#js-replace-html-wrapper" ).html(quizQuestionPageHTML()); // refactored this >> moved above conditional and single statement

    $('#submit-answer').attr("disabled", true); //disable the submit answer button
    // $('#submit-answer').prop("disabled"); //disable the submit answer button
    // $('#submit-answer').css("background-color", "red");

    if(counter === 10) {
        // $( "#js-replace-html-wrapper" ).html(quizQuestionPageHTML()); // refactored this >> moved above conditional and single statement
        $("#next-question").val(`Finish Quiz`); // this updates the input:submit value >> to be replaced by "js-formSubmitButton-container"

    }else {
        // console.log(quizQuestionPageHTML());
        // $( "#js-replace-html-wrapper" ).html(quizQuestionPageHTML()); // refactored this >> moved above conditional and single statement// replace html in container on quizLaunchPage.html
    }
    $('#js-questionNumber').text(counter);
    quizQAObject.questionsRenderCount.count=1; // getter increments the counter by 1
    /* when a user clicks on next question button */
    processQuestionTimer();
    }
// question timer function vvvv
// note: this can and should be replaced using a closure for questionCountClock !!!!!

function processQuestionTimer() {  //this function gets/sets the value for the question clock
    var clock= 5;
// debugger;
    timeoutID=this.setTimeout(function countDown() {
        // debugger
        $('#js-questionClockCount').text(clock); //update clock counter on question page
        debugger;
        console.log(`countDown clock = ${clock}`);

        if (clock === 0) {
            window.clearTimeout(timeoutID);
        } else {
            // debugger;
            clock -= 1;
            debugger;
        }
        // debugger;
    }, 2000);
    // timeoutID=window.setTimeout(countDown(),2000);
    // var timeoutID=window.processQuestionTimer.setTimeout("countDown(clock);",2000);
// debugger;
    }

    //
    // let questionCountClock = timer.getTimerValue; // use getter timer.timerValue to get timerValue for the countdown
    //
    // console.log(`processQuestionTimer() ran - startTime = ${questionCountClock}`);
    // // console.log(`questionCountClock = ${questionCountClock}`);
    //
    // $("#js-questionClockCount").text(questionCountClock); //update clock counter on question page
    // if (questionCountClock === 0){
    //     // console.log(`questionClockCount === ${questionCountClock}`);
    //     // console.log(`autoAnswer() ran!!`);
    //
    //     // clearTimeout(processQuestionTimer);
    //     window.clearTimeout(timeoutID);
    //     timer.setIsTimerRunning = false;
    //     timer.resetTimerValue = 10;
    //     // console.log(`INSIDE processQuestionTimer() IF questionCountClock === 0 EVALUATION >> isTimerRunning === ${timer.getIsTimerRunning}`);
    //     // console.log(`INSIDE processQuestionTimer() IF questionCountClock === 0 EVALUATION >> getTimerValue === ${timer.getTimerValue}`);
    // } else {
    //     // setTimer--;
    //     // console.log(`questionClockCount === ${questionCountClock}`);
    //     timer.setTimerValue = 1; // decrement timer.timerValue by 1
    //     // setTimeout(processQuestionTimer,1000);
    //     timeoutID=window.setTimeout("processQuestionTimer();",2000);
    // }
// }
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
            // console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
            // quizQAObject.questionsRenderCount.resetCounter = 1;
            // console.log(`Count: ${quizQAObject.questionsRenderCount.counter}`);
            // console.log(`call renderQuizQuestionPage()`);
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

function handleAnswerFocus() {
    console.log(`handleAnswerFocus ran`) ;
    // $('#js-replace-html-wrapper').on('focus', '.js-input', function (event) {
        $('#js-replace-html-wrapper').on('focus', '.answer-item', function (event) {
            event.stopPropagation();
            console.log(`inside .on('focus') ran!!!`);
            // $(this).parent().trigger('mouseover');

            // $( "#new" ).click(function() {
            //     $( "input" ).triggerHandler( "focus" );
            // });
            console.log($(this));
            console.log($(this).children(":first-child"));
            $(this).css("background-color", "rust");
            $(this).children(":first-child").select();
            // console.log($(this).parent());
            // $(this).parent().attr("hover-answer", "focus");

            // $(this).parent().focus(); // this works to highlight list items but will not select the radio buttons
            // $(this).parent().hover();


            // $(this).parent().trigger("onmouseover");
            // const targetListItem = $(this).parent();

            // $(targetListItem).trigger("hover");

            // $(this).parent().triggerHandler('hover');
            // console.log($(this).parent());
            // console.log(`targetListItem: ${targetListItem}`);
            // console.log(`$(this).parent: ${$(this).parent()}`)
            //     console.log(`handleAnswerFocus focus event fired!!`);
            //     console.log($(this));
            //     const radioInputs = $('.js-input');
            //     console.log(radioInputs);
            //     const focusedRadioInput = radioInputs.has('.js-input:checked');
            //     console.log(`focusedRadioInput = ${$(focusedRadioInput).val()}`);
            //      const focusedListItem = $(this).parent();
            //      console.log(`focused radio button: ${focusedListItem}`);
            //      // const parentLi = $('focusedRadioInput').parent');
            // // .triggerHandler( "focus" )
            //      focusedListItem.trigger( "hover" );
        });
    }

// $( "#other" ).click(function() {
//     $( "#target" ).focus();
// });

function handleSelectAnswer() {

    // $('#js-replace-html-wrapper').on('click','.js-input',function (event) {  // comment this targeting .js-input to create target submit event
        $('#js-replace-html-wrapper').on('focus','.answer-item',function (event) {  // comment this targeting .js-input to create target submit event        event.stopPropagation();
        $('#submit-answer').attr('disabled', false);//   toggle the disabled Submit Answer button to enabled
        $('#submit-answer').addClass('hover-submit'); // add hover to the "Submit Answer" button

    // $('#js-replace-html-wrapper').on('submit','#js-questionInProgress',function (event) {
    // $('#js-replace-html-wrapper').on('submit','#js-questionInProgress',function (event) {


        // event.preventDefault();  //prevent default submit action but needs to be commented for .on('click') event
        // event.stopPropagation();
        // const radioListInputs = $("li"); // create const containing all list items in container
        // const isCorrectAnswer = radioListInputs.has("input[value='true']"); // create const containing the correct answer list item
        // const isSelected = radioListInputs.has($("input:checked")); //create const containing the input:checked list item
        //
        // if ($(isCorrectAnswer).attr("id") === $(isSelected).attr("id")) {
        //     console.log($(isCorrectAnswer).prop("id"));
        //     console.log($(isSelected).prop("id"));
        //     isCorrectAnswer.css("background-color", "purple"); // change background color of correct answer list item
        // } else {
        //     isCorrectAnswer.css("background-color", "blue"); // change background color of selected list item
        //     isSelected.css("background-color", "gray"); // change background color of selected list item
        // }
        // $('js-formSubmitButton-container').html(submitNextQuestion); //changes the form:submit button from "Submit-Answer"to "Next-Question"
    })
}


function handleSubmitAnswerButton() {

    // $('#js-replace-html-wrapper').on('click','.js-input',function (event) {  // comment this targeting .js-input to create target submit event
    // $('#js-replace-html-wrapper').on('submit','#js-questionInProgress',function (event) {
    $('#js-replace-html-wrapper').on('submit','#js-questionInProgress',function (event) { //submit event on form id=js-questionInProgress
            event.preventDefault();  //prevent default submit action but needs to be commented for .on('click') event
            event.stopPropagation();
            const radioListInputs = $("li"); // create const containing all list items in container
            const radioInputButtons = $("input[name='answer']");
            const selectedRadioInputButton = ('radioInputButtonsh:checked');
            const isCorrectAnswer = radioListInputs.has("input[value='true']"); // create const containing the correct answer list item
      console.log(isCorrectAnswer)  ;
            const isSelected = radioListInputs.has($("input:checked")); //create const containing the input:checked list item
        console.log(isSelected);
// debugger;
        // radioListInputs.toggleClass("answer-item:hover"); // note: this kills and background color!!! disable cursor pointer on answer list items

        if ($(isCorrectAnswer).attr("id") === $(isSelected).attr("id")) {
            console.log($(isCorrectAnswer).prop("id"));
            console.log($(isSelected).prop("id"));
            isCorrectAnswer.css("background-color", "limegreen"); // change background color of correct answer list item
        } else {
            isCorrectAnswer.css("background-color", "blue"); // change background color of selected list item
            isSelected.css("background-color", "gray"); // change background color of selected list item
        }
        $('#js-formSubmitButton-container').html(submitNextQuestion); //changes the form:submit button from "Submit-Answer"to "Next-Question"
        $('#next-question').addClass("hover-submit");// enable cursor pointer on  Answer button

        $('.js-input').attr('disabled', true); // disable radio buttons
        $('.hover-answer').removeClass("hover-answer");
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
    handleSubmitAnswerButton();
    handleNextQuestionSubmitButton();
    handleAnswerFocus();
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