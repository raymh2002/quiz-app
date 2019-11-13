const quizQAObject={
    questionsRenderCount:{
        counter:5, // render question counter >> track current question number

        get count() { return this.counter; },
        set count(next) {
            this.counter += next; // increment counter
        },
        set resetCounter(reset){
            this.counter = reset; // reset counter to 1
        }
    },
    questionList:{
        question1:{
            htmlQuestion:"What does HTML stand for?",
            htmlAnswers: {
                answer1:{
                    text: "Hyper Text Markup Language << ANSWER >>",
                    isCorrect:true,
                    isSelected:false,
                    selectAnswer(){
                        this.isSelected = true;
                    }
                },
                answer2:{
                    text: "Home Tool Markup Language",
                    isCorrect: false,
                    isSelected: false
                },
                answer3:{
                    text: "Hyperlinks and Text Markup Language",
                    isCorrect: false,
                    isSelected: false
                },
                answer4:{
                    text: "Hoisted Text Markdown Language",
                    isCorrect: false,
                    isSelected: false
                }
            },
        },
        question2:{
            htmlQuestion:"Which HTML element will render the largest heading?:",
            htmlAnswers: {
               answer1: {
                    text: "<h6>",
                    isCorrect: false,
                    isSelected:false
                },
               answer2: {
                    text: "<h2>",
                    isCorrect: false,
                    isSelected: false
                },
               answer3: {
                    text: "<h3>",
                    isCorrect: false,
                    isSelected: false
                },
               answer4: {
                    text: "<h1>",
                    isCorrect: true,
                    isSelected: false
                }
            }
        },
        question3:{
            htmlQuestion:"Which element is used to insert a line break?",
            htmlAnswers: {
                answer1:{
                    text: "<nl>",
                    isCorrect: false,
                    isSelected:false
                },
                answer2:{
                    text: "<br>",
                    isCorrect: true,
                    isSelected: false
                },
                answer3:{
                    text: "<line-break>",
                    isCorrect: false,
                    isSelected: false
                },
                answer4:{
                    text: "<break>",
                    isCorrect: false,
                    isSelected: false
                }
            }
        },
        question4:{
            htmlQuestion:"Which of these characters identifies an end tag?",
            htmlAnswers: {
                answer1:{
                    text: ">",
                    isCorrect: false,
                    isSelected:false
                },
                answer2:{
                    text: "<",
                    isCorrect: false,
                    isSelected: false
                },
                answer3:{
                    text: "/",
                    isCorrect: true,
                    isSelected: false
                },
                answer4:{
                    text: "*",
                    isCorrect: false,
                    isSelected: false
                }
            }
        },
        question5:{
            htmlQuestion:"Which tag indicates an un-ordered bulleted list?",
            htmlAnswers: {
                answer1:{
                    text: "<ol>",
                    isCorrect: false,
                    isSelected:false
                },
                answer2:{
                    text: "<unordered-list>",
                    isCorrect: false,
                    isSelected: false
                },
                answer3:{
                    text: "<ulist>",
                    isCorrect: false,
                    isSelected: false
                },
                answer4:{
                    text: "<ul>",
                    isCorrect: true,
                    isSelected: false
                }
            }
        },
        question6:{
            htmlQuestion:"Which tag indicates an ordered list?", htmlAnswers: { answer1:{ text: "<ol>", isCorrect: true, isSelected:false
                },
                answer2:{
                    text: "<ordered-list>",
                    isCorrect: false,
                    isSelected: false
                },
                answer3:{
                    text: "<olist>",
                    isCorrect: false,
                    isSelected: false
                },
                answer4:{
                    text: "<ul>",
                    isCorrect: false,
                    isSelected: false
                }
            }
        },
        question7:{
            htmlQuestion:"Which of the following HTML elements will render a single line text field?",
            htmlAnswers: {
                answer1:{
                    text: "<input-text>",
                    isCorrect: false,
                    isSelected:false
                },
                answer2:{
                    text: "<input type='text'>",
                    isCorrect: true,
                    isSelected: false
                },
                answer3:{
                    text: "<input type='textbox'>",
                    isCorrect: false,
                    isSelected: false
                },
                answer4:{
                    text: "<textbox>",
                    isCorrect: false,
                    isSelected: false
                }
            }
        },
        question8:{
            htmlQuestion:"Which HTML element contains other elements which provide information to the browser which define the environment of a document?",
            htmlAnswers: {
                answer1:{
                    text: "<head>",
                    isCorrect: false,
                    isSelected:false
                },
                answer2:{
                    text: "<meta>",
                    isCorrect: true,
                    isSelected: false
                },
                answer3:{
                    text: "<title>",
                    isCorrect: false,
                    isSelected: false
                },
                answer4:{
                    text: "<script>",
                    isCorrect: false,
                    isSelected: false
                }
            }
        },
        question9:{
            htmlQuestion:"Which input field attribute specifies that an input field must be completed?",
            htmlAnswers: {
                answer1:{
                    text: "<validation-required>",
                    isCorrect: false,
                    isSelected:false
                },
                answer2:{
                    text: "<must-complete>",
                    isCorrect: false,
                    isSelected: false
                },
                answer3:{
                    text: "<required>",
                    isCorrect: true,
                    isSelected: false
                },
                answer4:{
                    text: "<validate>",
                    isCorrect: false,
                    isSelected: false
                }
            }
        },
        question10:{
            htmlQuestion:"Which element defines navigation links?",
            htmlAnswers: {
                answer1:{
                    text: "<navigation-links>",
                    isCorrect: false,
                    isSelected:false
                },
                answer2:{
                    text: "<header>",
                    isCorrect: false,
                    isSelected: false
                },
                answer3:{
                    text: "<navigation>",
                    isCorrect: false,
                    isSelected: false
                },
                answer4:{
                    text: "<nav>",
                    isCorrect: true,
                    isSelected: false
                }
            }
        },
    }
}



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

let path = quizQAObject.questionList.question1.htmlAnswers.answer1;
const select = {
    selectAnswer(questionNum, answerNum){
        this.questionList["question" + questionNum].htmlAnswers["answer" + answerNum].isSelected = true;
    }
};
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
console.log(`qN object!!`);
console.log([computeQNumberPropertyName(quizQAObject.questionsRenderCount.counter)]);
console.log(qN);
// let {htmlAnswers:answers}=quizQAObject.questionList.question1;//destructure quizQAObject & define htmlAnswers = answers
let {htmlAnswers:answers}=qN;//destructure quizQAObject>>qL>>q1 & define htmlAnswers = answers
console.log(`answers object`);
console.log(answers);

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



