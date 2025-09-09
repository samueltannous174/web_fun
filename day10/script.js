function closeCookieBanner() {
    const banner = document.querySelector('.cookieBanner');
    banner.remove();
}


function showAlert(city) {
    alert("Loading weather report for " + city + "...");
}


let isCelsius = true;

function toggleTemperature() {
    const select = document.querySelector('.tempSelect');
    const unit = select.value;
    const temps = document.querySelectorAll('.temp, .temp2');
    console.log(temps);
    
    temps.forEach(temp => {
        let value = parseInt(temp.textContent); 
        console.log(value);
        if (unit === "F" && isCelsius) {
            value = Math.round((value * 9/5) + 32);
            temp.textContent = value + "°";
        } else if (unit === "C" && !isCelsius) {
            value = Math.round((value - 32) * 5/9);
            temp.textContent = value + "°";
        }   
    });

    isCelsius = (unit === "C");
}
