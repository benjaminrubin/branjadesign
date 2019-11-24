// The display of the calculator
var $display = $('#display');

// Retrieve an array of all the buttons on the page
var btnArray = $('.btn');

// sVal = Stored Value
var $sVal = null;

// dVal = Displayed Value
var $dVal = "0";

// wOp = Waiting Operator
var $wOp = null

// If I click on one of the buttons
btnArray.click(function(e) {


    // Store the HTML of the button
    var $btn = $(this).html();

    switch ($btn) {

        case 'AC':

            // If the display is not disabled
            if (!$display.prop("disabled")) {
                resetCalculator();
            }
            break;

        case 'ON/OFF':
            // If it is disabled
            if ($display.prop("disabled")) {

                // Enable it
                $display.prop("disabled", false);

                // Display the value "0"
                display("0");
            }
            // It is enabled
            else {
                resetCalculator();

                // Disable the display
                $display.prop("disabled", true);

                // Display "OFF"
                display("OFF");
            }
            break;

        case '/':
            // If the stored value is not null
            if ($sVal) {

                // That means we can calculate
                calculate();
            }
            // Store the waiting operator
            $wOp = $btn;

            // Set the stored value to the displayed value
            setSvalToDval()
            break;

        case 'x':
            if ($sVal) {
                calculate();
            }
            $wOp = $btn;
            setSvalToDval()
            break;

        case '-':
            if ($sVal) {
                calculate();
            }
            $wOp = $btn;
            setSvalToDval()
            break;

        case '+':
            if ($sVal) {
                calculate();
            }
            $wOp = $btn;
            setSvalToDval()
            break;

        case '=':

            // Calculate
            calculate();

            // Set the stored value to null
            $sVal = null;

            break;

        case '.':

            // If string doesn't contain a period
            console.log($dVal);
            if (!$dVal.toString().includes('.')) {

                // append a period to the currently displayed number
                $dVal += ".";

                // Display the new value
                display($dVal);
            }
            // Otherwise do nothing

            break;

            // If it won't be any of the above, then it will be a number
        default:

            // If the display value is not equal to 0
            if ($dVal != "0") {

                // Append the number to whatever is displayed
                $dVal += $btn;
            } else {
                $dVal = $btn;
            }
            display($dVal);
    }


});

function resetCalculator() {
    $sVal = null;
    $dVal = 0;
    display($dVal);
}


function display(displayValue) {
    $display.prop("value", displayValue);
}

function setSvalToDval() {
    $sVal = $dVal;
    $dVal = 0;
}

function calculate() {

    var leftSide = parseFloat($sVal);
    var rightSide = parseFloat($dVal);

    console.log("Left side is " + leftSide)
    console.log("Right side is " + rightSide)

    switch ($wOp) {
        case '/':
            if (leftSide != 0 && rightSide == 0) {
                $dVal = "Not Possible";
            } else {
                $dVal = (leftSide * 100) / (rightSide * 100);
            }
            break;

        case 'x':
            $dVal = leftSide * rightSide;
            break;

        case '-':
            $dVal = leftSide - rightSide;
            break;

        case '+':
            $dVal = leftSide + rightSide;
            break;
    }

    display($dVal);
}