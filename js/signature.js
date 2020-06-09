// Form Variables
var formName = $("#formName");
var formEmail = $("#formEmail");
var formPhone = $("#formPhone");
var formRole = $("#formRole");

// Signature Variables
var signatureName = $("#signatureName");
var signatureEmail = $("#signatureEmail");
var signatureTarget = $("#signatureTarget");
var signaturePhone = $("#signaturePhone");
var signaturePhoneTarget = $("#signaturePhoneTarget");
var signatureRole = $("#signatureRole");


formName.keyup(function () {
    signatureName.html(formName.val());
});

formEmail.keyup(function () {

    signatureEmail.html(formEmail.val());
    var targetValue = "mailto:" + formEmail.val();
    signatureTarget.attr('href', targetValue);
});

formPhone.keyup(function () {

    var formattedPhone = formatPhoneNumber(formPhone.val());
    var targetValue = "tel:" + formPhone.val();
    signaturePhone.html(formattedPhone);
    signaturePhoneTarget.attr('href', targetValue);
})


// Change the Form Role
formRole.change(function () {
    signatureRole.html(formRole.val())
})



// Copy Rich Text Function
function copySignature() {

    
    // Step 1: Extract the HTLM code
    var signatureCode = document.getElementById("signature").innerHTML;


    function listener(e) {
        e.clipboardData.setData("text/html", signatureCode);
        // e.clipboardData.setData("text/plain", signatureCode);
        e.preventDefault();
    }
    document.addEventListener("copy", listener);
    document.execCommand("copy");
    document.removeEventListener("copy", listener);

    $("#alert-success").fadeIn();

    console.log("Signature Copied!")
}


function formatPhoneNumber(phoneNumberString) {
    var cleaned = ('' + phoneNumberString).replace(/\D/g, '')
    var match = cleaned.match(/^(\d{3})(\d{3})(\d{4})$/)
    if (match) {
        return '(' + match[1] + ') ' + match[2] + '-' + match[3]
    }
    return null
}




