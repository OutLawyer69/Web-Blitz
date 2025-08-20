window.onload = function () {
    var downloadButtons = document.getElementsByClassName("download-btn");
    var modal = document.getElementById("loginModal");
    var loginFrame = document.getElementById("loginFrame");
    var closeButton = document.getElementsByClassName("close")[0];

    for (var i = 0; i < downloadButtons.length; i++) {
        downloadButtons[i].onclick = function () {
            modal.style.display = "block"; 
            loginFrame.src = "login.html"; 
        };
    }

    closeButton.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };
};

function redirectToLogin() {
    window.location.href = "login.html";
}

function closePopup() {
    document.getElementById("loginModal").style.display = "none";
}
function openLoginPopup() {
    document.getElementById("loginModal").style.display = "block";
}

function closePopup() {
    document.getElementById("loginModal").style.display = "none";
}

function redirectToLogin() {
    window.location.href = "login.html";  
}

window.onclick = function(event) {
    let modal = document.getElementById("loginModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};