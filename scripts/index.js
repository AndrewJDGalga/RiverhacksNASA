
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

    document.getElementsByClassName("pages_qa-astro_img")[0].classList.add("hidden");
    if(btnSrc.dataset.option === correctAnswer) {
        btnSrc.classList.add("correct_answer");
        document.getElementById("correct_answer").classList.remove("hidden");
    } else {
        btnSrc.classList.add("incorrect_answer");
        document.getElementById("incorrect_answer").classList.remove("hidden");
    }
}