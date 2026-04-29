function toggleDarkMode() {
    document.body.classList.toggle("dark_mode");

    const btn = document.getElementById("dark-btn");
    if (document.body.classList.contains("dark_mode")){
        btn.textContent = "Byt till ljust läge"; 
    }
    else {
        btn.textContent = "Byt till mörkt läge";
    }
}