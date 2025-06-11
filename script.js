function moveButton() {
  const password = document.getElementById("password").value;
  const button = document.getElementById("btn");
  const message = document.getElementById("message");

  if (password.trim().toLowerCase() !== "legend") {
    const x = Math.random() * (window.innerWidth - 150);
    const y = Math.random() * (window.innerHeight - 150);
    
    button.style.position = "absolute";
    button.style.left = `${x}px`;
    button.style.top = `${y}px`;

    message.style.color = "#f87171";
    message.textContent = " Wrong password. Keep trying!";
  } else {
    // Reset the button position when password is correct
    button.style.position = "relative";
    button.style.left = "0";
    button.style.top = "0";
    message.textContent = "";
  }
}

function handleClick() {
  const password = document.getElementById("password").value;
  const message = document.getElementById("message");

  if (password.trim().toLowerCase() === "legend") {
    message.style.color = "#34d399";
    message.innerHTML = " Access Granted. Welcome, Legend!";
    alert(" You're in! Great job, Legend!");
  } else {
    message.style.color = "#f87171";
    message.textContent = " Still wrong. Try again!";
  }
}
