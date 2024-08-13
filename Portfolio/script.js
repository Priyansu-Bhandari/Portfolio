let tablinks = document.getElementsByClassName("tab-links");
let tabcontents = document.getElementsByClassName("tab-contents");
        
function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab")
}

const roles = ["Software Developer", "Machine Learning Enthusiast", "Data Scientist", "Web Developer", "Sport Person"];
let i = 0;
let j = 0;
let currentRole = '';
let isDeleting = false;

function type() {
    const typewriterElement = document.getElementById('typewriter');
    const fullRole = roles[i];

    if (isDeleting) {
        currentRole = fullRole.substring(0, j--);
    } else {
        currentRole = fullRole.substring(0, j++);
    }

    typewriterElement.textContent = currentRole;

    if (!isDeleting && j === fullRole.length) {
        setTimeout(() => isDeleting = true, 1000);
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % roles.length;
    }

    setTimeout(type, isDeleting ? 100 : 200);
}

type();
