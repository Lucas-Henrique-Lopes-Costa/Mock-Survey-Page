// console.log(document.documentElement.clientHeight);
// console.log(document.documentElement.scrollHeight);
// console.log(document.documentElement.scrollTop);

// scrollHeight is the measurement of the element's entire content, whether all the content is visible or not
// clientHeight is the inner height of the visible (onscreen)element, including padding
// scrollTop is the measurement of pixels that have been scrolled (offscreen)

// ------------------------------------------------

const progressBar = document.querySelector(".progress-bar");

function getProgress() {
  let topPos = document.documentElement.scrollTop;
  let remaining =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  let percentage = (topPos / remaining) * 100;

  progressBar.style.width = percentage + "%";
}

document.addEventListener("scroll", function () {
  getProgress();
});

let total = 0;

function calculateResults() {
  const form = document.forms["survey-form"];
  for (let i = 1; i <= 3; i++) {
    // Ajuste este loop para o número de perguntas
    const radios = form["question" + i];
    for (const radio of radios) {
      if (radio.checked) {
        total += parseInt(radio.value);
      }
    }
  }
}

// Email.send({
//   Host: "smtp.elasticemail.com",
//   Username: "lucashlc.contato@gmail.com",
//   Password: "AD16EAECBAC8131EB53DAA91128C4E1BC659",
//   To: "lucass20586@gmail.com",
//   From: "lucashlc.contato@gmail.com",
//   Subject: "This is the subject",
//   Body: "And this is the body",
// }).then((message) => alert(message));

function envia() {
  calculateResults();

  console.log(total);

  if (total === 0) {
    alert("Please answer all questions");
  }

  if (total >= 1 && total <= 5) {
    alert("You are a beginner");
  }

  if (total >= 6 && total <= 10) {
    alert("You are intermediate");
  }

  if (total >= 11 && total <= 15) {
    alert("You are advanced");
  }
}
