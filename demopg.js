function copyPhoneNumber() {
    var tempInput = document.createElement("textarea");
    tempInput.value = "9985852147";
    document.body.appendChild(tempInput);
    tempInput.select();
    document.execCommand("copy");
    document.body.removeChild(tempInput);
    alert("Phone number copied to clipboard");
}
document.addEventListener("DOMContentLoaded", function() {
    const hamburgerMenu = document.getElementById("hamburger-menu");
    const dropdownMenu = document.getElementById("dropdown-menu");

    // Show the dropdown menu and hide the hamburger menu
    hamburgerMenu.addEventListener("click", function(event) {
        dropdownMenu.classList.add("show-dropdown");
        hamburgerMenu.style.display = "none";

        // Prevent the dropdown menu from closing immediately after being opened
        event.stopPropagation();
    });

    // Close the dropdown menu when clicking anywhere on the screen
    document.addEventListener("click", function() {
        dropdownMenu.classList.remove("show-dropdown");
        hamburgerMenu.style.display = "block";
    });

    // If clicking inside the dropdown menu, close it as well
    dropdownMenu.addEventListener("click", function() {
        dropdownMenu.classList.remove("show-dropdown");
        hamburgerMenu.style.display = "block";
    });
});
let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slides");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }    
    slides[slideIndex - 1].style.display = "block";  
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}


