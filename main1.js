$('#banner').text("Calculator Area of Circle from Radius");

function multiply() {
    var radius = parseInt ($('#radius').val());

    var Result = radius * radius * 3.14;

    $('#Result').text(`Result ${radius} * ${radius} * ${3.14} = ${Result}`)
}