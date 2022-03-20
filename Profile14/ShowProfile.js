"use strict";


$(document).ready( () => {

    $("#outEmail").text(sessionStorage.getItem("Email"));
    $("#outPhone").text(sessionStorage.getItem("Phone"));
    $("#outZip").text(sessionStorage.getItem("Zip"));
});