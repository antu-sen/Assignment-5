const completeBtn = document.querySelectorAll(".task-card button");
const taskAssignedElement = document.getElementById("taskAssigend");
const counterElement = document.getElementById("count");
const activityLog = document.getElementById("activity-log");
let clickedCount = 0; 

for (let i = 0; i < completeBtn.length; i++) {

  const btn = completeBtn[i];
  btn.addEventListener("click", function () {
    alert("Board Update Successfully");

    let currentAssigent = parseInt(taskAssignedElement.innerText);
    if (currentAssigent > 0) {
      taskAssignedElement.innerText = currentAssigent - 1;
    }

    let navCount = parseInt(counterElement.innerText);
    counterElement.innerText = navCount + 1;

    btn.disabled = true;

    clickedCount = clickedCount + 1;
    if(clickedCount === completeBtn.length){
        alert("All tasks are complete");
    }
  });
}

// Random Change BackgroundColor
const changeCircle = document.getElementById("change-circle");

changeCircle.addEventListener("click", function () {
  const randomNumber = Math.floor(Math.random() * 16777215);
  const hexColor = randomNumber.toString(16);
  const randomColor = "#" + hexColor;

  document.body.style.backgroundColor = randomColor;
});

const bannerCard =  document.querySelector(".banner-card");
bannerCard.addEventListener("click", function(){
    window.location.href = "blog.html";
   
})