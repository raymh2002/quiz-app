const quizQAObject={questionList:{
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
            htmlQuestion:"Which tag indicates an ordered list?",
            htmlAnswers: {
                answer1:{
                    text: "<ol>",
                    isCorrect: true,
                    isSelected:false
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

let path = quizQAObject.questionList.question1.htmlAnswers.answer1;

const Select = {
    selectAnswer(){
        this.isSelected = true;
    }
};

Object.assign(quizQAObject, Select);