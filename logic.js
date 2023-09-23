const question = [{
    'que' : " Q}  Which of the following is a MarkUp Language ?",
    "a" : "HTML",
    "b" : "CSS",
    "c" : "javaScript",
    "d" : "Java",
    "e" : "pass",
    "correct" : "a",
} , {
    
    'que' : " Q} When was javascript invented ?",
    "a" : "1996",
    "b" : "1994",
    "c" : "1995",
    "d" : "1993",
    "e" : "pass",
    "correct" : "c",
} , {

    'que' : " Q} Which of the following is used to add style to a html file ?",
    "a" : "HyperText Markup Language",
    "b" : "Cascading Style Sheet",
    "c" : "Json Object Notation",
    "d" : "None of the above",
    "e" : "pass",
    "correct" : "b",
}];

const index = 2;
const quesbox = document.getElementById("ques");
const optionInp = document.querySelectorAll(".inputs")

function loadQues(){
    const data = question[index];
    quesbox.innerText = `${index + 1} ${data.que}`;
    // console.log(data);
    optionInp[0].nextElementSibling.innerText = data.a;
    optionInp[1].nextElementSibling.innerText = data.b;
    optionInp[2].nextElementSibling.innerText = data.c;
    optionInp[3].nextElementSibling.innerText = data.d;
    optionInp[4].nextElementSibling.innerText = data.e;
}

const submitQuiz = () =>{
    const ans = getAnswer();
}

const getAnswer = () =>{
    optionInp.forEach(
        (input) =>{
            if(input.checked){
                console.log("yes");
            }else{
                console.log("no")
            }
        }
    )
}
loadQues();
submitQuiz();