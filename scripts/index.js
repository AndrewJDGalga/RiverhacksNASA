
//qa
const pageQuestion = document.getElementById("pages_qa");

const highlightResponse = (eventSrc, answer, btnSrc) => {
    document.getElementsByClassName("pages_qa-astro_img")[0].classList.add("hidden");
    if(btnSrc.dataset.option === answer) {
        eventSrc.classList.add("correct_answer");
        document.getElementById("correct_answer").classList.remove("hidden");
        document.querySelector(".correct").classList.remove("hidden");

    } else {
        eventSrc.classList.add("incorrect_answer");
        document.getElementById("incorrect_answer").classList.remove("hidden");
        document.querySelector(".incorrect").classList.remove("hidden");
    }
    document.querySelector(".more-info").classList.remove("hidden");
}

if(pageQuestion) {
    const correctAnswer = document.getElementById("pages_qa-question").dataset.answer;

    pageQuestion.onsubmit = e =>{
        e.preventDefault();
        const btnSrc = e.submitter;
        const btns = pageQuestion.getElementsByTagName("button");

        for(i = 0; i < btns.length; i++){
            btns[i].disabled = true;
        }
        highlightResponse(btnSrc, correctAnswer, btnSrc);
    }
}

//header
const headerNavBtn = document.querySelector(".header_nav-btn");
const headerNavMenu = document.querySelector(".pages_header-mobile"); 
headerNavBtn.onclick = () =>{
    if(headerNavMenu.classList.contains("hidden")){
        headerNavMenu.classList.remove("hidden");
    }else {
        headerNavMenu.classList.add("hidden");
    }
}