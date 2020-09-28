var uName = document.myForm.u_name;
var message = document.getElementById('message');

function runMe() {
    if (uName.value.length < 3) {
        message.innerHTML = "Needs more characters";
        message.style.color = "red";
        uName.style.backgroundColor = "red";
        uName.style.color = "white";
    } else if (uName.value.length == 5) {
        message.innerHTML = "Nice, Ok!";
        message.style.color = "green";
        uName.style.backgroundColor = "green";
        uName.style.color = "white";
    } else if (uName.value.length > 8) {
        message.innerHTML = "Limit has been reached";
        message.style.color = "orange";
        uName.style.backgroundColor = "orange";
        uName.style.color = "white";
    }
}