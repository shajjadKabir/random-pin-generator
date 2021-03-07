document.getElementById('generate-pin').value = ''; //default value for random pin input.
document.getElementById('input-pin').value = '';
document.getElementById('wrongPin').style.display = "none";
document.getElementById('successPin').style.display = "none";
let count = parseInt(document.getElementById("numOfTry").innerHTML);

// Function to generate random pin.
function randomPin() {
    let getPin = Math.floor(Math.random() * 9000) + 1000;
    document.getElementById('generate-pin').value = getPin;
    const pinNumber = document.querySelector('#generate-pin');
    pinNumber.textContent = getPin;
}

// Function to show numbers on screen.

function digit(num) {
    document.getElementById('input-pin').value += num;
    document.getElementById('wrongPin').style.display = "none";
    document.getElementById('successPin').style.display = "none";
}

// Function for clear all numbers from screen.
function clearInput(){
    document.getElementById('input-pin').value = '';
}

// Function for deleting numbers one by one from screen.
function backSpace() {
    var currentInput = document.getElementById('input-pin').value;
    document.getElementById('input-pin').value = currentInput.substr(0, currentInput.length - 1);
}


// Pin Verify
function verifyPin() {
    const pinNumber = document.querySelector('#generate-pin').textContent;
    const typedPin = document.querySelector('#input-pin').value;

    if (pinNumber === typedPin) {
        document.getElementById('input-pin').classList = 'success';
        displayMessage('block', 'none');
        document.getElementById('bodySuccess').style.backgroundColor = '#4cd137';
    } else {
        displayMessage('none', 'block');
        count--;
        document.getElementById('bodySuccess').style.backgroundColor = 'red';
        document.getElementById('input-pin').value = '';

        if (count > 0 ) {
            document.getElementById('numOfTry').textContent = count;
             
          
        } else if(count == 0) {
         
            const submitButton = document.getElementById("submit");
            submitButton.disabled = true;
            submitButton.style.background = "red";
            submitButton.style.transition = ".5s";
            document.getElementById("generate-pin").value = '';
            document.getElementById("wrongPin").style.display = "none";
        }
    }
}


// Display Error Message
function displayMessage(successMessage, warningDisplay) {
    const correctPin = document.getElementById('successPin');
    correctPin.style.display = successMessage;
    const inCorrectPin = document.getElementById('wrongPin');
    inCorrectPin.style.display = warningDisplay;
}