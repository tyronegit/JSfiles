var temps = document.querySelectorAll(".current");

function popup(element) {
    element.parentElement.remove();
}

function pop() {
    alert("Loading weather report...");
}

function update(element) {
    if (element.value == "fahrenheit") {
        for (var i=0; i<temps.length; i++) {
            temps[i].innerText = ((parseInt(temps[i].innerText) * 1.8) + 32).toFixed(1);
            console.log(temps[i].innerText);
        }
    } else if (element.value == "celcius") {
        for (var i=0; i<temps.length; i++) {
            temps[i].innerText = ((parseInt(temps[i].innerText) - 32) / 1.8).toFixed(1);            
            console.log(temps[i].innerText);
        }
    }
}