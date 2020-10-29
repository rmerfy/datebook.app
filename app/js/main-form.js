var currentTab = 0; // Current tab is set to be the first tab (0)
showTab(currentTab); // Display the current tab

function showTab(n) {
    // This function will display the specified tab of the form ...
    var x = document.getElementsByClassName("tab");
    x[n].style.display = "block";
    // ... and fix the Previous/Next buttons:
    if (n == 0) {
        document.getElementById("prevBtn").style.display = "none";
    } else {
        document.getElementById("prevBtn").style.display = "inline";
    }
    if (n == (x.length - 1)) {
        document.getElementById("nextBtn").style.display = "none";
    } else {
        document.getElementById("nextBtn").innerHTML = "Далее";
        document.getElementById("nextBtn").style.display = "inline";
    }
    // ... and run a function that displays the correct step indicator:
    fixStepIndicator(n)
}

function nextPrev(n) {
    // This function will figure out which tab to display
    var x = document.getElementsByClassName("tab");
    // Exit the function if any field in the current tab is invalid:
    if (n == 1 && !validateForm()) return false;
    // Hide the current tab:
    x[currentTab].style.display = "none";
    // Increase or decrease the current tab by 1:
    currentTab = currentTab + n;
    // if you have reached the end of the form... :
    if (currentTab >= x.length) {
        //...the form gets submitted:
        document.getElementById("insert").submit();
        return false;

    }
    // Otherwise, display the correct tab:
    showTab(currentTab);
}

$("#main-form").keydown(function (event) {
    if (event.keyCode == 13) {
        event.preventDefault();
        return false;
    }
});

function validateForm() {
    // This function deals with validation of the form fields
    var x, y, i, valid = true;
    x = document.getElementsByClassName("tab");
    y = x[currentTab].getElementsByTagName("input");
    // A loop that checks every input field in the current tab:
    for (i = 0; i < y.length; i++) {
        // If a field is empty...
        if (y[i].value == "") {
            // add an "invalid" class to the field:
            y[i].className += " invalid";
            // and set the current valid status to false:
            valid = false;
        }
    }
    // If the valid status is true, mark the step as finished and valid:
    if (valid) {
        document.getElementsByClassName("step")[currentTab].className += " finish";
    }
    return valid; // return the valid status
}

function fixStepIndicator(n) {
    // This function removes the "active" class of all steps...
    var i, x = document.getElementsByClassName("step");
    for (i = 0; i < x.length; i++) {
        x[i].className = x[i].className.replace(" active", "");
    }
    //... and adds the "active" class to the current step:
    x[n].className += " active";
}

//value x9 - x13 

var x3 = document.querySelector('.res-x3'),
    x9 = document.querySelector('.res-x9'),
    x10 = document.querySelector('.res-x10'),
    x11 = document.querySelector('.res-x11'),
    x12 = document.querySelector('.res-x12'),
    x13 = document.querySelector('.res-x13');

x3.addEventListener('keyup', function () {
    switch (x3.value) {
        case "9":
            x9.value = 41;
            x10.value = 46;
            x11.value = 10;
            x12.value = 2;
            x13.value = 1;
            break;

        case "10":
            x9.value = 30;
            x10.value = 52;
            x11.value = 15;
            x12.value = 2;
            x13.value = 1;
            break;

        case "11":
            x9.value = 23;
            x10.value = 57;
            x11.value = 17;
            x12.value = 3;
            x13.value = 1;
            break;

        case "12":
            x9.value = 21;
            x10.value = 55;
            x11.value = 19;
            x12.value = 3;
            x13.value = 1;
            break;

        case "13":
            x9.value = 20;
            x10.value = 51;
            x11.value = 23;
            x12.value = 5;
            x13.value = 2;
            break;

        case "14":
            x9.value = 19;
            x10.value = 48;
            x11.value = 26;
            x12.value = 6;
            x13.value = "";
            break;

        case "15":
            x9.value = 18;
            x10.value = 46;
            x11.value = "";
            x12.value = "";
            x13.value = "";
            break;
    }
});