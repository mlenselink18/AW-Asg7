"use strict";


$(document).ready( () => {
    
    const json = localStorage.reservation;
    const reservation = JSON.parse(json);

    // for  ( let  value  of reservation) {
    //     $( "#"  + value[ 0 ]).text( value[ 1 ] );
    // }

    $("#outName").text(reservation[0]);
    $("#outEmail").text(reservation[1]);
    $("#outPhone").text(reservation[2]);
    $("#outArrival").text(reservation[3]);
    $("#outNights").text(reservation[4]);
    $("#outAdults").text(reservation[5]);
    $("#outChildren").text(reservation[6]);
    $("#roomType").text(reservation[7]);
    $("#bedType").text(reservation[8]);
    $("#EarlyIn").text(reservation[9]);

});