let keyLog = [];

  let answerArray = [];

  let level = 5;

  let timer = 10;

  let compareArray = false;

  const messageContainer = document.querySelector(".message-container");

  const answerContainer = document.querySelector(".answer-container");

  const startButton = document.querySelector(".start-button");

  const arrowButtons = document.querySelectorAll(".arrow-button");

  function start() {
    messageContainer.innerHTML = "";
    answerContainer.innerHTML = "";
    keyLog = [];
    answerArray = [];

    let answerItem = "";

    startButton.removeEventListener('click', start);

    for (i = 0; i < level + 1; i++) {
      switch (Math.floor(Math.random() * 4)) {
        case 0:
          answerItem = "ArrowUp"
          break;
        case 1:
          answerItem = "ArrowRight"
          break;
        case 2:
          answerItem = "ArrowDown"
          break;
        case 3:
          answerItem = "ArrowLeft"
          break;
      }

      if (answerArray.length < level) {
        answerArray.push(answerItem);
      } else {
        displayAnswer();
      }
    }
  }

  function displayAnswer() {

    answerArray.forEach(key => {
      const answerElement = document.createElement("div");
      const answerContent = document.createTextNode(`${key}`);
      answerElement.classList.add(`${key}`);
      answerElement.classList.add("answer");
      answerContainer.appendChild(answerElement);
    });

    countdown();
  }

  function countdown() {

    const answers = document.querySelectorAll(".answer");

    let countdownInt = setInterval(function () {

      startButton.innerHTML = `${timer}`

      answers.forEach(element => {
        element.classList.add("active");
      })

      if (timer > 0) {
        timer--;
        console.log(timer);
      } else {
        answers.forEach(element => {
          element.classList.remove("active");
          window.addEventListener('keydown', logKey);
        });
        const message = document.createElement("div");
        const messageContent = document.createTextNode("GO!");
        message.appendChild(messageContent);
        message.classList.add("message");
        messageContainer.appendChild(message);
        clearInterval(countdownInt);
      }
    }, 1000);
  }

  function logKey(e) {

    if (keyLog.length === level - 1) {
      keyLog.push(e.key);
      compareArray = JSON.stringify(answerArray) === JSON.stringify(keyLog);
      window.removeEventListener('keydown', logKey);
      compare();
    } else if (timer === 0 && keyLog.length < level) {
      keyLog.push(e.key);
    }
  }

  function logButton(e) {

    if (keyLog.length === level - 1) {
      keyLog.push(e.target.id);
      compareArray = JSON.stringify(answerArray) === JSON.stringify(keyLog);
      window.removeEventListener('keydown', logKey);
      compare();
    } else if (timer === 0 && keyLog.length < level) {
      keyLog.push(e.target.id);
    }
  }

  function compare() {
    messageContainer.innerHTML = "";

    let message = document.createElement("div");
    let messageContent = "";

    if (compareArray === true && level < 20) {
      messageContent = document.createTextNode("SUCCESS!");
      level++;
      timer = 10;
    } else if (compareArray === true && level >= 20) {
      messageContent = document.createTextNode("COMPLETE!");
      level = 5;
      timer = 10;
    } else if (compareArray === false) {
      messageContent = document.createTextNode("FAILED!");
      level = 5;
      timer = 10;
    }

    message.appendChild(messageContent);
    message.classList.add("message");
    messageContainer.appendChild(message);

    startButton.innerHTML = "START";

    let removeInt = setInterval(function () {
      answerContainer.innerHTML = "";
      clearInterval(removeInt);
    }, 2000);

    startButton.addEventListener('click', start);
  }
  startButton.addEventListener('click', start);

arrowButtons.forEach(button => {
  button.addEventListener('click', logButton)
})
