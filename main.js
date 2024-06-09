document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById('weather');
    form.addEventListener('submit', async (event) => {
        event.preventDefault();
        
        const lat = parseFloat(document.getElementById('lat').value);
        const lon = parseFloat(document.getElementById('long').value);

        if (!isNaN(lat) && !isNaN(lon)) {
            const apiKey = "7be20fe239d69b924a880d71535a40ed";
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

            try {
                const response = await fetch(url);
                const weatherData = await response.json();

                localStorage.setItem('weatherData', JSON.stringify(weatherData));
                window.location.href = 'Home.html';
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        } else {
            alert('Please Enter the Latitude And Longitude.');
        }
    });
});
