function massageRemove() {
    document.getElementById('wrong').style = "display:none !important" 
    document.getElementById('right').style = "display:none !important" 
}

function number(num) {
    document.getElementById('passwordInput').value = document.getElementById('passwordInput').value + num;
    massageRemove()
}

function backSpace() {
    const passwordInput = document.getElementById('passwordInput').value;
    document.getElementById('passwordInput').value = passwordInput.substr(0, passwordInput.length -1);
    massageRemove()
}

function clearScreen() {
    document.getElementById('passwordInput').value = "";
    massageRemove()
}

function randomNum() {
    document.getElementById('generateInput').value = Math.round(1000 + Math.random() * 9000);
    massageRemove()
    clearScreen()
    document.getElementById('tryCount').innerText = 3;
    document.getElementById('submit').disabled = false
}

function submit() {
    let  generateInput = document.getElementById('generateInput').value;
    let inputPin = document.getElementById('passwordInput').value;
    let tryCount = document.getElementById('tryCount');
    let right = document.getElementById('right');
    let wrong = document.getElementById('wrong')

    if(generateInput == "" && inputPin == ""){
        alert('Please generate pin first')
    }
    else if(generateInput === inputPin ){
        right.style = "display:block !important"
        wrong.style = "display:none !important"
    }
    else{
        wrong.style = "display:block !important"; 
        right.style = "display:none !important";
        tryCount.innerText --;
        if (tryCount.innerText == 0) {
            document.getElementById('submit').disabled = true
        }
    }  
}





