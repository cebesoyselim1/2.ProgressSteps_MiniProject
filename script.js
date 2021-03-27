
let StepNow = 1;
const btnPrev = document.querySelector(".progress-prev");
const btnNext = document.querySelector(".progress-next");
const progressSteps = document.querySelectorAll(".progress-step");
const progressBar = document.querySelector(".progress-bar");

let nextStep = function(){
    StepNow++;
    if(StepNow >= 4){
        StepNow = 4;
        btnNext.classList.add("btn-disabled");
        btnPrev.classList.remove("btn-disabled");
    }else{
        btnNext.classList.remove("btn-disabled");
        btnPrev.classList.remove("btn-disabled");
    }
    activeSteps();
    progressBar.style.width = ((getActiveButtons() - 1) / (progressSteps.length - 1)) * 100 + "%";
}

let prevStep = function(){
    StepNow--;
    if(StepNow <= 1){
        StepNow = 1;
        btnPrev.classList.add("btn-disabled");
        btnNext.classList.remove("btn-disabled");
    }else{
        btnPrev.classList.remove("btn-disabled");
        btnNext.classList.remove("btn-disabled");
    }
    activeSteps();
    progressBar.style.width = ((getActiveButtons() - 1) / (progressSteps.length - 1)) * 100 + "%";
}

let getActiveButtons = function(){
    return document.querySelectorAll(".active").length;
}

let activeSteps = function(){ 
    progressSteps.forEach((step,index) => {
        if(index < StepNow){
            step.classList.add("active");
        }else{
            step.classList.remove("active");
        }
    })
}



btnNext.addEventListener("click",nextStep);
btnPrev.addEventListener("click",prevStep);



