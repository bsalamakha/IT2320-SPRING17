// Function that shows the JSON code to the web page.
function showReceipt(reciept) {
    // Clears the "json" element and appends the rest of information. Ensures the
    // div is cleared when pushing button multiple times.
    document.getElementById("json").innerHTML = '';
    // Calls title information
    document.getElementById("json").innerHTML += "<h1>Reciept for " + reciept.firstName + " " + reciept.lastName + "</h1>";
    document.getElementById("json").innerHTML += reciept.firstName + " " + reciept.lastName + "<br>";

    // Loops through the json code to display all 'purchase' information
    for (var i = 0; i < reciept.purchase.length; i++) {
        var item = reciept.purchase[i];
        document.getElementById("json").innerHTML += item.name + " $" + item.price + " " + item.color + "<br>";
    }

    document.getElementById("json").innerHTML += "Shipped to: " + reciept.address + " " + reciept.city;
}

// json object itself
function purchase() {
    return {
        "firstName": "Bob",
        "lastName" : "Doe",
        "address": "1234 Jane Rd",
        "city": "Cleveland",
        "purchase": [

            {
                "name" : "iPad 32GB",
                "price" : 250,
                "color" : "black"
            },

            {
                "name" : "iPad Case",
                "price" : 35,
                "color" : "maroon"
            },

            {
                "name" : "iTunes Gift Card",
                "price" : 50,
                "color" : "N/A"

            }

            ]
        };
    }

// Adds functionality after the webpage has been loaded.
// Adds actions to the button.
$(document).ready(function ()
{
    $(".button1").mouseover(function ()
    {
        $(this).css("border", "2px solid red");
    });

    $(".button1").mouseout(function ()
    {
        $(this).css("border", "none");
    });

    // Creates variable of the json object and sends it to the showReciept function to display.
    $(".button1").click(function ()
    {
        var reciept = purchase();
        showReceipt(reciept);
    });
});
