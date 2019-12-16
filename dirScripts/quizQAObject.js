const quizQAObject={
    questionsRenderCount:{
        counter:0, // render question counter >> track current question number

        get count() { return this.counter; },
        set count(next) {
            this.counter += next; // increment counter
        },
        set resetCounter(reset){
            this.counter = reset; // reset counter to 1
        }
    },
    questionList:[
        // question1:
        {
            htmlQuestion:"What does HTML stand for?",
            htmlAnswers: [
                // answer1:
                {
                    text: "Hyper Text Markup Language << ANSWER >>",
                    isCorrect:true,
                    isSelected:false,
                },
                // answer2:
                {
                    text: "Home Tool Markup Language",
                    isCorrect: false,
                    isSelected: false
                },
                // answer3:
                {
                    text: "Hyperlinks and Text Markup Language",
                    isCorrect: false,
                    isSelected: false
                },
                // answer4:
                {
                    text: "Hoisted Text Markdown Language",
                    isCorrect: false,
                    isSelected: false
                }
            ],
        },
        // question2:
        {
            htmlQuestion:"Which HTML element will render the largest heading?:",
            htmlAnswers: [
               // answer1:
               {
                    text: "&lth6&gt",
                    isCorrect: false,
                    isSelected:false
               },
               // answer2:
               {
                    text: "&lth2&gt",
                    isCorrect: false,
                    isSelected: false
                },
               // answer3:
               {
                    text: "&lth3&gt",
                    isCorrect: false,
                    isSelected: false
                },
               // answer4:
                {
                    text: "&lth1&gt",
                    isCorrect: true,
                    isSelected: false
                }
            ]
        },
        // question3:
        {
            htmlQuestion:"Which element is used to insert a line break?",
            htmlAnswers: [
                // answer1:
                {
                    text: "&ltnl&gt",
                    isCorrect: false,
                    isSelected:false
                },
                // answer2:
                {
                    text: "&ltbr&gt",
                    isCorrect: true,
                    isSelected: false
                },
                // answer3:
                {
                    text: "&ltline-break&gt",
                    isCorrect: false,
                    isSelected: false
                },
                // answer4:
                {
                    text: "&ltbreak&gt",
                    isCorrect: false,
                    isSelected: false
                }
            ]
        },
        // question4:
        {
            htmlQuestion:"Which of these characters identifies an end tag?",
            htmlAnswers: [
                // answer1:
                {
                    text: "&gt",
                    isCorrect: false,
                    isSelected:false
                },
                // answer2:
                {
                    text: "&lt",
                    isCorrect: false,
                    isSelected: false
                },
                // answer3:
                {
                    text: "/",
                    isCorrect: true,
                    isSelected: false
                },
                // answer4:
                {
                    text: "*",
                    isCorrect: false,
                    isSelected: false
                }
            ]
        },
        // question5:
        {
            htmlQuestion:"Which tag indicates an un-ordered bulleted list?",
            htmlAnswers: [
                // answer1:
                {
                    text: "&ltol&gt",
                    isCorrect: false,
                    isSelected:false
                },
                // answer2:
                {
                    text: "&ltunordered-list&gt",
                    isCorrect: false,
                    isSelected: false
                },
                // answer3:
                {
                    text: "&ltulist&gt",
                    isCorrect: false,
                    isSelected: false
                },
                // answer4:
                {
                    text: "&ltul&gt",
                    isCorrect: true,
                    isSelected: false
                }
            ]
        },
        // question6:
        {
            htmlQuestion:"Which tag indicates an ordered list?",
                htmlAnswers: [
                // answer1:
                {
                    text: "&ltol&gt",
                    isCorrect: true,
                    isSelected:false
                },
                // answer2:
                {
                    text: "&ltordered-list&gt",
                    isCorrect: false,
                    isSelected: false
                },
                // answer3:
                {
                    text: "&ltolist&gt",
                    isCorrect: false,
                    isSelected: false
                },
                // answer4:
                {
                    text: "&ltul&gt",
                    isCorrect: false,
                    isSelected: false
                }
            ]
        },
        // question7:
        {
            htmlQuestion:"Which of the following HTML elements will render a single line text field?",
            htmlAnswers: [
                // answer1:
                {
                    text: "&ltinput-text&gt",
                    isCorrect: false,
                    isSelected:false
                },
                // answer2:
                {
                    text: "&ltinput type='text'&gt",
                    isCorrect: true,
                    isSelected: false
                },
                // answer3:
                {
                    text: "&ltinput type='textbox'&gt",
                    isCorrect: false,
                    isSelected: false
                },
                // answer4:
                {
                    text: "&lttextbox&gt",
                    isCorrect: false,
                    isSelected: false
                }
            ]
        },
        // question8:
        {
            htmlQuestion:"Which HTML element contains other elements which provide information to the browser which define the environment of a document?",
            htmlAnswers: [
                // answer1:
                {
                    text: "&lthead&gt",
                    isCorrect: false,
                    isSelected:false
                },
                // answer2:
                {
                    text: "&ltmeta&gt",
                    isCorrect: true,
                    isSelected: false
                },
                // answer3:
                {
                    text: "&lttitle&gt",
                    isCorrect: false,
                    isSelected: false
                },
                // answer4:
                {
                    text: "&ltscript&gt",
                    isCorrect: false,
                    isSelected: false
                }
            ]
        },
        // question9:
        {
            htmlQuestion:"Which input field attribute specifies that an input field must be completed?",
            htmlAnswers: [
                // answer1:
                {
                    text: "&ltvalidation-required&gt",
                    isCorrect: false,
                    isSelected:false
                },
                // answer2:
                {
                    text: "&ltmust-complete&gt",
                    isCorrect: false,
                    isSelected: false
                },
               // answer3:
                {
                    text: "&ltrequired&gt",
                    isCorrect: true,
                    isSelected: false
                },
                // answer4:
                {
                    text: "&ltvalidate&gt",
                    isCorrect: false,
                    isSelected: false
                }
            ]
        },
        // question10:
            {
            htmlQuestion:"Which element defines navigation links?",
            htmlAnswers: [
               // answer1:
                {
                    text: "&ltnavigation-links&gt",
                    isCorrect: false,
                    isSelected:false
                },
                // answer2:
                {
                    text: "&ltheader&gt",
                    isCorrect: false,
                    isSelected: false
                },
                // answer3:
                {
                    text: "&ltnavigation&gt",
                    isCorrect: false,
                    isSelected: false
                },
                // answer4:
                {
                    text: "&ltnav&gt",
                    isCorrect: true,
                    isSelected: false
                }
            ]
        }
]
};



