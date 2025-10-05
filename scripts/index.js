
//qa
const pageQuestion = document.getElementById("pages_qa");
const correctAnswer = document.getElementById("pages_qa-question").dataset.answer;

const highlightResponse = eventSrc => {
    document.getElementsByClassName("pages_qa-astro_img")[0].classList.add("hidden");
    if(btnSrc.dataset.option === correctAnswer) {
        eventSrc.classList.add("correct_answer");
        document.getElementById("correct_answer").classList.remove("hidden");
    } else {
        eventSrc.classList.add("incorrect_answer");
        document.getElementById("incorrect_answer").classList.remove("hidden");
    }
}

pageQuestion.onsubmit = e =>{
    e.preventDefault();
    const btnSrc = e.submitter;
    const btns = pageQuestion.getElementsByTagName("button");

    //htmlcollection, not array
    for(i = 0; i < btns.length; i++){
        btns[i].disabled = true;
    }
    highlightResponse(btnSrc);
    
    
}

