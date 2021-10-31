// SCROLLING

window.addEventListener('scroll', reveal);

function reveal() {
    let reveals =document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        
        let window_height =  window.innerHeight;
        let reveal_top = reveals[i].getBoundingClientRect().top;
        let reveal_point = 150;

        if (reveal_top < window_height - reveal_point) {
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active');
        }
    }
}


// LANGUAGES

const show_language_info = (...args) => {
    document.querySelector("#language_extra_info").textContent = args[0];
    document.querySelector("#language_extra_info").style["visibility"] = args[1];
}

const hide_language_info = (...args) => {
    document.querySelector("#language_extra_info").textContent = args[0];
    document.querySelector("#language_extra_info").style["visibility"] = args[1];
}

// SKILLS

const show_skill_info = (...args) => {

    for (let i = 0; i < args[0].length; i++) {
        let skill_item = document.createElement("p"); 
        skill_item.appendChild(document.createTextNode(args[0][i]))
        document.querySelector("#skill_extra_info").appendChild(skill_item);
    }

    document.querySelector("#skill_extra_info").style["visibility"] = args[1];
}

const hide_skill_info = (...args) => {
    
    while (document.querySelector("#skill_extra_info").firstChild) {
        document.querySelector("#skill_extra_info").removeChild(document.querySelector("#skill_extra_info").firstChild);
    }
    document.querySelector("#skill_extra_info").style["visibility"] = args[1];
}

function load() {

    // LANGUAGES
    let spanish_language = document.querySelector("#spanish_language");
    spanish_language.addEventListener('mouseenter', function() {
        show_language_info("NATIVE", "visible")
    }, false);
    spanish_language.addEventListener('mouseleave', function() {
        hide_language_info("", "hidden")
    }, false);

    let english_language = document.querySelector("#english_language");
    english_language.addEventListener('mouseenter', function() {
        show_language_info("ADVANCED", "visible")
    }, false);
    english_language.addEventListener('mouseleave', function() {
        hide_language_info("", "hidden")
    }, false);

    // SKILLS
    let software_development = document.querySelector("#software_development");
    software_development.addEventListener('mouseenter', function() {
        show_skill_info(["HTML", "CSS", "JS", "PYTHON", "GIT", "SQL"], "visible")
    }, false);
    software_development.addEventListener('mouseleave', function() {
        hide_skill_info("", "hidden")
    }, false);

    let photo_editing = document.querySelector("#photo_editing");
    photo_editing.addEventListener('mouseenter', function() {
        show_skill_info(["PHOTOSHOP CS6", "GIMP"], "visible")
    }, false);
    photo_editing.addEventListener('mouseleave', function() {
        hide_skill_info("", "hidden")
    }, false);
}

document.addEventListener("DOMContentLoaded", load, false);

