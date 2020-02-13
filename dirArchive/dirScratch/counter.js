
const snorkleObj = {
    timeoutID: false,
    clockStartValue:3,
    questionNumber:1
};

$(processQuestionTimer);

function processQuestionTimer() {  //this function gets/sets the value for the question snorkleObj.clockStartValue
// debugger;
    let clockCount=snorkleObj.clockStartValue;
    // console.log(snorkleObj.timeoutID);
    if (snorkleObj.timeoutID!== false){
        window.clearInterval(snorkleObj.timeoutID);
        clockCount=3;
    }
// debugger;
     snorkleObj.timeoutID=window.setInterval(function counterFunction() {
        // debugger;
        $('#js-questionClockCount').text(clockCount); //update clockCount counter on question page
        // debugger;
        $('#js-questionNumber').text(snorkleObj.questionNumber) ; //update snorkleObj.questionNumber on question page
        // debugger;

        if (clockCount === 0) {
        // debugger;
            window.clearInterval(snorkleObj.timeoutID);
            snorkleObj.timeoutID=false;
            debugger;
            // clockCount=3;
            if (snorkleObj.questionNumber < 3){
                clockCount=3;
                snorkleObj.questionNumber += 1;
                processQuestionTimer();
            } else {
                // debugger
                $('#js-questionClockCount').text(clockCount); //update clockCount counter on question page
                $('#js-questionClockCount, #js-questionNumber').css("background-color", "orange");
                $('#js-questionNumber').text("ROUNDS GOING OUT!!");
                // alert("ROUNDS COMPLETE, FIRE ANOTHER SALVO!!!");
                snorkleObj.questionNumber=1; // reset to 1 upon acknowledgement of alert
                // debugger;
                // processQuestionTimer(); // restart timer and reset questionNumber
            }
        // debugger;
        } else {
            // debugger;
            clockCount -= 1;
            // debugger;
        }
        // debugger;
    }, 1000);
    // timeoutID=window.setTimeout(clockCount(),2000);
    // var timeoutID=window.processQuestionTimer.setTimeout("clockCount(clockCount);",2000);
// debugger;
}


// function processQuestionTimer() {  //this function gets/sets the value for the question snorkleObj.clockCount
// // debugger;
//     console.log(snorkleObj.timeoutID);
//     if (snorkleObj.timeoutID!== false){
//         window.clearInterval(snorkleObj.timeoutID);
//         snorkleObj.clockCount=5;
//     }
// // debugger;
//     snorkleObj.timeoutID=window.setInterval(function clockCount() {
//         // debugger;
//         $('#js-questionClockCount').text(snorkleObj.clockCount); //update snorkleObj.clockCount counter on question page
//         // debugger;
//         $('#js-questionNumber').text(snorkleObj.counter) ; //update snorkleObj.counter on question page
//         // debugger;
//
//         if (snorkleObj.clockCount === 0) {
//             // debugger;
//             window.clearInterval(snorkleObj.timeoutID);
//             snorkleObj.timeoutID=false;
//             snorkleObj.clockCount=3;
//             if (snorkleObj.counter < 6){
//                 snorkleObj.counter += 1;
//                 processQuestionTimer();
//             } else {
//                 $('#js-questionNumber').text("ROUNDS GOING OUT!!");
//                 alert("ROUNDS COMPLETE, FIRE ANOTHER SALVO!!!");
//                 processQuestionTimer();
//             }
//             // debugger;
//         } else {
//             // debugger;
//             snorkleObj.clockCount -= 1;
//             // debugger;
//         }
//         // debugger;
//     }, 1000);
//     // timeoutID=window.setTimeout(clockCount(),2000);
//     // var timeoutID=window.processQuestionTimer.setTimeout("clockCount(snorkleObj.clockCount);",2000);
// // // debugger;
// }
