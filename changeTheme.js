var currentTheme = localStorage.getItem("theme") || "Light";
if (currentTheme != "Light") {
    document.getElementById("themeSelect").value = currentTheme;
}
changeTheme(currentTheme);

function changeTheme(theme) {
    var themes = {
        // name: [text, background]
        "Light": ["black", "white"],
        "Dark": ["white", "black"],
        "Twilight": ["white", "midnightblue"]
    };

    if (theme in themes) {
        var opts = themes[theme];
        var text = opts[0];
        var bg = opts[1];

        document.documentElement.style.setProperty("--primary-color", text);
        document.documentElement.style.setProperty("--primary-bg-color", bg);
    }
    localStorage.setItem("theme", theme);
}
