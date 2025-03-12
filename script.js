document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.getElementById("theme-toggle");
    let isDarkMode = false;

    themeToggle.addEventListener("click", function () {
        if (isDarkMode) {
            document.body.style.backgroundColor = "#f4f4f4";
            document.body.style.color = "#333";
            themeToggle.textContent = "Сменить тему";
        } else {
            document.body.style.backgroundColor = "#222";
            document.body.style.color = "#fff";
            themeToggle.textContent = "Вернуть светлую тему";
        }
        isDarkMode = !isDarkMode;
    });
});
