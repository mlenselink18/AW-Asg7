"use strict";


$(document).ready( () => {
    const emailPattern = /^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/ ;
    const phonePattern = /^([0-9]( |-)?)?(\(?[0-9]{3}\)?|[0-9]{3})( |-)?([0-9]{3}( |-)?[0-9]{4}|[a-zA-Z0-9]{7})$/;
    const positiveInts = /^\d+$/;

    const getRoomType = ()  => {
        return  $( "input[name=RoomType]:checked",'#reservationForm' ).val();
    };

    const getBedType = ()  => {
        return  $( "input[name=BedType]:checked",'#reservationForm' ).val();
    };

    const getCheckin = ()  => {
        if ($( "#cbEarlyIn:checked" )){
            return   true ;
       }
        else {
            return   false ;
       }
    };


    $('input:radio[name="RoomType"]').filter('[value="Standard"]').attr('checked', true);
    $('input:radio[name="BedType"]').filter('[value="Queen"]').attr('checked', true);
    let selectAdults = $("#selectAdults");
    let selectChildren = $("#selectChildren");

    $( function() {
    $("#dialog").dialog({
        autoOpen: false
    });
    });

    for(let i = 0; i < 5; i++)
    {
        var opt1 = document.createElement('option');
        var opt2 = document.createElement('option');
        opt1.value = i;
        opt1.innerHTML = i;
        opt2.value = i;
        opt2.innerHTML = i;
        selectChildren.append(opt1);

        if(i != 0)
        {selectAdults.append(opt2);}
    }

    $( function() {
        $( "#ArrivalDate" ).datepicker({ minDate: -0, maxDate: "+1M +10D", showOtherMonths: true, selectOtherMonths: true });
    });

    $( function() {
        $( "#tabs" ).tabs();
    });


    $("#buttonPolicies").click( evt => {
        $("#dialog").dialog( "open" );
    });

    $("#reservationForm").submit( evt => {
        let isValid = true;
        const reservation = [];

        const name = $("#Name").val().trim();
        if(name == "")
        {
            $("#Name").next().text("This field is required");
            $("#tabs").tabs("option", "active", 2);
            isValid = false;
        }
        else
        {
            $("#Name").next().text("");
            reservation.push(name);
        }


        const email = $("#Email").val().trim();
        if(email == "")
        {
            $("#Email").next().text("This field is required");
            $("#tabs").tabs("option", "active", 2);
            isValid = false;
        }
        else if(!emailPattern.test(email))
        {
            $("#Email").next().text("Must be a valid email address");
            $("#tabs").tabs("option", "active", 2);
            isValid = false;
        }
        else
        {
            $("#Email").next().text("");
            reservation.push(email);

        }

        const phone = $("#Phone").val().trim();
        if(phone == "")
        {
            $("#Phone").next().text("This field is required");
            $("#tabs").tabs("option", "active", 2);
            isValid = false;
        }
        else if(!phonePattern.test(phone))
        {
            $("#Phone").next().text("Must be a valid phone number");
            $("#tabs").tabs("option", "active", 2);
            isValid = false;
        }
        else
        {
            $("#Phone").next().text("");
            reservation.push(phone);
        }

        const arrival = $("#ArrivalDate").val().trim();
        if(arrival == "")
        {
            $("#ArrivalDate").next().text("This field is required");
            isValid = false;
        }
        else
        {
            $("#ArrivalDate").next().text("");
            reservation.push(arrival);
        }

        
        const nights = $("#Nights").val().trim();
        if(!positiveInts.test(nights))
        {
            $("#Nights").next().text("Must be a valid number of nights");
            isValid = false;
            $("#tabs").tabs("option", "active", 0);
        }
        else
        {
            $("#Nights").next().text("");
            reservation.push(nights);
        }

        reservation.push(selectAdults.val());
        reservation.push(selectChildren.val());
        reservation.push(getRoomType());
        reservation.push(getBedType());
        if(getCheckin())
        {
            reservation.push("Yes");
        }
        else
        {
            reservation.push("No");
        }
        

        const json = JSON.stringify(reservation);
        localStorage.reservation = json;
        if(!isValid)
        {
            evt.preventDefault();
        }
    });

    $("#ArrivalDate").blur( evt => {
        const arrival = $("#ArrivalDate").val().trim();

        if(arrival == "")
        {
            $("#ArrivalDate").next().text("This field is required");
        }
        else
        {
            $("#ArrivalDate").next().text("");
        }
    });

    $("#Nights").blur( evt => {
        const nights = $("#Nights").val().trim();
        if(!positiveInts.test(nights))
        {
            $("#Nights").next().text("Must be a valid number of nights");
        }
        else
        {
            $("#Nights").next().text("");
        }
    });

    $("#Name").blur( evt => {
        const name = $("#Name").val().trim();
        if(name == "")
        {
            $("#Name").next().text("This field is required");
        }
        else
        {
            $("#Name").next().text("");
        }
    });

    $("#Email").blur( evt => {
        const email = $("#Email").val().trim();
        if(email == "")
        {
            $("#Email").next().text("This field is required");
        }
        else if(!emailPattern.test(email))
        {
            $("#Email").next().text("Must be a valid email address");
        }
        else
        {
            $("#Email").next().text("");
        }
    });

    $("#Phone").blur( evt => {
        const phone = $("#Phone").val().trim();
        if(phone == "")
        {
            $("#Phone").next().text("This field is required");
        }
        else if(!phonePattern.test(phone))
        {
            $("#Phone").next().text("Must be a valid phone number");
        }
        else
        {
            $("#Phone").next().text("");
        }
    });
});
