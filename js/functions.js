const show_language_info = (...args) => {
    document.getElementById("language_extra_info").textContent = args[0];
    document.getElementById("language_extra_info").style["visibility"] = args[1];
}

const hide_language_info = (...args) => {
    document.getElementById("language_extra_info").textContent = args[0];
    document.getElementById("language_extra_info").style["visibility"] = args[1];
}

function load() {
    let spanish_language = document.getElementById("spanish_language");
    spanish_language.addEventListener('mouseenter', function() {
        show_language_info("NATIVE", "visible")
    }, false);
    spanish_language.addEventListener('mouseleave', function() {
        hide_language_info("", "hidden")
    }, false);
    let english_language = document.getElementById("english_language");
    english_language.addEventListener('mouseenter', function() {
        show_language_info("ADVANCED", "visible")
    }, false);
    english_language.addEventListener('mouseleave', function() {
        hide_language_info("", "hidden")
    }, false);
}

document.addEventListener("DOMContentLoaded", load, false);

