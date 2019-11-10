function calc() {
    // create a variable for the value entered in field 1. Use the ParseInt method to convert the value into a 
    // number, because it is sent as a string by default. Use the querySelector method to select the right element
    let valueOne = parseInt(document.querySelector("#valueone").value);
    // create a variable for the value entered in field 2.
    let valueTwo = parseInt(document.querySelector("#valuetwo").value);

    // we don't need to use the parseInt method here because the operator value is a string. Whatever 
    // dropdown option the user selects will become the value for the operatorSelection variable
    let operatorSelection = document.querySelector("#operator").value;

    // create a variable for the output. Does not need a value assigned to it yet.
    let calculate;

    // if the value of both fields is not isNaN ("Not A Number"), perform the calculations 
    if (!isNaN(valueOne) && !isNaN(valueTwo)) {
        // if statement that assigns values to the calculate variable depending on the user's choices
        if (operatorSelection == "add") {
            calculate = valueOne + valueTwo;
        } else if (operatorSelection == "min") {
            calculate = valueOne - valueTwo;
        } else if (operatorSelection == "div") {
            calculate = valueOne / valueTwo;
        } else if (operatorSelection == "mul") {
            calculate = valueOne * valueTwo;
        }
    } else {
        // if the user does not enter a number in both fields, make an error message appear
        calculate = "Enter two numbers above!";
    }

    // function to add commas to number and not add commas to decimal points
    function numberWithCommas(calculate) {
        var parts = calculate.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    }

    // apply commas function to the output
    calculate = numberWithCommas(calculate);

    // find the element with the ID "results", then insert the result into that element
    document.querySelector("#result").innerHTML = calculate;
}