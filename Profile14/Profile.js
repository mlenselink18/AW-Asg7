"use strict";


$(document).ready( () => {

    const emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ ;
    const phonePattern = /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/;
    const zipPattern = /^\d{5}(?:[-\s]\d{4})?$/;


    $("#ProfileForm").submit( evt => {
        let isValid = true;

        const zip = $("#Zip").val().trim();
        if(zip == "")
        {
            $("#Zip").next().text("This field is required");
            isValid = false;
        }
        else if (!zipPattern.test(zip))
        {
            $("#Zip").next().text("Please enter a valid zip");
            isValid = false;
        }
        else
        {
            $("#Zip").next().text("");
            sessionStorage.setItem("Zip", zip);
        }

        const email = $("#Email").val().trim();
        if(email == "")
        {
            $("#Email").next().text("This field is required");
            isValid = false;
        }
        else if(!emailPattern.test(email))
        {
            $("#Email").next().text("Must be a valid email address");
            isValid = false;
        }
        else
        {
            $("#Email").next().text("");
            sessionStorage.setItem("Email", email);
        }

        const phone = $("#Phone").val().trim();
        if(phone == "")
        {
            $("#Phone").next().text("This field is required");
            isValid = false;
        }
        else if(!phonePattern.test(phone))
        {
            $("#Phone").next().text("Must be a valid phone number");
            isValid = false;
        }
        else
        {
            $("#Phone").next().text("");
            sessionStorage.setItem("Phone", phone);
        }
        
        if(!isValid)
        {
            evt.preventDefault();
        }
    });

});