let pollTitle = document.getElementById("poll__title");
let pollAnswers = document.getElementById("poll__answers");
let id, answers;
let xhr = new XMLHttpRequest();

xhr.open("GET", "https://netology-slow-rest.herokuapp.com/poll.php");
xhr.send();
xhr.addEventListener("readystatechange", () => {
  if (xhr.readyState === 4 && xhr.status === 200) {
    let answer = JSON.parse(xhr.responseText);
    id = answer.id;
    let title = answer.data.title;
    answers = answer.data.answers;
    pollTitle.innerHTML = title;
    answers.forEach(el => {
      pollAnswers.innerHTML += `<button class="poll__answer">${el}</button>`;
    });

    answers = Array.from(document.querySelectorAll(".poll__answer"));
    answers.forEach(el => {
      el.addEventListener("click", function(e) {
        alert("Спасибо, ваш голос засчитан!");
        let indexOfanswer = answers.indexOf(e.target);
        xhr = new XMLHttpRequest();
        xhr.open("POST", "https://netology-slow-rest.herokuapp.com/poll.php");
        xhr.setRequestHeader(
          "Content-type",
          "application/x-www-form-urlencoded"
        );
        xhr.send(`vote=${id}&answer=${indexOfanswer}`);
        xhr.addEventListener("readystatechange", () => {
          if (xhr.readyState === 4 && xhr.status === 200) {
            answer = JSON.parse(xhr.responseText);
            let sumOfVote = 0;
            answers = answer.stat;
            answers.forEach(el => {
              sumOfVote += el.votes;
            });

            pollAnswers.innerHTML = `<ul class="votes__percent"></ul>`;
            let votesPercent = pollAnswers.querySelector(".votes__percent");
            answers.forEach(el => {
              votesPercent.innerHTML += `<li>${el.answer}: ${(
                (el.votes / sumOfVote) *
                100
              ).toFixed(2)}%</li>`;
            });
          }
        });
      });
    });
  }
});
