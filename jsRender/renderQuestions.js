"use strict";
// let questionNumber=1;
// for (let questionNumber=1; questionNumber<=10; questionNumber++){
//     // console.log(`question${questionNumber}: ${quizQAObject.questionList["question"+questionNumber]}`);
//     console.log(quizQAObject.questionList["question"+questionNumber]); // logs all questions from 1 - 10
// }

// let questionN = (quizQAObject.questionList["question"+questionNumber]);
// for (let x of htmlQuestion){
//     console.log(x);
// }

// console.log(questionN["htmlQuestion"]);
// console.log(questionN["htmlAnswers"]);
// for (let key,value of questionN.htmlAnswers){
//     console.log(key);
//     console.log(value);
// }
// const PROPERTY_NAME = "p1";

// vvv below works; commented below and ported to quizQAObject.js vvv
// function computePropertyName() { return "question" + number; } // computed property name for use in destructing quizQAObject>>qL

// let {questionList:qL}=quizQAObject;//destructure quizQAObject & define questionList = qL ** works **
// console.log(qL); // ** works **

// let {question1:q1}=qL;//destructure quizQAObject>>qL & define questionList = q1

// let {[computePropertyName()]:q1}=qL;//destructure quizQAObject>>qL & define questionList = q1 ** works **
// console.log(q1);

// let {htmlAnswers:answers}=quizQAObject.questionList.question1;//destructure quizQAObject & define htmlAnswers = answers

// let {htmlAnswers:answers}=q1;//destructure quizQAObject>>qL>>q1 & define htmlAnswers = answers ** works **
// console.log(answers);
