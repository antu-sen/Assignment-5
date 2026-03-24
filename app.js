const completeBtn = document.querySelectorAll(".task-card button");
const taskAssignedElement = document.getElementById("taskAssigend");
const counterElement = document.getElementById("count");
const activityLog = document.getElementById("activity-log");
const logContainer = document.getElementById("log-list");

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
    if (clickedCount === completeBtn.length) {
      alert("All tasks are complete");
    }

    const taskName = btn.closest(".task-card").querySelector("h3").innerText;
    const currentTime = new Date().toLocaleDateString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    const logEntry = document.createElement("p");
    logEntry.innerText = ` You Have Complete The Task. Add Dark Mode. "${taskName}" at ${currentTime}`;

    logContainer.appendChild(logEntry);

    if (parseInt(taskAssignedElement.innerText) === 0) {
      alert("Congrates !!! You Have Completed Tasks");
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

const bannerCard = document.querySelector(".banner-card");
bannerCard.addEventListener("click", function () {
  window.location.href = "blog.html";
});
