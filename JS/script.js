//------Concatenate-----//
document.getElementById('btn1').onclick = function () {
    let statement = '<h3> Example </h3> Abdul + "" + Wahab '
    let statement2 = 'Abdul Wahab'
    document.getElementById('statement').innerHTML = statement;
    document.getElementById('output').innerHTML = statement2;
}

// --------NAME------ //
document.getElementById('btn2').onclick = function () {
    let statement = prompt('Enter your Name')
    document.getElementById('statement').innerHTML = '';
    document.getElementById('output').innerHTML = statement;
}
// -------Comparison------//
document.getElementById("btn3").onclick = function () {
    let statement = "<h3>Example</h3><ul><li>x!==8</li><li>x<8</li><li>x>=8</li></ul>"
    document.getElementById("statement").innerHTML = statement;
    document.getElementById("output").innerHTML = "";
}
// ------IF else if----//
document.getElementById("btn4").onclick = function () {
    let marks = prompt('Enter your marks')
    let message = ''
    if (marks >= 90) {
        message = 'You have got A+'
    }
    else if (marks >= 80) {
        message = 'You have got A'
    }
    else if (marks >= 70) {
        message = 'You have got B'
    }
    else if (marks >= 60) {
        message = 'You have got C'
    }
    else {
        message = 'You are FAIL!!!!!'
    }
    document.getElementById("statement").innerHTML = '';
    document.getElementById("output").innerHTML = message;
}
//------testing conditions-----//
document.getElementById('btn5').onclick = function () {
    let agnumber = prompt('Enter your Ag Number')
    let message = '';
    if (agnumber == 9800) {
        message = 'Your CGPA is 3.7'
    }
    else if (agnumber == 9864) {
        message = 'Your CGPA is 3.1'
    }
    else if (agnumber == 9811) {
        message = 'Your CGPA is 3.3'
    }
    else {
        message = 'Your CGPA is 2.0'
    }
    document.getElementById('statement').innerHTML = '';
    document.getElementById("output").innerHTML = message;
}
//----If statement Nested----//
document.getElementById('btn6').onclick = function () {
    let age = prompt('Enter your Age')
    let message = '';
    if (age >= 18) {
        let name = prompt('Enter your Name')
        let province = prompt('Enter your Province in CAPITAL letters')
        if (province == "PUNJAB") {
            message = 'You are able to Caste Vote'
        }
        else {
            message = 'You are not from Punjab'
        }
    }
    else {
        message = 'You are not able to Caste Vote'
    }
    document.getElementById('statement').innerHTML = '';
    document.getElementById("output").innerHTML = message;
}
//-----LOGIN------//
document.getElementById('btn7').onclick = function () {
    let email = prompt('Enter your Email @')
    document.getElementById('statement').innerHTML = email;
    let pw = prompt('Enter your Password')
    document.getElementById('output').innerHTML = pw;
}
//----Check----//
document.getElementById('btn8').onclick = function () {
    let x = prompt('Enter Number between 1-2')
    let message = '';
    if (x == 1) {
        message = "Your number is 1"
    }
    else if (x == 2) {
        message = "Your number is 2"
    }
    else{
        message = "Your number is from 3 to Infinity"
    }
    document.getElementById('statement').innerHTML = '';
    document.getElementById("output").innerHTML = message;
}
// CLEAR ORIGINAL //
document.getElementById('clearstmnt').onclick = function () {
    document.getElementById('statement').innerHTML = '';
}
// CLEAR OUTPUT //
document.getElementById('clearoutput').onclick = function () {
    document.getElementById('output').innerHTML = '';
}
