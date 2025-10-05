
//qa
const pageQuestion = document.getElementById("pages_qa");
const correctAnswer = document.getElementById("pages_qa-question").dataset.answer;

pageQuestion.onsubmit = e =>{
    e.preventDefault();
    const btnSrc = e.submitter;
    const btns = pageQuestion.getElementsByTagName("button");
    
    //htmlcollection, not array
    for(i = 0; i < btns.length; i++){
        btns[i].disabled = true;
    }

    if(btnSrc.dataset.option === correctAnswer) {
        btnSrc.classList.add("correct_answer");
    } else {
        btnSrc.classList.add("incorrect_answer");
    }
}