/**
 *
 *
 * TESTING the addition of adding autocompletetion to the country input box in support.html
 * Not fully functional.
 *
 *Last edit 2017-02-14
 */

// Variable declaration
var targetInput = document.getElementById( "country" ),
    matches = [],
    resultsCursor = 0,
    results = document.getElementById( "autocompleteResults" ),
    countryList = ["Afghanistan", "Albania", "Algeria", "American Samoa", "Andorra", "Angola", "Anguilla", "Antarctica",
        "Antigua and Barbuda", "Argentina", "Armenia", "Aruba", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bahrain",
        "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bermuda", "Bhutan", "Bolivia", "Bosnia and Herzegowina",
        "Botswana", "Bouvet Island", "Brazil", "British Indian Ocean Territory", "Brunei Darussalam", "Bulgaria",
        "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Cape Verde", "Cayman Islands", "Central African Republic",
        "Chad", "Chile", "China", "Christmas Island", "Cocos (Keeling) Islands", "Colombia", "Comoros", "Congo",
        "Congo, the Democratic Republic of the", "Cook Islands", "Costa Rica", "Cote d'Ivoire", "Croatia (Hrvatska)",
        "Cuba", "Cyprus", "Czech Republic", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor",
        "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands (Malvinas)",
        "Faroe Islands", "Fiji", "Finland", "France", "France Metropolitan", "French Guiana", "French Polynesia",
        "French Southern Territories", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Gibraltar", "Greece",
        "Greenland", "Grenada", "Guadeloupe", "Guam", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti",
        "Heard and Mc Donald Islands", "Holy See (Vatican City State)", "Honduras", "Hong Kong", "Hungary", "Iceland",
        "India", "Indonesia", "Iran (Islamic Republic of)", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan",
        "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Korea, Democratic People's Republic of", "Korea, Republic of",
        "Kuwait", "Kyrgyzstan", "Lao, People's Democratic Republic", "Latvia", "Lebanon", "Lesotho", "Liberia",
        "Libyan Arab Jamahiriya", "Liechtenstein", "Lithuania", "Luxembourg", "Macau",
        "Macedonia, The Former Yugoslav Republic of", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali", "Malta",
        "Marshall Islands", "Martinique", "Mauritania", "Mauritius", "Mayotte", "Mexico", "Micronesia, Federated States of",
        "Moldova, Republic of", "Monaco", "Mongolia", "Montserrat", "Morocco", "Mozambique", "Myanmar", "Namibia",
        "Nauru", "Nepal", "Netherlands", "Netherlands Antilles", "New Caledonia", "New Zealand", "Nicaragua", "Niger",
        "Nigeria", "Niue", "Norfolk Island", "Northern Mariana Islands", "Norway", "Oman", "Pakistan", "Palau", "Panama",
        "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Pitcairn", "Poland", "Portugal", "Puerto Rico", "Qatar",
        "Reunion", "Romania", "Russian Federation", "Rwanda", "Saint Kitts and Nevis", "Saint Lucia",
        "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
        "Seychelles", "Sierra Leone", "Singapore", "Slovakia (Slovak Republic)", "Slovenia", "Solomon Islands", "Somalia",
        "South Africa", "South Georgia and the South Sandwich Islands", "Spain", "Sri Lanka", "St. Helena", "St. Pierre and Miquelon",
        "Sudan", "Suriname", "Svalbard and Jan Mayen Islands", "Swaziland", "Sweden", "Switzerland", "Syrian Arab Republic",
        "Taiwan, Province of China", "Tajikistan", "Tanzania, United Republic of", "Thailand", "Togo", "Tokelau", "Tonga",
        "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Turks and Caicos Islands", "Tuvalu", "Uganda", "Ukraine",
        "United Arab Emirates", "United Kingdom", "United States", "United States Minor Outlying Islands", "Uruguay",
        "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "Virgin Islands (British)", "Virgin Islands (U.S.)",
        "Wallis and Futuna Islands", "Western Sahara", "Yemen", "Yugoslavia", "Zambia", "Zimbabwe"];

// Target focus
// targetInput.focus();

// Listener for the input keyDown
targetInput.addEventListener( "keydown", function ( event ) {
    if ( event.keyCode == "13" ) {
        event.preventDefault();
    }
});

// Add event listener for keyup input
targetInput.addEventListener( "keyup", function ( event ) {

    results.innerHTML = "";
    toggleResults( "hide" );

    if ( this.value.length > 0 ) {
        matches = getMatches( this.value);

        if ( matches.length > 0 ) {
            displayMatches( matches );
        }
    }

    if ( results.classList.contains( "visible" ) ) {
        switch( event.keyCode ) {
            case 13:
                targetInput.value = results.children[resultsCursor].innerHTML;
                toggleResults( "hide" );
                break;
            case 38:
                if ( resultsCursor > 0 ) {
                    resultsCursor --;
                    moveCursor( resultsCursor );
                }
                break;
            case 40:
                if ( resultsCursor < (matches.length -1) ) {
                    resultsCursor++;

                    moveCursor( resultsCursor );
                }
                break;
        }
    }
});


// Function for toggling results list
function toggleResults( action ) {
    if (action == "show" ) {
        results.classList.add( "visible" );
    } else if ( action == "hide" ) {
        results.classList.remove( "visible" );
    }
}


// Function for checking if input matches country list
function getMatches( inputText ) {
    var matchList = [];

    for ( var i = 0; i < countryList.length; i++) {
        if ( countryList[i].toLowerCase().indexOf( inputText.toLowerCase() ) != -1) {
            matchList.push( countryList[i] );
        }
    }
    return matchList;
}


// Function for displaying autocomplete results
function displayMatches( matchlist ) {
    var j = 0;

    while ( j < matchlist.length) {
        results.innerHTML += '<li class="result">' + matchlist[j] + '</li>';
        j++;
    }
    // 1st child gets class of highlights
    moveCursor( resultsCursor );

    //show matched results
    toggleResults( "show" );
}

// Function for moving cursor in the results list
function moveCursor( pos ) {
    for ( var x = 0; x < results.children.length; x++) {
        results.children[x].classList.remove( "highlighted" );
    }
    results.children[pos].classList.add( "highlighted" );
}

var mobile = document.createElement('div');
mobile.className = 'nav-mobile';
document.querySelector('.nav').appendChild(mobile);