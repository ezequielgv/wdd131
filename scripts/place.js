let lastModified = new Date(document.lastModified);
const year = new Date().getFullYear();

document.getElementById('currentyear').textContent = year;
document.getElementById('lastModified').textContent = lastModified;

// ****************************************************************************

const temperature = 10; // °C
const windSpeed = 5; // km/h

function calculateWindChill(temp, speed) { // Form °C annd km/h
    return 13.12 + 0.6215 * temp - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temp * Math.pow(speed, 0.16);
}

function updateWindChill() {
    const windChillElement = document.querySelector('.wind-chill');
    if (windChillElement) {
        let windChillText = "N/A";

        if (temperature <= 10 && windSpeed > 4.8) {
            const windChill = calculateWindChill(temperature, windSpeed);
            windChillText = `${windChill.toFixed(1)}`;
        }

        windChillElement.textContent = `${windChillText}`;
    }
}

document.addEventListener('DOMContentLoaded', updateWindChill);