const nameInput = document.getElementById("nameInput");
const message = document.getElementById("greetingMessage");
const greetButon = document.getElementById("greetButton"); 
const spinner = document.getElementById("spinner");

function showPage(pageToShow) {
    const pages = ["page1", "page2"];
    pages.forEach(page => {
        const el = document.getElementById(page);
        if (page === pageToShow) {
            el.classList.remove("hidden");
            el.classList.add("visible");
        } else {
            el.classList.remove("visible");
            el.classList.add("hidden");
        }
    });
}

function greetUser() {
  const name = nameInput.value.trim();

  if (name === "") {
    message.textContent = "Please enter your name!";
    return;
  } 

  greetButon.disabled = true;
  spinner.classList.remove("hidden");
  message.textContent = "";
  setTimeout(() => {
    message.textContent = `Hello, ${name}! Nice to meet you.`;
    showPage("page2");

    greetButon.disabled = false;
    spinner.classList.add("hidden");
  }, 2000);
}

function goBack() {
    showPage("page1");
    clearData();
}

function clearData() {
    message.textContent = "";
    nameInput.value = "";
}

nameInput.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        greetUser();
    }
});
