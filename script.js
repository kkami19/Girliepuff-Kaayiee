// Function to play the click sound when the button is clicked
function playClickSound() {
    var clickSound = document.getElementById("click-sound");
    clickSound.play();
}

// Get elements
const audio = document.getElementById("bg-music-index");
const musicIcon = document.getElementById("music-icon");
const isPlaying = localStorage.getItem("musicPlaying") === "true"; // Retrieve stored state

// Restore music state on page load
if (isPlaying) {
    audio.play();
    musicIcon.src = "assests/musicon.png"; // Set correct icon
} else {
    audio.pause();
    musicIcon.src = "assests/musicoff.png";
}

// Toggle Music Function
function toggleMusic() {
    if (audio.paused) {
        audio.play();
        musicIcon.src = "assests/musicon.png"; // Set to "on" icon
        localStorage.setItem("musicPlaying", "true"); // Save state
    } else {
        audio.pause();
        musicIcon.src = "assests/musicoff.png"; // Set to "off" icon
        localStorage.setItem("musicPlaying", "false"); // Save state
    }
}


// About Ressume
function openPopup() {
    document.getElementById("popup-bg").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup-bg").style.display = "none";
}

// Open and Close Contact Popup (Get in Touch)
function openContactPopup() {
    document.getElementById("contact-popup-bg").style.display = "flex";
}

function closeContactPopup() {
    document.getElementById("contact-popup-bg").style.display = "none";
}

// Function to open a specific popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

// Function to open a specific popup
function openPopup(popupId) {
    document.getElementById(popupId).style.display = "flex";
}

// Function to close a specific popup
function closePopup(popupId) {
    document.getElementById(popupId).style.display = "none";
}

// Event listeners for opening popups
document.getElementById("about-me").addEventListener("click", function () {
    openPopup("popup-bg-abtme");
});

document.getElementById("hobbies").addEventListener("click", function () {
    openPopup("popup-bg-hobs");
});

document.getElementById("skills").addEventListener("click", function () {
    openPopup("popup-bg-skills");
});

document.getElementById("expsem").addEventListener("click", function () {
    openPopup("popup-bg-exp");
});

document.getElementById("abtres").addEventListener("click", function () {
    openPopup("popup-bg");
});

// Close popups when clicking outside the content
document.querySelectorAll(".popup-bg, .abtme-popup-bg, .hobs-popup-bg, .skills-popup-bg, .exp-popup-bg").forEach((popupBg) => {
    popupBg.addEventListener("click", function (e) {
        if (e.target === this) {
            closePopup(this.id);
        }
    });
});

// Close popups when clicking on close button
document.querySelectorAll(".close-btn").forEach((closeBtn) => {
    closeBtn.addEventListener("click", function () {
        let popup = this.closest(".popup-bg, .abtme-popup-bg, .hobs-popup-bg, .skills-popup-bg, .exp-popup-bg");
        if (popup) {
            closePopup(popup.id);
        }
    });
});
document.getElementById("khay").addEventListener("click", function () {
    window.open("file/Girliepuff Kayii Resume.pdf", "_blank");
});
document.addEventListener('mousemove', function (e) {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    document.body.appendChild(sparkle);

    // Position the sparkle at the mouse location
    sparkle.style.left = `${e.pageX - 5}px`;  // Adjust the -5 to center the sparkle
    sparkle.style.top = `${e.pageY - 5}px`;  // Adjust the -5 to center the sparkle

    // Remove the sparkle after animation
    setTimeout(() => {
        sparkle.remove();
    }, 300); // Matches the duration of the animation
});


