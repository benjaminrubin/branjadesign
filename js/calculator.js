var $display = $('#display');

var btnArray = $('.btn');

// sVal = Stored Value
var $sVal = null;

// dVal = Displayed Value
var $dVal = 0;

// wOp = Waiting Operator
var $wOp = null


btnArray.click(function(e) {

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
            if ($sVal) {
                calculate();
            }
            $wOp = $btn;
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
            $sVal = null;

            break;

        case '.':

            // If string doesn't contain a period
            if (!$dVal.includes(".")) {
                // append a period to the currently displayed number
                $dVal += ".";
            }
            // Otherwise do nothing

            break;

            //Otherwise will be a number
        default:
            console.log('Should be a number! Equal to ' + $btn);

            if ($dVal != "0") {
                $dVal += $btn;
            } else {
                $dVal = $btn;
            }
            display($dVal);

            // append it to the display value
            // update the display to show the new appended value  
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


    switch ($wOp) {
        case '/':
            if (leftSide != 0 && rightSide == 0) {
                $dVal = "Not Possible";
            } else {
                $dVal = leftSide / rightSide;
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