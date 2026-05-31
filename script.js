document
    .getElementById("contactForm")
    .addEventListener("submit", function(event) {

    event.preventDefault();

    document.getElementById("message").innerText =
        "Форма успешно отправлена!";
});