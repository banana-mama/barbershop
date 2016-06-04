var overlay = document.querySelector(".overlay");

var loginFrame = document.querySelector(".login-frame");
var loginFrameOpen = document.querySelector(".login-btn");
var loginFrameClose = loginFrame.querySelector(".login-frame-close");
var loginFrameForm = loginFrame.querySelector("form");
var loginFrameLogin = loginFrameForm.querySelector("[name=login]");
var loginFramePassword = loginFrameForm.querySelector("[name=password]");
var storageLogin = localStorage.getItem("login");

var mapFrame = document.querySelector(".map-frame");
var mapFrameOpen = document.querySelector("#map-frame-open");
var mapFrameClose = document.querySelector(".map-frame-close");

/* LOGIN FRAME */

loginFrameOpen.addEventListener("click", function (event) {
    event.preventDefault();
    loginFrame.classList.add("login-frame-opened");
    overlay.classList.add("overlay-opened");
    if(storageLogin) {
        loginFrameLogin.value = storageLogin;
        loginFramePassword.focus();
    } else {
        loginFrameLogin.focus();
    }
    loginFrame.classList.remove("login-frame-error");
});

loginFrameForm.addEventListener("submit", function (event) {
    if(!loginFrameLogin.value || !loginFramePassword.value) {
        event.preventDefault();
        loginFrame.classList.add("login-frame-error");
    } else {
        localStorage.setItem("login", loginFrameLogin.value);
    }
});

loginFrameClose.addEventListener("click", function (event) {
    event.preventDefault();
    loginFrame.classList.remove("login-frame-opened");
    overlay.classList.remove("overlay-opened");
});

window.addEventListener("keydown", function (event) {
    if(event.keyCode === 27) {
        if(loginFrame.classList.contains("login-frame-opened") || overlay.classList.contains("overlay-opened")) {
            loginFrame.classList.remove("login-frame-opened");
            overlay.classList.remove("overlay-opened");
        }
    }
});


/* MAP FRAME */

mapFrameOpen.addEventListener("click", function (event) {
    event.preventDefault();
    mapFrame.classList.add("map-frame-opened");
    overlay.classList.add("overlay-opened");
});

mapFrameClose.addEventListener("click", function (event) {
    event.preventDefault();
    mapFrame.classList.remove("map-frame-opened");
    overlay.classList.remove("overlay-opened");
});

window.addEventListener("keydown", function (event) {
    if(event.keyCode === 27) {
        if(mapFrame.classList.contains("map-frame-opened") || overlay.classList.contains("overlay-opened")) {
            mapFrame.classList.remove("map-frame-opened");
            overlay.classList.remove("overlay-opened");
        }
    }
});

/*function initMap() {
    var mapFrameMapAddress = new google.maps.LatLng(59.938794, 30.323083);
    var mapFrameMapOptions = {
        center: mapFrameMapAddress,
        zoom: 16
    };
    var mapFrameMap = new google.maps.Map(document.querySelector(".map-frame-map"), mapFrameMapOptions);
    var mapFrameMapMarker = new google.maps.Marker({
        map: mapFrameMap,
        position: mapFrameMapAddress,
        title: "Barbershop!"
    });
}*/


/* OVERLAY */

overlay.addEventListener("click", function (event) {
    event.preventDefault();
    loginFrame.classList.remove("login-frame-opened");
    mapFrame.classList.remove("map-frame-opened");
    overlay.classList.remove("overlay-opened");
});
