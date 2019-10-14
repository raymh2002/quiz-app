// user stories

// index.html *************
// quiz App should start with the index.html page
// selecting "Click to Begin!" (submit) button from the start page should render the quizInProgress.html (qIP)

// quizInProgress.html (qIP) ************
// qIP should render the current question
// the qIP should allow user to select an answer and get immediate feedback

//      when an answer is selected:
// the qIP should mark the answer selection with a check-mark for correct or x-mark for incorrect
// the qIP should background color the correct answer green and red if incorrect answer
// the qIP should disable all other inputs and enable the "Next Question" (submit) button

//      when "Next Question" (submit) button selected:
// the array question object should be updated with the user selection (selected: true/false)
// the next question should be rendered in the qIP
// when the final question is reached the "Next Question" (submit) button should be replaced with "Complete Quiz" (submit) button and the quizResults.html (qR) page should be rendered


// quizResults.html (qR) ************
// qR should display the quiz score summary
// qR should include a "Review Answers" submit button which will render the quizAnswerReview.html (qAR) page
// qR should include a "Retake Quiz" submit button  >> OR change to ONLY >> "Review Answers" ????


// quizAnswerReview.html (qAR) ************
// quizAnswerReview.html (qAR) page should render 1) HTML Question, 2) Correct Response, 3) User Response
// the User Response should be background color green and check-mark if correct
// the User Response should be background color red and x-mark if incorrect
// the qAR page should include a "Retake Quiz" submit button
// the qAR "Retake Quiz" submit button should:
// reset the user selection (selected: true) to false
// render the qIP page beginning with question 1


// quizInProgress
// *** these 3 below have been confirmed to all work to render the defined styling  ***
// *** I have commented them out below and have uncommented the corresponding css styling entries in index.css ***
// *** .js-correct-answer ***
    // $(".js-correct-answer").css({'list-style-image': 'url("./images/Check/Check_16x16.png")',  'background-color': 'lawngreen'})
// *** .js-incorrect-answer ***
    // $(".js-incorrect-answer").css({'list-style-image': 'url("./images/Delete/Delete_16x16.png")', 'background-color': 'red'})
// *** .results-correct-response-item ***
    // $(".results-correct-response-item").css({'list-style-image': 'url("./images/Arrow/Arrow_16x16.png")'})

// *** js to trigger select of input radio button ***
$(function () {
    $(".answers-list").on("click", function () {

    })
})


