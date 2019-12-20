
const snorkleObj = {
    timeoutID: false,
    clockCount:3,
    counter:1
};

$(processQuestionTimer);

function processQuestionTimer() {  //this function gets/sets the value for the question snorkleObj.clockCount
// debugger;
    console.log(snorkleObj.timeoutID);
    if (snorkleObj.timeoutID!== false){
        window.clearInterval(snorkleObj.timeoutID);
        snorkleObj.clockCount=5;
    }
// debugger;
     snorkleObj.timeoutID=window.setInterval(function countDown() {
        // debugger;
        $('#js-questionClockCount').text(snorkleObj.clockCount); //update snorkleObj.clockCount counter on question page
        // debugger;
        $('#js-questionNumber').text(snorkleObj.counter) ; //update snorkleObj.counter on question page
        // debugger;

        if (snorkleObj.clockCount === 0) {
        // debugger;
            window.clearInterval(snorkleObj.timeoutID);
            snorkleObj.timeoutID=false;
            snorkleObj.clockCount=3;
            if (snorkleObj.counter < 6){
                snorkleObj.counter += 1;
                processQuestionTimer();
            } else {
                $('#js-questionNumber').text("ROUNDS GOING OUT!!");
                alert("ROUNDS COMPLETE, FIRE ANOTHER SALVO!!!");
                processQuestionTimer();
            }
        // debugger;
        } else {
            // debugger;
            snorkleObj.clockCount -= 1;
            // debugger;
        }
        // debugger;
    }, 1000);
    // timeoutID=window.setTimeout(countDown(),2000);
    // var timeoutID=window.processQuestionTimer.setTimeout("countDown(snorkleObj.clockCount);",2000);
// // debugger;
}


// function processQuestionTimer() {  //this function gets/sets the value for the question snorkleObj.clockCount
// // debugger;
//     console.log(snorkleObj.timeoutID);
//     if (snorkleObj.timeoutID!== false){
//         window.clearInterval(snorkleObj.timeoutID);
//         snorkleObj.clockCount=5;
//     }
// // debugger;
//     snorkleObj.timeoutID=window.setInterval(function countDown() {
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
//     // timeoutID=window.setTimeout(countDown(),2000);
//     // var timeoutID=window.processQuestionTimer.setTimeout("countDown(snorkleObj.clockCount);",2000);
// // // debugger;
// }
