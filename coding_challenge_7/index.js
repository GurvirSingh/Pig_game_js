// Function constructor
function Question(question, answers, correct) {
    this.question = question;
    this.answers = answers;
    this.correct = correct;
}

Question.prototype.displayQuestion = function() 
{
    console.log(this.question);
    
    for(var i = 0; i < this.answers.length; i++) {
        console.log(i + ": "+ this.answers[i]);
    }
}

var q1 = new Question("Is javascript the cooles programming language in the world", 
['yes', 'no'], 0);
var q2 = new Question("What is the name of the course instructor?", ['John', 'Micheal', 'Jonas'], 2);
var q3 = new Question("What doe sthe best describe coding", ['Easy','Hard','fun'],2);

var question = [q1, q2, q3];
var n = Math.floor(Math.random() * question.length);

question[n].displayQuestion();

var answer = parseInt(prompt("Please select the right answer"));