// ^^^^^ ABOVE THIS LINE IS THE QUESTION/ANSWER DATABASE ^^^^^^ DO NOT MODIFY!!!!
// const handleSubmitEvent= {
//     submit: {
//         $(function() {
//             $('.js-form').submit(event => {
//                 event.preventDefault();  // this stops the default form submission behavior
//                 console.log(`${quizQAObject.questionsRenderCount.count}`);
//                 quizQAObject.questionsRenderCount.resetCounter = 1;
//                 console.log(`${quizQAObject.questionsRenderCount.count}`);
//             });
//         }
// )
// }
// }

// ++++++++++++++++++++++++++++++++++++++++++++++

// let path = quizQAObject.questionList.question1.htmlAnswers.answer1;
// const select = {
//     selectAnswer(questionNum, answerNum){
//         this.questionList["question" + questionNum].htmlAnswers["answer" + answerNum].isSelected = true;
//     }
// };
// const rndrQsnCount = {
//     updateCounter(){
//         this.rndrQsnCount += 1;
//     },
//      getCount(){
//         return this.rndrQsnCount;
//     }
// };





// <<< vvv define methods for DB property retrieval vvv >>>>

// let number=1;
// function computePropertyName() { return "question" + number; } // works using variable number
function computeQuestionNumberPropertyName(rndrQsnCount) { return "question" + rndrQsnCount; } // reference quizQAObject.rndrQsnCount
function computeQNumberPropertyName(rndrQsnCount){ return "q" + rndrQsnCount; } //  reference quizQAObject.rndrQsnCount
// function returnCounter()

console.log(`rndrQsnCount property`);
console.log(quizQAObject.questionsRenderCount.counter);
let {questionList:qL}=quizQAObject;//destructure quizQAObject & define questionList = qL
console.log(`qL object`);
console.log(qL);
// let {question1:q1}=qL;//destructure quizQAObject>>qL & define questionList = q1
// let qN=computeQNumberPropertyName(quizQAObject.questionsRenderCount.counter);
// console.log(`this is ${qN}`)
// let {[computeQuestionNumberPropertyName(quizQAObject.questionsRenderCount.counter)]:eval(`var toad = ${qN}`)}=qL;//destructure quizQAObject>>qL & define questionList = q1
let {[computeQuestionNumberPropertyName(quizQAObject.questionsRenderCount.counter)]:qN}=qL //destructure quizQAObject>>qL & define questionList = q1

// let qN=computeQNumberPropertyName(quizQAObject.questionsRenderCount.counter);
// console.log(`qN object!!`);
// console.log([computeQNumberPropertyName(quizQAObject.questionsRenderCount.counter)]);
// console.log(qN);
// let {htmlAnswers:answers}=quizQAObject.questionList.question1;//destructure quizQAObject & define htmlAnswers = answers
// let {htmlAnswers:answers}=qN;//destructure quizQAObject>>qL>>q1 & define htmlAnswers = answers
// console.log(`answers object`);
// console.log(answers);

// JavaScript: The Definitive Guide, 7th Edition 3.3.1 Objects As Associative Arrays
// iterate over answers to get all 4 answers object properties

// let addr = "";
// for(let i = 1; i <= 4; i++) {
//     addr += "answer" + i + ": " + "\n";
//     addr += answers["answer" + i].isCorrect + "\n";
//     addr += answers["answer" + i].isSelected + "\n";
//     addr += answers["answer" + i].text + "\n";
// }
// console.log(addr);

// vvv this snippet iterates over each answer in answers vvv
let i=0;
console.log(`iterate over answers for question${quizQAObject.questionsRenderCount.counter}`)
for(let answer in answers) {
    i++;
    console.log(answers["answer" + i]);
}
// ^^^ this snippet iterates over each answer in answers ^^^


// ^^^^ define methods for DB property retrieval ^^^^





// vvvv assign objects to the main quizQAObject vvvv

Object.assign(quizQAObject, select);
// Object.assign(quizQAObject, rndrQsnCount);

// ^^^^ assign objects to the main quizQAObject ^^^^




quizQAObject.selectAnswer(2, 4); // call method Select.selectAnswer(questionNum, answerNum) to update isSelected:true/false (works)

// quizQAObject.updateCounter();

// quizQAObject.getCount;


// vvvv  html page replacement objects vvvvv



