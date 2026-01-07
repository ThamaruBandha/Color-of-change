// ===============================
// FACT GENERATOR (HOME PAGE)
// ===============================

var factList = [
  "Racial justice means everyone is treated fairly, no matter their skin color.",
  "Racism often appears in everyday moments, not only in extreme events.",
  "Listening to people who experience racism is a powerful act of respect.",
  "Speaking up against unfairness helps create safer spaces for everyone.",
  "Justice is not only about laws — it is also about daily behavior.",
  "Young people have always played a role in social change.",
  "Small actions, when repeated consistently, can create lasting impact."
];

var fact = document.getElementById("fact");
var myButton = document.getElementById("myButton");
var count = 0;
var typingSpeed = 25;

if (myButton) {
  myButton.addEventListener("click", displayFact);
}

function displayFact() {
  var text = factList[count];
  count = (count + 1) % factList.length;

  fact.style.opacity = 0;
  setTimeout(function () {
    typeWriter(text);
  }, 300);
}

// Typewriter animation
function typeWriter(text) {
  fact.innerHTML = "";
  fact.style.opacity = 1;
  var i = 0;

  function typing() {
    if (i < text.length) {
      fact.innerHTML += text.charAt(i);
      i++;
      setTimeout(typing, typingSpeed);
    }
  }
  typing();
}

// ===============================
// BUTTON MICRO-INTERACTION
// ===============================

document.querySelectorAll("button").forEach(function (btn) {
  btn.addEventListener("mousedown", function () {
    btn.style.transform = "scale(0.96)";
  });

  btn.addEventListener("mouseup", function () {
    btn.style.transform = "scale(1)";
  });

  btn.addEventListener("mouseleave", function () {
    btn.style.transform = "scale(1)";
  });
});

// ===============================
// PERSONALIZED MESSAGE (TAKE ACTION PAGE)
// ===============================

var issueInput = document.getElementById("issue-input");
var locationInput = document.getElementById("location-input");
var messageButton = document.getElementById("message-button");
var messageOutput = document.getElementById("message-output");

if (messageButton) {
  messageButton.addEventListener("click", displayMessage);
}

function displayMessage() {
  var issue = issueInput.value.trim();
  var location = locationInput.value.trim();

  messageOutput.style.opacity = 0;

  setTimeout(function () {
    if (!issue || !location) {
      messageOutput.innerHTML =
        "Please fill in both the issue you care about and your city or region.";
      animateMessage();
      return;
    }

    var message =
      "I am a community member in " + location + ", and I am deeply concerned about " +
      issue + ". I believe that every person deserves safety, dignity, and equal treatment, " +
      "regardless of race. I urge leaders and institutions in " + location +
      " to listen to Black voices, support fair policies, and take meaningful action.";

    messageOutput.innerHTML = message;
    animateMessage();
  }, 300);
}

// Smooth fade + slide animation for output
function animateMessage() {
  messageOutput.style.display = "block";
  messageOutput.style.transition = "all 0.6s ease";
  messageOutput.style.opacity = 1;
  messageOutput.style.transform = "translateY(0)";
}
